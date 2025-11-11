import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import PublicIcon from "@mui/icons-material/Public";
import { motion } from "framer-motion";
import Achievements from "./Achievements";

const data = [
  {
    title: "Accredited Excellence",
    icon: <VerifiedIcon sx={{ fontSize: 40, color: "#00A859" }} />,
    list1: "Adherence to stringent NCVET standards.",
    list2:
      "Award-winning agency trusted by leading skill councils and corporations.",
  },
  {
    title: "Advanced Technology",
    icon: <ComputerIcon sx={{ fontSize: 40, color: "#00A859" }} />,
    list1: "Robust digital solutions for accurate and efficient assessments.",
    list2: "Real-time analytics and insights for precise decision-making.",
  },
  {
    title: "Comprehensive Solutions",
    icon: <BuildCircleIcon sx={{ fontSize: 40, color: "#00A859" }} />,
    list1:
      "Complete suite of assessment solutions (online, offline, coding, and more).",
    list2: "End-to-end candidate tracking from assessment to placement.",
  },
  {
    title: "Pan-India Presence",
    icon: <PublicIcon sx={{ fontSize: 40, color: "#00A859" }} />,
    list1: "Extensive network ensuring seamless assessments nationwide.",
    list2:
      "Localized operations with multilingual support to effectively serve diverse regions and communities.",
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: "#0f2a45", color: "white", py: { xs: 6, md: 10 } }}>
        <Container>
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
                What Makes Us{" "}
                <Box component="span" sx={{ color: "#00A859" }}>
                  Stand Out
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Intro Text */}
          <Grid container justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{
                    mb: 2,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.1rem",
                  }}
                >
                  At Demorgia, our strength lies in our commitment to quality,
                  innovation, and nationwide service delivery. Our trusted
                  services are recognized by national skill councils and esteemed
                  corporate partners.
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Experience seamless assessments, real-time insights, and
                  scalable technology with a partner that understands your goals.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Cards Section */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  flex: "1 1 calc(50% - 24px)",
                  minWidth: "280px",
                  display: "flex",
                }}
              >
                <Card
                  elevation={6}
                  sx={{
                    flex: 1,
                    minHeight: 260,
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 25px rgba(0,168,89,0.3)",
                      borderColor: "#00A859",
                    },
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Box mb={2} display="flex" alignItems="center">
                      {item.icon}
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ color: "#00A859", ml: 2 }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    {[item.list1, item.list2].map((point, idx) => (
                      <Box
                        key={idx}
                        display="flex"
                        alignItems="flex-start"
                        mb={1.5}
                      >
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{
                            color: "#00A859",
                            mr: 1,
                            mt: "2px",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.5,
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Achievements />
    </>
  );
};

export default WhyChooseUs;