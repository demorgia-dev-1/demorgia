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

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bgImage = "/bg.png";

  return (
    <>
      {/* HERO (text left, image right) */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: 520, md: 680 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          overflow: "hidden",
          bgcolor: "#0f2a45",
        }}
      >
        {/* Left: Content */}
        <Box
          sx={{
            flex: { xs: "0 0 auto", md: "0 0 52%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 10, md: 0 },
            color: "white",
            position: "relative",
          }}
        >
          {/* gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              right: -1,
              top: 0,
              bottom: 0,
              width: { xs: 0, md: "15%" },
              background:
                "linear-gradient(to right, rgba(15,42,69,1), rgba(15,42,69,0))",
              pointerEvents: "none",
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "left" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h3" fontWeight="bold" sx={{ lineHeight: 1.15 }}>
                Transforming Assessment{" "}
                <Box
                  component="span"
                  sx={{ color: "var(--brand-green, #00A651)" }}
                >
                  & Shaping Futures
                </Box>
              </Typography>

              <Typography variant="h6" mt={2}>
                Dynamic visual showcasing diverse assessment environments and
                technology integration.
              </Typography>
              <Typography variant="h6" mt={2}>
                India’s trusted NCVET-recognized agency awarded for excellence
                by CSDCI.
              </Typography>

              <Box mt={4}>
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{
                    mr: 2,
                    px: 2.5,
                    py: 1,
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    background: "linear-gradient(to right, #1976d2, #0d47a1)",
                    color: "#fff",
                    boxShadow: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(to right, #0d47a1, #1976d2)",
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
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Solutions
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Right: Background image */}
        <Box
          sx={{
            flex: { xs: "0 0 48vh", md: "0 0 48%" },
            minHeight: { xs: 280, md: "auto" },
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to left, rgba(0,0,0,0.25), rgba(0,0,0,0))",
            }}
          />
        </Box>
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