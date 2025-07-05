import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Tabs,
  Tab,
  Modal,
  IconButton,
  Dialog,
  DialogContent,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaRegCheckCircle,
  FaUserGraduate,
  FaLaptopCode,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa";

const services = [
  {
    title: "Skills Assessment",
    icon: <FaRegCheckCircle size={28} color="#004d40" />,
    description:
      "We offer comprehensive skills assessments across sectors to certify individual competencies.",
    steps: [
      "Identify specific assessment requirements.",
      "Design customized evaluation methods",
      "Deploy advanced online platforms.",
      "Conduct assessments by certified experts.",
      "Analyze results with detailed analytics.",
      "Provide comprehensive reports and certifications.",
    ],
    tools: ["Online Platform", "Secure Evaluation", "AI Scoring"],
    images: [
      "/services/assessment1.jpg",
      "/services/assessment2.jpg",
      "/services/assessment3.jpg",
      "/services/assessment4.jpg",
      "/services/assessment5.jpg",
      "/services/assessment6.jpg",
    ],
  },
  {
    title: "Skill Gap Analysis",
    icon: <FaUserGraduate size={28} color="#004d40" />,
    description:
      "We help businesses identify employee skill gaps for targeted training and improvement.",
    steps: [
      "	Define organizational competency goals.",
      "	Assess current employee skill levels.",
      "	Identify critical skill gaps.",
      "	Deliver actionable insights and recommendations.",
      "	Design tailored training programs",
    ],
    tools: ["Reports", "Data Analytics", "Visual Dashboards"],
    images: [
      "/services/gapanalysis1.jpg",
      "/services/gapanalysis2.png",
      "/services/gapanalysis3.webp",
      "/services/gapanalysis4.png",
      "/services/gapanalysis5.jpg",
      "/services/gapanalysis6.jpg",
    ],
  },
  {
    title: "Software Solutions",
    icon: <FaLaptopCode size={28} color="#004d40" />,
    description:
      "We deliver cutting-edge software solutions to enhance business efficiency and growth.",
    steps: [
      "	Conduct detailed requirement analysis.",
      " Design tailored software solutions.",
      "	Develop robust, scalable software.",
      "	Perform rigorous quality testing.",
      "	Implement seamless integration.",
      "	Provide ongoing support and updates.",
    ],
    tools: ["React", "Node.js", "MongoDB", "Firebase"],
    images: [
      "/services/software1.jpg",
      "/services/software2.jpg",
      "/services/software3.jpg",
      "/services/software4.png",
      "/services/software5.jpg",
      "/services/software6.jpg",
    ],
  },
  {
    title: "Manpower Solutions",
    icon: <FaUserTie size={32} color="#00c853" />,
    description:
      "We assist businesses in recruiting and retaining skilled professionals.",
    steps: [
      "Understand organizational talent needs.",
      "Source candidates through various channels",
      "Conduct rigorous screening and interviews.",
      "Facilitate onboarding and integration.",
      "	Support retention and performance management.",
    ],
    tools: ["Recruitment Platforms", "ATS", "HR Analytics"],
    images: [
      "/services/manpower1.jpg",
      "/services/manpower2.jpg",
      "/services/manpower3.jpg",
      "/services/manpower4.jpg",
      "/services/manpower5.jpg",
      "/services/manpower6.jpg",
    ],
  },
  {
    title: "Training and Development",
    icon: <FaChalkboardTeacher size={32} color="#00c853" />,
    description:
      "We offer training programs and workshops designed to enhance individuals' skills and knowledge in various domains. Our industry-specific training modules focus on improving practical abilities, soft skills, and professional development, empowering individuals to excel in their careers.",
    steps: [
      "Identify learning goals",
      "Design training modules",
      "Deliver workshops and sessions",
      "Evaluate progress and feedback",
    ],
    tools: ["LMS", "E-learning Tools", "Interactive Content"],
    images: [
      "/services/training1.jpg",
      "/services/training2.jpg",
      "/services/training3.jpg",
      "/services/training4.jpg",
      "/services/training5.jpg",
      "/services/training6.jpg",
    ],
  },
];

const Services = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <>
      <Box
        id="services"
        sx={{
          // py: 10,
          // background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)"
          background: "white",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              fontSize={{ xs: 28, sm: 36 }}
              sx={{
                background: "black",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              Services
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography
              align="center"
              fontSize={{ xs: 14, sm: 16 }}
              sx={{
                maxWidth: 700,
                mx: "auto",
                mb: 6,
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              Empowering Growth with Tailored Solutions and Unparalleled Client
              Support
            </Typography>
          </motion.div>

          <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  sx={{
                    px: { xs: 2, sm: 4 },
                    py: { xs: 3, md: 6 },
                    maxWidth: "100vw",
                    boxSizing: "border-box",
                    overflowX: "hidden",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                    component={motion.div}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      {service.icon}
                    </motion.div>
                    <Typography variant="h5" fontWeight="bold">
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    color="text.secondary"
                    mb={2}
                  >
                    {service.description}
                  </Typography>

                  {service.images && (
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "nowrap",
                        overflowX: "auto",
                        mb: 3,
                        pb: 1,
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                      }}
                    >
                      {service.images.map((img, idx) => (
                        <Box
                          key={idx}
                          onClick={() => setLightboxImg(img)}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minWidth: 140,
                            transition: "transform 0.4s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={img}
                            alt={`Service Image ${idx + 1}`}
                            sx={{
                              width: 140,
                              height: { xs: 70, sm: 90 },
                              objectFit: "cover",
                              borderRadius: 2,
                              boxShadow: 1,
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  )}

                  {service.steps && (
                    <>
                      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                        How We Work
                      </Typography>
                      <Grid container spacing={2}>
                        {service.steps.map((step, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Box
                              sx={{
                                p: 2,
                                background: "#ffffffaa",
                                borderRadius: 2,
                                borderLeft: "4px solid #00c853",
                              }}
                            >
                              <Typography variant="body2">
                                <strong>{idx + 1}.</strong> {step}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}

                  {service.tools && (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mt={4}
                        mb={1}
                      >
                        Tools / Technologies
                      </Typography>
                      <Box display="flex" gap={2} flexWrap="wrap">
                        {service.tools.map((tool, idx) => (
                          <Chip
                            key={idx}
                            label={tool}
                            variant="outlined"
                            color="success"
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
              ))}
            </Slider>
          </Box>

          {/* Lightbox */}
          <Dialog
            open={!!lightboxImg}
            onClose={() => setLightboxImg(null)}
            maxWidth="md"
          >
            <DialogContent sx={{ p: 0 }}>
              <Box
                component="img"
                src={lightboxImg}
                alt="lightbox"
                sx={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
              />
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </>
  );
};

export default Services;
