import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  useTheme,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery/1.jpg", title: "Event 1" },
  { src: "/gallery/2.jpg", title: "Event 2" },
  { src: "/gallery/5.jpg", title: "Event 3" },
  { src: "/gallery/23.jpg", title: "Event 4" },
  { src: "/gallery/24.jpg", title: "Event 5" },
  { src: "/gallery/6.jpg", title: "Event 6" },
  { src: "/gallery/7.jpg", title: "Event 7" },
  { src: "/gallery/16.jpg", title: "Event 8" },
  { src: "/gallery/9.jpg", title: "Event 9" },
  { src: "/gallery/20.jpg", title: "Event 10" },
  { src: "/gallery/21.jpg", title: "Event 11" },
  { src: "/gallery/22.jpg", title: "Event 12" },
  { src: "/gallery/10.jpg", title: "Event 13" },
  { src: "/gallery/11.jpg", title: "Event 14" },
  { src: "/gallery/12.jpg", title: "Event 15" },
  { src: "/gallery/13.jpg", title: "Event 16" },
  { src: "/gallery/14.jpg", title: "Event 17" },
  { src: "/gallery/15.jpg", title: "Event 18" },
  { src: "/gallery/8.jpg", title: "Event 19" },
  { src: "/gallery/17.jpg", title: "Event 20" },
  { src: "/gallery/18.jpg", title: "Event 21" },
  { src: "/gallery/19.jpg", title: "Event 22" },
];

const OurGallery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: "white", py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Our <span style={{ color: theme.palette.primary.main }}>Gallery</span>
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Explore some snapshots of our proudest moments, events, and creations.
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {images.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      height: 200,
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center", py: 1.5 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        sx={{
                          fontSize: "1rem",
                          position: "relative",
                          display: "inline-block",
                          color: theme.palette.text.primary,
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: -4,
                            width: "100%",
                            height: "3px",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 2,
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurGallery;
