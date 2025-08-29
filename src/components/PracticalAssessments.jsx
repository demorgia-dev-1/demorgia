import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";

const videoSources = [
  { src: "/videos/1 (1).mp4", label: "Candidate Login and Setup" },
  { src: "/videos/1 (2).mp4", label: "Theory Assessment Interface" },
  { src: "/videos/1 (3).mp4", label: "Live AI Proctoring in Action" },
  { src: "/videos/1 (4).mp4", label: "Practical Skill Evaluation" },
  { src: "/videos/1 (5).mp4", label: "Face Detection During Assessment" },
  { src: "/videos/1 (6).mp4", label: "Assessment Report Generation" },
  { src: "/videos/1 (7).mp4", label: "Cloud Evidence Uploading" },
  { src: "/videos/1 (8).mp4", label: "Assessment Completion Screen" },
];

const PracticalAssessments = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? videoSources.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === videoSources.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff", textAlign: "center" }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{
          display: "inline-block",
          position: "relative",
          mb: 5,
          cursor: "pointer",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "4px", 
            bottom: "-6px",
            left: 0,
            backgroundColor: theme.palette.primary.main,
            transition: "width 0.3s ease",
            borderRadius: "4px",
          },
          "&:hover::after": {
            width: "100%",
          },
        }}
      >
        <Box component="span" sx={{ color: "#000" }}>
          Practical Assessments
        </Box>{" "}
        <Box component="span" sx={{ color: theme.palette.primary.main }}>
          & Trainings
        </Box>
      </Typography>

      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: "900px",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "380px",
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
              animate={{
                opacity: position === "activeSlide" ? 1 : 0.6,
                scale: position === "activeSlide" ? 1 : 0.85,
                x:
                  position === "activeSlide"
                    ? 0
                    : position === "prevSlide"
                    ? -220
                    : 220,
                zIndex: position === "activeSlide" ? 2 : 1,
              }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                width: "70%",
                maxWidth: "600px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow:
                  position === "activeSlide"
                    ? "0 8px 20px rgba(0,0,0,0.2)"
                    : "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <video
                controls
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Box
                sx={{
                  background: "#fff",
                  p: 2,
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                {video.label}
              </Box>
            </motion.div>
          );
        })}

        {/* Arrows */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "-50px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={prevSlide}
        >
          <ArrowBackIos
            sx={{ fontSize: 32, color: theme.palette.primary.main }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "-50px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={nextSlide}
        >
          <ArrowForwardIos
            sx={{ fontSize: 32, color: theme.palette.primary.main }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PracticalAssessments;