import React from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  MdFormatQuote,
  MdStar,
  MdStarHalf,
  MdStarBorder,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const GREEN = "#00A859";
const BG = "#0f2a45";
const CARD_BG = "rgba(255,255,255,0.03)";
const WAVE_FILL = "#0b5e3f";
const MUTED_TEXT = "rgba(255,255,255,0.88)";

const testimonials = [
  {
    name: "Ajay Bhusan",
    role: "CEO, IASC Sector Skill Council",
    text:
      "Demorgia’s skilled team brings deep expertise and professionalism to every engagement.",
    img: "ajay-bhusan.jpg",
    rating: 5,
  },
  {
    name: "Col. Anand Kumar Singh (Retd.)",
    role: "CEO, CSDCI",
    text:
      "Your support during the Rozgar Mela was outstanding—professional, precise, and impactful.",
    img: "col.jpg",
    rating: 4.5,
  },
  {
    name: "Prof. Jawed A Shaikh",
    role: "Director Placement, MGI",
    text:
      "Demorgia bridges the gap between students and companies with excellent service delivery.",
    img: "jawed.jpg",
    rating: 4,
  },
  {
    name: "Shivendra Singh",
    role: "T&P Head, Bhabha Group",
    text:
      "A reliable partner that understands our goals and supports smooth collaboration throughout.",
    img: "shiv.jpg",
    rating: 5,
  },
  {
    name: "Divyasen Singh",
    role: "Sr Manager - CRC, SGI-SIET",
    text:
      "Demorgia’s transparent, structured hiring process shows a deep commitment to quality talent.",
    img: "divyasen.jpg",
    rating: 4.7,
  },
];

// Star Renderer
const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      {[...Array(full)].map((_, i) => (
        <MdStar key={`f-${i}`} style={{ color: "#FFD700", fontSize: 18 }} />
      ))}
      {half && <MdStarHalf style={{ color: "#FFD700", fontSize: 18 }} />}
      {[...Array(empty)].map((_, i) => (
        <MdStarBorder
          key={`e-${i}`}
          style={{ color: "#FFD700", fontSize: 18 }}
        />
      ))}
    </>
  );
};

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 10 },
        background: BG,
      }}
    >
      {/* Animated Heading */}
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
              color: MUTED_TEXT,
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -6,
                height: 4,
                width: "100%",
                backgroundColor: GREEN,
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
            What Our{" "}
            <Box component="span" sx={{ color: GREEN }}>
              Clients Say
            </Box>
          </Typography>
        </motion.div>
      </Box>

      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        style={{
          paddingBottom: 40,
          "--swiper-pagination-color": "#00A859", // ✅ green active bullet
          "--swiper-pagination-bullet-inactive-color": "rgba(0,168,89,0.4)", // ✅ green inactive
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  px: 4,
                  py: 5,
                  borderRadius: "20px",
                  background: CARD_BG,
                  boxShadow: `0 18px 40px ${GREEN}15, 0 8px 20px rgba(0,0,0,0.25)`,
                  textAlign: "center",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  border: "2px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: GREEN,
                    boxShadow: `0 24px 60px ${GREEN}22, 0 10px 30px rgba(0,0,0,0.28)`,
                  },
                }}
              >
                {/* 🌊 SVG Wave Background */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 1,
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <path
                      d="M0.00,49.98 C150.00,150.00 349.91,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                      style={{ stroke: "none", fill: WAVE_FILL, opacity: 0.14 }}
                    ></path>
                  </svg>
                </Box>

                {/* Background Quote Icon */}
                <MdFormatQuote
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 20,
                    fontSize: 90,
                    color: GREEN,
                    opacity: 0.08,
                    zIndex: 1,
                  }}
                />

                {/* Avatar */}
                <motion.div whileHover={{ scale: 1.1 }} style={{ zIndex: 2 }}>
                  <Avatar
                    src={`/assets/${t.img}`}
                    alt={t.name}
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 2,
                      mx: "auto",
                      border: `3px solid ${GREEN}`,
                      transition: "0.3s ease-in-out",
                    }}
                  />
                </motion.div>

                {/* Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: MUTED_TEXT,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    mb: 3,
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  {t.text}
                </Typography>

                {/* Stars */}
                <Box sx={{ mb: 1, zIndex: 2, position: "relative" }}>
                  {renderStars(t.rating)}
                </Box>

                {/* Name & Role */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: GREEN, zIndex: 2, position: "relative" }}
                >
                  {t.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    maxWidth: 280,
                    mx: "auto",
                    mt: 0.5,
                    zIndex: 2,
                    position: "relative",
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  {t.role}
                </Typography>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;