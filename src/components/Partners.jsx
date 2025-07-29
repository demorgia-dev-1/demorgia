import React from "react";
import {
  Box,
  Typography,
  Container,
  Tooltip,
  useTheme,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const images = [
  { src: "/portfolio/ncvet1.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform1.jpg", title: "Best Performing Agency" },
  { src: "/portfolio/jobmela1.jpg", title: "Job Mela" },
  { src: "/portfolio/ncvet2.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform2.jpg", title: "Best Performing Agency" },
  { src: "/portfolio/jobmela2.jpg", title: "Job Mela" },
  { src: "/portfolio/ncvet3.jpg", title: "NCVET Recognition" },
  { src: "/portfolio/perform3.jpg", title: "Best Performing Agency" },
];

const partners = [
  { name: "Beauty", img: "beauty.jpg" },
  { name: "CSDCI", img: "csdci.jpg" },
  { name: "Domestic", img: "domestic.jpg" },
  { name: "Electronics", img: "Electronics.jpg" },
  { name: "Food", img: "food.jpg" },
  { name: "Furniture", img: "furniture.jpg" },
  { name: "Gems", img: "gems.jpg" },
  { name: "Green", img: "green.jpg" },
  { name: "HCSC", img: "HCSC.jpg" },
  { name: "Health", img: "health.jpg" },
  { name: "IASC", img: "IASC.jpg" },
  { name: "Infra", img: "infra.jpg" },
  { name: "Iron", img: "iron.jpg" },
  { name: "Logistics", img: "logistics.jpg" },
  { name: "Media", img: "media.jpg" },
  { name: "Mining", img: "mining.jpg" },
  { name: "Retail", img: "retail.jpg" },
  { name: "Telecom", img: "telecom.jpg" },
  { name: "CIPET", img: "cipet.jpg" },
  { name: "CREDAI", img: "credai.jpg" },
  { name: "DGT", img: "dgt.webp" },
  { name: "MoMA", img: "moma.jpg" },
  { name: "MSME", img: "msme.jpg" },
  { name: "NSKFDC", img: "nskfdc.jpeg" },
  { name: "UPSDM", img: "upsdm.jpg" },
  { name: "Volkswagen", img: "vokswagen.jpg" },
  { name: "WWG", img: "wwg.jpeg" },
  { name: "RACL", img: "racl.jpeg" },
  { name: "Flipkart", img: "flipkart.jpeg" },
  { name: "Edge", img: "edge.png" },
  { name: "Bhabha", img: "bhabha.jpg" },
  { name: "BNCET", img: "bncet.jpeg" },
  { name: "GEC", img: "gec.png" },
  { name: "GIET", img: "giet.jpg" },
  { name: "Sambhu", img: "sambhu.png" },
  { name: "SVN", img: "svn.png" },
];

const Partners = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        id="clients"
        sx={{
          py: { xs: 6, md: 10 },
          background: "white",
          backgroundSize: "400% 400%",
          animation: `${gradientAnimation} 20s ease infinite`,
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", mb: 2 }}>
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
                Customers who know{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  and trust
                </Box>
              </Typography>
            </motion.div>
          </Box>
          <Typography
            align="center"
            sx={{
              mb: 6,
              color: "#1e293b",
            }}
          >
            More than{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #007CF0, #00DFD8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              12+ years in the market
            </Box>{" "}
            have allowed us to understand and serve different sectors.
          </Typography>

          <Marquee speed={40} gradient={false} pauseOnHover>
            {partners.map((partner, index) => (
              <Tooltip title={partner.name} key={index}>
                <Box
                  component="img"
                  src={`/clients/${partner.img}`}
                  alt={partner.name}
                  loading="lazy"
                  sx={{
                    height: { xs: 60, sm: 80 },
                    width: "auto",
                    mx: 4,
                    filter: "grayscale(100%)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Tooltip>
            ))}
          </Marquee>
        </Container>
        <Box sx={{ backgroundColor: "white", pt: 10 }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 4,
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Our{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Gallery
                  </span>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Explore some snapshots of our proudest moments, events, and
                  creations.
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="small"
                sx={{
                  mt: { xs: 2, sm: 0 },
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  whiteSpace: "nowrap",
                }}
                onClick={() => window.open("/gallery", "_blank")}
              >
                SEE ALL
              </Button>
            </Box>

            {/* Responsive Flex Gallery */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {images.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  style={{
                    flex: "1 1 calc(25% - 24px)",
                    minWidth: 260,
                    maxWidth: 320,
                  }}
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
                        height: 180,
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", py: 1.5 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Partners;
