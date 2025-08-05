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
        background: "#ffffff",
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
            What Our{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Clients Say
            </Box>
          </Typography>
        </motion.div>
      </Box>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        style={{ paddingBottom: 40 }}
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
                  background: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  border: "2px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#1976d2",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
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
                    opacity: 0.15,
                    overflow: "hidden",
                  }}
                >
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <path
                      d="M0.00,49.98 C150.00,150.00 349.91,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                      style={{ stroke: "none", fill: "#0d47a1" }}
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
                    color: "#1976d2",
                    opacity: 0.05,
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
                      border: "3px solid #1976d2",
                      transition: "0.3s ease-in-out",
                    }}
                  />
                </motion.div>

                {/* Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "#333",
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
                  sx={{ color: "#1976d2", zIndex: 2, position: "relative" }}
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

// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";

// const Testimonials = () => {
//   return (
//     <Box
//       sx={{
//         mt: 14,
//         maxWidth: "1536px",
//         mx: "auto",
//         p: { xs: 3, lg: 10 },
//         backgroundImage: 'url(/Vector 7293.png)',
//         // backgroundColor: "#1976d2",

//         backgroundPosition: "center bottom",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* Top Section */}
//       <Grid
//         container
//         spacing={{ xs: 5, md: 2 }}
//         alignItems="center"
//         wrap="wrap"
//         sx={{ mb: { xs: 8, lg: 0 } }}
//       >
//         {/* Left Text */}
//         <Grid item xs={12} md={7}>
//           <Typography
//             variant="h5"
//             sx={{
//               fontSize: { xs: "1.25rem", md: "2rem" },
//               fontWeight: 600,
//               mb: 2,
//               color: "white",
//             }}
//           >
//             Secure, easy-to-conduct online exams with seamless evaluation and
//             governance solution
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" }, color: "white" }}
//           >
//             As a leading educational platform provider, we help academic
//             institutions create custom applications tailored to their unique
//             needs, ensuring seamless integration and functionality that meets
//             their vision.
//           </Typography>
//         </Grid>

//         {/* Right Image */}
//         <Grid item xs={12} md={5}>
//           <Box
//             component="img"
//             src="/assets/elearning-solution.png"
//             alt="elearning-solution"
//             loading="lazy"
//             sx={{
//               width: "100%",
//               maxWidth: 400,
//               mx: "auto",
//               display: "block",
//               color: "transparent",
//             }}
//           />
//         </Grid>
//       </Grid>

//       {/* Bottom Box */}
//       <Paper
//         elevation={2}
//         sx={{
//           mt: 5,
//           display: "flex",
//           alignItems: "center",
//           maxWidth: "1024px",
//           mx: "auto",
//           p: { xs: 2, md: 4 },
//         }}
//       >
//         <Box
//           component="img"
//           src="/icons/Border.png"
//           alt="Border Icon"
//           loading="lazy"
//           sx={{
//             width: 40,
//             height: 40,
//             mx: 2,
//             color: "transparent",
//           }}
//         />
//         <Typography
//           variant="body2"
//           sx={{
//             fontSize: { xs: "0.75rem", md: "0.875rem" },
//             px: { xs: 1, md: 3 },
//           }}
//         >
//           Experience the online skill development platform, committed to
//           delivering accessible, high-quality education and empowering learners
//           to enhance their skills for career growth.
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Testimonials;
