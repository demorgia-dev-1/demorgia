// import React, { useEffect, useState } from "react";
// import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { useAnimation } from "framer-motion";

// const features = [
//   "AI-Enabled Online & Offline Assessment Modes",
//   "Multilingual Support with Google Translator Integration",
//   "Live Streaming, Face Recognition & Multiple Face Detection",
//   "Object Detection & Window Switch Flagging",
//   "Speech-to-Text & Text-to-Speech for Divyangjan (Coming Soon)",
//   "SSC Login for Real-Time Monitoring",
//   "Secure Cloud and Hard Copy Storage for 10 Years",
//   "Question Bank of 900+ Job Roles with Auto Randomization",
// ];

// const videoSources = [
//   { src: "/videos/1 (1).mp4", label: "Candidate Login and Setup" },
//   { src: "/videos/1 (2).mp4", label: "Theory Assessment Interface" },
//   { src: "/videos/1 (3).mp4", label: "Live AI Proctoring in Action" },
//   { src: "/videos/1 (4).mp4", label: "Practical Skill Evaluation" },
//   { src: "/videos/1 (5).mp4", label: "Face Detection During Assessment" },
//   { src: "/videos/1 (6).mp4", label: "Assessment Report Generation" },
//   { src: "/videos/1 (7).mp4", label: "Cloud Evidence Uploading" },
//   { src: "/videos/1 (8).mp4", label: "Assessment Completion Screen" },
// ];

// const Platform = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const controls = useAnimation();
//   const videoWidth = 500;
//   const totalVideos = videoSources.length;
//   const duplicatedVideos = [...videoSources, ...videoSources];
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (totalVideos === 0) return;

//     let currentIndex = 0;
//     let isCancelled = false;

//     const animateSlide = async () => {
//       while (!isCancelled) {
//         if (!isPaused) {
//           await new Promise((resolve) => setTimeout(resolve, 5000));
//           currentIndex++;

//           await controls.start({
//             x: -currentIndex * videoWidth,
//             transition: { duration: 1.6, ease: "easeInOut" },
//           });

//           if (currentIndex === totalVideos) {
//             await controls.set({ x: 0 });
//             currentIndex = 0;
//           }
//         } else {
//           await new Promise((resolve) => setTimeout(resolve, 200));
//         }
//       }
//     };

//     animateSlide();

//     return () => {
//       isCancelled = true;
//     };
//   }, [controls, totalVideos, videoWidth, isPaused]);

//   return (
//     <Box
//       sx={{
//         py: 10,
//         px: 3,
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "#ffffff",
//       }}
//     >
//       {/* Moving Blob SVG Background */}
//       {/* <Box
//   component="svg"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 1440 200"
//   preserveAspectRatio="none"
//   sx={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: 200,
//     display: "block",
//     zIndex: 1,
//   }}
// >
//   <path
//     fill="#1976D2"  // Same blue as Solutions section
//     d="M0,96 C360,0 1080,192 1440,96 L1440,0 L0,0 Z"
//   />
// </Box> */}

//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundImage:
//             "url('https://www.svgbackgrounds.com/wp-content/uploads/2021/03/blob-haikei.svg')",
//           opacity: 0.05,
//         }}
//       />

//       <Box
//         maxWidth="lg"
//         mx="auto"
//         display="flex"
//         flexDirection={isMobile ? "column" : "row"}
//         alignItems="center"
//         justifyContent="space-between"
//         gap={6}
//         sx={{ position: "relative", zIndex: 1 }}
//       >
//         {/* LEFT: Content */}
//         <Box flex={1}>
//           {/* <Typography
//             variant="h4"
//             fontWeight={700}
//             gutterBottom
//             color="primary"
//             sx={{
//               borderBottom: "3px solid #0d47a1",
//               display: "inline-block",
//               mb: 3,
//             }}
//           >
//             Online Assessment Platform
//           </Typography> */}
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             gutterBottom
//             sx={{
//               borderBottom: "3px solid #0d47a1",
//               display: "inline-block",
//               mb: 3,
//             }}
//           >
//             <Box component="span" sx={{ color: "#000000" }}>Online</Box>{" "}
//             <Box component="span" sx={{ color: theme.palette.primary.main }}>
//               Assessment Platform
//             </Box>
//           </Typography>


//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ maxWidth: 600, mb: 2, fontSize: 17 }}
//           >
//             <span style={{ fontWeight: 500 }}>
//               <Typewriter
//                 words={[
//                   "AI-powered and secure assessment system...",
//                   "Supporting multilingual proctoring...",
//                   "Built for inclusive and remote evaluations...",
//                 ]}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={50}
//                 deleteSpeed={30}
//                 delaySpeed={2000}
//               />
//             </span>
//           </Typography>

//           <Box display="flex" flexDirection="column" gap={2} mt={3}>
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Box
//                   sx={{
//                     background: "#e3f2fd",
//                     color: "#0d47a1",
//                     px: 3,
//                     py: 1.2,
//                     borderRadius: 2,
//                     fontWeight: 500,
//                     fontSize: 15,
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       background: "#bbdefb",
//                       transform: "translateX(5px)",
//                     },
//                   }}
//                 >
//                   {feature}
//                 </Box>
//               </motion.div>
//             ))}
//           </Box>
//         </Box>

//         {/* RIGHT: Video Carousel */}
//         <Box flex={1} textAlign="center">
//           <Box
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             sx={{
//               overflow: "hidden",
//               width: `${videoWidth}px`,
//               height: 300,
//               mx: "auto",
//               borderRadius: 3,
//               background: "#f4f4f4",
//               position: "relative",
//             }}
//           >
//             <motion.div
//               animate={controls}
//               style={{
//                 display: "flex",
//                 width: `${duplicatedVideos.length * videoWidth}px`,
//               }}
//             >
//               {duplicatedVideos.map((video, i) => (
//                 <Box
//                   key={i}
//                   sx={{
//                     position: "relative",
//                     width: `${videoWidth}px`,
//                     height: 300,
//                     px: 0,
//                     flexShrink: 0,
//                   }}
//                 >
//                   <video
//                     muted
//                     autoPlay
//                     loop
//                     playsInline
//                     controls={false}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       borderRadius: 8,
//                     }}
//                   >
//                     <source src={video.src} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>

//                   {/* Text Overlay */}
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       width: "100%",
//                       background: "rgba(0,0,0,0.5)",
//                       color: "#fff",
//                       textAlign: "center",
//                       py: 1,
//                       fontSize: 14,
//                       fontWeight: 500,
//                       borderBottomLeftRadius: 8,
//                       borderBottomRightRadius: 8,
//                     }}
//                   >
//                     {video.label || `Video ${(i % totalVideos) + 1}`}
//                   </Box>
//                 </Box>
//               ))}
//             </motion.div>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Platform;
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
  "Speech-to-Text & Text-to-Speech for Divyangjan (Coming Soon)",
  "SSC Login for Real-Time Monitoring",
  "Secure Cloud and Hard Copy Storage for 10 Years",
  "Question Bank of 900+ Job Roles with Auto Randomization",
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
          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
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
          </Typography>
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