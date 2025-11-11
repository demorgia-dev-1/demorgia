import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  BusinessCenter as BusinessCenterIcon,
  TrackChanges as TrackChangesIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const BG = "#0f2a45";
const GREEN = "#00A859";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.85)";

const cardData = [
  {
    title: "Placement Solutions",
    icon: <BusinessCenterIcon />,
    image: "/portfolio/jobmela2.jpg",
    points: [
      {
        text:
          "Specialized job fairs and recruitment drives to bridge the gap between industries and skilled candidates.",
        icon: <PeopleAltIcon fontSize="small" />,
      },
      {
        text:
          "Extensive experience in conducting mass recruitment events, connecting candidates directly to employers.",
        icon: <WorkOutlineIcon fontSize="small" />,
      },
      {
        text:
          "Strategic partnerships with leading industries ensuring timely and efficient manpower fulfillment.",
        icon: <EngineeringIcon fontSize="small" />,
      },
    ],
    color: GREEN,
  },
  {
    title: "End-to-End Candidate Placement Tracking",
    icon: <TrackChangesIcon />,
    image: "/assets/placement-tracking.jpg",
    points: [
      {
        text:
          "Comprehensive candidate journey management from training to employment.",
        icon: <SchoolIcon fontSize="small" />,
      },
      {
        text:
          "Real-time tracking and reporting to meet stakeholder requirements.",
        icon: <AssessmentIcon fontSize="small" />,
      },
      {
        text:
          "Analytics-driven insights for continuous improvement and stakeholder engagement.",
        icon: <TrackChangesIcon fontSize="small" />,
      },
    ],
    color: "#2da6ff",
  },
];

const PlacementSolutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: 10, bgcolor: BG, color: WHITE }}>
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                  color: WHITE,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -8,
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
                Placement &{" "}
                <Box component="span" sx={{ color: GREEN }}>
                  Tracking
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Subtext */}
          <Typography
            align="center"
            maxWidth="md"
            mx="auto"
            sx={{
              color: MUTED,
              mb: 6,
              fontSize: { xs: "0.95rem", md: "1rem" },
              fontWeight: 400,
            }}
          >
            We bridge the gap between skilled talent and industry through job
            fairs, real-time tracking, and strategic employer connections.
          </Typography>
        </motion.div>

        {/* Decorative vertical line */}
        <Box sx={{ position: "relative", mt: 6 }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "calc(50% - 1px)",
              width: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              display: { xs: "none", md: "block" },
              zIndex: 0,
            }}
          />

          {/* Timeline Items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {cardData.map((card, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 3,
                  width: { xs: "100%", md: "45%" },
                  p: 2.5,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 10px 30px ${card.color}33`,
                    background: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                {/* Animated Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: card.color,
                      color: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 6px 16px ${card.color}55`,
                      flexShrink: 0,
                      mt: 1,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    {card.icon}
                  </Box>
                </motion.div>

                {/* Content Section */}
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: WHITE }}
                  >
                    {card.title}
                  </Typography>

                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "100%",
                      maxWidth: 500,
                      height: 180,
                      borderRadius: 2,
                      objectFit: "cover",
                      mb: 2,
                      boxShadow: `0 10px 25px rgba(0,0,0,0.4)`,
                    }}
                  />

                  {/* Bullet Points */}
                  <motion.div
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.2 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {card.points.map((pt, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Box
                          display="flex"
                          alignItems="flex-start"
                          gap={1.2}
                          mb={1.3}
                        >
                          <Box sx={{ mt: "3px", color: card.color }}>
                            {pt.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: MUTED,
                              fontSize: { xs: 14, md: 15 },
                              lineHeight: 1.6,
                            }}
                          >
                            {pt.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PlacementSolutions;