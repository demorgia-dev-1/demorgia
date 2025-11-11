import React, { useEffect, useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FeedbackIcon from "@mui/icons-material/Feedback";

const videoSources = [
  { src: "/videos/1 (1).mp4" },
  { src: "/videos/1 (2).mp4" },
  { src: "/videos/1 (3).mp4" },
  { src: "/videos/1 (4).mp4" },
  { src: "/videos/1 (5).mp4" },
  { src: "/videos/1 (6).mp4" },
];

const points = [
  { icon: <SchoolIcon />, text: "Hands-on Skill Evaluation" },
  { icon: <WorkIcon />, text: "Industry-Relevant Training" },
  { icon: <VisibilityIcon />, text: "Smart Monitoring System" },
  { icon: <AssignmentIcon />, text: "Scenario-Based Assessments" },
  { icon: <FeedbackIcon />, text: "Personalized Feedback" },
];

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.88)";
const MUTED_SUB = "rgba(255,255,255,0.72)";

const PracticalAssessments = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  // Auto move every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoSources.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: BG,
        color: WHITE,
      }}
    >
      {/* Section Heading */}
      <Box textAlign="center">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            display: "inline-block",
            position: "relative",
            mb: { xs: 4, md: 6 },
            cursor: "pointer",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: WHITE,
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "4px",
              bottom: "-8px",
              left: 0,
              backgroundColor: GREEN,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.35s ease-in-out",
              borderRadius: "4px",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Box component="span" sx={{ color: WHITE }}>
            Practical Assessments
          </Box>{" "}
          <Box component="span" sx={{ color: GREEN }}>
            & Trainings
          </Box>
        </Typography>
      </Box>

      {/* Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2, md: 3 }, 
          maxWidth: "1200px",
          mx: "auto",
          alignItems: "center",
        }}
      >
        {/* Left Pointers */}
        <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 3 }}>
          {points.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexWrap: "wrap" }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: index % 2 === 0 ? GREEN : "rgba(255,255,255,0.06)",
                  color: index % 2 === 0 ? WHITE : GREEN,
                  fontSize: 20,
                  flexShrink: 0,
                  boxShadow:
                    index % 2 === 0
                      ? `0 8px 20px ${GREEN}33`
                      : "inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: { fontSize: 20, color: index % 2 === 0 ? WHITE : GREEN },
                })}
              </Box>

              <Typography
                sx={{
                  color: MUTED,
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Video Carousel */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "100%", md: "480px" },
            height: { xs: "220px", sm: "260px", md: "300px" },
            mx: "auto",
            overflow: "hidden",
            borderRadius: 3,
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            border: `1px solid rgba(255,255,255,0.04)`,
            boxShadow: "0 18px 50px rgba(0,0,0,0.5)",
          }}
        >
          {videoSources.map((video, index) => {
            let position = "nextSlide";
            if (index === current) position = "activeSlide";
            if (
              index === current - 1 ||
              (current === 0 && index === videoSources.length - 1)
            )
              position = "prevSlide";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: position === "activeSlide" ? 1 : 0.25,
                  y:
                    position === "activeSlide"
                      ? 0
                      : position === "prevSlide"
                      ? -60
                      : 60,
                  scale: position === "activeSlide" ? 1 : 0.98,
                  zIndex: position === "activeSlide" ? 2 : 1,
                }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.9) contrast(0.95)",
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.18))",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PracticalAssessments;