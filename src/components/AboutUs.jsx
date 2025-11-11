import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarRateIcon from "@mui/icons-material/StarRate";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    content: `Demorgia Consulting Services Pvt. Ltd. stands as a premier, nationally recognized skill assessment and manpower consulting firm, trusted by government bodies, industry leaders, and organizations across India. Established in 2009 and officially incorporated in 2012, Demorgia has firmly positioned itself as an expert provider of comprehensive, technology-driven assessment solutions.`,
    icon: <AutoAwesomeIcon />,
  },
  {
    title: "2. Awards and Recognition",
    content: `We have been honored by the Construction Skill Development Council of India (CSDCI) as the "Best Performing Assessment Agency," reflecting our unwavering commitment to excellence.`,
    icon: <EmojiEventsIcon />,
  },
  {
    title: "3. National Presence",
    content: `Our operations span nationwide, with our headquarters located in Noida (Delhi NCR) and satellite offices strategically positioned in Delhi, Uttar Pradesh, Karnataka, Jharkhand, Odisha, and Maharashtra, ensuring extensive regional coverage.`,
    icon: <LocationOnIcon />,
  },
  {
    title: "4. Expertise and Achievements",
    content: `Our expertise extends across multiple sectors, covering more than 25 Sector Skill Councils (SSCs) and various governmental bodies such as NSFDC, MOMA, NBCFDC, NSKFDC, MSME, and CIPET. Demorgia has successfully delivered over 1 million skill assessments, with approximately 500,000 assessments conducted under Sector Skill Councils, reinforcing our significant contribution to India's Skill Development Mission.`,
    icon: <WorkspacePremiumIcon />,
  },
  {
    title: "5. Skilled Professional Network",
    content: `Demorgia is committed to setting the standard in vocational training assessments by ensuring high quality, precision, and transparency. Our certified assessor network comprises over 1,850 professionals, supported by 310+ skilled proctors and more than 150 subject matter experts (SMEs), ensuring accuracy and relevance in every assessment.`,
    icon: <GroupIcon />,
  },
  {
    title: "6. Advanced Technology Platform",
    content: `Our sophisticated online assessment platform integrates cutting-edge technology, including Artificial Intelligence (AI), multilingual support, face recognition, object detection, and live proctoring, to deliver seamless, secure, and reliable assessment experiences. We continually innovate, enhancing our platform with features like speech-to-text capabilities designed to assist physically challenged candidates.`,
    icon: <IntegrationInstructionsIcon />,
  },
  {
    title: "7. Additional Capabilities",
    content: `Beyond assessments, our recruitment expertise enriches our capabilities in creating industry-aligned question banks, facilitating Recognition of Prior Learning (RPL), apprenticeship programs, and corporate social responsibility (CSR) initiatives. Having collaborated with over 500 professional institutions nationwide, we actively contribute to the skill ecosystem, mobilizing industry participation and fostering educational engagement.`,
    icon: <LightbulbIcon />,
  },
  {
    title: "8. Quality Assurance",
    content: `At Demorgia, we pride ourselves on our robust quality management system, certified by ISO 9001:2015. Our meticulous approach ensures all assessments meet rigorous quality benchmarks for accuracy, clarity, depth, consistency, and credibility.`,
    icon: <StarRateIcon />,
  },
];

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#0f2a45", 
        color: "white",
        py: 6,
      }}
    >
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Divider
            sx={{
              flexGrow: 1,
              mr: 1,
              borderColor: "rgba(255,255,255,0.3)",
            }}
          />
          <InfoIcon sx={{ color: "#00A859" }} /> 
          <Divider
            sx={{
              flexGrow: 1,
              ml: 1,
              borderColor: "rgba(255,255,255,0.3)",
            }}
          />
        </Box>

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
              About <Box component="span" sx={{ color: "#00A859" }}>Us</Box>
            </Typography>
          </motion.div>
        </Box>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "white",
            lineHeight: 1.8,
            opacity: 0.9,
          }}
        >
          Demorgia Consulting Services Pvt. Ltd. is a premier, nationally
          recognized skill assessment and manpower consulting firm, trusted by
          government bodies, industry leaders, and organizations across India. We
          deliver high-quality, technology-driven assessment solutions and have
          served more than 1 million candidates through a robust network and
          AI-powered platform.
        </Typography>

        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            onClick={() => setShowMore((prev) => !prev)}
            sx={{
              backgroundColor: "#00A859",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00C46B",
              },
            }}
          >
            {showMore ? "Hide Details" : "Read More"}
          </Button>
        </Box>

        {showMore && (
          <Box mt={3}>
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Accordion
                  sx={{
                    mb: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.1)",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#00A859" }} />}
                  >
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        {React.cloneElement(section.icon, {
                          sx: { color: "#00A859" },
                        })}
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{ color: "#00FFB0" }}
                        >
                          {section.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      whiteSpace="pre-line"
                      sx={{ color: "white", opacity: 0.9 }}
                    >
                      {section.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AboutUs;