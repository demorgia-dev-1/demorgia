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
  Zoom,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import { AnimatePresence, motion } from "framer-motion";


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

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.85)";
const MUTED_2 = "rgba(255,255,255,0.75)";


const icons = {
  "Web-based Assessment Application": (
    <LanguageIcon sx={{ fontSize: 44, color: GREEN }} />
  ),
  "Online Mobile Application": (
    <PhoneIphoneIcon sx={{ fontSize: 44, color: GREEN }} />
  ),
  "Offline Mobile/Tablet Application": (
    <TabletMacIcon sx={{ fontSize: 44, color: GREEN }} />
  ),
};

const ArcFan = ({
  images = [],
  show = false,
  mode = "top",
  itemWidth = 160,
  radius = 170,
  angles = { start: -120, end: -60 },
  stagger = 0.08,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: stagger } },
    exit: { opacity: 0, transition: { duration: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: mode === "top" ? 10 : 0, scale: 0.96 },
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

  const isMirror = mode === "left";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{
            position: "relative",
            width: W,
            height: H,
            pointerEvents: "none",
            transform: isMirror ? "scaleX(-1)" : "none",
            transformOrigin: "center",
          }}
        >
          {images.map((src, i) => {
            const deg = angleAt(i);
            const a = (Math.PI / 180) * deg;
            const x = cx + radius * Math.cos(a) - itemWidth / 2;
            const y = cy + radius * Math.sin(a) - (itemWidth * 9) / 32;

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
                    "0 18px 30px rgba(0,0,0,0.55), 0 8px 16px rgba(0,0,0,0.4)",
                  background: "transparent",
                  transform: isMirror ? "scaleX(-1)" : "none",
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const InfoCard = ({ title, points, icon, onClick, interactive = true }) => {
  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        flex: 1,
        minHeight: 320,
        borderRadius: 3,
        p: 3,
        bgcolor: "rgba(255,255,255,0.08)",
        border: `1px solid rgba(255,255,255,0.10)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
        cursor: interactive ? "pointer" : "default",
        transition: "transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 48px rgba(0,168,89,0.14)",
          borderColor: GREEN,
          bgcolor: "rgba(255,255,255,0.10)",
        },
      }}
    >
      <Box>
        <Box display="flex" alignItems="center" gap={2} mb={1}>
          {icon}
          <Typography variant="h6" fontWeight={700} sx={{ color: WHITE }}>
            {title}
          </Typography>
        </Box>
        {points.map((pt, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{ color: MUTED_2, mt: 1, lineHeight: 1.5 }}
          >
            • {pt}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.03)",
          borderRadius: 1,
          px: 2,
          py: 1,
          mt: 2,
          display: "inline-block",
        }}
      >
        <Typography variant="subtitle2" fontWeight={700} color={MUTED}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};

const RegularArcDialog = ({ open, onClose, cardIndex, cardData, images }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const imgItemW = smDown ? 100 : mdUp ? 160 : 130;

  const sideAngles = { start: -70, end: 70 };
  const sideRadius = smDown ? 110 : mdUp ? 160 : 140;

  const topAngles = { start: -150, end: -30 };
  const topRadius = smDown ? 150 : mdUp ? 205 : 180;

  const mode = smDown ? "top" : cardIndex === 1 ? "top" : "right";
  const activeAngles = mode === "top" ? topAngles : sideAngles;
  const activeRadius = mode === "top" ? topRadius : sideRadius;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          width: { xs: "95vw", sm: "90vw", md: "80vw" },
          m: 0,
          borderRadius: 3,
          bgcolor: "rgba(12,24,36,0.96)",
          border: `1px solid rgba(255,255,255,0.06)`,
          color: WHITE,
        },
      }}
      TransitionComponent={Zoom}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          zIndex: 2,
          bgcolor: "transparent",
          color: WHITE,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        size="small"
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent
        sx={{
          p: { xs: 2, md: 3 },
          maxHeight: smDown ? "80vh" : "none",
          overflowY: smDown ? "auto" : "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection:
              mode === "top"
                ? "column"
                : { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            transform: mode === "top" && cardIndex === 1 ? "translateY(-20px)" : "none",
          }}
        >
          {mode === "top" ? (
            <>
              <ArcFan
                images={images}
                show
                mode="top"
                itemWidth={imgItemW}
                radius={activeRadius}
                angles={activeAngles}
              />
              <Box sx={{ width: { xs: "100%", sm: "90%", md: "50%" } }}>
                <InfoCard {...cardData} interactive={false} />
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ width: { xs: "100%", sm: "90%", md: "50%" } }}>
                <InfoCard {...cardData} interactive={false} />
              </Box>
              <Box
                sx={{
                  maxWidth: { xs: "100%", sm: "90%", md: "50%" },
                  overflow: "hidden",
                }}
              >
                <ArcFan
                  images={images}
                  show
                  mode="right"
                  itemWidth={imgItemW}
                  radius={activeRadius}
                  angles={activeAngles}
                />
              </Box>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const Solutions = () => {
  const theme = useTheme();

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
    });
    setImages(imageData[c.title] || []);
    setOpen(true);
  };

  return (
    <Box id="solutions" sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 }, bgcolor: BG, color: WHITE }}>
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
              bottom: -8,
              height: 4,
              width: "0%",
              backgroundColor: GREEN,
              borderRadius: 2,
              transition: "width 0.3s ease",
            },
            "&:hover::after": { width: "100%" },
            color: WHITE,
          }}
        >
          Assessment{" "}
          <Box component="span" sx={{ color: GREEN }}>
            Solutions
          </Box>
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 4,
          px: { xs: 2, md: 0 },
        }}
      >
        {cards.map((c, idx) => (
          <InfoCard
            key={c.title}
            title={c.title}
            points={c.points}
            icon={icons[c.title]}
            onClick={() => handleCardClick(idx, c)}
          />
        ))}
      </Box>

      {/* Dialog */}
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