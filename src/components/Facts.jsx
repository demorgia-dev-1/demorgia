// import React from "react";
// import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const facts = [
//   { label: "SSC Empanelled", value: 25 },
//   { label: "Job Roles Assessed", value: 900 },
//   { label: "Assessed Candidates", value: 1001303 },
//   { label: "SME Engaged", value: 200 },
//   { label: "Assessor/Proctor", value: 1000 },
//   { label: "Projects", value: 100 },
// ];

// const Facts = () => {
//   const theme = useTheme();
//   const { ref, inView } = useInView({ triggerOnce: true });

//   return (
//     <Box
//       id="facts"
//       sx={{
//         py: 10,
//         background: "white",
//         overflow: "hidden",
//       }}
//     >
//       <Box sx={{ maxWidth: "lg", mx: "auto", px: 2 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <Box sx={{ textAlign: "center", mb: 4 }}>
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               style={{ display: "inline-block" }}
//             >
//               <Typography
//                 variant="h4"
//                 fontWeight="bold"
//                 component="h2"
//                 sx={{
//                   display: "inline-block",
//                   position: "relative",
//                   px: 1,
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     bottom: -6,
//                     height: 4,
//                     width: "100%",
//                     backgroundColor: theme.palette.primary.main,
//                     borderRadius: 2,
//                     transform: "scaleX(0)",
//                     transformOrigin: "left",
//                     transition: "transform 0.4s ease-in-out",
//                   },
//                   "&:hover::after": {
//                     transform: "scaleX(1)",
//                   },
//                 }}
//               >
//                 Fac
//                 <Box
//                   component="span"
//                   sx={{ color: theme.palette.primary.main }}
//                 >
//                   ts
//                 </Box>
//               </Typography>
//             </motion.div>
//           </Box>
//           <Typography
//             align="center"
//             sx={{ maxWidth: 800, mx: "auto", mb: 6, color: "text.secondary" }}
//           >
//             Our team's expertise spans various domains, including assessment
//             excellence, strategic business consultancy, digital marketing
//             proficiency, and talent acquisition. We help individuals unlock
//             their potential and organizations achieve their goals.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={3} justifyContent="center" ref={ref}>
//           {facts.map((fact, idx) => (
//             <Grid item xs={6} sm={4} md={2} key={idx}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.4, delay: idx * 0.15 }}
//               >
//                 <Paper
//                   elevation={4}
//                   sx={{
//                     p: 3,
//                     textAlign: "center",
//                     borderRadius: 4,
//                     background: "white",
//                     minHeight: { xs: 50 },
//                     width: { xs: 140, md: "auto" },
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     fontWeight="bold"
//                     color={theme.palette.primary.main}
//                   >
//                     <CountUp
//                       end={inView ? fact.value : 0}
//                       duration={1.8}
//                       separator=","
//                     />
//                     <span style={{ color: "#43a047", fontWeight: 600 }}>+</span>
//                   </Typography>
//                   <Typography variant="body2" mt={1} color="text.secondary">
//                     {fact.label}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Facts;
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Verified,
  Work,
  People,
  Star,
  Assessment,
  Assignment,
} from "@mui/icons-material";

// Facts data
const facts = [
  { label: "SSC Empanelled", value: 25, icon: <Verified fontSize="large" color="success" /> },
  { label: "Job Roles Assessed", value: 900, icon: <Work fontSize="large" color="primary" /> },
  { label: "Assessed Candidates", value: 1001303, icon: <People fontSize="large" color="primary" /> },
  { label: "SME Engaged", value: 200, icon: <Star fontSize="large" color="warning" /> },
  { label: "Assessor/Proctor", value: 1000, icon: <Assessment fontSize="large" color="secondary" /> },
  { label: "Projects", value: 100, icon: <Assignment fontSize="large" color="action" /> },
];

const Facts = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      id="facts"
      sx={{
        py: 10,
        background: "white",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "lg", mx: "auto", px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
                Fac
                <Box component="span" sx={{ color: theme.palette.primary.main }}>
                  ts
                </Box>
              </Typography>
            </motion.div>
          </Box>
          <Typography
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 6, color: "text.secondary" }}
          >
            Our team's expertise spans various domains, including assessment
            excellence, strategic business consultancy, digital marketing
            proficiency, and talent acquisition. We help individuals unlock
            their potential and organizations achieve their goals.
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center" ref={ref}>
          {facts.map((fact, idx) => (
            <Grid item xs={12} sm={6} md={2} sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: idx % 2 === 0 ? 20 : -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: 170, // increased from 150
                    height: 170, // increased from 150
                    p: 2,
                    textAlign: "center",
                    borderRadius: 4,
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ mb: 1 }}>{fact.icon}</Box>
                  <Typography
                    fontSize="1.4rem"
                    fontWeight={700}
                    color={theme.palette.primary.main}
                  >
                    <CountUp
                      end={inView ? fact.value : 0}
                      duration={1.8}
                      separator=","
                    />
                    <span style={{ color: "#43a047", fontWeight: 600 }}>+</span>
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary">
                    {fact.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Facts;
