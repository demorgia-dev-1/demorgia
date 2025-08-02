import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: 10, background: "#f9f9f9" }}>
      <Container
        maxWidth="md"
        sx={{
          background: "white",
          boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.08)",
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          color="primary"
        >
          Privacy Policy
        </Typography>
{/* 
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
          gutterBottom
        >
          Effective Date: [Insert Date]
        </Typography> */}

        <Typography variant="body1" paragraph>
          At <strong>Demorgia Consulting Services Pvt Ltd</strong>, we are
          committed to protecting your privacy. This policy explains how we
          collect, use, share, and secure your personal data.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
          gutterBottom
        >
          Information We Collect
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>Name, contact, education, and employment details</li>
          <li>Technical data: IP address, browser, device info</li>
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
          gutterBottom
        >
          How We Use It
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>Conduct assessments and share results</li>
          <li>Improve and personalize your experience</li>
          <li>Send updates, alerts, or promotional content</li>
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
          gutterBottom
        >
          Data Protection
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>We follow industry-standard security practices</li>
          <li>Access is limited to authorized personnel only</li>
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
          gutterBottom
        >
          Sharing Information
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>With affiliates or regulators, when necessary</li>
          <li>When required by law or legal authorities</li>
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
          gutterBottom
        >
          Your Rights
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Access, correct, or request deletion of your data</li>
          <li>Opt-out from marketing communications anytime</li>
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
