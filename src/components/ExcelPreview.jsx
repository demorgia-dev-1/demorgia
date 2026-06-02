import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
  Grid,
  Paper,
  Button,
  IconButton,
  CircularProgress,
  Switch,
  FormControlLabel,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const GREEN = "#00A859";
const WHITE = "#ffffff";
const NAVY = "#0f2a45";

const CHUNK_SIZE = 10;

/**
 * Parses the raw xlsx ArrayBuffer into structured question data.
 * Imported dynamically so SheetJS only loads when user actually previews.
 */
const parseExcelBuffer = async (arrayBuffer) => {
  const XLSX = await import("xlsx");
  const data = new Uint8Array(arrayBuffer);
  const workbook = XLSX.read(data, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

  // Find the true header row (contains both "Question No" and "Questions")
  let headerIdx = jsonData.findIndex(
    (row) =>
      row &&
      row.some(
        (c) =>
          typeof c === "string" &&
          (c.replace(/\s+/g, "").toLowerCase() === "questionno" ||
            c.toLowerCase() === "qno" ||
            c.toLowerCase() === "qno.")
      ) &&
      row.some(
        (c) =>
          typeof c === "string" &&
          (c.toLowerCase() === "questions" || c.toLowerCase() === "question")
      )
  );

  // Fallback: row with "Questions" + "Option A"
  if (headerIdx === -1) {
    headerIdx = jsonData.findIndex(
      (row) =>
        row &&
        row.some((c) => typeof c === "string" && c.toLowerCase().includes("question")) &&
        row.some((c) => typeof c === "string" && c.toLowerCase().includes("option a"))
    );
  }

  if (headerIdx === -1) headerIdx = 6; // last resort default

  // Extract job role info from rows above header
  let jobRole = "";
  for (let i = 0; i < headerIdx; i++) {
    const row = jsonData[i];
    if (row) {
      const s = row.join(" : ").trim().toLowerCase();
      if (s.includes("job role") || s.includes("code")) {
        jobRole = row.filter((c) => c).join(" — ");
      }
    }
  }

  const questions = jsonData
    .slice(headerIdx + 1)
    .filter((r) => r && r.length > 1 && r[0] !== "")
    .map((r) => {
      const text = r[1];
      if (!text) return null;
      return {
        num: r[0] || "",
        text: String(text).trim(),
        options: [
          { label: "A", text: r[2] ? String(r[2]).trim() : "" },
          { label: "B", text: r[3] ? String(r[3]).trim() : "" },
          { label: "C", text: r[4] ? String(r[4]).trim() : "" },
          { label: "D", text: r[5] ? String(r[5]).trim() : "" },
        ].filter((o) => o.text),
        answer: r[6] ? String(r[6]).trim() : "",
      };
    })
    .filter(Boolean);

  return { jobRole, questions };
};

/** Single question card — memoised to avoid re-renders */
const QuestionCard = React.memo(({ q, showAnswers, hasAnswers }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2.5,
      borderRadius: 2,
      bgcolor: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    {/* Question text */}
    <Box display="flex" gap={1.5} alignItems="flex-start" mb={1.5}>
      <Box
        sx={{
          minWidth: 28,
          height: 28,
          borderRadius: "50%",
          bgcolor: "rgba(0,168,89,0.15)",
          color: GREEN,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: "0.8rem",
          flexShrink: 0,
        }}
      >
        {q.num}
      </Box>
      <Typography variant="body2" fontWeight={500} sx={{ lineHeight: 1.55, color: WHITE }}>
        {q.text}
      </Typography>
    </Box>

    {/* Options */}
    <Grid container spacing={1.5} sx={{ pl: { xs: 0, sm: 5 } }}>
      {q.options.map((opt) => {
        const isCorrect =
          showAnswers &&
          q.answer &&
          (q.answer === opt.label ||
            q.answer.startsWith(opt.label + ")") ||
            q.answer.toLowerCase() === opt.text.toLowerCase());

        return (
          <Grid item xs={12} sm={6} key={opt.label}>
            <Box
              sx={{
                p: 1.25,
                borderRadius: 1.5,
                bgcolor: isCorrect ? "rgba(0,168,89,0.14)" : "rgba(255,255,255,0.025)",
                border: `1px solid ${isCorrect ? GREEN : "rgba(255,255,255,0.06)"}`,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  minWidth: 22,
                  height: 22,
                  borderRadius: "50%",
                  bgcolor: isCorrect ? GREEN : "rgba(255,255,255,0.08)",
                  color: WHITE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                {opt.label}
              </Box>
              <Typography
                variant="caption"
                sx={{ color: isCorrect ? WHITE : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}
              >
                {opt.text}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>

    {/* Answer key */}
    <Collapse in={showAnswers && hasAnswers && !!q.answer}>
      <Box
        sx={{
          mt: 1.5,
          ml: { xs: 0, sm: 5 },
          p: 1,
          borderRadius: 1,
          bgcolor: "rgba(0,168,89,0.07)",
          border: "1px dashed rgba(0,168,89,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 0.75,
        }}
      >
        <Typography variant="caption" fontWeight={700} sx={{ color: GREEN }}>
          ANSWER:
        </Typography>
        <Typography variant="caption" fontWeight={700} color={WHITE}>
          {q.answer}
        </Typography>
      </Box>
    </Collapse>
  </Paper>
));

/**
 * ExcelPreview — the full-screen dialog for previewing parsed XLSX questions.
 *
 * Props:
 *   open       – boolean
 *   onClose    – () => void
 *   roleName   – string
 *   fileUrl    – string (path to xlsx in /public)
 */
const ExcelPreview = ({ open, onClose, roleName, fileUrl }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);
  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);

  // Parse on open
  useEffect(() => {
    if (!open || !fileUrl) return;
    let cancelled = false;
    setLoading(true);
    setData(null);
    setSearchInput("");
    setDebouncedSearch("");
    setShowAnswers(false);
    setVisibleCount(CHUNK_SIZE);

    (async () => {
      try {
        const res = await fetch(fileUrl);
        const buf = await res.arrayBuffer();
        const parsed = await parseExcelBuffer(buf);
        if (!cancelled) setData(parsed);
      } catch (e) {
        console.error("Excel parse error:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [open, fileUrl]);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(searchInput);
      setVisibleCount(CHUNK_SIZE);
    }, 250);
    return () => clearTimeout(t);
  }, [searchInput]);

  const filtered = data
    ? data.questions.filter((q) => {
        if (!debouncedSearch) return true;
        const lc = debouncedSearch.toLowerCase();
        return (
          q.text.toLowerCase().includes(lc) ||
          q.options.some((o) => o.text.toLowerCase().includes(lc))
        );
      })
    : [];

  const hasAnswers = data?.questions.some((q) => q.answer);

  const handleScroll = useCallback(
    (e) => {
      const el = e.target;
      if (el.scrollHeight - el.scrollTop <= el.clientHeight + 100) {
        setVisibleCount((v) => Math.min(v + CHUNK_SIZE, filtered.length));
      }
    },
    [filtered.length]
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: NAVY,
          border: "1px solid rgba(255,255,255,0.1)",
          color: WHITE,
          backgroundImage: "none",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          p: 2.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            Sample Question Paper
          </Typography>
          <Typography variant="caption" sx={{ color: GREEN, fontWeight: 600 }}>
            {roleName}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: "rgba(255,255,255,0.5)" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2.5, bgcolor: "rgba(0,0,0,0.12)" }}>
        {loading ? (
          <Box display="flex" flexDirection="column" alignItems="center" py={8} gap={1.5}>
            <CircularProgress size={40} sx={{ color: GREEN }} />
            <Typography variant="caption" color="rgba(255,255,255,0.6)">
              Loading question paper…
            </Typography>
          </Box>
        ) : data ? (
          <>
            {/* Info bar */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "stretch", sm: "center" },
                gap: 1.5,
                mb: 2,
                p: 1.5,
                borderRadius: 2,
                bgcolor: "rgba(0,168,89,0.06)",
                border: "1px solid rgba(0,168,89,0.18)",
              }}
            >
              <Box>
                {data.jobRole && (
                  <Typography variant="caption" fontWeight={600} color={GREEN}>
                    {data.jobRole}
                  </Typography>
                )}
                <Typography variant="caption" display="block" color="rgba(255,255,255,0.5)">
                  {data.questions.length} questions • Theory Sheet
                </Typography>
              </Box>
              {hasAnswers && (
                <FormControlLabel
                  control={
                    <Switch
                      checked={showAnswers}
                      onChange={(e) => setShowAnswers(e.target.checked)}
                      color="success"
                      size="small"
                    />
                  }
                  label={
                    <Typography variant="caption" fontWeight={600} color={WHITE}>
                      Show Answers
                    </Typography>
                  }
                />
              )}
            </Box>

            {/* Search */}
            <TextField
              placeholder="Search questions…"
              size="small"
              fullWidth
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  color: WHITE,
                  bgcolor: "rgba(255,255,255,0.03)",
                  fontSize: "0.85rem",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&.Mui-focused fieldset": { borderColor: GREEN },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "rgba(255,255,255,0.3)", fontSize: 18 }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Scroll container */}
            {filtered.length > 0 ? (
              <Box
                onScroll={handleScroll}
                sx={{
                  maxHeight: "52vh",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  pr: 1,
                  "&::-webkit-scrollbar": { width: 6 },
                  "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.03)", borderRadius: 3 },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0,168,89,0.3)",
                    borderRadius: 3,
                    "&:hover": { background: "rgba(0,168,89,0.5)" },
                  },
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0,168,89,0.3) rgba(255,255,255,0.03)",
                }}
              >
                {filtered.slice(0, visibleCount).map((q, i) => (
                  <QuestionCard key={`${q.num}-${i}`} q={q} showAnswers={showAnswers} hasAnswers={hasAnswers} />
                ))}
                {visibleCount < filtered.length && (
                  <Typography
                    variant="caption"
                    textAlign="center"
                    sx={{ py: 1, color: "rgba(255,255,255,0.35)" }}
                  >
                    Scroll down for more… ({visibleCount}/{filtered.length})
                  </Typography>
                )}
              </Box>
            ) : (
              <Box py={6} textAlign="center">
                <Typography variant="body2" color="rgba(255,255,255,0.4)">
                  No questions match your search.
                </Typography>
              </Box>
            )}
          </>
        ) : (
          <Box py={6} textAlign="center">
            <Typography variant="body2" color="error">
              Could not parse this file. Please download it instead.
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Button onClick={onClose} size="small" sx={{ color: "rgba(255,255,255,0.5)", textTransform: "none" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExcelPreview;
