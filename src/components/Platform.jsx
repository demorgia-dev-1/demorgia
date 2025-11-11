import React from "react";
import { Box, Container, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

/* original list */
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

const steps = features.slice(-4); 

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#FFFFFF";
const MUTED_2 = "rgba(255,255,255,0.72)";

const Platform = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: BG, color: WHITE, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
       
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 }, position: "relative" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: "inline-block" }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight={800}
              sx={{
                display: "inline-block",
                px: 1,
                fontSize: { xs: "1.8rem", md: "2.25rem" },
                color: WHITE,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  height: 4,
                  width: "100%",
                  backgroundColor: GREEN,
                  borderRadius: 2,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.45s ease-in-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              Online <Box component="span" sx={{ color: GREEN }}>Assessment</Box> Platform
            </Typography>
          </motion.div>
        </Box>

        
        <Box sx={{ textAlign: "center", mb: { xs: 2.5, md: 3 } }}>
          <Typography
            variant="body1"
            sx={{
              color: MUTED_2,
              fontWeight: 600,
              fontSize: { xs: "0.95rem", md: "1rem" },
              minHeight: 28,
            }}
          >
            <Typewriter
              words={[
                "AI-powered and secure assessment system...",
                "Supporting multilingual proctoring...",
                "Built for inclusive and remote evaluations...",
              ]}
              loop
              cursor
              cursorStyle="▌"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1800}
            />
          </Typography>
        </Box>

       
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Link
            href="https://assessir.com/"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ color: GREEN, fontWeight: 700, mr: 2 }}
          >
            Assessir Platform
          </Link>
          <Link
            href="https://dcsexam.com/"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ color: MUTED_2, fontWeight: 600 }}
          >
            DCS Exam
          </Link>
        </Box>

        
        <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              width: { xs: "100%", sm: 760, md: 820 },
            }}
          >
            {steps.map((text, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{ marginBottom: 22 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  
                  <Box
                    sx={{
                      width: 64,
                      minWidth: 64,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      mt: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        background: GREEN,
                        display: "grid",
                        placeItems: "center",
                        boxShadow: `0 10px 24px ${GREEN}33`,
                      }}
                    >
                      <Typography sx={{ color: WHITE, fontWeight: 800 }}>
                        {String(idx + 1).padStart(2, "0")}
                      </Typography>
                    </Box>

                   
                    {idx !== steps.length - 1 && (
                      <Box
                        sx={{
                          width: 2,
                          flex: 1,
                          bgcolor: "rgba(255,255,255,0.08)",
                          mt: 1.5,
                          borderRadius: 1,
                          minHeight: 24,
                        }}
                      />
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 2,
                      px: { xs: 2, md: 3 },
                      py: 1.8,
                      border: `1px solid rgba(255,255,255,0.05)`,
                      transition: "transform .22s ease, box-shadow .22s ease, background .22s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 18px 40px ${GREEN}22`,
                        background: "rgba(255,255,255,0.05)",
                      },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: WHITE,
                        mb: 0.35,
                        fontSize: { xs: "0.98rem", md: "1.05rem" },
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Box>
              </motion.li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Platform;