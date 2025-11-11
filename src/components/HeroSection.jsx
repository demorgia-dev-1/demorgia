import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  Backdrop,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import RequestDemoForm from "./RequestDemo";

const MotionBox = motion(Box);

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bgImage = "/bg.png"; 

  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          minHeight: { xs: 520, md: 680 },
          position: "relative",
          bgcolor: "#0f2a45", 
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,42,69,0.85) 0%, rgba(15,42,69,0.55) 35%, rgba(15,42,69,0.15) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

       
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            
            minHeight: { xs: 520, md: 680 },
            px: { xs: 3, sm: 6, md: 12 },
          }}
        >
          
          <Box
            sx={{
              width: { xs: "100%", md: "52%", lg: "48%" },
              mx: { xs: 0, md: 0 },
              textAlign: { xs: "center", md: "left" },
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#fff",
              pointerEvents: "auto",
              py: { xs: 6, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="700"
              sx={{
                lineHeight: 1.12,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              }}
            >
              Transforming Assessment{" "}
              <Box
                component="span"
                sx={{ color: "var(--brand-green, #00A651)" }}
              >
                &amp; Shaping Futures
              </Box>
            </Typography>

            <Typography
              variant="h6"
              mt={2}
              sx={{
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Dynamic visual showcasing diverse assessment environments and
              technology integration.
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              sx={{
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              India’s trusted NCVET-recognized agency awarded for excellence by
              CSDCI.
            </Typography>

            {/* Buttons */}
            <Box
              mt={4}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  background: "linear-gradient(to right, #00a651, #007f5f)",
                  color: "#fff",
                  boxShadow: "none",
                  "&:hover": {
                    background: "linear-gradient(to right, #007f5f, #00a651)",
                    boxShadow: "none",
                  },
                }}
              >
                Request Demo
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  boxShadow: "none",
                  minWidth: 170,
                  textAlign: "center",
                  backdropFilter: "saturate(120%)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.04)",
                    border: "1.5px solid rgba(255,255,255,0.26)",
                    boxShadow: "none",
                  },
                }}
              >
                Explore Solutions
              </Button>
            </Box>
          </Box>

          
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flex: 1,
            }}
          />
        </MotionBox>
      </Box>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
                sx: {
                  backdropFilter: "blur(6px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
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
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  width: "90%",
                  maxWidth: 600,
                  background: "#fefefe",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                  maxHeight: "90vh",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    color: "#555",
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
                  <RequestDemoForm onClose={handleClose} />
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