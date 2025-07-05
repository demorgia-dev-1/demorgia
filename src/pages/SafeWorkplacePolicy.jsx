import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Link,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const SafeWorkplacePolicy = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to right, #f3f4f6, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "#fff",
          p: { xs: 3, sm: 5 },
          boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
          borderRadius: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Safe Workplace Policy
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "text.secondary", fontStyle: "italic", mb: 3 }}
          >
            Respect. Dignity. Safety.
            <br />A culture where everyone feels secure and valued.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary"
            gutterBottom
          >
            Our Commitment
          </Typography>
          <Typography variant="body1" paragraph>
            At <strong>Demorgia</strong>, we ensure a safe, inclusive, and
            harassment-free workplace. In accordance with the{" "}
            <strong>PoSH Act, 2013</strong>, we maintain a zero-tolerance policy
            against sexual harassment of any form — physical, verbal, or
            digital.
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary"
            gutterBottom
          >
            What is Considered Harassment?
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 3, mb: 3 }}>
            {[
              "Unwelcome advances or requests",
              "Sexual comments or jokes",
              "Inappropriate gestures or contact",
              "Sharing explicit material",
              "Any conduct that creates a hostile environment",
            ].map((text, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {text}
              </li>
            ))}
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary"
            gutterBottom
          >
            Report & Redressal
          </Typography>
          <Typography variant="body1" paragraph>
            If you face or witness inappropriate behavior, report it. Your
            concern will be handled with care, confidentiality, and urgency.
          </Typography>

          <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
            📩 Email:{" "}
            <Link href="mailto:hrd@demorgia.com" underline="hover">
              hrd@demorgia.com
            </Link>
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary"
            gutterBottom
          >
            Know Your Rights
          </Typography>
          <Typography variant="body1">
            Download the official policy documents here:
            <ul style={{ paddingLeft: "20px", marginTop: 8 }}>
              <li>
                <Link
                  href="/pdf/posh-act-english.pdf"
                  download
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  📄 PoSH Act, 2013 – English
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf/posh-act-hindi.pdf"
                  download
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  📄 PoSH Act, 2013 – Hindi
                </Link>
              </li>
            </ul>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SafeWorkplacePolicy;
