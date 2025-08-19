// import React, { useEffect } from "react";
// import { Box, Typography, Grid, useTheme } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import LanguageIcon from "@mui/icons-material/Language";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import TabletMacIcon from "@mui/icons-material/TabletMac";
// import WebIcon from "@mui/icons-material/Web";
// import CodeIcon from "@mui/icons-material/Code";
// import { motion, useAnimation } from "framer-motion";

// const imageData = {
//   "Web-based Assessment Application": [
//     "/assets/web-login.png",
//     "/assets/web-dash.png",
//     "/assets/web-evidence.png",
//     "/assets/exam-evidance.png",
//     "/assets/exam.png",
//   ],
//   "Online Mobile Application": [
//     "/assets/web-login.png",
//     "/assets/web-dash.png",
//     "/assets/web-evidence.png",
//     "/assets/exam-evidance.png",
//     "/assets/exam.png",
//   ],
//   "Offline Mobile/Tablet Application": [
//     "/assets/web-login.png",
//     "/assets/web-dash.png",
//     "/assets/web-evidence.png",
//     "/assets/exam-evidance.png",
//     "/assets/exam.png",
//   ],
//   // "Assessir Platform": [
//   //   "/assets/web-login.png",
//   //   "/assets/web-dash.png",
//   //   "/assets/web-evidence.png",
//   //   "/assets/exam-evidance.png",
//   //   "/assets/exam.png",
//   // ],

//   // "General CBT Platform": [
//   //   "/assets/web-login.png",
//   //   "/assets/web-dash.png",
//   //   "/assets/web-evidence.png",
//   //   "/assets/exam-evidance.png",
//   //   "/assets/exam.png",
//   // ],
// };

// const icons = {
//   "Web-based Assessment Application": (
//     <LanguageIcon sx={{ color: "#1976d2", mr: 1 }} />
//   ),
//   "Online Mobile Application": (
//     <PhoneIphoneIcon sx={{ color: "#1976d2", mr: 1 }} />
//   ),
//   "Offline Mobile/Tablet Application": (
//     <TabletMacIcon sx={{ color: "#1976d2", mr: 1 }} />
//   ),
//   // "Assessir Platform": <WebIcon sx={{ color: "#1976d2", mr: 1 }} />,
//   // "General CBT Platform": <CodeIcon sx={{ color: "#1976d2", mr: 1 }} />,
// };

// const SectionCarousel = ({ images = [] }) => {
//   const controls = useAnimation();
//   const imageWidth = 320;
//   const totalImages = images.length;

//   const duplicatedImages = [...images, ...images];

//   useEffect(() => {
//     if (totalImages === 0) return;

//     let currentIndex = 0;
//     let isCancelled = false;

//     const animateSlide = async () => {
//       while (!isCancelled) {
//         await new Promise((resolve) => setTimeout(resolve, 2000));

//         currentIndex++;
//         await controls.start({
//           x: -currentIndex * imageWidth,
//           transition: { duration: 1.2, ease: "easeInOut" },
//         });

//         if (currentIndex >= totalImages) {
//           await controls.set({ x: 0 });
//           currentIndex = 0;
//         }
//       }
//     };

//     animateSlide();

//     return () => {
//       isCancelled = true;
//     };
//   }, [controls, totalImages, imageWidth]);

//   return (
//     <Box
//       sx={{
//         overflow: "hidden",
//         width: imageWidth,
//         height: 220,
//         mx: "auto",
//         borderRadius: 3,
//         background: "#f4f4f4",
//         position: "relative",
//       }}
//     >
//       <motion.div
//         animate={controls}
//         style={{
//           display: "flex",
//           width: `${duplicatedImages.length * imageWidth}px`,
//         }}
//       >
//         {duplicatedImages.map((img, i) => (
//           <Box
//             key={i}
//             component="img"
//             src={img}
//             alt={`carousel-img-${i}`}
//             sx={{
//               width: `${imageWidth}px`,
//               height: "100%",
//               objectFit: "contain",
//               flexShrink: 0,
//             }}
//             onError={() => console.warn("Image load error:", img)}
//           />
//         ))}
//       </motion.div>
//     </Box>
//   );
// };

// const Solutions = () => {
//   const theme = useTheme();

//   const renderSection = (item, index) => {
//     const images = imageData[item.title] || [];

//     return (
//       <Box
//         key={index}
//         sx={{
//           backgroundSize: "cover",
//           borderRadius: 3,
//           py: { xs: 4, md: 6 },
//           px: { xs: 2, md: 15 },
//           mb: 6,
//         }}
//       >
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           justifyContent="space-between"
//           direction={index % 2 === 0 ? "row" : "row-reverse"}
//         >
//           <Grid item xs={12} md={5}>
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <SectionCarousel images={images} />
//             </motion.div>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight="bold"
//                 sx={{
//                   color: theme.palette.primary.main,
//                   mb: 2,
//                   display: "flex",
//                   alignItems: "center",
//                   fontSize: "2rem",
//                 }}
//               >
//                 {icons[item.title]}
//                 {`${index + 1}. ${item.title}`}
//               </Typography>
//               {item.points.map((pt, i) => (
//                 <Box key={i} display="flex" alignItems="flex-start" mb={1.5}>
//                   <CheckCircleIcon
//                     sx={{
//                       color: theme.palette.primary.main,
//                       mr: 1,
//                       mt: 0.3,
//                     }}
//                     fontSize="small"
//                   />
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     fontSize="1.2rem"
//                     sx={{
//                       pl: 1,
//                       borderLeft: `3px solid ${theme.palette.primary.light}`,
//                     }}
//                   >
//                     {pt}
//                   </Typography>
//                 </Box>
//               ))}
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         pt: { xs: 10, md: 14 },
//     pb: { xs: 6, md: 10 },
//         background: "#ffffff",
//         overflow: "hidden",
//       }}
//     >
//       {/* Top Wave */}

//       {/* <Box
//         component="svg"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: 200,
//           transform: "scaleY(-1)",
//           zIndex: 0,
//         }}
//         viewBox="0 0 1440 100"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="rgb(10, 72, 158)"
//           d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,48C840,32,960,32,1080,32C1200,32,1320,32,1380,32L1440,32V100H1380C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100H0Z"
//         />
//       </Box> */}
//       {/* <Box
//   component="svg"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 1440 320"
//   preserveAspectRatio="none"
//   sx={{
//     width: "100%",
//     height: "240px",
//     display: "block",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     zIndex: 0,
//   }}
// >
//   <path
//   fill="rgb(10, 72, 158)"
//   d="M0,160 C300,240 600,80 900,160 C1200,240 1440,80 1440,80 L1440,0 L0,0 Z"
// />
// </Box> */}


//       {/* Bottom Wave */}
//       {/* <Box
//   component="svg"
//   sx={{
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: 160,
//     zIndex: 0,
//   }}
//   viewBox="0 0 1440 160"
//   xmlns="http://www.w3.org/2000/svg"
//   preserveAspectRatio="none"
// >
//   <path
//     fill="#1976D2"
//     d="M0,64 C360,160 1080,0 1440,96 L1440,160 L0,160 Z"
//   />
// </Box> */}

//       {/* Main content */}
//       <Box sx={{ position: "relative", zIndex: 1 }}>
//         <Box
//           sx={{
//             width: "100%",
//             color: "white",
//             mixBlendMode: "lighten",
//           }}
//         ></Box>
//         <Box sx={{ textAlign: "center", mb: 5 }}>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             style={{ display: "inline-block" }}
//           >
//             {/* <Typography
//               variant="h4"
//               fontWeight="bold"
//               component="h2"
//               sx={{
//                 display: "inline-block",
//                 position: "relative",
//                 px: 1,
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   left: 0,
//                   bottom: -6,
//                   height: 4,
//                   width: "100%",
//                   backgroundColor: theme.palette.primary.main,
//                   borderRadius: 2,
//                   transform: "scaleX(0)",
//                   transformOrigin: "left",
//                   transition: "transform 0.4s ease-in-out",
//                 },
//                 "&:hover::after": {
//                   transform: "scaleX(1)",
//                 },
//               }}
//             >
//               Assessment{" "}
//               <Box component="span" sx={{ color: "white" }}>
//                 Solutions
//               </Box>
//             </Typography> */}
//             <Typography
//   variant="h4"
//   fontWeight="bold"
//   component="h2"
//   sx={{
//     display: "inline-block",
//     position: "relative",
//     px: 1,
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       left: 0,
//       bottom: -6,
//       height: 4,
//       width: "100%",
//       backgroundColor: theme.palette.primary.main,
//       borderRadius: 2,
//       transform: "scaleX(0)",
//       transformOrigin: "left",
//       transition: "transform 0.4s ease-in-out",
//     },
//     "&:hover::after": {
//       transform: "scaleX(1)",
//     },
//   }}
// >
//   Assessment{" "}
//   <Box component="span" sx={{ color: theme.palette.primary.main }}>
//     Solutions
//   </Box>
// </Typography>
//           </motion.div>
//         </Box>

//         {/* <Typography
//           variant="h6"
//           fontWeight="bold"
//           sx={{ color: theme.palette.primary.main, mb: 3 }}
//         >
//           Assessment Platforms:
//         </Typography> */}

//         {[
//           {
//             title: "Web-based Assessment Application",
//             points: [
//               "Interactive dashboards tailored for candidates, assessors, and administrators.",
//               "Comprehensive analytics and instant reporting.",
//             ],
//           },
//           {
//             title: "Online Mobile Application",
//             points: [
//               "User-friendly mobile assessments accessible anytime, anywhere.",
//               "Real-time tracking and notifications.",
//             ],
//           },
//           {
//             title: "Offline Mobile/Tablet Application",
//             points: [
//               "Conduct assessments seamlessly in remote or low-connectivity areas.",
//               "Automated data sync upon connectivity restoration.",
//             ],
//           },
//         ].map(renderSection)}

//         {/* <Typography
//           variant="h6"
//           fontWeight="bold"
//           sx={{ color: theme.palette.primary.main, my: 4 }}
//         >
//           Dedicated Assessment Portals:
//         </Typography> */}

//         {/* {[
//           {
//             title: "Assessir Platform",
//             points: [
//               "Specialized NSDC and MSDE-aligned assessments.",
//               "User-centric interface for streamlined evaluations.",
//             ],
//           },
//           {
//             title: "General CBT Platform",
//             points: [
//               "Flexible platform for coding assessments and other specialized skill evaluations.",
//               "Supports customizable test structures and instant result generation.",
//             ],
//           },
//         ].map(renderSection)} */}
//       </Box>
//     </Box>
//   );
// };

// export default Solutions;
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import { AnimatePresence, motion } from "framer-motion";

/* ---------- Images for each card ---------- */
const imageData = {
  "Web-based Assessment Application": [
    "/assets/web-login.png",
    "/assets/web-dash.png",
    "/assets/web-evidence.png",
    "/assets/exam-evidance.png",
    "/assets/exam.png",
  ],
  "Online Mobile Application": [
    "/assets/web-login.png",
    "/assets/web-dash.png",
    "/assets/web-evidence.png",
    "/assets/exam-evidance.png",
    "/assets/exam.png",
  ],
  "Offline Mobile/Tablet Application": [
    "/assets/web-login.png",
    "/assets/web-dash.png",
    "/assets/web-evidence.png",
    "/assets/exam-evidance.png",
    "/assets/exam.png",
  ],
};

const iconSx = { color: "#1976d2", fontSize: 22 };
const icons = {
  "Web-based Assessment Application": <LanguageIcon sx={iconSx} />,
  "Online Mobile Application": <PhoneIphoneIcon sx={iconSx} />,
  "Offline Mobile/Tablet Application": <TabletMacIcon sx={iconSx} />,
};

/* ---------- Tight, controllable arc fan (top / left / right) ---------- */
const ArcFan = ({
  images = [],
  show = false,
  mode = "top", // 'top' | 'left' | 'right'
  itemWidth = 160,
  radius = 170,
  angles = { start: -120, end: -60 }, // default tighter spread
  stagger = 0.08,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: stagger } },
    exit: { opacity: 0, transition: { duration: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: mode === "top" ? 10 : 0, x: 0, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.1 } },
  };

  const isTop = mode === "top";
  const startDeg = angles.start;
  const endDeg = angles.end;

  // Minimal canvas to fit the arc (no extra space)
  const W = isTop ? radius * 2 + itemWidth : radius + itemWidth;
  const H = isTop ? radius + itemWidth * 0.5 : radius * 2 + itemWidth;

  const cx =
    mode === "top" ? W / 2 : mode === "left" ? W - radius * 0.1 : radius * 0.1;
  const cy = isTop ? H - 6 : H / 2;

  const angleAt = (i) => {
    if (images.length <= 1) return (startDeg + endDeg) / 2;
    const t = i / (images.length - 1);
    return startDeg + t * (endDeg - startDeg);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{ position: "relative", width: W, height: H, pointerEvents: "none" }}
        >
          {images.map((src, i) => {
            const deg = angleAt(i) * (mode === "left" ? -1 : 1);
            const a = (Math.PI / 180) * deg;

            const x = cx + radius * Math.cos(a) - itemWidth / 2;
            const y = cy + radius * Math.sin(a) - (itemWidth * 9) / 32; // ~16:9

            return (
              <motion.img
                key={src + i}
                src={src}
                alt={`${mode}-arc-${i}`}
                variants={itemVariants}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: itemWidth,
                  height: "auto",
                  borderRadius: 12,
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.10)",
                  background: "#f6f6f6",
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------- Mirror of ArcFan’s sizing for parent layout (avoids whitespace) ---------- */
const computeArcBox = ({ mode, itemWidth, radius, angles }) => {
  const isTop = mode === "top";
  const W = isTop ? radius * 2 + itemWidth : radius + itemWidth;
  const H = isTop ? radius + itemWidth * 0.5 : radius * 2 + itemWidth;
  return { width: Math.round(W), height: Math.round(H) };
};

/* ---------- Reusable card ---------- */
const InfoCard = ({
  title,
  points,
  icon,
  TITLE_FS,
  BODY_FS,
  BULLET_ICON_FS,
  HEADER_MIN_H,
  ICON_SLOT,
  onClick,
  interactive = true,
  fixedWidth = 360,
  elevation = 4,
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={elevation}
      onClick={onClick}
      sx={{
        position: "relative",
        width: { xs: "100%", md: fixedWidth },
        minHeight: { xs: "auto", md: 300 },
        p: 2.5,
        borderRadius: 3,
        border: (t) => `1px solid ${t.palette.divider}`,
        transition: interactive ? "transform .2s ease, box-shadow .2s ease" : "none",
        ...(interactive
          ? { "&:hover": { transform: "translateY(-4px)", boxShadow: 10 }, cursor: "pointer" }
          : { cursor: "default" }),
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        bgcolor: "background.paper",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          minHeight: HEADER_MIN_H,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{
            color: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            fontSize: TITLE_FS,
            lineHeight: 1.25,
            letterSpacing: 0.2,
          }}
        >
          <Box
            component="span"
            sx={{
              width: ICON_SLOT,
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
              flex: "0 0 auto",
            }}
          >
            {icon}
          </Box>
          <Box component="span">{title}</Box>
        </Typography>

        <Box
          sx={{
            mt: 1,
            width: "100%",
            height: 2,
            bgcolor: theme.palette.primary.light,
            borderRadius: 1,
            opacity: 0.7,
          }}
        />
      </Box>

      {/* Bullets */}
      {points.map((pt, i) => (
        <Box key={i} display="flex" alignItems="flex-start" mb={1.1} mt={i === 0 ? 1.25 : 0.75}>
          <CheckCircleIcon
            sx={{ color: theme.palette.primary.main, mr: 1, mt: 0.35, fontSize: BULLET_ICON_FS }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: BODY_FS,
              lineHeight: 1.55,
              pl: 1,
              borderLeft: (t) => `2px solid ${t.palette.primary.light}`,
            }}
          >
            {pt}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

/* ---------- Regular (centered) dialog with exact-fit grid ---------- */
const RegularArcDialog = ({
  open,
  onClose,
  cardIndex, // 0 left, 1 middle, 2 right
  cardData,
  images = [],
}) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const cardW = lgUp ? 380 : mdUp ? 360 : 320;
  const cardH = 300; // approximate; matches InfoCard minHeight
  const imgItemW = lgUp ? 170 : mdUp ? 160 : 150;

  // Per-mode arc tuning:
  const leftRightAngles = { start: -70, end: 70 }; // tight side arcs
  const leftRightRadius = lgUp ? 170 : mdUp ? 160 : 150;

  // Middle (top) arc: give a bit more spread & radius so images aren't cramped
  const topAngles = { start: -135, end: -45 };   // wider than before
  const topRadius = (lgUp ? 210 : mdUp ? 195 : 185); // slightly bigger

  const mode = cardIndex === 0 ? "right" : cardIndex === 1 ? "top" : "left";

  const activeAngles = mode === "top" ? topAngles : leftRightAngles;
  const activeRadius = mode === "top" ? topRadius : leftRightRadius;

  // Compute arc box to size the grid exactly (no spare space)
  const arcBox = computeArcBox({
    mode,
    itemWidth: imgItemW,
    radius: activeRadius,
    angles: activeAngles,
  });

  // Uniform dialog width for all three modals (same size), but not “too” wide
  const DIALOG_W = 980; // keep same across variants
  const paperSx = {
    width: { xs: "95vw", md: `${DIALOG_W}px` },
    m: 0,
  };

  // Content padding kept tight to avoid excess whitespace
  const contentSx = {
    p: { xs: 2, md: 3 },
    position: "relative",
    bgcolor: "background.default",
  };

  // Exact-fit grids for each layout
  const gridSide = {
    display: "grid",
    gridTemplateColumns:
      cardIndex === 0
        ? `${cardW}px ${arcBox.width}px`
        : `${arcBox.width}px ${cardW}px`,
    gridTemplateRows: `${Math.max(arcBox.height, cardH)}px`,
    alignItems: "center",
    justifyContent: "center",
    columnGap: { xs: 2, md: 3 },
  };

  const gridTop = {
    display: "grid",
    gridTemplateRows: `${arcBox.height}px ${cardH}px`,
    justifyItems: "center",
    alignItems: "center",
    rowGap: { xs: 2, md: 3 },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={false}
      maxWidth={false}
      PaperProps={{ sx: paperSx }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          zIndex: 2,
          bgcolor: "background.paper",
          border: (t) => `1px solid ${t.palette.divider}`,
          "&:hover": { bgcolor: "background.paper" },
        }}
        size="small"
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={contentSx}>
        <Box sx={mode === "top" ? gridTop : gridSide}>
          {/* Left card → card left, fan right */}
          {cardIndex === 0 && (
            <>
              <InfoCard {...cardData} interactive={false} fixedWidth={cardW} elevation={8} />
              <ArcFan
                images={images}
                show
                mode="right"
                itemWidth={imgItemW}
                radius={activeRadius}
                angles={activeAngles}
              />
            </>
          )}

          {/* Middle card → fan top, card bottom-center */}
          {cardIndex === 1 && (
            <>
              <ArcFan
                images={images}
                show
                mode="top"
                itemWidth={imgItemW}
                radius={activeRadius}
                angles={activeAngles}
              />
              <InfoCard {...cardData} interactive={false} fixedWidth={cardW} elevation={8} />
            </>
          )}

          {/* Right card → fan left, card right */}
          {cardIndex === 2 && (
            <>
              <ArcFan
                images={images}
                show
                mode="left"
                itemWidth={imgItemW}
                radius={activeRadius}
                angles={activeAngles}
              />
              <InfoCard {...cardData} interactive={false} fixedWidth={cardW} elevation={8} />
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

/* ------------------------------ Main ------------------------------ */
const Solutions = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const cards = [
    {
      title: "Web-based Assessment Application",
      points: [
        "Interactive dashboards tailored for candidates, assessors, and administrators.",
        "Comprehensive analytics and instant reporting.",
      ],
    },
    {
      title: "Online Mobile Application",
      points: [
        "User-friendly mobile assessments accessible anytime, anywhere.",
        "Real-time tracking and notifications.",
      ],
    },
    {
      title: "Offline Mobile/Tablet Application",
      points: [
        "Conduct assessments seamlessly in remote or low-connectivity areas.",
        "Automated data sync upon connectivity restoration.",
      ],
    },
  ];

  const TITLE_FS = { xs: "1.15rem", md: "1.25rem", lg: "1.35rem" };
  const BODY_FS = { xs: "0.95rem", md: "1.0rem" };
  const BULLET_ICON_FS = 18;
  const HEADER_MIN_H = { xs: 64, md: 88 };
  const ICON_SLOT = 28;

  // dialog state (click only; no hover)
  const [open, setOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [cardData, setCardData] = useState(null);
  const [images, setImages] = useState([]);

  const handleCardClick = (idx, c) => {
    setClickedIndex(idx);
    setCardData({
      title: c.title,
      points: c.points,
      icon: icons[c.title],
      TITLE_FS,
      BODY_FS,
      BULLET_ICON_FS,
      HEADER_MIN_H,
      ICON_SLOT,
    });
    setImages(imageData[c.title] || []);
    setOpen(true);
  };

  return (
    <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          component="h2"
          sx={{
            display: "inline-block",
            position: "relative",
            px: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: -6,
              height: 4,
              width: "100%",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          Assessment{" "}
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            Solutions
          </Box>
        </Typography>
      </Box>

      {/* Three clickable cards (NO hover effects) */}
      <Box sx={{ maxWidth: 1220, mx: "auto", px: { xs: 2, md: 0 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
            alignItems: "stretch",
            gap: { xs: 2, md: 2 },
          }}
        >
          {cards.map((c, idx) => (
            <InfoCard
              key={c.title}
              title={c.title}
              points={c.points}
              icon={icons[c.title]}
              TITLE_FS={TITLE_FS}
              BODY_FS={BODY_FS}
              BULLET_ICON_FS={BULLET_ICON_FS}
              HEADER_MIN_H={HEADER_MIN_H}
              ICON_SLOT={ICON_SLOT}
              onClick={() => handleCardClick(idx, c)}
              interactive
              fixedWidth={360}
              elevation={4}
            />
          ))}
        </Box>
      </Box>

      {/* Regular modal */}
      <AnimatePresence>
        {open && cardData && (
          <RegularArcDialog
            open={open}
            onClose={() => setOpen(false)}
            cardIndex={clickedIndex}
            cardData={cardData}
            images={images}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Solutions;