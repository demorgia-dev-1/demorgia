import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Link } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

/* original list (unchanged) */
const features = [
  "AI-Enabled Online & Offline Assessment Modes",
  "Multilingual Support with Google Translator Integration",
  "Live Streaming, Face Recognition & Multiple Face Detection",
  "Object Detection & Window Switch Flagging",
  "SSC Login for Real-Time Monitoring",
  "Secure Cloud and Hard Copy Storage for 10 Years",
  "Question Bank of 900+ Job Roles with Auto Randomization",
  "Speech-to-Text & Text-to-Speech for Divyangjan (Coming Soon)",
];

/* only the LAST FOUR points */
const steps = features.slice(-4); // features[4..7]

const Platform = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const blue = theme.palette.primary.main;
  const green = theme.palette.success.main || "#2e7d32";

  const pillHeight = 78;
  const pillGap = 18;
  const totalStackHeight =
    steps.length * pillHeight + (steps.length - 1) * pillGap;

  return (
    <Box sx={{ py: 10, px: 3, position: "relative", bgcolor: "#fff", overflow: "hidden" }}>
      {/* faint page bg */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "url('https://www.svgbackgrounds.com/wp-content/uploads/2021/03/blob-haikei.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

      <Box
        maxWidth="lg"
        mx="auto"
        display="grid"
        gridTemplateColumns={isMobile ? "1fr" : "420px 1fr"}
        alignItems="center"
        gap={isMobile ? 5 : 8}
        sx={{ position: "relative" }}
      >
        {/* LEFT: blue circle (NO shadow/glow) */}
        <Box sx={{ display: "grid", placeItems: "center", minHeight: 420, position: "relative", zIndex: 0 }}>
          <Box
            sx={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "#eaf3ff", // light blue fill; change to blue if you want darker: blue
              border: "none",
              outline: "none",
              boxShadow: "none",   // remove any rim
              filter: "none",      // remove blue shadow/glow
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight={700} sx={{ mb: 1, lineHeight: 1.22 }}>
              <Box component="span" sx={{ color: "#000" }}>Online</Box>{" "}
              <Box component="span" sx={{ color: blue }}>Assessment</Box>{" "}
              <Box component="span" sx={{ color: green }}>Platform</Box>
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 240, fontSize: 16 }}>
              <span style={{ fontWeight: 500 }}>
                <Typewriter
                  words={[
                    "AI-powered and secure assessment system...",
                    "Supporting multilingual proctoring...",
                    "Built for inclusive and remote evaluations...",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </span>
            </Typography>
          </Box>

          {/* link below the circle */}
          {/* <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            <Link
              href="https://assessir.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: blue, fontWeight: 600 }}
            >
              Click here
            </Link>{" "}
            for more information
          </Typography> */}
          {/* Explore more (two external links) */}
          {/* <Box sx={{ mt: 2, textAlign: "center" }}> */}

            <Box sx={{ display: "inline-flex", gap: 1 }}>
              <Link
                href="https://assessir.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  color: blue,
                  fontWeight: 600,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                Assessir Platform
              </Link>

              <Typography variant="body2" sx={{ alignSelf: "center", px: -0.5 }}>
                |
              </Typography>

              <Link
                href="https://dcsexam.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  color: green,
                  fontWeight: 600,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                DCS Exam
              </Link>
            </Box>
          {/* </Box> */}

        </Box>

        {/* RIGHT: 4-step pills (01–04, ensure above circle) */}
        <Box sx={{ position: "relative", minHeight: totalStackHeight, zIndex: 2 }}>
          <Box display="flex" flexDirection="column" gap={`${pillGap}px`}>
            {steps.map((text, idx) => {
              const accent = idx % 2 === 0 ? blue : green;
              const numberLabel = String(idx + 1).padStart(2, "0"); // 01..04
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: `${pillHeight}px`,
                    }}
                  >
                    {/* number badge */}
                    <Box
                      sx={{
                        mr: -2,
                        minWidth: 54,
                        height: 54,
                        borderRadius: "50%",
                        bgcolor: accent,
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 800,
                        boxShadow: `0 8px 18px ${accent}55`,
                        flexShrink: 0,
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      {numberLabel}
                    </Box>

                    {/* pill card */}
                    <Box
                      sx={{
                        flex: 1,
                        bgcolor: "#fff",
                        borderRadius: 999,
                        px: 3,
                        py: 2,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                        border: `1.5px solid ${accent}33`,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 15, fontWeight: 600, color: "#0d0d0d" }}
                      >
                        {text}
                      </Typography>
                      <Box sx={{ mt: 0.7, width: 72, height: 3, borderRadius: 3, bgcolor: `${accent}` }} />
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Platform;