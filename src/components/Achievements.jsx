// import React, { useMemo, useState } from "react";
// import { Typography, Box, Paper, useTheme } from "@mui/material";
// import CountUp from "react-countup";
// import {
//   EmojiEvents,
//   WorkspacePremium,
//   Verified,
//   StarRate,
//   MilitaryTech,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// /* ---- DATA ---- */
// const achievements = [
//   { icon: EmojiEvents,      count: 1000000, suffix: "+",     label: "Skill Assessments Delivered" },
//   { icon: WorkspacePremium, count: 500000,  suffix: "+",     label: "Assessments with Sector Skill Councils" },
//   { icon: MilitaryTech,     count: 25000,   suffix: "+",     label: "RPL Candidates Delivered" },
//   { icon: WorkspacePremium, count: 5000,    suffix: "+",     label: "TOA/TOTs Executed" },
//   { icon: EmojiEvents,      count: 50000,   suffix: "+",     label: "PMKVY Same-Day Uploads" },
//   { icon: Verified,         count: 9001,    suffix: ":2015", label: "ISO Certified Quality System" },
//   { icon: StarRate,         count: 1,       suffix: "x",     label: "Best Performing Agency – CSDCI" },
// ];

// /* ---- COLORS ---- */
// const BLUE = "rgb(10, 72, 158)";
// const DARK_BLUE = BLUE;
// const GREEN = "#2E7D32";
// const WHITE = "#FFFFFF";

// /* ---------- Star for sparkles ---------- */
// const Star = ({ size = 8, fill = GREEN }) => (
//   <path
//     d="M10 0 L12.9 6.2 L20 7.1 L14.8 11.6 L16.2 18.6 L10 15.1 L3.8 18.6 L5.2 11.6 0 7.1 7.1 6.2 Z"
//     transform={`scale(${size / 20})`}
//     fill={fill}
//   />
// );

// /* ---------- Callout item ---------- */
// const Callout = ({ index, item, align = "right" }) => {
//   const Icon = item.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.6 }}
//       transition={{ duration: 0.45 }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: {
//             xs: "center",
//             md: align === "right" ? "flex-start" : "flex-end",
//           },
//           textAlign: {
//             xs: "center",
//             md: align === "right" ? "left" : "right",
//           },
//           gap: { xs: 1, sm: 1.5 },
//           mb: { xs: 2, sm: 3, md: 3.5 },
//           flexWrap: "wrap",
//         }}
//       >
//         {align === "right" && (
//           <Paper
//             elevation={0}
//             sx={{
//               width: { xs: 36, sm: 44 },
//               height: { xs: 36, sm: 44 },
//               borderRadius: "50%",
//               border: `2px solid ${BLUE}`,
//               display: "grid",
//               placeItems: "center",
//               bgcolor: WHITE,
//               color: BLUE,
//               fontWeight: 800,
//               fontSize: { xs: "0.8rem", sm: "1rem" },
//               mr: { md: 2 },
//             }}
//           >
//             {String(index).padStart(2, "0")}
//           </Paper>
//         )}

//         <Box sx={{ maxWidth: { xs: "100%", sm: 260 } }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: {
//                 xs: "center",
//                 md: align === "right" ? "flex-start" : "flex-end",
//               },
//               gap: 1,
//               mb: 0.5,
//               flexWrap: "wrap",
//             }}
//           >
//             {align === "left" && <Icon sx={{ fontSize: { xs: 16, sm: 18 }, color: GREEN }} />}
//             <Typography
//               variant="h6"
//               fontWeight={700}
//               sx={{ color: BLUE, fontSize: { xs: "1rem", sm: "1.25rem" } }}
//             >
//               <CountUp end={item.count} duration={1.4} separator="," />
//               {item.suffix}
//             </Typography>
//             {align === "right" && <Icon sx={{ fontSize: { xs: 16, sm: 18 }, color: GREEN }} />}
//           </Box>
//           <Typography
//             variant="body2"
//             sx={{ color: "text.primary", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
//           >
//             {item.label}
//           </Typography>
//         </Box>

//         {align === "left" && (
//           <Paper
//             elevation={0}
//             sx={{
//               width: { xs: 36, sm: 44 },
//               height: { xs: 36, sm: 44 },
//               borderRadius: "50%",
//               border: `2px solid ${BLUE}`,
//               display: "grid",
//               placeItems: "center",
//               bgcolor: WHITE,
//               color: BLUE,
//               fontWeight: 800,
//               fontSize: { xs: "0.8rem", sm: "1rem" },
//               ml: { md: 2 },
//             }}
//           >
//             {String(index).padStart(2, "0")}
//           </Paper>
//         )}
//       </Box>
//     </motion.div>
//   );
// };

// /* ---------- Trophy with star burst ---------- */
// const Trophy = () => {
//   const [play, setPlay] = useState(false);

//   const sparkles = useMemo(() => {
//     const out = [];
//     const center = { x: 120, y: 88 };
//     for (let i = 0; i < 12; i++) {
//       const angle = (i / 12) * Math.PI * 2 + (i % 2 === 0 ? 0.15 : -0.15);
//       const dist = 55 + (i % 3) * 12;
//       out.push({
//         cx: center.x,
//         cy: center.y,
//         tx: Math.cos(angle) * dist,
//         ty: Math.sin(angle) * dist * 0.75,
//         size: 8 + (i % 3) * 3,
//         fill: i % 2 ? GREEN : DARK_BLUE,
//         delay: 0.22 + i * 0.02,
//       });
//     }
//     return out;
//   }, []);

//   return (
//     <motion.div
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.6 }}
//       onViewportEnter={() => setPlay(true)}
//       initial={{ opacity: 1 }}
//       style={{ display: "grid", placeItems: "center" }}
//       animate={
//         play
//           ? {
//               rotate: [0, -6, 6, -3, 2, 0],
//               scale: [1, 1.04, 1],
//               transition: { duration: 1.2, ease: "easeInOut" },
//             }
//           : {}
//       }
//     >
//       <motion.svg
//         viewBox="0 0 240 200"
//         style={{ width: "100%", maxWidth: 260, height: "auto" }}
//       >
//         {/* Cup */}
//         <path d="M60 40 h120 v22 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z" fill={WHITE} stroke={DARK_BLUE} strokeWidth="4" />
//         <path d="M60 50 a35 35 0 0 0 -20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
//         <path d="M180 50 a35 35 0 0 1 20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
//         <rect x="105" y="100" width="30" height="26" rx="4" fill={DARK_BLUE} />
//         <rect x="85"  y="126" width="70" height="12" rx="6" fill={GREEN} />
//         <rect x="70"  y="140" width="100" height="18" rx="8" fill={DARK_BLUE} />
//         <circle cx="120" cy="88" r="16" fill={WHITE} stroke={GREEN} strokeWidth="4" />
//         <path d="M120 76 l4 8 9 1 -7 6 2 9 -8-4 -8 4 2-9 -7-6 9-1z" fill={GREEN} />

//         {/* Sparkles */}
//         {sparkles.map((s, i) => (
//           <motion.g
//             key={i}
//             initial={{ x: s.cx, y: s.cy, scale: 0.4, opacity: 0 }}
//             animate={
//               play
//                 ? {
//                     x: s.cx + s.tx,
//                     y: s.cy - 10 + s.ty,
//                     scale: [0.4, 1.15, 0.9],
//                     opacity: [0, 1, 0],
//                     rotate: [0, 180, 270],
//                     transition: { duration: 1.2, ease: "easeOut", delay: s.delay },
//                   }
//                 : {}
//             }
//           >
//             <Star size={s.size} fill={s.fill} />
//           </motion.g>
//         ))}
//       </motion.svg>
//     </motion.div>
//   );
// };

// /* ---------- Achievements ---------- */
// const Achievements = () => {
//   const theme = useTheme();

//   const six = achievements.slice(0, 6);
//   const leftSide = [six[0], six[2], six[4]].filter(Boolean);
//   const rightSide = [six[1], six[3], six[5]].filter(Boolean);

//   return (
//     <Box sx={{ pt: { xs: 6, sm: 8, md: 10 }, pb: { xs: 4, sm: 6, md: 8 }, bgcolor: WHITE }}>
//       {/* Heading with underline effect */}
//       <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 5 }, px: 2 }}>
//         <Box
//           sx={{
//             display: "inline-block",
//             position: "relative",
//             "&:hover .ach-underline": { transform: "scaleX(1)" },
//           }}
//         >
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             component="h2"
//             sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
//           >
//             Our Key <Box component="span" sx={{ color: BLUE }}>Achievements</Box>
//           </Typography>
//           <Box
//             className="ach-underline"
//             sx={{
//               height: 3,
//               borderRadius: 2,
//               backgroundColor: DARK_BLUE,
//               transformOrigin: "left",
//               transform: "scaleX(0)",
//               transition: "transform .45s ease",
//               mt: 1,
//             }}
//           />
//         </Box>
//       </Box>

//       {/* Layout */}
//       <Box
//         sx={{
//           maxWidth: 1200,
//           mx: "auto",
//           px: { xs: 1.5, sm: 2, md: 3 },
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "1fr",
//             md: "1fr auto 1fr",
//           },
//           gridTemplateAreas: {
//             xs: `"left" "trophy" "right"`,
//             sm: `"left" "trophy" "right"`,
//             md: `"left trophy right"`,
//           },
//           alignItems: "center",
//           gap: { xs: 3, sm: 4, md: 6 },
//         }}
//       >
//         <Box sx={{ gridArea: "left" }}>
//           {leftSide.map((item, i) => (
//             <Callout key={`L-${i}`} index={i * 2 + 1} item={item} align="left" />
//           ))}
//         </Box>

//         <Box sx={{ gridArea: "trophy", display: "grid", placeItems: "center" }}>
//           <Trophy />
//         </Box>

//         <Box sx={{ gridArea: "right" }}>
//           {rightSide.map((item, i) => (
//             <Callout key={`R-${i}`} index={i * 2 + 2} item={item} align="right" />
//           ))}
//         </Box>
//       </Box>

//       {/* Bottom line */}
//       <Typography
//         variant="h6"
//         sx={{
//           mt: { xs: 4, sm: 5, md: 6 },
//           textAlign: "center",
//           color: "text.primary",
//           px: { xs: 2, sm: 4 },
//           fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
//         }}
//       >
//         Demorgia’s commitment to quality and timely delivery continues to set benchmarks in the Skill India ecosystem.
//       </Typography>
//     </Box>
//   );
// };

// export default Achievements;
import React, { useMemo, useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
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
const BLUE = "rgb(10, 72, 158)";
const DARK_BLUE = BLUE;
const GREEN = "#2E7D32";
const WHITE = "#FFFFFF";

/* ---------- Star Shape ---------- */
const Star = ({ size = 8, fill = GREEN }) => (
  <path
    d="M10 0 L12.9 6.2 L20 7.1 L14.8 11.6 L16.2 18.6 L10 15.1 L3.8 18.6 L5.2 11.6 0 7.1 7.1 6.2 Z"
    transform={`scale(${size / 20})`}
    fill={fill}
  />
);

/* ---------- Callout item ---------- */
const Callout = ({ index, item, align = "right" }) => {
  const Icon = item.icon;
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
          justifyContent: {
            xs: "center",
            md: align === "right" ? "flex-start" : "flex-end",
          },
          textAlign: {
            xs: "center",
            md: align === "right" ? "left" : "right",
          },
          gap: { xs: 1, sm: 1.5 },
          mb: { xs: 2, sm: 3, md: 3.5 },
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {align === "right" && (
          <Paper
            elevation={0}
            sx={{
              width: { xs: 32, sm: 40, md: 44 },
              height: { xs: 32, sm: 40, md: 44 },
              borderRadius: "50%",
              border: `2px solid ${BLUE}`,
              display: "grid",
              placeItems: "center",
              bgcolor: WHITE,
              color: BLUE,
              fontWeight: 800,
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              mr: { md: 2 },
              flexShrink: 0,
            }}
          >
            {String(index).padStart(2, "0")}
          </Paper>
        )}

        <Box sx={{ maxWidth: { xs: "100%", sm: 280 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                md: align === "right" ? "flex-start" : "flex-end",
              },
              gap: 1,
              mb: 0.5,
              flexWrap: "wrap",
            }}
          >
            {align === "left" && (
              <Icon sx={{ fontSize: { xs: 16, sm: 18 }, color: GREEN }} />
            )}
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: BLUE, fontSize: { xs: "0.95rem", sm: "1.25rem", md: "1.35rem" } }}
            >
              <CountUp end={item.count} duration={1.4} separator="," />
              {item.suffix}
            </Typography>
            {align === "right" && (
              <Icon sx={{ fontSize: { xs: 16, sm: 18 }, color: GREEN }} />
            )}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "0.7rem", sm: "0.875rem", md: "0.95rem" },
              wordBreak: "break-word",
            }}
          >
            {item.label}
          </Typography>
        </Box>

        {align === "left" && (
          <Paper
            elevation={0}
            sx={{
              width: { xs: 32, sm: 40, md: 44 },
              height: { xs: 32, sm: 40, md: 44 },
              borderRadius: "50%",
              border: `2px solid ${BLUE}`,
              display: "grid",
              placeItems: "center",
              bgcolor: WHITE,
              color: BLUE,
              fontWeight: 800,
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              ml: { md: 2 },
              flexShrink: 0,
            }}
          >
            {String(index).padStart(2, "0")}
          </Paper>
        )}
      </Box>
    </motion.div>
  );
};

/* ---------- Trophy with Star Burst ---------- */
const Trophy = () => {
  const [play, setPlay] = useState(false);

  const sparkles = useMemo(() => {
    const out = [];
    const center = { x: 120, y: 88 };
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2 + (i % 2 === 0 ? 0.15 : -0.15);
      const dist = 55 + (i % 3) * 12;
      out.push({
        cx: center.x,
        cy: center.y,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist * 0.75,
        size: 8 + (i % 3) * 3,
        fill: i % 2 ? GREEN : DARK_BLUE,
        delay: 0.22 + i * 0.02,
      });
    }
    return out;
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => setPlay(true)}
      initial={{ opacity: 1 }}
      style={{ display: "grid", placeItems: "center" }}
      animate={
        play
          ? {
              rotate: [0, -6, 6, -3, 2, 0],
              scale: [1, 1.04, 1],
              transition: { duration: 1.2, ease: "easeInOut" },
            }
          : {}
      }
    >
      <motion.svg
        viewBox="0 0 240 200"
        style={{ width: "100%", maxWidth: 240, height: "auto" }}
      >
        {/* Sparkles */}
        {sparkles.map((s, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: s.cx, y: s.cy }}
            animate={
              play
                ? {
                    opacity: [0, 1, 0],
                    x: s.cx + s.tx,
                    y: s.cy + s.ty,
                    transition: {
                      delay: s.delay,
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }
                : {}
            }
          >
            <Star size={s.size} fill={s.fill} />
          </motion.g>
        ))}

        {/* Cup */}
        <path d="M60 40 h120 v22 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z" fill={WHITE} stroke={DARK_BLUE} strokeWidth="4" />
        <path d="M60 50 a35 35 0 0 0 -20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
        <path d="M180 50 a35 35 0 0 1 20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
        <rect x="105" y="100" width="30" height="26" rx="4" fill={DARK_BLUE} />
        <rect x="85"  y="126" width="70" height="12" rx="6" fill={GREEN} />
        <rect x="70"  y="140" width="100" height="18" rx="8" fill={DARK_BLUE} />
        <circle cx="120" cy="88" r="16" fill={WHITE} stroke={GREEN} strokeWidth="4" />
        <path d="M120 76 l4 8 9 1 -7 6 2 9 -8-4 -8 4 2-9 -7-6 9-1z" fill={GREEN} />
      </motion.svg>
    </motion.div>
  );
};

/* ---------- Achievements ---------- */
const Achievements = () => {
  const six = achievements.slice(0, 6);

  const leftSide = six.slice(0, 3);   // 01,02,03
  const rightSide = six.slice(3, 6);  // 04,05,06

  return (
    <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 8 }, bgcolor: WHITE }}>
      {/* Heading with underline */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 }, px: 2 }}>
        <Box
          sx={{
            display: "inline-block",
            position: "relative",
            "&:hover .ach-underline": { transform: "scaleX(1)" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            component="h2"
            sx={{ fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" } }}
          >
            Our Key <Box component="span" sx={{ color: BLUE }}>Achievements</Box>
          </Typography>
          <Box
            className="ach-underline"
            sx={{
              height: 3,
              borderRadius: 2,
              backgroundColor: DARK_BLUE,
              transformOrigin: "left",
              transform: "scaleX(0)",
              transition: "transform .45s ease",
              mt: 1,
            }}
          />
        </Box>
      </Box>

      {/* Layout */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr auto 1fr",
          },
          gridTemplateAreas: {
            xs: `"left" "trophy" "right"`,
            md: `"left trophy right"`,
          },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
        }}
      >
        {/* Left column */}
        <Box sx={{ gridArea: "left" }}>
          {leftSide.map((item, i) => (
            <Callout key={item.label} index={i + 1} item={item} align="left" />
          ))}
        </Box>

        {/* Trophy with burst */}
        <Box sx={{ gridArea: "trophy", display: "grid", placeItems: "center" }}>
          <Trophy />
        </Box>

        {/* Right column */}
        <Box sx={{ gridArea: "right" }}>
          {rightSide.map((item, i) => (
            <Callout key={item.label} index={i + 4} item={item} align="right" />
          ))}
        </Box>
      </Box>

      {/* Bottom text */}
      <Typography
        variant="h6"
        sx={{
          mt: { xs: 4, md: 6 },
          textAlign: "center",
          color: "text.primary",
          fontSize: { xs: "0.85rem", md: "1.1rem" },
        }}
      >
        Demorgia’s commitment to quality and timely delivery continues to set benchmarks in the Skill India ecosystem.
      </Typography>
    </Box>
  );
};

export default Achievements;