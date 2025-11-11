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

//  Social media links
const socialLinks = [
  { Icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
  { Icon: FaFacebook, href: "https://www.facebook.com/", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
  { Icon: FaGoogle, href: "https://www.google.com/", label: "Google" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
];

const BG = "#0f2a45"; 
const GREEN = "#00A859";
const MUTED_WHITE = "rgba(255,255,255,0.85)";
const MUTED_WHITE_FAINT = "rgba(255,255,255,0.72)";

const Footer = () => (
  <Box
    sx={{
      background: `linear-gradient(180deg, ${BG} 0%, ${BG} 100%)`,
      color: MUTED_WHITE,
      py: 6,
      borderTop: `4px solid rgba(0,0,0,0.12)`,
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
              sx={{ height: 100 }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: GREEN,
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.8 },
                  "100%": { opacity: 1 },
                },
              }}
            >
              Demorgia Consulting Services Pvt Ltd
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: MUTED_WHITE_FAINT }}>
            Empowering Individuals and Industries through Accurate Assessments,
            Strategic Consultancy, and Innovative Solutions.
            <strong style={{ color: MUTED_WHITE }}> Unlocking Potential, Driving Growth.</strong>
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#fff" }}>
            USEFUL LINKS
          </Typography>
          <Divider sx={{ width: 40, bgcolor: GREEN, mb: 1 }} />
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
                color: MUTED_WHITE_FAINT,
              }}
            >
              › {label}
            </a>
          ))}
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#fff" }}>
            CONTACT US
          </Typography>
          <Divider sx={{ width: 40, bgcolor: GREEN, mb: 1 }} />
          <Typography variant="body2" sx={{ color: MUTED_WHITE_FAINT }}>
            Unit 14, Tower A, 9th Floor
            <br />
            Logix Cyber Park
            <br />
            Noida 62, UP 201309, India
            <br />
            <br />
            <strong style={{ color: MUTED_WHITE }}>Phone:</strong> <a href="tel:+911203229282" style={{ color: GREEN, textDecoration: "none" }}>+91-120-3229282</a>
            <br />
            <strong style={{ color: MUTED_WHITE }}>Phone:</strong> <a href="tel:+911203116273" style={{ color: GREEN, textDecoration: "none" }}>+91-120-3116273</a>
            <br />
            <strong style={{ color: MUTED_WHITE }}>Email:</strong> <a href="mailto:hrd@demorgia.com" style={{ color: GREEN, textDecoration: "none" }}>hrd@demorgia.com</a>
          </Typography>
        </Grid>

        {/* Group Company and Newsletter */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#fff" }}>
            GROUP COMPANY
          </Typography>
          <Divider sx={{ width: 40, bgcolor: GREEN, mb: 1 }} />
          <Typography variant="body2" mb={2} sx={{ color: MUTED_WHITE_FAINT }}>
            <strong style={{ color: MUTED_WHITE }}>"Vikram Aviation Pvt Ltd"</strong> <br />
            Trusted Partner for Precision Calibration, Expert Repairs, Composite
            Maintenance, and Consumable Solutions.
          </Typography>

          {/* Newsletter */}
          <Box display="flex">
            <TextField
              size="small"
              placeholder="NEWSLETTER"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderRadius: "4px 0 0 4px",
                  color: MUTED_WHITE,
                  fontWeight: 500,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.06)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: GREEN,
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-input": { color: MUTED_WHITE },
              }}
            />
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                borderRadius: "0 4px 4px 0",
                px: 3,
                background: `linear-gradient(to right, ${GREEN}, #00c973)`,
                "&:hover": {
                  background: `linear-gradient(to right, #00a64a, ${GREEN})`,
                },
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>

          {/*  Social Media Icons with Working Links */}
          <Box mt={2}>
            {socialLinks.map(({ Icon, href, label }, i) => (
              <IconButton
                key={i}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                sx={{
                  color: MUTED_WHITE,
                  "&:hover": {
                    color:
                      label === "Facebook"
                        ? "#1877F2"
                        : label === "Twitter"
                        ? "#1DA1F2"
                        : label === "Instagram"
                        ? "#E1306C"
                        : label === "LinkedIn"
                        ? "#0A66C2"
                        : GREEN,
                  },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box mt={6} textAlign="center">
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.06)", mb: 2 }} />
        <Typography variant="body2" sx={{ color: MUTED_WHITE }} mt={2}>
          © 2025 <strong style={{ color: GREEN }}>Demorgia Consulting Services Pvt Ltd</strong>. All
          rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;