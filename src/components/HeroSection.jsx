import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import RequestDemoForm from "./RequestDemo";

const MotionBox = motion(Box);

const trustPoints = [
  "NCVET-recognized assessment partner",
  "Sector-focused sample paper support",
  "Trusted delivery for large-scale skilling programs",
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0f2a45",
          backgroundImage:
            "linear-gradient(110deg, rgba(15,42,69,0.95) 0%, rgba(15,42,69,0.82) 45%, rgba(15,42,69,0.52) 100%), url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: { xs: "center center", md: "center top" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(0,168,89,0.18) 0%, rgba(0,168,89,0) 34%)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{
              minHeight: { xs: 560, md: 680 },
              display: "flex",
              alignItems: "center",
              py: { xs: 10, md: 12 },
            }}
          >
            <Box sx={{ maxWidth: 720, color: "#fff" }}>
              <Chip
                label="Assessment • Consulting • Placement Support"
                sx={{
                  mb: 3,
                  px: 1,
                  height: 34,
                  borderRadius: 99,
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: "#f6fbff",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  backdropFilter: "blur(8px)",
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  maxWidth: 680,
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.25rem" },
                  color: "#ffffff",
                }}
              >
                Professional assessment solutions built for scale, trust, and
                measurable outcomes.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  maxWidth: 640,
                  color: "rgba(255,255,255,0.84)",
                  fontWeight: 400,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Demorgia helps institutions, councils, and industry partners
                deliver reliable assessments, operational support, and skill
                development programs with a clear, compliant, and modern process.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4, alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setOpen(true)}
                  sx={{
                    minWidth: 170,
                    py: 1.2,
                  }}
                >
                  Request a Demo
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() =>
                    document.getElementById("solutions")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  sx={{
                    minWidth: 190,
                    py: 1.2,
                    borderColor: "rgba(255,255,255,0.28)",
                    color: "#ffffff",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.55)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  Explore Solutions
                </Button>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1.5, md: 3 }}
                sx={{
                  mt: 5,
                  pt: 3,
                  borderTop: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                {trustPoints.map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 300,
                sx: {
                  backdropFilter: "blur(6px)",
                  backgroundColor: "rgba(7, 20, 34, 0.48)",
                },
              },
            }}
          >
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  width: "100%",
                  maxWidth: 640,
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "28px 24px 24px",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                  maxHeight: "90vh",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    color: "#5f6f81",
                    zIndex: 10,
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Box
                  sx={{
                    overflowY: "auto",
                    maxHeight: "calc(90vh - 48px)",
                    pr: 1,
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <RequestDemoForm onClose={() => setOpen(false)} />
                </Box>
              </motion.div>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
