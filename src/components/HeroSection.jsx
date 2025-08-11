// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Modal,
//   IconButton,
//   Backdrop,
// } from "@mui/material";
// import { AnimatePresence, motion } from "framer-motion";
// import CloseIcon from "@mui/icons-material/Close";
// import RequestDemoForm from "./RequestDemo";

// const HeroSection = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const bgImage = "/bg.png";

//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           position: "relative",
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           color: "white",
//           py: 20,
//           px: 2,
//           textAlign: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* Overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             zIndex: 1,
//           }}
//         />
//         {/* Content */}
//         <Box sx={{ position: "relative", zIndex: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Typography variant="h3" fontWeight="bold">
//               Transforming Assessment, Shaping Futures
//             </Typography>
//             <Typography variant="h6" mt={2}>
//               Dynamic visual showcasing diverse assessment environments and
//               technology integration.
//             </Typography>
//             <Typography variant="h6" mt={2}>
//               India’s trusted NCVET-recognized agency awarded for excellence by
//               CSDCI.
//             </Typography>
//             <Box mt={4}>
//               <Button
//                 variant="contained"
//                 onClick={handleOpen}
//                 sx={{
//                   mr: 2,
//                   px: 2.5,
//                   py: 1,
//                   borderRadius: "4px", // match with Explore Solutions
//                   fontWeight: 600,
//                   fontSize: "0.875rem",
//                   textTransform: "uppercase",
//                   background: "linear-gradient(to right, #1976d2, #0d47a1)",
//                   color: "#fff",
//                   boxShadow: "none",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #0d47a1, #1976d2)",
//                     boxShadow: "none",
//                   },
//                 }}
//               >
//                 Request Demo
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="inherit"
//                 onClick={() => window.open("/")}
//               >
//                 Explore Solutions
//               </Button>
//             </Box>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Modal with AnimatePresence */}
//       <AnimatePresence>
//         {open && (
//           <Modal
//             open={open}
//             onClose={handleClose}
//             closeAfterTransition
//             slots={{ backdrop: Backdrop }}
//             slotProps={{
//               backdrop: {
//                 timeout: 500,
//                 sx: {
//                   backdropFilter: "blur(6px)",
//                   backgroundColor: "rgba(0, 0, 0, 0.4)",
//                 },
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100vw",
//                 height: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 style={{
//                   width: "90%",
//                   maxWidth: 600,
//                   background: "#fefefe",
//                   borderRadius: "16px",
//                   padding: "24px",
//                   boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
//                   maxHeight: "90vh",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <IconButton
//                   onClick={handleClose}
//                   style={{
//                     position: "absolute",
//                     top: 12,
//                     right: 12,
//                     color: "#555",
//                     zIndex: 10,
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>

//                 <Box
//                   sx={{
//                     overflowY: "auto",
//                     maxHeight: "calc(90vh - 48px)",
//                     pr: 1,
//                     scrollbarWidth: "none",
//                     "&::-webkit-scrollbar": { display: "none" },
//                   }}
//                 >
//                   <RequestDemoForm onClose={handleClose} />
//                 </Box>
//               </motion.div>
//             </Box>
//           </Modal>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default HeroSection;
// src/components/HeroSection.jsx
// src/components/HeroSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  Backdrop,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import RequestDemoForm from "./RequestDemo";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bgImage = "/bg.png";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "78vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          color: "#fff",
          overflow: "hidden",
          py: { xs: 10, md: 14 },
          backgroundImage: `linear-gradient(90deg,
              rgba(0,0,0,.70) 0%,
              rgba(0,0,0,.55) 28%,
              rgba(0,0,0,.20) 55%,
              rgba(0,0,0,0) 78%
            ), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Straight slant wedge – line starts at bottom-left corner (0% 100%) */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(100deg, #1976d2 0%, #0d47a1 100%)",
            // polygon: (start at BL) -> (top-right intercept) -> (BR) -> (BL)
            clipPath: {
              xs: "polygon(0 100%, 100% 72%, 100% 100%)",
              md: "polygon(0 100%, 100% 60%, 100% 100%)",
              lg: "polygon(0 100%, 100% 56%, 100% 100%)",
            },
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 6 },
            maxWidth: { md: "60%" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              fontSize: { xs: "9vw", sm: "7.5vw", md: "56px", lg: "64px" },
            }}
          >
            We transform <Box component="span" sx={{ fontWeight: 900 }}>assessments</Box>{" "}
            <Box component="span" sx={{ color: "#2e7d32", fontWeight: 900 }}>&amp; shape</Box>{" "}
            <Box component="span" sx={{ fontWeight: 900 }}>futures</Box>
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, opacity: 0.95 }}>
            Dynamic visuals across assessment environments with seamless tech integration.
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, opacity: 0.95 }}>
            India’s trusted NCVET-recognized agency, awarded for excellence by CSDCI.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "uppercase",
                background: "linear-gradient(to right, #1976d2, #0d47a1)",
                boxShadow: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #0d47a1, #1976d2)",
                  boxShadow: "none",
                },
              }}
            >
              Request Demo
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() =>
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
              }
              sx={{ borderWidth: 2, "&:hover": { borderWidth: 2, backgroundColor: "rgba(255,255,255,0.08)" } }}
            >
              Explore Solutions
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
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
                sx: { backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.4)" },
              },
            }}
          >
            <Box sx={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                <IconButton onClick={handleClose} style={{ position: "absolute", top: 12, right: 12, color: "#555", zIndex: 10 }}>
                  <CloseIcon />
                </IconButton>
                <Box sx={{ overflowY: "auto", maxHeight: "calc(90vh - 48px)", pr: 1, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
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