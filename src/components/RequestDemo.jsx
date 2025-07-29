import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Snackbar,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import { motion } from "framer-motion";
import logo from "/logo.png";

const RequestDemoForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    agree: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSnackbarOpen(true);
    setTimeout(() => onClose(), 1500);
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Paper
      elevation={6}
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4f9 100%)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "1px solid #e0e0e0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          height: 100,
          width: "auto",
          objectFit: "contain",
          padding: "5px 10px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      />
      {/* Top SVG Wave Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%' stop-color='%231976d2' /%3E%3Cstop offset='100%' stop-color='%230d47a1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,0 L600,100 L1200,0 L1200,0 L0,0 Z' fill='url(%23grad)' /%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
          animation: "waveSlide 10s linear infinite alternate",
        }}
      />
      <style>
        {`
    @keyframes waveSlide {
      0% { transform: translateX(0); }
      100% { transform: translateX(10px); }
    }
  `}
      </style>

      {/* Heading */}
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: "linear-gradient(to right, #1976d2, #0d47a1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          "&::after": {
            content: '""',
            display: "block",
            width: "60px",
            height: "3px",
            background: "#1976d2",
            margin: "8px auto 0",
            borderRadius: 10,
          },
        }}
      >
        Request a Demo
      </Typography>

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        {[
          {
            label: "Full Name",
            name: "name",
            icon: <PersonIcon sx={{ color: "#547dbf" }} />,
          },
          {
            label: "Email Address",
            name: "email",
            type: "email",
            icon: <EmailIcon sx={{ color: "#547dbf" }} />,
          },
          {
            label: "Phone Number",
            name: "phone",
            type: "tel",
            icon: <PhoneIcon sx={{ color: "#547dbf" }} />,
          },
          {
            label: "Organization Name",
            name: "organization",
            icon: <BusinessIcon sx={{ color: "#547dbf" }} />,
          },
        ].map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type || "text"}
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={formData[field.name]}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{field.icon}</InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ddd",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1976d2",
              },
            }}
          />
        ))}

        <TextField
          label="Message / Requirements"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ddd",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1976d2",
            },
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              sx={{
                color: "#1976d2",
                "&.Mui-checked": {
                  color: "#1976d2",
                },
              }}
            />
          }
          label="I agree to be contacted for the demo."
          sx={{ mt: 1 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.3,
            fontWeight: "bold",
            background: "linear-gradient(to right, #1976d2, #0d47a1)",
            ":hover": {
              background: "linear-gradient(to right, #0d47a1, #1976d2)",
            },
            borderRadius: "10px",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
          elevation={6}
          variant="filled"
        >
          Demo request submitted successfully!
        </MuiAlert>
      </Snackbar>
    </Paper>
  );
};

export default RequestDemoForm;
