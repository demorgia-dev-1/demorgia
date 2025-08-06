import React from "react";
import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      sx={{
        py: 10,
        minHeight: "100vh",
        background: "#f9f9f9",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "white",
          p: { xs: 3, sm: 5 },
          boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="primary"
          gutterBottom
        >
          Terms & Conditions
        </Typography>

        {/* <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
          gutterBottom
        >
          Effective Date: [Insert Date]
        </Typography> */}

        <Divider sx={{ my: 4 }} />

        <Typography variant="body1" gutterBottom>
          By accessing or using the services of{" "}
          <strong>Demorgia Consulting Services Pvt Ltd</strong> ("Demorgia"),
          you agree to abide by the following terms.
        </Typography>

        {[
          {
            title: "1. Usage of Services",
            points: [
              "Use our platform ethically and lawfully.",
              "Avoid fraudulent or unauthorized activities.",
            ],
          },
          {
            title: "2. Intellectual Property",
            points: [
              "All content and technology are owned by Demorgia.",
              "Reproduction or distribution without permission is prohibited.",
            ],
          },
          {
            title: "3. User Responsibilities",
            points: [
              "Provide accurate and complete information.",
              "Keep login credentials confidential.",
            ],
          },
          {
            title: "4. Limitation of Liability",
            points: [
              "Demorgia is not liable for indirect damages.",
              "Liability is limited to the fees paid for the service.",
            ],
          },
          {
            title: "5. Modifications",
            points: [
              "Terms may be updated without prior notice.",
              "Significant changes will be communicated.",
            ],
          },
          {
            title: "6. Governing Law",
            points: [
              "Subject to the laws of India.",
              "Disputes shall be resolved in Noida, Uttar Pradesh.",
            ],
          },
        ].map((section, index) => (
          <Box key={index} sx={{ mt: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              {section.title}
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mt: 1 }}>
              {section.points.map((p, i) => (
                <li key={i}>
                  <Typography variant="body2">{p}</Typography>
                </li>
              ))}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center">
          For questions, please reach out to us at{" "}
          <Link
            href="mailto:hrd@demorgia.com"
            underline="hover"
            color="primary"
          >
            hrd@demorgia.com
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
