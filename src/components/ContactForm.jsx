import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";


const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;


const BG = "#0f2a45"; 
const GREEN = "#00A859"; 
const HILL_A = "rgba(0,168,89,0.14)"; 
const HILL_B = "rgba(0,120,62,0.10)"; 
const CARD_BG = "rgba(255,255,255,0.04)";
const MUTED = "rgba(255,255,255,0.75)";

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 6 },
        pt: 10,
        pb: 10,
        background: BG,
        color: "#fff",
      }}
    >
   
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,320 C300,250 600,400 900,300 C1200,200 1440,300 1440,300 L1440,500 L0,500 Z"
            fill={GREEN}
            opacity="0.08"
          />
          <path
            d="M0,360 C350,280 700,420 1100,320 C1350,250 1440,280 1440,300 L1440,500 L0,500 Z"
            fill={GREEN}
            opacity="0.06"
          />
        </svg>
      </Box>

     
      {[MdLocationOn, MdPhone, MdEmail].map((Icon, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: `${20 + i * 10}%`,
            left: `${15 + i * 25}%`,
            animation: `${float} ${4 + i}s ease-in-out infinite`,
            opacity: 0.06,
            fontSize: 80,
            zIndex: 1,
            color: GREEN,
            transform: "translateZ(0)",
          }}
        >
          <Icon />
        </Box>
      ))}

      {/* Animated Heading */}
      <Box sx={{ textAlign: "center", mb: 4, position: "relative", zIndex: 2 }}>
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
              color: "#fff",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -6,
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
            Lets <Box component="span" sx={{ color: GREEN }}>Connect</Box>
          </Typography>
        </motion.div>
      </Box>

      <Typography
        variant="subtitle1"
        align="center"
        mb={6}
        sx={{
          animation: `${fadeInUp} 1s ease both`,
          color: MUTED,
          zIndex: 2,
          position: "relative",
        }}
      >
        Reach out to collaborate, inquire, or say hello!
      </Typography>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 10 },
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Info Panel */}
        <Box sx={{ maxWidth: 480, animation: `${fadeInUp} 1.2s ease both` }}>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
              <MdLocationOn style={{ color: GREEN, fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700} sx={{ color: "#fff" }}>
                  Address
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.75)">
                  Unit 14, Tower A, 9th Floor, Logix Cyber Park,
                  <br />
                  Noida 62, UP 201309, India
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MdPhone style={{ color: GREEN, fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700} sx={{ color: "#fff" }}>
                  Phone
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.75)">
                  <Link href="tel:+911203229282" sx={{ color: GREEN }}>+91-120-3229282</Link>
                  <br />
                  <Link href="tel:+911203116273" sx={{ color: GREEN }}>+91-120-3116273</Link>
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MdEmail style={{ color: GREEN, fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700} sx={{ color: "#fff" }}>
                  Email
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.75)">
                  <Link href="mailto:support@demorgia.com" sx={{ color: GREEN }}>
                    support@demorgia.com
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* Form Panel */}
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: 440,
            borderRadius: 4,
            p: 4,
            boxShadow: `0 8px 30px rgba(0,0,0,0.6)`,
            backdropFilter: "blur(8px)",
            background: CARD_BG,
            animation: `${fadeInUp} 1.4s ease both`,
            border: `1px solid rgba(255,255,255,0.04)`,
          }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Your Name"
                fullWidth
                required
                variant="filled"
                InputLabelProps={{ sx: { color: "rgba(255,255,255,0.75)" } }}
                sx={{
                  "& .MuiFilledInput-root": {
                    background: "rgba(255,255,255,0.02)",
                    color: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                }}
              />
              <TextField
                label="Your Email"
                type="email"
                fullWidth
                required
                variant="filled"
                InputLabelProps={{ sx: { color: "rgba(255,255,255,0.75)" } }}
                sx={{
                  "& .MuiFilledInput-root": {
                    background: "rgba(255,255,255,0.02)",
                    color: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                }}
              />
            </Stack>

            <TextField
              label="Subject"
              fullWidth
              required
              variant="filled"
              InputLabelProps={{ sx: { color: "rgba(255,255,255,0.75)" } }}
              sx={{
                "& .MuiFilledInput-root": {
                  background: "rgba(255,255,255,0.02)",
                  color: "#fff",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />

            <TextField
              label="Message"
              multiline
              rows={5}
              fullWidth
              required
              variant="filled"
              InputLabelProps={{ sx: { color: "rgba(255,255,255,0.75)" } }}
              sx={{
                "& .MuiFilledInput-root": {
                  background: "rgba(255,255,255,0.02)",
                  color: "#fff",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />

            <Box textAlign="right">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 10,
                  background: `linear-gradient(90deg, ${GREEN}, #00b36b)`,
                  "&:hover": {
                    background: `linear-gradient(90deg, #00a348, #00c67a)`,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 28px rgba(0,168,89,0.22)`,
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;