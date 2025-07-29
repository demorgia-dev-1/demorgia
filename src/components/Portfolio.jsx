import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "../theme";
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const items = [
  { src: "/portfolio/ncvet1.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform1.jpg", title: "Best Performing Agency" },
  { src: "/portfolio/jobmela1.jpg", title: "Job Mela" },
  { src: "/portfolio/ncvet2.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform2.jpg", title: "Best Performing Agency" },
  { src: "/portfolio/jobmela2.jpg", title: "Job Mela" },
  { src: "/portfolio/ncvet3.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform3.jpg", title: "Best Performing Agency" },
  { src: "/portfolio/jobmela3.jpg", title: "Job Mela" },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [openImg, setOpenImg] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayItems = () => {
    const total = items.length;
    return [
      items[(currentIndex - 2 + total) % total],
      items[(currentIndex - 1 + total) % total],
      items[currentIndex],
      items[(currentIndex + 1) % total],
      items[(currentIndex + 2) % total],
    ];
  };

  const visibleItems = getDisplayItems();

  return (
    <Box
      sx={{
        py: 10,
        background: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our <span style={{ color: theme.palette.primary.main }}>Portfolio</span>
      </Typography>

      {isMobile ? (
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          swipeable
          emulateTouch
          stopOnHover={false}
          style={{ marginTop: "2rem" }}
        >
          {items.map((item, idx) => (
            <div
              key={item.src}
              onClick={() => setOpenImg(item)}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "3px solid #007aff",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "60vw",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
            gap: 2,
            transformStyle: "preserve-3d",
            perspective: 1000,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          {visibleItems.map((item, idx) => {
            const isCenter = idx === 2;
            const scale = isCenter ? 1.1 : 0.9;
            const rotateY = isCenter ? "0deg" : idx < 2 ? "-30deg" : "30deg";
            const zIndex = isCenter ? 10 : 5;

            return (
              <motion.div
                key={item.src}
                onClick={() => setOpenImg(item)}
                animate={{ scale, rotateY }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "200px",
                  height: "250px",
                  transform: `rotateY(${rotateY})`,
                  zIndex,
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isCenter ? "3px solid #007aff" : "1px solid #ccc",
                  boxShadow: isCenter
                    ? "0 12px 24px rgba(0, 0, 0, 0.2)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
                  background: "#fff",
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </Box>
      )}

      {/* Info Below */}
      <Box mt={4}>
        <Typography variant="h5" fontWeight="bold">
          {items[currentIndex].title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items[currentIndex].category}
        </Typography>
      </Box>

      {/* Lightbox */}
      <Dialog open={!!openImg} onClose={() => setOpenImg(null)} maxWidth="md">
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setOpenImg(null)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
          >
            <MdClose />
          </IconButton>
          <motion.img
            src={openImg?.src}
            alt={openImg?.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Portfolio;
