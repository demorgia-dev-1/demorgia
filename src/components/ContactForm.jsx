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

// Key animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

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
        background: "linear-gradient(to top right, #e0f7fa, #f1f8ff)",
      }}
    >
      {/* Decorative Hills Background */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,320 C300,250 600,400 900,300 C1200,200 1440,300 1440,300 L1440,500 L0,500 Z"
            fill="#0288d1"
            opacity="0.3"
          />
          <path
            d="M0,360 C350,280 700,420 1100,320 C1350,250 1440,280 1440,300 L1440,500 L0,500 Z"
            fill="#01579b"
            opacity="0.25"
          />
        </svg>
      </Box>
      {/* Floating Contact Icons */}
      {[MdLocationOn, MdPhone, MdEmail].map((Icon, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: `${20 + i * 10}%`,
            left: `${15 + i * 25}%`,
            animation: `${float} ${4 + i}s ease-in-out infinite`,
            opacity: 0.07,
            fontSize: 80,
            zIndex: 1,
            color: "#0288d1",
          }}
        >
          <Icon />
        </Box>
      ))}

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
            Lets{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Connect
            </Box>
          </Typography>
        </motion.div>
      </Box>
      <Typography
        variant="subtitle1"
        align="center"
        mb={6}
        sx={{
          animation: `${fadeInUp} 1s ease both`,
          color: "#444",
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
              <MdLocationOn style={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Address</Typography>
                <Typography variant="body2" color="text.secondary">
                  Unit 14, Tower A, 9th Floor, Logix Cyber Park,
                  <br />
                  Noida 62, UP 201309, India
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MdPhone style={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Phone</Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="tel:+911203229282">+91-120-3229282</Link>
                  <br />
                  <Link href="tel:+911203116273">+91-120-3116273</Link>
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MdEmail style={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Email</Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="mailto:support@demorgia.com">
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
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            backdropFilter: "blur(12px)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(240,248,255,0.85))",
            animation: `${fadeInUp} 1.4s ease both`,
          }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField label="Your Name" fullWidth required />
              <TextField label="Your Email" type="email" fullWidth required />
            </Stack>
            <TextField label="Subject" fullWidth required />
            <TextField label="Message" multiline rows={5} fullWidth required />
            <Box textAlign="right">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 10,
                  background: "linear-gradient(to right, #0288d1, #00acc1)",
                  "&:hover": {
                    background: "linear-gradient(to right, #0277bd, #00bcd4)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
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

// import {
//   Box,
//   Typography,
//   Stack,
//   TextField,
//   Button,
//   Link,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
// import { keyframes } from "@emotion/react";

// // Animations
// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const float = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

// const ContactForm = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       id="contact"
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         px: { xs: 2, sm: 6 },
//         pt: 12,
//         pb: 10, // adjusted for wave
//         background: "linear-gradient(to top right, #e0f7fa, #f1f8ff)",
//       }}
//     >
//       {/* Top Decorative Hills */}
//       {/* Modern Blobby Background */}
// <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
//   <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none">
//     <path
//       d="M0,320 C300,250 600,400 900,300 C1200,200 1440,300 1440,300 L1440,500 L0,500 Z"
//       fill="#0288d1"
//       opacity="0.3"
//     />
//     <path
//       d="M0,360 C350,280 700,420 1100,320 C1350,250 1440,280 1440,300 L1440,500 L0,500 Z"
//       fill="#01579b"
//       opacity="0.25"
//     />
//   </svg>
// </Box>

//       {/* Floating Icons */}
//       {[MdLocationOn, MdPhone, MdEmail].map((Icon, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: "absolute",
//             top: `${20 + i * 10}%`,
//             left: `${15 + i * 25}%`,
//             animation: `${float} ${4 + i}s ease-in-out infinite`,
//             opacity: 0.07,
//             fontSize: 80,
//             zIndex: 1,
//             color: "#0288d1",
//           }}
//         >
//           <Icon />
//         </Box>
//       ))}

//       {/* Headings */}
//       <Typography
//         variant="h4"
//         align="center"
//         fontWeight={800}
//         mb={1}
//         sx={{
//           animation: `${fadeInUp} 0.8s ease both`,
//           color: "#0d47a1",
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         Let's <span style={{ color: theme.palette.primary.main }}>Connect</span>
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         mb={6}
//         sx={{
//           animation: `${fadeInUp} 1s ease both`,
//           color: "#444",
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         Reach out to collaborate, inquire, or say hello!
//       </Typography>

//       {/* Main Content */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: { xs: 4, md: 10 },
//           justifyContent: "center",
//           alignItems: "flex-start",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* Info Panel */}
//         <Box sx={{ maxWidth: 480, animation: `${fadeInUp} 1.2s ease both` }}>
//           <Stack spacing={4}>
//             <Stack direction="row" spacing={2}>
//               <MdLocationOn style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Address</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Unit 14, Tower A, 9th Floor, Logix Cyber Park,
//                   <br />
//                   Noida 62, UP 201309, India
//                 </Typography>
//               </Box>
//             </Stack>
//             <Stack direction="row" spacing={2}>
//               <MdPhone style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Phone</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <Link href="tel:+911203229282">+91-120-3229282</Link>
//                   <br />
//                   <Link href="tel:+911203116273">+91-120-3116273</Link>
//                 </Typography>
//               </Box>
//             </Stack>
//             <Stack direction="row" spacing={2}>
//               <MdEmail style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Email</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <Link href="mailto:support@demorgia.com">
//                     support@demorgia.com
//                   </Link>
//                 </Typography>
//               </Box>
//             </Stack>
//           </Stack>
//         </Box>

//         {/* Contact Form */}
//         <Box
//           component="form"
//           sx={{
//             width: "100%",
//             maxWidth: 440,
//             borderRadius: 4,
//             mt: { xs: 6, md: 8 },
//             p: 4,
//             boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
//             backdropFilter: "blur(12px)",
//             background:
//               "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(240,248,255,0.85))",
//             animation: `${fadeInUp} 1.4s ease both`,
//           }}
//         >
//           <Stack spacing={3}>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <TextField label="Your Name" fullWidth required />
//               <TextField label="Your Email" type="email" fullWidth required />
//             </Stack>
//             <TextField label="Subject" fullWidth required />
//             <TextField label="Message" multiline rows={5} fullWidth required />
//             <Box textAlign="right">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   fontWeight: "bold",
//                   borderRadius: 10,
//                   background: "linear-gradient(to right, #0288d1, #00acc1)",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #0277bd, #00bcd4)",
//                     transform: "translateY(-2px)",
//                     boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
//                   },
//                 }}
//               >
//                 SEND MESSAGE
//               </Button>
//             </Box>
//           </Stack>
//         </Box>
//       </Box>

//       {/* Bottom Wave */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           height: 120,
//           zIndex: 1,
//         }}
//       >
//         <svg
//           width="100%"
//           height="100%"
//           preserveAspectRatio="none"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="#0288d1"
//             fillOpacity="0.25"
//             d="M0,224 C480,320 960,160 1440,256 L1440,320 L0,320 Z"
//           />
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default ContactForm;

// import {
//   Box,
//   Typography,
//   Stack,
//   TextField,
//   Button,
//   Link,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
// import { keyframes } from "@emotion/react";

// // Animations
// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const float = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

// const ContactForm = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       id="contact"
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         px: { xs: 2, sm: 6 },
//         pt: 12,
//         pb: 10, // reduced from 18 to keep form inside wave
//         background: "linear-gradient(to top right, #e0f7fa, #f1f8ff)",
//       }}
//     >
//       {/* Decorative Background Hills (waves) */}
//       <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
//         <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 500">
//           <path
//             d="M0 300 C 300 200, 900 400, 1440 300 L1440 500 L0 500 Z"
//             fill="#0288d1"
//             opacity="0.25"
//           />
//           <path
//             d="M0 350 C 400 250, 1000 450, 1440 350 L1440 500 L0 500 Z"
//             fill="#01579b"
//             opacity="0.2"
//           />
//         </svg>
//       </Box>

//       {/* Floating Icons */}
//       {[MdLocationOn, MdPhone, MdEmail].map((Icon, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: "absolute",
//             top: `${20 + i * 10}%`,
//             left: `${15 + i * 25}%`,
//             animation: `${float} ${4 + i}s ease-in-out infinite`,
//             opacity: 0.07,
//             fontSize: 80,
//             zIndex: 1,
//             color: "#0288d1",
//           }}
//         >
//           <Icon />
//         </Box>
//       ))}

//       {/* Heading */}
//       <Typography
//         variant="h4"
//         align="center"
//         fontWeight={800}
//         mb={1}
//         sx={{
//           animation: `${fadeInUp} 0.8s ease both`,
//           color: "#0d47a1",
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         Let's <span style={{ color: theme.palette.primary.main }}>Connect</span>
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         mb={6}
//         sx={{
//           animation: `${fadeInUp} 1s ease both`,
//           color: "#444",
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         Reach out to collaborate, inquire, or say hello!
//       </Typography>

//       {/* Content */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: { xs: 4, md: 10 },
//           justifyContent: "center",
//           alignItems: "flex-start",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* Info Panel */}
//         <Box sx={{ maxWidth: 480, animation: `${fadeInUp} 1.2s ease both` }}>
//           <Stack spacing={4}>
//             <Stack direction="row" spacing={2}>
//               <MdLocationOn style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Address</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Unit 14, Tower A, 9th Floor, Logix Cyber Park,
//                   <br />
//                   Noida 62, UP 201309, India
//                 </Typography>
//               </Box>
//             </Stack>
//             <Stack direction="row" spacing={2}>
//               <MdPhone style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Phone</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <Link href="tel:+911203229282">+91-120-3229282</Link>
//                   <br />
//                   <Link href="tel:+911203116273">+91-120-3116273</Link>
//                 </Typography>
//               </Box>
//             </Stack>
//             <Stack direction="row" spacing={2}>
//               <MdEmail style={{ color: "#0288d1", fontSize: 30 }} />
//               <Box>
//                 <Typography fontWeight={700}>Email</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <Link href="mailto:support@demorgia.com">
//                     support@demorgia.com
//                   </Link>
//                 </Typography>
//               </Box>
//             </Stack>
//           </Stack>
//         </Box>

//         {/* Contact Form */}
//         <Box
//           component="form"
//           sx={{
//             width: "100%",
//             maxWidth: 460,
//             borderRadius: 4,
//             p: 4,
//             mt: { xs: 0, md: -2 },
//             boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
//             backdropFilter: "blur(12px)",
//             background:
//               "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(240,248,255,0.85))",
//             animation: `${fadeInUp} 1.4s ease both`,
//           }}
//         >
//           <Stack spacing={3}>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <TextField label="Your Name" fullWidth required />
//               <TextField label="Your Email" type="email" fullWidth required />
//             </Stack>
//             <TextField label="Subject" fullWidth required />
//             <TextField label="Message" multiline rows={5} fullWidth required />
//             <Box textAlign="right">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   fontWeight: "bold",
//                   borderRadius: 10,
//                   background: "linear-gradient(to right, #0288d1, #00acc1)",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #0277bd, #00bcd4)",
//                     transform: "translateY(-2px)",
//                     boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
//                   },
//                 }}
//               >
//                 SEND MESSAGE
//               </Button>
//             </Box>
//           </Stack>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ContactForm;
