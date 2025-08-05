// import { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Fade,
//   useTheme,
//   Tabs,
//   Tab,
//   useMediaQuery,
// } from "@mui/material";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import BlockIcon from "@mui/icons-material/Block";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import { motion } from "framer-motion";
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

//   return (
//     <Box px={3} py={6} textAlign="center" >
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

//       {/* Mode Tabs */}
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
//             sx={{ fontWeight: "bold", textTransform: "uppercase", borderRadius: 2}}
//           />
//         ))}
//       </Tabs>

//       {/* Cards */}
//       <Grid container spacing={4} justifyContent="center">
//         {data[selectedMode].map((step, index) => (
//           <Fade in key={index} timeout={500}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={4}
//                 sx={{
//                   p: 3,
//                   textAlign: "left",
//                   borderRadius: 4,
//                   height: "100%",
//                   transition: "transform 0.3s",
//                   "&:hover": {
//                     transform: "translateY(-5px)",
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={step.image}
//                   alt={step.title}
//                   sx={{
//                     width: "100%",
//                     height: 160,
//                     objectFit: "cover",
//                     borderRadius: 2,
//                     mb: 2,
//                     border: "1px solid #e0e0e0",
//                   }}
//                 />
//                 <Typography variant="h6" fontWeight="bold" gutterBottom>
//                   {step.title}
//                 </Typography>
//                 <ul style={{ paddingLeft: 16 }}>
//                   {step.points.map((point, idx) => (
//                     <li key={idx}>
//                       <Typography variant="body2" color="text.secondary">
//                         {point}
//                       </Typography>
//                     </li>
//                   ))}
//                 </ul>
//               </Paper>
//             </Grid>
//           </Fade>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PortalDetails;
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

const PortalDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedMode, setSelectedMode] = useState("paperbased");

  const handleTabChange = (_, newValue) => {
    setSelectedMode(newValue);
  };

  const borderColorsByMode = {
    online: theme.palette.primary.main,
    offline: theme.palette.primary.main,
    paperbased: theme.palette.primary.main,
  };

  const borderColor = borderColorsByMode[selectedMode];

  return (
    <Box px={3} py={6} textAlign="center">
      {/* Header */}
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
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -6,
                height: 4,
                width: "100%",
                backgroundColor: theme.palette.primary.main,
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
            Proctor, Evaluate and Conduct Exams, All{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              on One Integrated Platform
            </Box>
          </Typography>
        </motion.div>
      </Box>

      {/* Tabs */}
      <Tabs
        value={selectedMode}
        onChange={handleTabChange}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : false}
        centered={!isMobile}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 5 }}
      >
        {modes.map((mode) => (
          <Tab
            key={mode.key}
            label={mode.label}
            icon={mode.icon}
            iconPosition="start"
            value={mode.key}
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              borderRadius: 2,
            }}
          />
        ))}
      </Tabs>

      {/* Sliding Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMode}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {data[selectedMode].map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: "left",
                    borderRadius: 3,
                    height: "100%",
                    backgroundColor: "#f5faff", // ✅ always light blue
                    borderLeft: `6px solid ${borderColor}`,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 2,
                      mb: 2,
                      border: "1px solid #e0e0e0",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: theme.palette.primary.main }} // ✅ always blue
                  >
                    {step.title}
                  </Typography>
                  <ul style={{ paddingLeft: 16 }}>
                    {step.points.map((point, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" color="text.secondary">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default PortalDetails;