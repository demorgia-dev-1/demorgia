import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BlockIcon from "@mui/icons-material/Block";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  online: [
    {
      title: "Pre-Assessment",
      points: [
        "Generate and schedule exams.",
        "Enable anti-cheating features.",
        "Set evaluation guidelines.",
      ],
    },
    {
      title: "During Assessment",
      points: [
        "Advanced online exam.",
        "Monitor with seamless technology.",
        "Build up student reports.",
      ],
    },
    {
      title: "Post Assessments",
      points: [
        "Allotting answer sheets to the assessor.",
        "Oversee and control the evaluation.",
        "Place out results online.",
      ],
    },
  ],
  offline: [
    {
      title: "Pre-Assessment",
      points: [
        "Prepare question papers manually.",
        "Distribute to exam centers.",
        "Set physical evaluation rules.",
      ],
    },
    {
      title: "During Assessment",
      points: [
        "Manual invigilation.",
        "Paper-based writing.",
        "Attendance and records.",
      ],
    },
    {
      title: "Post Assessments",
      points: [
        "Manual collection and evaluation.",
        "Result compilation.",
        "Offline result distribution.",
      ],
    },
  ],
  paperbased: [
    {
      title: "Pre-Assessment",
      points: [
        "Print exam papers.",
        "Distribute to invigilators.",
        "Prepare marking scheme.",
      ],
    },
    {
      title: "During Assessment",
      points: [
        "Monitor students manually.",
        "Paper-based tests.",
        "Maintain integrity on-site.",
      ],
    },
    {
      title: "Post Assessments",
      points: [
        "Collect physical sheets.",
        "Distribute to evaluators.",
        "Publish results offline or online.",
      ],
    },
  ],
};

const modes = [
  { key: "online", label: "Online Exams", icon: <LaptopMacIcon /> },
  { key: "offline", label: "Offline Exams", icon: <BlockIcon /> },
  { key: "paperbased", label: "Paper Based Exams", icon: <ReceiptIcon /> },
];

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.82)";
const CARD_BG = "rgba(255,255,255,0.03)";
const CONNECTOR = "rgba(255,255,255,0.06)";

export default function PortalDetails() {
  const [selectedMode, setSelectedMode] = useState("online");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      px={3}
      py={6}
      textAlign="center"
      sx={{ backgroundColor: BG, color: WHITE }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 4,
          display: "inline-block",
          position: "relative",
          color: WHITE,
          fontSize: { xs: "1.5rem", sm: "1.9rem" },
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -10,
            height: 4,
            width: "100%",
            backgroundColor: GREEN,
            borderRadius: 3,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform .45s ease",
          },
          "&:hover::after": { transform: "scaleX(1)" },
          "& span": { color: GREEN },
        }}
      >
        Proctor, Evaluate and Conduct Exams, All <span>on One Integrated Platform</span>
      </Typography>

      {/* Tabs */}
      <Tabs
        value={selectedMode}
        onChange={(_, v) => setSelectedMode(v)}
        variant={isMobile ? "fullWidth" : "standard"}
        centered={!isMobile}
        sx={{
          mb: 5,
          mt: 4,
          "& .MuiTabs-indicator": { backgroundColor: GREEN, height: 4, borderRadius: 2 },
          "& .MuiTab-root": {
            fontWeight: 700,
            color: MUTED,
            minHeight: 44,
            "&.Mui-selected": { color: WHITE },
          },
          "& .MuiButtonBase-root": {
            textTransform: "none",
          },
        }}
      >
        {modes.map((m) => (
          <Tab
            key={m.key}
            value={m.key}
            icon={m.icon}
            iconPosition="start"
            label={m.label}
            sx={{
              "& .MuiTab-iconWrapper": { color: GREEN, mr: 1 },
            }}
          />
        ))}
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <Box
            sx={{
              maxWidth: 1200,
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: isMobile ? 2 : 4,
              flexWrap: "wrap",
              px: 2,
            }}
          >
            {data[selectedMode].map((step, i) => (
              <Box
                key={i}
                sx={{
                  flex: "1 1 30%",
                  minWidth: isMobile ? "100%" : 260,
                  boxSizing: "border-box",
                  textAlign: "center",
                  px: isMobile ? 0 : 2,
                  py: 2,
                  position: "relative",
                }}
              >
                {!isMobile && i !== data[selectedMode].length - 1 && (
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      right: -22,
                      top: "8%",
                      height: "84%",
                      width: "2px",
                      backgroundColor: CONNECTOR,
                      opacity: 0.95,
                    }}
                  />
                )}

                <Box sx={{ width: "100%", px: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: GREEN,
                      mb: 1.5,
                      display: "inline-block",
                      pb: 0.5,
                      position: "relative",
                    }}
                  >
                    {step.title}
                    <Box
                      sx={{
                        height: 3,
                        width: 56,
                        background: GREEN,
                        borderRadius: 2,
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {step.points.map((p, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: MUTED,
                          lineHeight: 1.8,
                          fontSize: "0.98rem",
                          mb: idx === step.points.length - 1 ? 0 : 0.5,
                          px: { xs: 1.5, md: 0 },
                          background: CARD_BG,
                          borderRadius: 1.5,
                          py: 1,
                        }}
                      >
                        • {p}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}