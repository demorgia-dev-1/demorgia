import React, { useRef } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "Established Demorgia Consulting, starting operations from Noida (Delhi NCR).",
  },
  {
    year: "2012",
    title: "Incorporation",
    description:
      "Official incorporation of Demorgia Consulting Services Pvt Ltd.",
  },
  {
    year: "2012–2018",
    title: "Pan-India Expansion",
    description:
      "Expanded operations across India and began partnerships with Sector Skill Councils (SSCs).",
  },
  {
    year: "2019",
    title: "Tech & Quality Leap",
    description: "Launched ProctorPro & received ISO 9001:2015 certification.",
  },
  {
    year: "2020–2022",
    title: "NCVET Accreditation",
    description:
      "Recognized as NCVET-accredited; executed 5+ lakh assessments and CSR projects.",
  },
  {
    year: "2023–Present",
    title: "Nationwide Reach",
    description:
      "Reached 10 lakh assessments, 25000+ RPLs, awarded by CSDCI, held 250+ job fairs.",
  },
  {
    year: "Future",
    title: "Innovation & Inclusion",
    description:
      "Focusing on drone certifications, AI for differently-abled, and deeper education partnerships.",
  },
];

const OurStory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -700 : 700,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ py: 10, bgcolor: "#0f2a45", color: "white" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
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
                  backgroundColor: "#00A859", 
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
              Our <Box component="span" sx={{ color: "#00A859" }}>Story</Box>
            </Typography>
          </motion.div>
        </Box>

        {/* Intro Paragraph */}
        <Typography
          variant="body1"
          textAlign="center"
          mb={6}
          sx={{ color: "rgba(255,255,255,0.85)" }}
        >
          Demorgia Consulting Services Pvt. Ltd. has consistently contributed to
          the national mission of skill development since its inception. Here’s
          a timeline of our key milestones:
        </Typography>

        <Box sx={{ position: "relative", width: "100%" }}>
          {/* Scroll Buttons */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              zIndex: 10,
              transform: "translateY(-50%)",
              display: { xs: "none", sm: "flex" },
              color: "#00A859",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
            }}
          >
            <MdArrowBackIos />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              zIndex: 10,
              transform: "translateY(-50%)",
              display: { xs: "none", sm: "flex" },
              color: "#00A859",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
            }}
          >
            <MdArrowForwardIos />
          </IconButton>

          {/* Scrolling Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              px: { xs: 0, sm: 5 },
              gap: { xs: 0, sm: 4 },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              scrollSnapType: "x mandatory",
            }}
          >
            {milestones.map((item, index) => (
              <Box
                key={index}
                sx={{
                  scrollSnapAlign: "center",
                  minWidth: { xs: "100%", sm: 300 },
                  maxWidth: { xs: "100%", sm: 300 },
                  flexShrink: 0,
                  borderLeft: "6px solid #00A859",
                  borderRadius: 3,
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                  transition: "0.3s",
                  ":hover": {
                    transform: { sm: "translateY(-5px)" },
                    boxShadow: "0px 6px 15px rgba(0,0,0,0.6)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#00A859" }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "white" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurStory;