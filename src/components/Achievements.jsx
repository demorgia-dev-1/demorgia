// import React, { useRef } from "react";
// import {
//   Typography,
//   Box,
//   Card,
//   IconButton,
//   useTheme,
// } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import CountUp from "react-countup";
// import {
//   EmojiEvents,
//   WorkspacePremium,
//   Verified,
//   StarRate,
//   MilitaryTech,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const achievements = [
//   {
//     icon: EmojiEvents,
//     count: 1000000,
//     suffix: "+",
//     label: "Skill Assessments Delivered",
//     color: "#4CAF50",
//   },
//   {
//     icon: WorkspacePremium,
//     count: 500000,
//     suffix: "+",
//     label: "Assessments with Sector Skill Councils",
//     color: "#1976D2",
//   },
//   {
//     icon: MilitaryTech,
//     count: 25000,
//     suffix: "+",
//     label: "RPL Candidates Delivered",
//     color: "#4CAF50",
//   },
//   {
//     icon: WorkspacePremium,
//     count: 5000,
//     suffix: "+",
//     label: "TOA/TOTs Executed",
//     color: "#1976D2",
//   },
//   {
//     icon: EmojiEvents,
//     count: 50000,
//     suffix: "+",
//     label: "PMKVY Same-Day Uploads",
//     color: "#4CAF50",
//   },
//   {
//     icon: Verified,
//     count: 9001,
//     suffix: ":2015",
//     label: "ISO Certified Quality System",
//     color: "#1976D2",
//   },
//   {
//     icon: StarRate,
//     count: 1,
//     suffix: "x",
//     label: "Best Performing Agency – CSDCI",
//     color: "#4CAF50",
//   },
// ];

// const Achievements = () => {
//   const theme = useTheme();
//   const scrollRef = useRef(null);

//   const cardWidth = 230 + 24; // 230px card + 24px gap
//   const scrollCount = 2;
//   const scrollAmount = cardWidth * scrollCount;

//   const scroll = (offset) => {
//     scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//   };

//   return (
//     <Box sx={{ pt: 10, pb: 0, px: 0, position: "relative", overflow: "hidden" }}>
      
//       {/* Content Container */}
//       <Box sx={{ position: "relative", maxWidth: 1280, mx: "auto", textAlign: "center" }}>
        
//         {/* Heading */}
//         <Box sx={{ textAlign: "center", mb: 4 }}>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             style={{ display: "inline-block" }}
//           >
//             <Typography
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
//               Our Key{" "}
//               <Box component="span" sx={{ color: theme.palette.primary.main }}>
//                 Achievements
//               </Box>
//             </Typography>
//           </motion.div>
//         </Box>

//         {/* Scrollable Cards */}
//         <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
//           <IconButton
//             onClick={() => scroll(-scrollAmount)}
//             sx={{
//               color: "#1976D2",
//               background: "#fff",
//               boxShadow: 1,
//               "&:hover": { backgroundColor: "#e3f2fd" },
//               zIndex: 2,
//               mr: 1,
//             }}
//           >
//             <ChevronLeft />
//           </IconButton>

//           <Box
//             ref={scrollRef}
//             sx={{
//               overflowX: "hidden",
//               flexGrow: 1,
//               display: "flex",
//             }}
//           >
//             <Box sx={{ display: "flex", gap: 3 }}>
//               {achievements.map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                   >
//                     <Card
//                       elevation={0}
//                       sx={{
//                         minWidth: 230,
//                         height: 230,
//                         borderRadius: 5,
//                         background: "rgba(255, 255, 255, 0.75)",
//                         border: "1px solid #e0e0e0",
//                         px: 3,
//                         py: 4,
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         position: "relative",
//                         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                         "&:hover": {
//                           transform: "translateY(-6px) scale(1.02)",
//                           boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: 20,
//                           width: 56,
//                           height: 56,
//                           borderRadius: "50%",
//                           background: item.color,
//                           boxShadow: `0 0 12px ${item.color}`,
//                           color: "#fff",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Icon />
//                       </Box>
//                       <Box mt={8}>
//                         <Typography variant="h5" fontWeight={700} color="text.primary">
//                           <CountUp end={item.count} duration={1.5} separator="," />
//                           {item.suffix}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           mt={1}
//                           color="text.secondary"
//                           sx={{
//                             maxWidth: 200,
//                             whiteSpace: "normal",
//                             overflowWrap: "break-word",
//                             textAlign: "center",
//                           }}
//                         >
//                           {item.label}
//                         </Typography>
//                       </Box>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </Box>
//           </Box>

//           <IconButton
//             onClick={() => scroll(scrollAmount)}
//             sx={{
//               color: "#1976D2",
//               background: "#fff",
//               boxShadow: 1,
//               "&:hover": { backgroundColor: "#e3f2fd" },
//               zIndex: 2,
//               ml: 1,
//             }}
//           >
//             <ChevronRight />
//           </IconButton>
//         </Box>

//         {/* Description */}
//         <Typography variant="h6" mt={8} color="text.secondary">
//           Demorgia’s commitment to quality and timely delivery continues to set
//           benchmarks in the Skill India ecosystem.
//         </Typography>
//       </Box>

//       {/* Bottom Beam SVG (Now outside maxWidth container) */}
//       {/* <Box
//         component="svg"
//         sx={{
//           position: "relative",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: 100,
//           display: "block",
//           p: 0,
//           m: 0,
//           zIndex: 1,
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
//     </Box>
//   );
// };

// export default Achievements;
import React from "react";
import { Typography, Box, Paper, useTheme } from "@mui/material";
import CountUp from "react-countup";
import {
  EmojiEvents,
  WorkspacePremium,
  Verified,
  StarRate,
  MilitaryTech,
} from "@mui/icons-material";
import { motion } from "framer-motion";

/* ---- DATA ---- */
const achievements = [
  { icon: EmojiEvents,      count: 1000000, suffix: "+",     label: "Skill Assessments Delivered" },
  { icon: WorkspacePremium, count: 500000,  suffix: "+",     label: "Assessments with Sector Skill Councils" },
  { icon: MilitaryTech,     count: 25000,   suffix: "+",     label: "RPL Candidates Delivered" },
  { icon: WorkspacePremium, count: 5000,    suffix: "+",     label: "TOA/TOTs Executed" },
  { icon: EmojiEvents,      count: 50000,   suffix: "+",     label: "PMKVY Same-Day Uploads" },
  { icon: Verified,         count: 9001,    suffix: ":2015", label: "ISO Certified Quality System" },
  { icon: StarRate,         count: 1,       suffix: "x",     label: "Best Performing Agency – CSDCI" },
];

/* ---- COLORS ---- */
const BLUE = "rgb(10, 72, 158)";  // unified dark blue everywhere
const DARK_BLUE = BLUE;           // alias for readability
const GREEN = "#2E7D32";
const WHITE = "#FFFFFF";

/* ---- Callout ---- */
const Callout = ({ index, item, align = "right" }) => {
  const Icon = item.icon;
  const justify = align === "right" ? "flex-start" : "flex-end";
  const textAlign = align === "right" ? "left" : "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: justify,
          gap: 1.5,
          mb: { xs: 2.5, md: 3.5 },
        }}
      >
        {align === "right" ? (
          <>
            {/* Number bubble */}
            <Paper
              elevation={0}
              sx={{
                width: 44,
                height: 44,
                minWidth: 44,
                borderRadius: "50%",
                border: `3px solid ${BLUE}`,
                display: "grid",
                placeItems: "center",
                bgcolor: WHITE,
                color: BLUE,
                fontWeight: 800,
              }}
            >
              {String(index).padStart(2, "0")}
            </Paper>

            {/* Text block */}
            <Box sx={{ maxWidth: 260, textAlign }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                <Icon sx={{ fontSize: 18, color: GREEN }} />
                {/* NUMBER → dark blue */}
                <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
                  <CountUp end={item.count} duration={1.4} separator="," />
                  {item.suffix}
                </Typography>
              </Box>
              {/* LABEL → black */}
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.label}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            {/* Text block (right aligned) */}
            <Box sx={{ maxWidth: 260, textAlign }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end", mb: 0.5 }}>
                {/* NUMBER → dark blue */}
                <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
                  <CountUp end={item.count} duration={1.4} separator="," />
                  {item.suffix}
                </Typography>
                <Icon sx={{ fontSize: 18, color: GREEN }} />
              </Box>
              {/* LABEL → black */}
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.label}
              </Typography>
            </Box>

            {/* Number bubble */}
            <Paper
              elevation={0}
              sx={{
                width: 44,
                height: 44,
                minWidth: 44,
                borderRadius: "50%",
                border: `3px solid ${BLUE}`,
                display: "grid",
                placeItems: "center",
                bgcolor: WHITE,
                color: BLUE,
                fontWeight: 800,
              }}
            >
              {String(index).padStart(2, "0")}
            </Paper>
          </>
        )}
      </Box>
    </motion.div>
  );
};

/* ---- Trophy SVG ---- */
const Trophy = () => (
  <Box component="svg" viewBox="0 0 240 200" sx={{ width: { xs: 220, md: 260 }, height: "auto" }}>
    <path d="M60 40 h120 v22 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z" fill={WHITE} stroke={DARK_BLUE} strokeWidth="4" />
    <path d="M60 50 a35 35 0 0 0 -20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
    <path d="M180 50 a35 35 0 0 1 20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
    <rect x="105" y="100" width="30" height="26" rx="4" fill={DARK_BLUE} />
    <rect x="85"  y="126" width="70" height="12" rx="6" fill={GREEN} />
    <rect x="70"  y="140" width="100" height="18" rx="8" fill={DARK_BLUE} />
    <circle cx="120" cy="88" r="16" fill={WHITE} stroke={GREEN} strokeWidth="4" />
    <path d="M120 76 l4 8 9 1 -7 6 2 9 -8-4 -8 4 2-9 -7-6 9-1z" fill={GREEN} />
  </Box>
);

const Achievements = () => {
  const theme = useTheme();

  // Heading fade-in (kept). Underline reveal on hover (dark blue).
  const headingVariants = {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const six = achievements.slice(0, 6);
  const leftSide  = [six[0], six[2], six[4]].filter(Boolean);
  const rightSide = [six[1], six[3], six[5]].filter(Boolean);
  const extras = achievements.slice(6);

  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 }, bgcolor: WHITE }}>
      {/* Heading + hover underline (dark blue) */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          style={{ display: "inline-block" }}
        >
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              "&:hover .ach-underline": { transform: "scaleX(1)" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" component="h2">
              Our Key <Box component="span" sx={{ color: BLUE }}>Achievements</Box>
            </Typography>
            <Box
              className="ach-underline"
              sx={{
                height: 4,
                borderRadius: 2,
                backgroundColor: DARK_BLUE,
                transformOrigin: "left",
                transform: "scaleX(0)",
                transition: "transform .45s ease",
                mt: 1,
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Main layout */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box>
          {leftSide.map((item, i) => (
            <Callout key={`L-${i}`} index={i * 2 + 1} item={item} align="left" />
          ))}
        </Box>

        <Box
          component={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Trophy />
        </Box>

        <Box>
          {rightSide.map((item, i) => (
            <Callout key={`R-${i}`} index={i * 2 + 2} item={item} align="right" />
          ))}
        </Box>
      </Box>

      {/* Extras row (if any) */}
      {extras.length > 0 && (
        <Box sx={{ mt: { xs: 4, md: 5 }, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
          {extras.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Paper
                key={`X-${idx}`}
                elevation={0}
                sx={{
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 999,
                  border: `2px solid ${DARK_BLUE}`,
                  bgcolor: WHITE,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon sx={{ fontSize: 18, color: GREEN }} />
                <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
                  <CountUp end={item.count} duration={1.2} separator="," />
                  {item.suffix}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  — {item.label}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      )}

      {/* Bottom statement (black) */}
      <Typography
        variant="h6"
        sx={{ mt: { xs: 5, md: 6 }, textAlign: "center", color: "text.primary", px: 2 }}
      >
        Demorgia’s commitment to quality and timely delivery continues to set benchmarks in the Skill India ecosystem.
      </Typography>
    </Box>
  );
};

export default Achievements;