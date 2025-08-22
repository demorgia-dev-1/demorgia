// import React from "react";
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
// const BLUE = "rgb(10, 72, 158)";  // unified dark blue everywhere
// const DARK_BLUE = BLUE;           // alias for readability
// const GREEN = "#2E7D32";
// const WHITE = "#FFFFFF";

// /* ---- Callout ---- */
// const Callout = ({ index, item, align = "right" }) => {
//   const Icon = item.icon;
//   const justify = align === "right" ? "flex-start" : "flex-end";
//   const textAlign = align === "right" ? "left" : "right";

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
//           justifyContent: justify,
//           gap: 1.5,
//           mb: { xs: 2.5, md: 3.5 },
//         }}
//       >
//         {align === "right" ? (
//           <>
//             {/* Number bubble */}
//             <Paper
//               elevation={0}
//               sx={{
//                 width: 44,
//                 height: 44,
//                 minWidth: 44,
//                 borderRadius: "50%",
//                 border: `3px solid ${BLUE}`,
//                 display: "grid",
//                 placeItems: "center",
//                 bgcolor: WHITE,
//                 color: BLUE,
//                 fontWeight: 800,
//               }}
//             >
//               {String(index).padStart(2, "0")}
//             </Paper>

//             {/* Text block */}
//             <Box sx={{ maxWidth: 260, textAlign }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
//                 <Icon sx={{ fontSize: 18, color: GREEN }} />
//                 {/* NUMBER → dark blue */}
//                 <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
//                   <CountUp end={item.count} duration={1.4} separator="," />
//                   {item.suffix}
//                 </Typography>
//               </Box>
//               {/* LABEL → black */}
//               <Typography variant="body2" sx={{ color: "text.primary" }}>
//                 {item.label}
//               </Typography>
//             </Box>
//           </>
//         ) : (
//           <>
//             {/* Text block (right aligned) */}
//             <Box sx={{ maxWidth: 260, textAlign }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end", mb: 0.5 }}>
//                 {/* NUMBER → dark blue */}
//                 <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
//                   <CountUp end={item.count} duration={1.4} separator="," />
//                   {item.suffix}
//                 </Typography>
//                 <Icon sx={{ fontSize: 18, color: GREEN }} />
//               </Box>
//               {/* LABEL → black */}
//               <Typography variant="body2" sx={{ color: "text.primary" }}>
//                 {item.label}
//               </Typography>
//             </Box>

//             {/* Number bubble */}
//             <Paper
//               elevation={0}
//               sx={{
//                 width: 44,
//                 height: 44,
//                 minWidth: 44,
//                 borderRadius: "50%",
//                 border: `3px solid ${BLUE}`,
//                 display: "grid",
//                 placeItems: "center",
//                 bgcolor: WHITE,
//                 color: BLUE,
//                 fontWeight: 800,
//               }}
//             >
//               {String(index).padStart(2, "0")}
//             </Paper>
//           </>
//         )}
//       </Box>
//     </motion.div>
//   );
// };

// /* ---- Trophy SVG ---- */
// const Trophy = () => (
//   <Box component="svg" viewBox="0 0 240 200" sx={{ width: { xs: 220, md: 260 }, height: "auto" }}>
//     <path d="M60 40 h120 v22 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z" fill={WHITE} stroke={DARK_BLUE} strokeWidth="4" />
//     <path d="M60 50 a35 35 0 0 0 -20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
//     <path d="M180 50 a35 35 0 0 1 20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
//     <rect x="105" y="100" width="30" height="26" rx="4" fill={DARK_BLUE} />
//     <rect x="85"  y="126" width="70" height="12" rx="6" fill={GREEN} />
//     <rect x="70"  y="140" width="100" height="18" rx="8" fill={DARK_BLUE} />
//     <circle cx="120" cy="88" r="16" fill={WHITE} stroke={GREEN} strokeWidth="4" />
//     <path d="M120 76 l4 8 9 1 -7 6 2 9 -8-4 -8 4 2-9 -7-6 9-1z" fill={GREEN} />
//   </Box>
// );

// const Achievements = () => {
//   const theme = useTheme();

//   // Heading fade-in (kept). Underline reveal on hover (dark blue).
//   const headingVariants = {
//     hidden: { opacity: 0, y: 16 },
//     show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
//   };

//   const six = achievements.slice(0, 6);
//   const leftSide  = [six[0], six[2], six[4]].filter(Boolean);
//   const rightSide = [six[1], six[3], six[5]].filter(Boolean);
//   const extras = achievements.slice(6);

//   return (
//     <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 }, bgcolor: WHITE }}>
//       {/* Heading + hover underline (dark blue) */}
//       <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
//         <motion.div
//           variants={headingVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.6 }}
//           style={{ display: "inline-block" }}
//         >
//           <Box
//             sx={{
//               display: "inline-block",
//               position: "relative",
//               "&:hover .ach-underline": { transform: "scaleX(1)" },
//             }}
//           >
//             <Typography variant="h4" fontWeight="bold" component="h2">
//               Our Key <Box component="span" sx={{ color: BLUE }}>Achievements</Box>
//             </Typography>
//             <Box
//               className="ach-underline"
//               sx={{
//                 height: 4,
//                 borderRadius: 2,
//                 backgroundColor: DARK_BLUE,
//                 transformOrigin: "left",
//                 transform: "scaleX(0)",
//                 transition: "transform .45s ease",
//                 mt: 1,
//               }}
//             />
//           </Box>
//         </motion.div>
//       </Box>

//       {/* Main layout */}
//       <Box
//         sx={{
//           maxWidth: 1200,
//           mx: "auto",
//           px: { xs: 2, md: 3 },
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
//           alignItems: "center",
//           gap: { xs: 4, md: 6 },
//         }}
//       >
//         <Box>
//           {leftSide.map((item, i) => (
//             <Callout key={`L-${i}`} index={i * 2 + 1} item={item} align="left" />
//           ))}
//         </Box>

//         <Box
//           component={motion.div}
//           initial={{ scale: 0.95, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           sx={{ display: "grid", placeItems: "center" }}
//         >
//           <Trophy />
//         </Box>

//         <Box>
//           {rightSide.map((item, i) => (
//             <Callout key={`R-${i}`} index={i * 2 + 2} item={item} align="right" />
//           ))}
//         </Box>
//       </Box>

//       {/* Extras row (if any) */}
//       {extras.length > 0 && (
//         <Box sx={{ mt: { xs: 4, md: 5 }, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
//           {extras.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <Paper
//                 key={`X-${idx}`}
//                 elevation={0}
//                 sx={{
//                   px: 2.5,
//                   py: 1.25,
//                   borderRadius: 999,
//                   border: `2px solid ${DARK_BLUE}`,
//                   bgcolor: WHITE,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <Icon sx={{ fontSize: 18, color: GREEN }} />
//                 <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
//                   <CountUp end={item.count} duration={1.2} separator="," />
//                   {item.suffix}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "text.primary" }}>
//                   — {item.label}
//                 </Typography>
//               </Paper>
//             );
//           })}
//         </Box>
//       )}

//       {/* Bottom statement (black) */}
//       <Typography
//         variant="h6"
//         sx={{ mt: { xs: 5, md: 6 }, textAlign: "center", color: "text.primary", px: 2 }}
//       >
//         Demorgia’s commitment to quality and timely delivery continues to set benchmarks in the Skill India ecosystem.
//       </Typography>
//     </Box>
//   );
// };

// export default Achievements;
import React, { useMemo, useState } from "react";
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
const BLUE = "rgb(10, 72, 158)";
const DARK_BLUE = BLUE;
const GREEN = "#2E7D32";
const WHITE = "#FFFFFF";

/* ---------- Star for sparkles ---------- */
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

            <Box sx={{ maxWidth: 260, textAlign }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                <Icon sx={{ fontSize: 18, color: GREEN }} />
                <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
                  <CountUp end={item.count} duration={1.4} separator="," />
                  {item.suffix}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.label}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ maxWidth: 260, textAlign }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end", mb: 0.5 }}>
                <Typography variant="h5" fontWeight={700} sx={{ color: BLUE }}>
                  <CountUp end={item.count} duration={1.4} separator="," />
                  {item.suffix}
                </Typography>
                <Icon sx={{ fontSize: 18, color: GREEN }} />
              </Box>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.label}
              </Typography>
            </Box>

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

/* ---------- Trophy (always visible) with one-time burst ---------- */
const Trophy = () => {
  const [play, setPlay] = useState(false);

  // precompute sparkle endpoints so they’re stable
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
      // trigger once on first reveal
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => setPlay(true)}
      initial={{ opacity: 1 }} // always visible
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
      <motion.svg viewBox="0 0 240 200" style={{ width: 260, height: "auto" }}>
        {/* Cup body */}
        <path d="M60 40 h120 v22 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z" fill={WHITE} stroke={DARK_BLUE} strokeWidth="4" />
        {/* Handles */}
        <path d="M60 50 a35 35 0 0 0 -20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
        <path d="M180 50 a35 35 0 0 1 20 60" fill="none" stroke={DARK_BLUE} strokeWidth="4" />
        {/* Stem + base */}
        <rect x="105" y="100" width="30" height="26" rx="4" fill={DARK_BLUE} />
        <rect x="85"  y="126" width="70" height="12" rx="6" fill={GREEN} />
        <rect x="70"  y="140" width="100" height="18" rx="8" fill={DARK_BLUE} />
        {/* Medallion */}
        <circle cx="120" cy="88" r="16" fill={WHITE} stroke={GREEN} strokeWidth="4" />
        <path d="M120 76 l4 8 9 1 -7 6 2 9 -8-4 -8 4 2-9 -7-6 9-1z" fill={GREEN} />

        {/* Sparkles */}
        {sparkles.map((s, i) => (
          <motion.g
            key={i}
            initial={{ x: s.cx, y: s.cy, scale: 0.4, opacity: 0 }}
            animate={
              play
                ? {
                    x: s.cx + s.tx,
                    y: s.cy - 10 + s.ty,
                    scale: [0.4, 1.15, 0.9],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 270],
                    transition: { duration: 1.2, ease: "easeOut", delay: s.delay },
                  }
                : {}
            }
          >
            <Star size={s.size} fill={s.fill} />
          </motion.g>
        ))}
      </motion.svg>
    </motion.div>
  );
};

const Achievements = () => {
  const theme = useTheme();

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
      {/* Heading */}
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

        {/* Center trophy (always visible, animates once) */}
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <Trophy />
        </Box>

        <Box>
          {rightSide.map((item, i) => (
            <Callout key={`R-${i}`} index={i * 2 + 2} item={item} align="right" />
          ))}
        </Box>
      </Box>

      {/* Extras row */}
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

      {/* Bottom statement */}
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