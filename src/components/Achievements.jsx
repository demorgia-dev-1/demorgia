import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CountUp from "react-countup";
import {
  EmojiEvents,
  WorkspacePremium,
  Verified,
  StarRate,
  MilitaryTech,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    icon: EmojiEvents,
    count: 1000000,
    suffix: "+",
    label: "Skill Assessments Delivered",
    color: "#FFC107",
  },
  {
    icon: WorkspacePremium,
    count: 500000,
    suffix: "+",
    label: "Assessments with Sector Skill Councils",
    color: "#9c27b0",
  },
  // {
  //   icon: Verified,
  //   count: 25,
  //   suffix: "+",
  //   label: "Partner SSCs (NCVET Recognized)",
  //   color: "#4caf50",
  // },
  // {
  //   icon: StarRate,
  //   count: 1850,
  //   suffix: "+",
  //   label: "Certified Assessors",
  //   color: "#ff9800",
  // },
  {
    icon: MilitaryTech,
    count: 25000,
    suffix: "+",
    label: "RPL Candidates Delivered",
    color: "#f44336",
  },
  {
    icon: WorkspacePremium,
    count: 5000,
    suffix: "+",
    label: "TOA/TOTs Executed",
    color: "#3f51b5",
  },
  {
    icon: EmojiEvents,
    count: 50000,
    suffix: "+",
    label: "PMKVY Same-Day Uploads",
    color: "#FFC107",
  },
  {
    icon: Verified,
    count: 9001,
    suffix: ":2015",
    label: "ISO Certified Quality System",
    color: "#4caf50",
  },
  {
    icon: StarRate,
    count: 1,
    suffix: "x",
    label: "Best Performing Agency – CSDCI",
    color: "#ff9800",
  },
];

const Achievements = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true });
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        position: "relative",
        // backgroundColor: "#f1f5f9",
        overflow: "hidden",
      }}
    >
      {/* SVG Diagonal Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          // background: `linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)`,
          clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          mx: "auto",
          textAlign: "center",
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
            Our Key{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Achievements
            </Box>
          </Typography>
        </motion.div>
      </Box>

        <Grid container spacing={4} justifyContent="center" ref={ref}>
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ position: "relative" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: 230,              
                      height: 230,             
                      borderRadius: 5,
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.75)",
                      border: "1px solid #e0e0e0",
                      px: 3,
                      py: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center", 
                      textAlign: "center",
                      position: "relative",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px) scale(1.02)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >

                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: item.color,
                        boxShadow: `0 0 12px ${item.color}`,
                        color: "#fff",
                      }}
                    >
                      <Icon />
                    </Box>

                    <Box mt={8}>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        color="text.primary"
                      >
                        <CountUp
                          key={`${index}-${hovered === index}`}
                          end={item.count}
                          duration={1.5}
                          separator=","
                        />
                        {item.suffix}
                      </Typography>
                      <Typography
                        variant="body2"
                        mt={1}
                        color="text.secondary"
                        sx={{ maxWidth: 200 }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
        <Typography variant="h6" mt={8} color="text.secondary">
          Demorgia’s commitment to quality and timely delivery continues to set
          benchmarks in the Skill India ecosystem.
        </Typography>
      </Box>
    </Box>
  );
};

export default Achievements;
