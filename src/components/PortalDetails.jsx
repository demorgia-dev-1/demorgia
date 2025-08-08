// import { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Tabs,
//   Tab,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import BlockIcon from "@mui/icons-material/Block";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import { AnimatePresence, motion } from "framer-motion";

// const data = {
//   online: [
//     {
//       title: "Pre-Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Generate and schedule exams.",
//         "Enable anti-cheating features.",
//         "Set evaluation guidelines.",
//       ],
//     },
//     {
//       title: "During Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Advanced online exam.",
//         "Monitor with seamless technology.",
//         "Build up student reports.",
//       ],
//     },
//     {
//       title: "Post Assessments",
//       image: "/assets/exam.png",
//       points: [
//         "Allotting answer sheets to the assessor.",
//         "Oversee and control the evaluation.",
//         "Place out results online.",
//       ],
//     },
//   ],
//   offline: [
//     {
//       title: "Pre-Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Prepare question papers manually.",
//         "Distribute to exam centers.",
//         "Set physical evaluation rules.",
//       ],
//     },
//     {
//       title: "During Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Manual invigilation.",
//         "Paper-based writing.",
//         "Attendance and records.",
//       ],
//     },
//     {
//       title: "Post Assessments",
//       image: "/assets/exam.png",
//       points: [
//         "Manual collection and evaluation.",
//         "Result compilation.",
//         "Offline result distribution.",
//       ],
//     },
//   ],
//   paperbased: [
//     {
//       title: "Pre-Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Print exam papers.",
//         "Distribute to invigilators.",
//         "Prepare marking scheme.",
//       ],
//     },
//     {
//       title: "During Assessment",
//       image: "/assets/exam.png",
//       points: [
//         "Monitor students manually.",
//         "Paper-based tests.",
//         "Maintain integrity on-site.",
//       ],
//     },
//     {
//       title: "Post Assessments",
//       image: "/assets/exam.png",
//       points: [
//         "Collect physical sheets.",
//         "Distribute to evaluators.",
//         "Publish results offline or online.",
//       ],
//     },
//   ],
// };

// const modes = [
//   { key: "online", label: "Online Exams", icon: <LaptopMacIcon /> },
//   { key: "offline", label: "Offline Exams", icon: <BlockIcon /> },
//   { key: "paperbased", label: "Paper Based Exams", icon: <ReceiptIcon /> },
// ];

// const PortalDetails = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [selectedMode, setSelectedMode] = useState("paperbased");

//   const handleTabChange = (_, newValue) => {
//     setSelectedMode(newValue);
//   };

//   const borderColorsByMode = {
//     online: theme.palette.primary.main,
//     offline: theme.palette.primary.main,
//     paperbased: theme.palette.primary.main,
//   };

//   const borderColor = borderColorsByMode[selectedMode];

//   return (
//     <Box px={3} py={6} textAlign="center">
//       {/* Header */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           style={{ display: "inline-block" }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             component="h2"
//             sx={{
//               display: "inline-block",
//               position: "relative",
//               px: 1,
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: 0,
//                 bottom: -6,
//                 height: 4,
//                 width: "100%",
//                 backgroundColor: theme.palette.primary.main,
//                 borderRadius: 2,
//                 transform: "scaleX(0)",
//                 transformOrigin: "left",
//                 transition: "transform 0.4s ease-in-out",
//               },
//               "&:hover::after": {
//                 transform: "scaleX(1)",
//               },
//             }}
//           >
//             Proctor, Evaluate and Conduct Exams, All{" "}
//             <Box component="span" sx={{ color: theme.palette.primary.main }}>
//               on One Integrated Platform
//             </Box>
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* Tabs */}
//       <Tabs
//         value={selectedMode}
//         onChange={handleTabChange}
//         variant={isMobile ? "scrollable" : "standard"}
//         scrollButtons={isMobile ? "auto" : false}
//         centered={!isMobile}
//         textColor="primary"
//         indicatorColor="primary"
//         sx={{ mb: 5 }}
//       >
//         {modes.map((mode) => (
//           <Tab
//             key={mode.key}
//             label={mode.label}
//             icon={mode.icon}
//             iconPosition="start"
//             value={mode.key}
//             sx={{
//               fontWeight: "bold",
//               textTransform: "uppercase",
//               borderRadius: 2,
//             }}
//           />
//         ))}
//       </Tabs>

//       {/* Sliding Cards */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedMode}
//           initial={{ x: 80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -80, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Grid container spacing={4} justifyContent="center">
//             {data[selectedMode].map((step, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     p: 3,
//                     textAlign: "left",
//                     borderRadius: 3,
//                     height: "100%",
//                     backgroundColor: "#f5faff", // ✅ always light blue
//                     borderLeft: `6px solid ${borderColor}`,
//                     transition: "transform 0.3s",
//                     "&:hover": {
//                       transform: "translateY(-6px)",
//                       boxShadow: 4,
//                     },
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={step.image}
//                     alt={step.title}
//                     sx={{
//                       width: "100%",
//                       height: 160,
//                       objectFit: "cover",
//                       borderRadius: 2,
//                       mb: 2,
//                       border: "1px solid #e0e0e0",
//                     }}
//                   />
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     gutterBottom
//                     sx={{ color: theme.palette.primary.main }} // ✅ always blue
//                   >
//                     {step.title}
//                   </Typography>
//                   <ul style={{ paddingLeft: 16 }}>
//                     {step.points.map((point, idx) => (
//                       <li key={idx}>
//                         <Typography variant="body2" color="text.secondary">
//                           {point}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </AnimatePresence>
//     </Box>
//   );
// };

// export default PortalDetails;
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
// src/components/PortalDetails.jsx
import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BlockIcon from "@mui/icons-material/Block";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { AnimatePresence, motion } from "framer-motion";

// Fixed, equal card dimensions
const CARD_WIDTH = 320;
const CARD_HEIGHT = 420;
const IMG_HEIGHT = 200;

const WAVE_BLUE = "#d8e5f4";

const data = {
  online: [
    {
      title: "Pre-Assessment",
      image: "/assets/exam.png",
      points: [
        "Generate and schedule exams.",
        "Enable anti-cheating features.",
        "Set evaluation guidelines.",
      ],
    },
    {
      title: "During Assessment",
      image: "/assets/exam.png",
      points: [
        "Advanced online exam.",
        "Monitor with seamless technology.",
        "Build up student reports.",
      ],
    },
    {
      title: "Post Assessments",
      image: "/assets/exam.png",
      points: [
        "Allotting answer sheets to the assessor.",
        "Oversee and control the evaluation.",
        "Place out results online.",
      ],
    },
  ],
  offline: [
    {
      title: "Pre-Assessment",
      image: "/assets/exam.png",
      points: [
        "Prepare question papers manually.",
        "Distribute to exam centers.",
        "Set physical evaluation rules.",
      ],
    },
    {
      title: "During Assessment",
      image: "/assets/exam.png",
      points: [
        "Manual invigilation.",
        "Paper-based writing.",
        "Attendance and records.",
      ],
    },
    {
      title: "Post Assessments",
      image: "/assets/exam.png",
      points: [
        "Manual collection and evaluation.",
        "Result compilation.",
        "Offline result distribution.",
      ],
    },
  ],
  paperbased: [
    {
      title: "Pre-Assessment",
      image: "/assets/exam.png",
      points: [
        "Print exam papers.",
        "Distribute to invigilators.",
        "Prepare marking scheme.",
      ],
    },
    {
      title: "During Assessment",
      image: "/assets/exam.png",
      points: [
        "Monitor students manually.",
        "Paper-based tests.",
        "Maintain integrity on-site.",
      ],
    },
    {
      title: "Post Assessments",
      image: "/assets/exam.png",
      points: [
        "Collect physical sheets.",
        "Distribute to evaluators.",
        "Publish results offline or online.",
      ],
    },
  ],
};

const modes = [
  { key: "online", label: "Online Exams", icon: <LaptopMacIcon /> },
  { key: "offline", label: "Offline Exams", icon: <BlockIcon /> },
  { key: "paperbased", label: "Paper Based Exams", icon: <ReceiptIcon /> },
];

// SLOWER motion variants for each card (left, center, right)
const cardVariants = {
  hidden: (i) => {
    const rel = i - 1;                   // -1 (left), 0 (center), 1 (right)
    const dir = rel === 0 ? 0 : rel * 60;
    return { x: dir, opacity: 0, scale: rel === 0 ? 0.98 : 0.96 };
  },
  show: (i) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,      // ↓ slower / smoother than before
      damping: 26,         // ↑ a touch more damping
      delay: 0.12 * (i + 1), // ↑ larger stagger
    },
  }),
  exit: (i) => {
    const rel = i - 1;
    const dir = rel === 0 ? 0 : rel * -60; // slide out opposite direction
    return {
      x: dir,
      opacity: 0,
      scale: rel === 0 ? 0.98 : 0.96,
      transition: { duration: 0.4, ease: "easeInOut" }, // ↑ slower exit
    };
  },
};

function PortalDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedMode, setSelectedMode] = useState("online");

  const HEADING_BLUE = theme.palette.primary.main;
  const BODY_TEXT = "#2b3440";

  return (
    <Box px={3} py={6} textAlign="center">
      {/* Section heading */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Proctor, Evaluate and Conduct Exams, All{" "}
        <Box component="span" sx={{ color: theme.palette.primary.main }}>
          on One Integrated Platform
        </Box>
      </Typography>

      {/* Tabs */}
      <Tabs
        value={selectedMode}
        onChange={(_, v) => setSelectedMode(v)}
        variant={isMobile ? "scrollable" : "standard"}
        centered={!isMobile}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 5 }}
      >
        {modes.map((m) => (
          <Tab
            key={m.key}
            value={m.key}
            icon={m.icon}
            iconPosition="start"
            label={m.label}
            sx={{ fontWeight: 700 }}
          />
        ))}
      </Tabs>

      {/* Cards with slower section transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMode}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{ width: "100%" }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {data[selectedMode].map((step, idx) => {
              const isCenter = idx === 1; // middle card lifted by default

              return (
                <Grid item key={idx}>
                  <motion.div
                    custom={idx}
                    variants={cardVariants}
                    style={{ display: "inline-block" }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        width: CARD_WIDTH,
                        height: CARD_HEIGHT, // equal height
                        borderRadius: 3,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: WAVE_BLUE, // whole card wave blue
                        border: "1px solid #c8d8ea",
                        // LIFT effect (default for middle, on hover for all)
                        transform: isCenter ? "translateY(-12px)" : "translateY(0)",
                        boxShadow: isCenter
                          ? "0 22px 50px rgba(0,0,0,0.28)"
                          : "0 10px 26px rgba(0,0,0,0.18)",
                        transition:
                          "transform .28s cubic-bezier(.2,.8,.2,1), box-shadow .28s ease",
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: "0 22px 50px rgba(0,0,0,0.28)",
                        },
                      }}
                    >
                      {/* Image area — full image visible */}
                      <Box
                        sx={{
                          height: IMG_HEIGHT,
                          width: "100%",
                          backgroundColor: "#ffffff",
                          p: 1,
                          boxSizing: "border-box",
                        }}
                      >
                        <Box
                          component="img"
                          src={step.image}
                          alt={step.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain", // show whole screenshot
                            borderRadius: 1,
                            display: "block",
                          }}
                        />
                      </Box>

                      {/* Content */}
                      <Box
                        sx={{
                          flex: 1,
                          p: 3,
                          pt: 2, // a bit closer to image
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          backgroundColor: WAVE_BLUE,
                          color: BODY_TEXT,
                        }}
                      >
                        {/* Card title with underline */}
                        <Box sx={{ textAlign: "center", mb: 1.5 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              color: HEADING_BLUE,
                              display: "inline-block",
                              paddingBottom: "4px",
                              borderBottom: `2px solid ${HEADING_BLUE}`,
                              marginTop: "4px",
                            }}
                          >
                            {step.title}
                          </Typography>
                        </Box>

                        {step.points.map((p, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              mb: i === step.points.length - 1 ? 0 : 0.5,
                              lineHeight: 1.5,
                            }}
                          >
                            • {p}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default PortalDetails;