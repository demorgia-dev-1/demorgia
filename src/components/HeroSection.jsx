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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: { xs: 14, md: 20 },
          px: 2,
          textAlign: "center",
        }}
      >
        {/* Dark wash */}
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.45)", zIndex: 1 }} />

        {/* BLUE BAND (bottom-left start) + inner shadows + SLOW SHINE */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: -1,
            zIndex: 2,
            pointerEvents: "none",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#0d47a1",
              opacity: 0.96,
              clipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
              WebkitClipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
            },

            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: 2,
              clipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
              WebkitClipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 42%), " +
                "radial-gradient(110% 80% at 28% 78%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 58%)",
              mixBlendMode: "multiply",
              filter: "blur(1.5px)",
              opacity: 0.65,
            },

            "@keyframes shineSweepHero": {
              "0%": { backgroundPosition: "-220% 0" },
              "100%": { backgroundPosition: "220% 0" },
            },
          }}
        >
          {/* SLOW SHINE */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              clipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
              WebkitClipPath: {
                xs: "polygon(0% 100%, 100% 58%, 100% 100%, 0% 100%)",
                md: "polygon(0% 100%, 100% 45%, 100% 100%, 0% 100%)",
              },
              background:
                "linear-gradient(105deg, rgba(255,255,255,0) 43%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 57%)",
              backgroundSize: "400% 100%",
              mixBlendMode: "screen",
              opacity: 0.6,
              animation: {
                xs: "shineSweepHero 14s linear infinite",
                md: "shineSweepHero 12s linear infinite",
              },
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1100,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" fontWeight={800} sx={{ lineHeight: 1.1, mx: "auto" }}>
              Transforming Assessment,<br />
              <Box component="span" sx={{ whiteSpace: "nowrap", color: "success.main" }}>
                Shaping Futures
              </Box>
            </Typography>

            <Typography variant="h6" mt={2} sx={{ maxWidth: 900, mx: "auto" }}>
              Dynamic visual showcasing diverse assessment environments and technology integration.
            </Typography>

            <Typography variant="h6" mt={1.5} sx={{ maxWidth: 900, mx: "auto" }}>
              India’s trusted NCVET-recognized agency awarded for excellence by CSDCI.
            </Typography>

            {/* BUTTONS: same styles, just stacked (Request Demo above Explore) */}
            <Box
              mt={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  px: 3,
                  py: 1.1,
                  fontWeight: 700,
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  background: "linear-gradient(90deg, #1976d2, #0d47a1)",
                  boxShadow: "none",
                  "&:hover": { background: "linear-gradient(90deg, #0d47a1, #1976d2)" },
                }}
              >
                Request Demo
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                onClick={() => window.open("/")}
                sx={{ mt: 1.5 }}  // spacing only; style unchanged
              >
                Explore Solutions
              </Button>
            </Box>
          </motion.div>
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
                timeout: 400,
                sx: { backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.4)" },
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
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                style={{
                  width: "92%",
                  maxWidth: 600,
                  background: "#fff",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                  position: "relative",
                  maxHeight: "90vh",
                  overflow: "hidden",
                }}
              >
                <IconButton
                  onClick={handleClose}
                  style={{ position: "absolute", top: 12, right: 12, color: "#555", zIndex: 10 }}
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