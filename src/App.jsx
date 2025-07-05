import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  Box,
  Fab,
  IconButton,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import SafeWorkplacePolicy from "./pages/SafeWorkplacePolicy";
import Grievance from "./pages/Grievance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurGallery from "./components/OurGallery";
import { NavigationProvider } from "./utills/NavigationContext";
import ChatBot from "./components/ChatBotWidget"; // Full chat window component

const AppContent = () => {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  // Scroll to top handler
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ScrollToTop Floating Button */}
      <Fab
        size="small"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 90, // Above chatbot
          right: 20,
          zIndex: 9998,
          backgroundColor: "#e91e63",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#d81b60",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermAndConditions />} />
        <Route
          path="/safe-workplace-policy"
          element={<SafeWorkplacePolicy />}
        />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/gallery" element={<OurGallery />} />
      </Routes>

      <Footer />

      {/* Chat Window (conditionally rendered) */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}

      {/* Floating Chat Icon */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <IconButton
          size="large"
          onClick={() => setShowChat((prev) => !prev)}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          {showChat ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
      </Box>
    </>
  );
};

const App = () => (
  <Router>
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  </Router>
);

export default App;
