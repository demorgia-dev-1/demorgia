import React, { useEffect, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useAnimation } from "framer-motion";

const features = [
  "AI-Enabled Online & Offline Assessment Modes",
  "Multilingual Support with Google Translator Integration",
  "Live Streaming, Face Recognition & Multiple Face Detection",
  "Object Detection & Window Switch Flagging",
  "Speech-to-Text & Text-to-Speech for Divyangjan (Coming Soon)",
  "SSC Login for Real-Time Monitoring",
  "Secure Cloud and Hard Copy Storage for 10 Years",
  "Question Bank of 900+ Job Roles with Auto Randomization",
];

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

const Platform = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const controls = useAnimation();
  const videoWidth = 500;
  const totalVideos = videoSources.length;
  const duplicatedVideos = [...videoSources, ...videoSources];
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (totalVideos === 0) return;

    let currentIndex = 0;
    let isCancelled = false;

    const animateSlide = async () => {
      while (!isCancelled) {
        if (!isPaused) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          currentIndex++;

          await controls.start({
            x: -currentIndex * videoWidth,
            transition: { duration: 1.6, ease: "easeInOut" },
          });

          if (currentIndex === totalVideos) {
            await controls.set({ x: 0 });
            currentIndex = 0;
          }
        } else {
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
    };

    animateSlide();

    return () => {
      isCancelled = true;
    };
  }, [controls, totalVideos, videoWidth, isPaused]);

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Moving Blob SVG Background */}
      {/* <Box
  component="svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 200"
  preserveAspectRatio="none"
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
    display: "block",
    zIndex: 1,
  }}
>
  <path
    fill="#1976D2"  // Same blue as Solutions section
    d="M0,96 C360,0 1080,192 1440,96 L1440,0 L0,0 Z"
  />
</Box> */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://www.svgbackgrounds.com/wp-content/uploads/2021/03/blob-haikei.svg')",
          opacity: 0.05,
        }}
      />

      <Box
        maxWidth="lg"
        mx="auto"
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        gap={6}
        sx={{ position: "relative", zIndex: 1 }}
      >
        {/* LEFT: Content */}
        <Box flex={1}>
          {/* <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            color="primary"
            sx={{
              borderBottom: "3px solid #0d47a1",
              display: "inline-block",
              mb: 3,
            }}
          >
            Online Assessment Platform
          </Typography> */}
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{
              borderBottom: "3px solid #0d47a1",
              display: "inline-block",
              mb: 3,
            }}
          >
            <Box component="span" sx={{ color: "#000000" }}>Online</Box>{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Assessment Platform
            </Box>
          </Typography>


          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mb: 2, fontSize: 17 }}
          >
            <span style={{ fontWeight: 500 }}>
              <Typewriter
                words={[
                  "AI-powered and secure assessment system...",
                  "Supporting multilingual proctoring...",
                  "Built for inclusive and remote evaluations...",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} mt={3}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    background: "#e3f2fd",
                    color: "#0d47a1",
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    fontWeight: 500,
                    fontSize: 15,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#bbdefb",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {feature}
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* RIGHT: Video Carousel */}
        <Box flex={1} textAlign="center">
          <Box
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{
              overflow: "hidden",
              width: `${videoWidth}px`,
              height: 300,
              mx: "auto",
              borderRadius: 3,
              background: "#f4f4f4",
              position: "relative",
            }}
          >
            <motion.div
              animate={controls}
              style={{
                display: "flex",
                width: `${duplicatedVideos.length * videoWidth}px`,
              }}
            >
              {duplicatedVideos.map((video, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    width: `${videoWidth}px`,
                    height: 300,
                    px: 0,
                    flexShrink: 0,
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
                      borderRadius: 8,
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Text Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      textAlign: "center",
                      py: 1,
                      fontSize: 14,
                      fontWeight: 500,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                    }}
                  >
                    {video.label || `Video ${(i % totalVideos) + 1}`}
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Platform;
