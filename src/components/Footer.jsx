import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Terms and Conditions", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Safe Workplace Policy", path: "/safe-workplace-policy" },
  { label: "Grievance", path: "/grievance" },
  { label: "Assessors", path: "/assessors" },
];

const Footer = () => (
  <Box
    sx={{
      background: "linear-gradient( #ffffff 20%, #0d47a1 80%)",
      color: "#111",
      py: 6,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Logo and Description */}
        <Grid item xs={12} md={3}>
          <Box
            mb={2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Demorgia"
              sx={{ height: 50 }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#0d47a1",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.7 },
                  "100%": { opacity: 1 },
                },
              }}
            >
              Demorgia Consulting Services Pvt Ltd
            </Typography>
          </Box>

          <Typography variant="body2">
            Empowering Individuals and Industries through Accurate Assessments,
            Strategic Consultancy, and Innovative Solutions.
            <strong> Unlocking Potential, Driving Growth.</strong>
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            USEFUL LINKS
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
          {footerLinks.map(({ label, path }, i) => (
            <a
              key={i}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginBottom: "8px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              › {label}
            </a>
          ))}
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            CONTACT US
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
          <Typography variant="body2">
            Unit 14, Tower A, 9th Floor
            <br />
            Logix Cyber Park
            <br />
            Noida 62, UP 201309, India
            <br />
            <br />
            <strong>Phone:</strong> +91-120-3229282
            <br />
            <strong>Phone:</strong> +91-120-3116273
            <br />
            <strong>Email:</strong> hrd@demorgia.com
          </Typography>
        </Grid>

        {/* Group Company and Newsletter */}
        {/* <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            GROUP COMPANY
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
          <Typography variant="body2" mb={2}>
            <strong>"Vikram Aviation Pvt Ltd"</strong> <br />
            Trusted Partner for Precision Calibration, Expert Repairs, Composite
            Maintenance, and Consumable Solutions.
          </Typography>
          <Box display="flex">
            <TextField
              size="small"
              placeholder="NEWSLETTER"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#fff",
                  borderRadius: "4px 0 0 4px",
                  color: "#000",
                  fontWeight: 500,
                },
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "white",
                borderRadius: "0 4px 4px 0",
                px: 3,
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
          <Box mt={2}>
            {[FaTwitter, FaFacebook, FaInstagram, FaGoogle, FaLinkedin].map(
              (Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "white",
                    "&:hover": { color: "#003300" },
                  }}
                >
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Grid> */}
        {/* Group Company and App Download */}
<Grid item xs={12} md={3}>
  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
    GROUP COMPANY
  </Typography>
  <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
  <Typography variant="body2" mb={2}>
    <strong>"Vikram Aviation Pvt Ltd"</strong> <br />
    Trusted Partner for Precision Calibration, Expert Repairs, Composite
    Maintenance, and Consumable Solutions.
  </Typography>

<Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
  GET THE APP
</Typography>
<Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />

<Box display="flex" flexWrap="wrap" gap={4} alignItems="flex-start">
    {/* Candidate App */}
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Candidate App
      </Typography>
      <a
        href="/candidate.apk"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Download Candidate APK"
          style={{ height: 40, marginTop: 8 }}
        />
      </a>
    </Box>

    {/* Assessor App */}
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Assessor App
      </Typography>
      <a
        href="/assessor.apk"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Download Assessor APK"
          style={{ height: 40, marginTop: 8 }}
        />
      </a>
    </Box>
  </Box>

  <Box display="flex">
    <TextField
      size="small"
      placeholder="NEWSLETTER"
      variant="outlined"
      fullWidth
      InputProps={{
        sx: {
          bgcolor: "#fff",
          borderRadius: "4px 0 0 4px",
          color: "#000",
          fontWeight: 500,
        },
      }}
    />
    <Button
  variant="contained"
  sx={{
    color: "white",
    borderRadius: "0 4px 4px 0",
    px: 3,
    background: "linear-gradient(to right, #1565c0, #0d47a1)",
    "&:hover": {
      background: "linear-gradient(to right, #0d47a1, #1565c0)",
    },
  }}
>
  SUBSCRIBE
</Button>

  </Box>

  <Box mt={2}>
    {[FaTwitter, FaFacebook, FaInstagram, FaGoogle, FaLinkedin].map(
      (Icon, i) => (
        <IconButton
          key={i}
          sx={{
            color: "white",
            "&:hover": { color: "#003300" },
          }}
        >
          <Icon />
        </IconButton>
      )
    )}
  </Box>
</Grid>

      </Grid>

      {/* Bottom Bar */}
      <Box mt={6} textAlign="center">
        <Divider sx={{ bgcolor: "#ffffff", mb: 2 }} />
        <Typography variant="body2" sx={{ color: "#fff" }} mt={2}>
          © 2025 <strong>Demorgia Consulting Services Pvt Ltd</strong>. All
          rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
