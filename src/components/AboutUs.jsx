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
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";

const sections = [
  {
    title: "1. Introduction",
    content: `Demorgia Consulting Services Pvt. Ltd. stands as a premier, nationally recognized skill assessment and manpower consulting firm, trusted by government bodies, industry leaders, and organizations across India. Established in 2009 and officially incorporated in 2012, Demorgia has firmly positioned itself as an expert provider of comprehensive, technology-driven assessment solutions.`,
    icon: <AutoAwesomeIcon color="primary" />,
  },
  {
    title: "2. Awards and Recognition",
    content: `We have been honored by the Construction Skill Development Council of India (CSDCI) as the "Best Performing Assessment Agency," reflecting our unwavering commitment to excellence.`,
    icon: <EmojiEventsIcon color="secondary" />,
  },
  {
    title: "3. National Presence",
    content: `Our operations span nationwide, with our headquarters located in Noida (Delhi NCR) and satellite offices strategically positioned in Delhi, Uttar Pradesh, Karnataka, Jharkhand, Odisha, and Maharashtra, ensuring extensive regional coverage.`,
    icon: <LocationOnIcon color="error" />,
  },
  {
    title: "4. Expertise and Achievements",
    content: `Our expertise extends across multiple sectors, covering more than 25 Sector Skill Councils (SSCs) and various governmental bodies such as NSFDC, MOMA, NBCFDC, NSKFDC, MSME, and CIPET. Demorgia has successfully delivered over 1 million skill assessments, with approximately 500,000 assessments conducted under Sector Skill Councils, reinforcing our significant contribution to India's Skill Development Mission.`,
    icon: <WorkspacePremiumIcon color="primary" />,
  },
  {
    title: "5. Skilled Professional Network",
    content: `Demorgia is committed to setting the standard in vocational training assessments by ensuring high quality, precision, and transparency. Our certified assessor network comprises over 1,850 professionals, supported by 310+ skilled proctors and more than 150 subject matter experts (SMEs), ensuring accuracy and relevance in every assessment.`,
    icon: <GroupIcon color="success" />,
  },
  {
    title: "6. Advanced Technology Platform",
    content: `Our sophisticated online assessment platform integrates cutting-edge technology, including Artificial Intelligence (AI), multilingual support, face recognition, object detection, and live proctoring, to deliver seamless, secure, and reliable assessment experiences. We continually innovate, enhancing our platform with features like speech-to-text capabilities designed to assist physically challenged candidates.`,
    icon: <IntegrationInstructionsIcon color="info" />,
  },
  {
    title: "7. Additional Capabilities",
    content: `Beyond assessments, our recruitment expertise enriches our capabilities in creating industry-aligned question banks, facilitating Recognition of Prior Learning (RPL), apprenticeship programs, and corporate social responsibility (CSR) initiatives. Having collaborated with over 500 professional institutions nationwide, we actively contribute to the skill ecosystem, mobilizing industry participation and fostering educational engagement.`,
    icon: <LightbulbIcon color="warning" />,
  },
  {
    title: "8. Quality Assurance",
    content: `At Demorgia, we pride ourselves on our robust quality management system, certified by ISO 9001:2015. Our meticulous approach ensures all assessments meet rigorous quality benchmarks for accuracy, clarity, depth, consistency, and credibility.`,
    icon: <StarRateIcon color="secondary" />,
  },
];

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ py: 5 }}>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Divider sx={{ flexGrow: 1, mr: 1 }} />
        <InfoIcon color="primary" />
        <Divider sx={{ flexGrow: 1, ml: 1 }} />
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
            About{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Us
            </Box>
          </Typography>
        </motion.div>
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "text.secondary",
          lineHeight: 1.8,
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
          color="primary"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Hide Details" : "Read More"}
        </Button>
      </Box>

      {showMore && (
        <Box mt={2}>
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Accordion sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>{section.icon}</Grid>
                    <Grid item xs>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {section.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" whiteSpace="pre-line">
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default AboutUs;
