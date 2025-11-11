import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Verified,
  Work,
  People,
  Star,
  Assessment,
  Assignment,
} from "@mui/icons-material";

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.78)";

const facts = [
  { label: "SSC Empanelled", value: 25, icon: Verified },
  { label: "Job Roles Assessed", value: 900, icon: Work },
  { label: "Assessed Candidates", value: 1001303, icon: People },
  { label: "SME Engaged", value: 200, icon: Star },
  { label: "Assessor/Proctor", value: 1000, icon: Assessment },
  { label: "Projects", value: 100, icon: Assignment },
];

const Facts = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      id="facts"
      sx={{
        py: 10,
        background: BG,
        color: WHITE,
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "lg", mx: "auto", px: 2 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                component="h2"
                sx={{
                  display: "inline-block",
                  position: "relative",
                  px: 1,
                  color: WHITE,
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
                    transition: "transform 0.4s ease-in-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                Fac
                <Box component="span" sx={{ color: GREEN }}>
                  ts
                </Box>
              </Typography>
            </motion.div>
          </Box>

          <Typography
            align="center"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 6,
              color: MUTED,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Our team's expertise spans various domains, including assessment
            excellence, strategic business consultancy, digital marketing
            proficiency, and talent acquisition. We help individuals unlock
            their potential and organizations achieve their goals.
          </Typography>
        </motion.div>

        {/* Facts Grid */}
        <Grid container spacing={3} justifyContent="center" ref={ref}>
          {facts.map((fact, idx) => {
            const IconComponent = fact.icon;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                key={idx}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: idx % 2 === 0 ? 20 : -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: 170,
                      height: 170,
                      p: 2,
                      textAlign: "center",
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.03)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "transform 0.3s ease-in-out, box-shadow .3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 18px 40px ${GREEN}44`,
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box sx={{ mb: 1, display: "grid", placeItems: "center" }}>
                      <IconComponent
                        fontSize="large"
                        sx={{ color: GREEN }}
                      />
                    </Box>

                    {/* Count */}
                    <Typography
                      fontSize="1.4rem"
                      fontWeight={700}
                      sx={{ color: WHITE, lineHeight: 1 }}
                    >
                      <CountUp
                        end={inView ? fact.value : 0}
                        duration={1.8}
                        separator=","
                      />
                      <Box
                        component="span"
                        sx={{ color: GREEN, fontWeight: 600, ml: 0.5 }}
                      >
                        +
                      </Box>
                    </Typography>

                    {/* Label */}
                    <Typography
                      variant="body2"
                      mt={1}
                      sx={{ color: MUTED, textTransform: "capitalize" }}
                    >
                      {fact.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Facts;