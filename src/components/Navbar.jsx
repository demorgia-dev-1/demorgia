import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  List,
  ListItemText,
  Button,
  ListItemButton,
  Menu,
  MenuItem,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Container,
  Divider,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from "/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ExcelPreview from "./ExcelPreview";

const GREEN = "#00A859";
const WHITE = "#ffffff";
const INK = "#142133";
const MUTED = "#637487";

const solutionsItems = [
  { label: "Managed Assessment", href: "https://assessir.com/" },
  { label: "Self Serve Exam", href: "https://dcsexam.com/" },
  { label: "Placement Consulting", href: null },
  { label: "IT Services & Consulting", href: null },
];

const sortSamplePaperSectors = (sectors) =>
  [...sectors].sort(
    (a, b) =>
      Number(Boolean(b.hasPapers)) - Number(Boolean(a.hasPapers)) ||
      a.name.localeCompare(b.name)
  );

/* ─── Solutions Dropdown ─── */
const SolutionsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Solutions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          elevation: 10,
          sx: {
            mt: 1,
            minWidth: 260,
            borderRadius: 3,
            overflow: "hidden",
            background: WHITE,
            color: INK,
            border: "1px solid rgba(15,42,69,0.08)",
            boxShadow: "0 18px 40px rgba(15,42,69,0.12)",
          },
        }}
      >
        {solutionsItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => setAnchorEl(null)}
            sx={{
              px: 3,
              py: 1.4,
              "&:hover": { background: "rgba(15,42,69,0.04)" },
            }}
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.label}
              </a>
            ) : (
              item.label
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

/* ─── Sample Papers Dropdown ─── */
const SamplePapersDropdown = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sectors, setSectors] = useState([]);
  const sortedSectors = sortSamplePaperSectors(sectors);

  useEffect(() => {
    fetch("/sectors_data.json?v=" + new Date().getTime())
      .then((r) => r.json())
      .then(setSectors)
      .catch(console.error);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Sample Papers
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 70, left: 0 }}
        PaperProps={{
          sx: {
            width: "min(1380px, calc(100vw - 24px))",
            maxWidth: "calc(100vw - 24px)",
            maxHeight: { xs: "78vh", lg: "calc(100vh - 92px)" },
            px: { xs: 2, md: 2.5 },
            py: 2,
            bgcolor: "#ffffff",
            borderRadius: 4,
            border: "1px solid rgba(15,42,69,0.08)",
            boxShadow: "0 22px 48px rgba(15,42,69,0.14)",
            left: "0px !important",
            overflowY: "auto",
          },
        }}
      >
        <Box
          sx={{
            mb: 1.5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: INK,
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.05rem" },
              }}
            >
              Sample Papers by Sector
            </Typography>
            {/* <Typography variant="body2" sx={{ color: MUTED, mt: 0.25, fontSize: "0.88rem" }}>
              Available sectors appear first. Other sectors remain listed for
              reference and upcoming uploads.
            </Typography> */}
          </Box>
          {/* <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip
              label="Available"
              size="small"
              sx={{ bgcolor: "rgba(0,168,89,0.1)", color: GREEN, fontWeight: 700, height: 26 }}
            />
            <Chip
              label="Coming soon"
              size="small"
              variant="outlined"
              sx={{ borderColor: "rgba(15,42,69,0.12)", color: MUTED, fontWeight: 600, height: 26 }}
            />
          </Box> */}
        </Box>
        <Divider sx={{ mb: 1.5, borderColor: "rgba(15,42,69,0.08)" }} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
            },
            gap: 0.9,
          }}
        >
          {sortedSectors.map((s) => (
            <MenuItem
              key={s.name}
              onClick={() => {
                if (s.hasPapers) {
                  setAnchorEl(null);
                  onSelect(s);
                }
              }}
              sx={{
                minHeight: 0,
                borderRadius: 2,
                py: 0.9,
                px: 1.1,
                alignItems: "flex-start",
                whiteSpace: "normal",
                cursor: s.hasPapers ? "pointer" : "default",
                border: "1px solid rgba(15,42,69,0.08)",
                backgroundColor: s.hasPapers
                  ? "rgba(0,168,89,0.03)"
                  : "#f8fafc",
                "&:hover": {
                  bgcolor: s.hasPapers ? "rgba(0,168,89,0.08)" : "#f2f6fa",
                },
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: s.hasPapers ? 600 : 500,
                    color: s.hasPapers ? INK : "#2b2b2b",
                    lineHeight: 1.3,
                    fontSize: "0.82rem",
                  }}
                >
                  {s.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    mt: 0.4,
                    display: "block",
                    color: s.hasPapers ? GREEN : MUTED,
                    fontWeight: 600,
                    fontSize: "0.69rem",
                    lineHeight: 1.2,
                  }}
                >
                  {s.hasPapers ? "View roles and download papers" : ""}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
};

/* ─── Nav links config ─── */
const NAV_LINKS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Why Us", to: "why" },
  { label: "Solutions", to: "solutions", dropdown: true },
  { label: "Placement", to: "placement" },
  { label: "Sample Papers", to: "papers", dropdown: true },
  { label: "Contact", to: "contact" },
];

/* ─── Main Navbar ─── */
const Navbar = ({ onNavigate = {} }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const sortedSectors = sortSamplePaperSectors(sectors);

  // Sector modal
  const [activeSector, setActiveSector] = useState(null);
  const [sectorModalOpen, setSectorModalOpen] = useState(false);

  // Excel preview
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewRole, setPreviewRole] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    fetch("/sectors_data.json?v=" + new Date().getTime())
      .then((r) => r.json())
      .then(setSectors)
      .catch(console.error);
  }, []);

  const openSector = (sector) => {
    setActiveSector(sector);
    setSectorModalOpen(true);
  };

  const openPreview = (roleName, fileUrl) => {
    setPreviewRole(roleName);
    setPreviewUrl(fileUrl);
    setPreviewOpen(true);
  };

  return (
    <>
      {/* ── AppBar ── */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: {
            xs: WHITE,
            sm: `linear-gradient(90deg, ${WHITE} 0%, #244567 65%)`,
          },
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: 64, sm: 70 },
              px: { xs: 0, sm: 0 },
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <motion.img
                src={logo}
                alt="Demorgia"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: 56,
                  width: "auto",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                onClick={onNavigate.home}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#0d47a1",
                  display: { xs: "none", md: "block" },
                  letterSpacing: "-0.02em",
                }}
              >
                Demorgia Consulting Services Pvt Ltd
              </Typography>
            </Box>

            {/* Desktop nav */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 0.25,
              }}
            >
              {NAV_LINKS.map((item) => {
                if (item.label === "Sample Papers")
                  return (
                    <SamplePapersDropdown key={item.to} onSelect={openSector} />
                  );
                if (item.label === "Solutions")
                  return <SolutionsDropdown key={item.to} />;
                return (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-70}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                );
              })}
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              sx={{ display: { sm: "none" }, color: "text.primary" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile drawer */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  width: 320,
                  bgcolor: "#ffffff",
                },
              }}
            >
              <Box sx={{ pt: 1.5, pb: 2 }}>
                <List>
                  {NAV_LINKS.map((item) => {
                    if (item.label === "Sample Papers") {
                      return (
                        <Box key="papers">
                          <ListItemButton
                            onClick={() => setSectorsOpen(!sectorsOpen)}
                          >
                            <ListItemText primary="Sample Papers" />
                            {sectorsOpen ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse
                            in={sectorsOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List disablePadding>
                              {sortedSectors.map((s) => (
                                <ListItemButton
                                  key={s.name}
                                  disabled={!s.hasPapers}
                                  sx={{ pl: 4 }}
                                  onClick={() => {
                                    if (s.hasPapers) {
                                      setDrawerOpen(false);
                                      openSector(s);
                                    }
                                  }}
                                >
                                  <ListItemText
                                    primary={s.name}
                                    secondary={
                                      s.hasPapers
                                        ? "Sample papers available"
                                        : "Sample papers coming soon"
                                    }
                                    primaryTypographyProps={{
                                      fontSize: "0.82rem",
                                      fontWeight: s.hasPapers ? 600 : 500,
                                      color: s.hasPapers ? GREEN : "#2b2b2b",
                                    }}
                                    secondaryTypographyProps={{
                                      fontSize: "0.72rem",
                                      color: s.hasPapers
                                        ? "#4e9f72"
                                        : "#8a8a8a",
                                    }}
                                  />
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </Box>
                      );
                    }
                    if (item.label === "Solutions") {
                      return (
                        <Box key="solutions">
                          <ListItemButton
                            onClick={() => setSolutionsOpen(!solutionsOpen)}
                          >
                            <ListItemText primary="Solutions" />
                            {solutionsOpen ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse
                            in={solutionsOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List disablePadding>
                              {solutionsItems.map((s) => (
                                <ListItemButton
                                  key={s.label}
                                  sx={{ pl: 4 }}
                                  {...(s.href
                                    ? {
                                        component: "a",
                                        href: s.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }
                                    : {})}
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  <ListItemText
                                    primary={s.label}
                                    primaryTypographyProps={{
                                      fontSize: "0.85rem",
                                    }}
                                  />
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </Box>
                      );
                    }
                    return (
                      <ScrollLink
                        key={item.to}
                        to={item.to}
                        smooth
                        duration={500}
                        offset={-70}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemButton>
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ScrollLink>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ── Sector Roles Modal ── */}
      <Dialog
        open={sectorModalOpen}
        onClose={() => setSectorModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: WHITE,
            border: "1px solid rgba(15,42,69,0.08)",
            color: INK,
            backgroundImage: "none",
            boxShadow: "0 28px 60px rgba(15,42,69,0.16)",
          },
        }}
      >
        {activeSector && (
          <>
            <DialogTitle
              sx={{
                p: 2.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(15,42,69,0.08)",
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <Box
                  sx={{
                    p: 0.75,
                    borderRadius: 1.5,
                    bgcolor: "rgba(0,168,89,0.12)",
                    color: GREEN,
                    display: "flex",
                  }}
                >
                  <LibraryBooksIcon />
                </Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {activeSector.name}
                </Typography>
              </Box>
              <IconButton
                onClick={() => setSectorModalOpen(false)}
                size="small"
                sx={{ color: "rgba(20,33,51,0.45)" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 2.5 }}>
              <Typography
                variant="caption"
                sx={{ color: MUTED, mb: 2, display: "block" }}
              >
                {activeSector.files?.length} job roles available
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {activeSector.files?.map((f) => (
                  <Paper
                    key={f.filename}
                    elevation={0}
                    sx={{
                      p: 1.75,
                      borderRadius: 2,
                      bgcolor: "#f8fafc",
                      border: "1px solid rgba(15,42,69,0.08)",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "stretch", sm: "center" },
                      gap: 1.5,
                      "&:hover": {
                        bgcolor: "#f3f8f6",
                        borderColor: "rgba(0,168,89,0.22)",
                      },
                    }}
                  >
                    <Box display="flex" gap={1} alignItems="center">
                      <HelpOutlineIcon
                        sx={{ color: GREEN, fontSize: 18, opacity: 0.7 }}
                      />
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color={INK}
                        sx={{ fontSize: "0.82rem" }}
                      >
                        {f.roleName}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      gap={1}
                      sx={{ alignSelf: { xs: "flex-end", sm: "center" } }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<VisibilityIcon sx={{ fontSize: 14 }} />}
                        onClick={() => openPreview(f.roleName, f.url)}
                        sx={{
                          color: GREEN,
                          borderColor: "rgba(0,168,89,0.3)",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          py: 0.5,
                          "&:hover": {
                            borderColor: GREEN,
                            bgcolor: "rgba(0,168,89,0.06)",
                          },
                        }}
                      >
                        Preview
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
                        href={f.url}
                        download
                        sx={{
                          color: WHITE,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          py: 0.5,
                        }}
                      >
                        Download
                      </Button>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </DialogContent>

            <DialogActions
              sx={{ p: 2, borderTop: "1px solid rgba(15,42,69,0.08)" }}
            >
              <Button
                onClick={() => setSectorModalOpen(false)}
                size="small"
                sx={{ color: MUTED }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* ── Excel Preview (lazy-loaded, no SheetJS in main bundle) ── */}
      <ExcelPreview
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        roleName={previewRole}
        fileUrl={previewUrl}
      />
    </>
  );
};

export default Navbar;
