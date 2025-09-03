// // PracticalAssessments.jsx
// import React, { useEffect, useState } from "react";
// import { Typography, Box, useTheme } from "@mui/material";
// import { motion } from "framer-motion";

// // Icons
// import SchoolIcon from "@mui/icons-material/School";
// import WorkIcon from "@mui/icons-material/Work";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import FeedbackIcon from "@mui/icons-material/Feedback";

// const videoSources = [
//   { src: "/videos/1 (1).mp4" },
//   { src: "/videos/1 (2).mp4" },
//   { src: "/videos/1 (3).mp4" },
//   { src: "/videos/1 (4).mp4" },
//   { src: "/videos/1 (5).mp4" },
//   { src: "/videos/1 (6).mp4" },
// ];

// const points = [
//   { icon: <SchoolIcon />, text: "Hands-on Skill Evaluation" },
//   { icon: <WorkIcon />, text: "Industry-Relevant Training" },
//   { icon: <VisibilityIcon />, text: "Smart Monitoring System" },
//   { icon: <AssignmentIcon />, text: "Scenario-Based Assessments" },
//   { icon: <FeedbackIcon />, text: "Personalized Feedback" },
// ];

// const PracticalAssessments = () => {
//   const theme = useTheme();
//   const [current, setCurrent] = useState(0);

//   // Auto move every 10s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % videoSources.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

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
//       {/* Section Heading */}
//       <Box textAlign="center">
//         <Typography
//           variant="h4"
//           fontWeight={700}
//           gutterBottom
//           sx={{
//             display: "inline-block",
//             position: "relative",
//             mb: 5,
//             cursor: "pointer",
//             "&::after": {
//               content: '""',
//               position: "absolute",
//               width: "0%",
//               height: "4px",
//               bottom: "-6px",
//               left: 0,
//               backgroundColor: theme.palette.primary.main,
//               transition: "width 0.3s ease",
//               borderRadius: "4px",
//             },
//             "&:hover::after": {
//               width: "100%",
//             },
//           }}
//         >
//           <Box component="span" sx={{ color: "#000" }}>
//             Practical Assessments
//           </Box>{" "}
//           <Box component="span" sx={{ color: theme.palette.primary.main }}>
//             & Trainings
//           </Box>
//         </Typography>
//       </Box>

//       {/* Description */}
//       {/* <Typography
//         variant="body1"
//         sx={{
//           maxWidth: "800px",
//           mx: "auto",
//           mb: 6,
//           fontSize: "17px",
//           color: "text.secondary",
//           textAlign: "center",
//         }}
//       >
//         Our Practical Assessments & Trainings are designed to bridge the gap
//         between knowledge and execution. Candidates are evaluated on real-world
//         scenarios, ensuring they demonstrate not only theoretical understanding
//         but also practical competence.
//       </Typography> */}

//       {/* Layout */}
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "1fr auto",
//           gap: 2, // 🔥 reduced gap so pointers are closer to video
//           maxWidth: "1000px",
//           mx: "auto",
//           alignItems: "center",
//         }}
//       >
//         {/* Left Pointers */}
//         <Box display="flex" flexDirection="column" gap={3}>
//           {points.map((item, index) => (
//             <Box key={index} display="flex" alignItems="center" gap={2}>
//               <Box
//                 sx={{
//                   width: 40,
//                   height: 40,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   backgroundColor:
//                     index % 2 === 0
//                       ? theme.palette.primary.main
//                       : theme.palette.success.main,
//                   color: "#fff",
//                   fontSize: 20,
//                 }}
//               >
//                 {item.icon}
//               </Box>
//               <Typography sx={{ color: "#000", fontSize: 16, fontWeight: 500 }}>
//                 {item.text}
//               </Typography>
//             </Box>
//           ))}
//         </Box>

//         {/* Right Video Carousel (Vertical Transition) */}
//         <Box
//           sx={{
//             position: "relative",
//             width: "500px",
//             height: "300px",
//             mx: "auto",
//             overflow: "hidden",
//             borderRadius: 3,
//             background: "#f4f4f4",
//           }}
//         >
//           {videoSources.map((video, index) => {
//             let position = "nextSlide";
//             if (index === current) position = "activeSlide";
//             if (
//               index === current - 1 ||
//               (current === 0 && index === videoSources.length - 1)
//             )
//               position = "prevSlide";

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: position === "activeSlide" ? 1 : 0.6,
//                   y:
//                     position === "activeSlide"
//                       ? 0
//                       : position === "prevSlide"
//                       ? -280
//                       : 280,
//                   scale: position === "activeSlide" ? 1 : 0.9,
//                   zIndex: position === "activeSlide" ? 2 : 1,
//                 }}
//                 transition={{ duration: 1 }}
//                 style={{
//                   position: "absolute",
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <video
//                   muted
//                   autoPlay
//                   loop
//                   playsInline
//                   controls={false}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 >
//                   <source src={video.src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </motion.div>
//             );
//           })}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PracticalAssessments;
// PracticalAssessments.jsx
import React, { useEffect, useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FeedbackIcon from "@mui/icons-material/Feedback";

const videoSources = [
  { src: "/videos/1 (1).mp4" },
  { src: "/videos/1 (2).mp4" },
  { src: "/videos/1 (3).mp4" },
  { src: "/videos/1 (4).mp4" },
  { src: "/videos/1 (5).mp4" },
  { src: "/videos/1 (6).mp4" },
];

const points = [
  { icon: <SchoolIcon />, text: "Hands-on Skill Evaluation" },
  { icon: <WorkIcon />, text: "Industry-Relevant Training" },
  { icon: <VisibilityIcon />, text: "Smart Monitoring System" },
  { icon: <AssignmentIcon />, text: "Scenario-Based Assessments" },
  { icon: <FeedbackIcon />, text: "Personalized Feedback" },
];

const PracticalAssessments = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  // Auto move every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoSources.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Section Heading */}
      <Box textAlign="center">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            display: "inline-block",
            position: "relative",
            mb: { xs: 4, md: 6 },
            cursor: "pointer",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "4px",
              bottom: "-6px",
              left: 0,
              backgroundColor: theme.palette.primary.main,
              transition: "width 0.3s ease",
              borderRadius: "4px",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <Box component="span" sx={{ color: "#000" }}>
            Practical Assessments
          </Box>{" "}
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            & Trainings
          </Box>
        </Typography>
      </Box>

      {/* Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          maxWidth: "1200px",
          mx: "auto",
          alignItems: "center",
        }}
      >
        {/* Left Pointers */}
        <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 3 }}>
          {points.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexWrap: "wrap" }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    index % 2 === 0
                      ? theme.palette.primary.main
                      : theme.palette.success.main,
                  color: "#fff",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 500,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Video Carousel */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "100%", md: "500px" },
            height: { xs: "220px", sm: "260px", md: "300px" },
            mx: "auto",
            overflow: "hidden",
            borderRadius: 3,
            background: "#f4f4f4",
          }}
        >
          {videoSources.map((video, index) => {
            let position = "nextSlide";
            if (index === current) position = "activeSlide";
            if (
              index === current - 1 ||
              (current === 0 && index === videoSources.length - 1)
            )
              position = "prevSlide";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: position === "activeSlide" ? 1 : 0.6,
                  y:
                    position === "activeSlide"
                      ? 0
                      : position === "prevSlide"
                      ? -280
                      : 280,
                  scale: position === "activeSlide" ? 1 : 0.9,
                  zIndex: position === "activeSlide" ? 2 : 1,
                }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PracticalAssessments;