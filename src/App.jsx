import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Fab, GlobalStyles, IconButton } from "@mui/material";
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
import ChatBot from "./components/ChatBotWidget";
import Assessors from "./components/Assessors";

const AppContent = () => {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: { scrollBehavior: "smooth" },
          body: {
            margin: 0,
            backgroundColor: "#f4f7fb",
            color: "#122033",
          },
          a: { color: "inherit", textDecoration: "none" },
          "*": { boxSizing: "border-box" },
          "::selection": {
            backgroundColor: "rgba(0, 168, 89, 0.18)",
          },
        }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermAndConditions />} />
        <Route path="/safe-workplace-policy" element={<SafeWorkplacePolicy />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/gallery" element={<OurGallery />} />
        <Route path="/assessors" element={<Assessors />} />
      </Routes>

      <Footer />

      {showChat && <ChatBot onClose={() => setShowChat(false)} />}

      <Fab
        size="small"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 92,
          right: 24,
          zIndex: 9998,
          backgroundColor: "#0f2a45",
          color: "#fff",
          boxShadow: "0 12px 24px rgba(15,42,69,0.22)",
          "&:hover": {
            backgroundColor: "#153858",
          },
        }}
        aria-label="scroll to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>

      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
        }}
      >
        <IconButton
          size="large"
          onClick={() => setShowChat((prev) => !prev)}
          sx={{
            backgroundColor: "#0f2a45",
            color: "#fff",
            boxShadow: "0 14px 28px rgba(15,42,69,0.22)",
            "&:hover": { backgroundColor: "#153858" },
          }}
          aria-label="open chat"
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
