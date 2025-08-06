import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const Grievance = () => {
  const theme = useTheme();

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
        background: `linear-gradient(to right, #e3f2fd, #f5f5f5)`,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "#fff",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
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
          Grievance Redressal
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="body1" sx={{ mb: 2 }}>
          At <strong>Demorgia</strong>, we ensure a smooth and fair assessment
          process. In case of any issues, our grievance system is here to help.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 3 }}
        >
          What You Can Report
        </Typography>

        <List dense>
          {[
            "Technical issues (e.g., crashes, auto-submission)",
            "Login/access problems",
            "Result discrepancies",
            "Incorrect or unclear questions",
            "Other platform-related concerns",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={`• ${text}`} />
            </ListItem>
          ))}
        </List>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 4 }}
        >
          How to Submit
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Email us at <strong>grievance@demorgia.com</strong> with:
        </Typography>

        <List dense>
          {[
            "Full Name & Registered Email",
            "Assessment Name & Date",
            "Issue Description",
            "Relevant documents/screenshots",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={`• ${text}`} />
            </ListItem>
          ))}
        </List>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 4 }}
        >
          Resolution Timeline
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Acknowledgement: Within 48 hours" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Resolution: 5–7 working days" />
          </ListItem>
        </List>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 4 }}
        >
          Contact Info
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Grievance Officer: [Full Name]" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone: +91-XXXXXXXXXX" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Working Hours: Mon–Fri, 9:30 AM – 6:30 PM" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address: Demorgia Consulting, Logix Cyber Park, Noida 62" />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="caption" color="textSecondary">
           Submit only genuine issues. Misleading reports may lead to action
          under platform policy.
        </Typography>
      </Container>
    </Box>
  );
};

export default Grievance;
