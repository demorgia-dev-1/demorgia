// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import {
//   Box,
//   Fab,
//   IconButton,
// } from "@mui/material";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import ChatIcon from "@mui/icons-material/Chat";
// import CloseIcon from "@mui/icons-material/Close";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermAndConditions from "./pages/TermAndConditions";
// import SafeWorkplacePolicy from "./pages/SafeWorkplacePolicy";
// import Grievance from "./pages/Grievance";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import OurGallery from "./components/OurGallery";
// import { NavigationProvider } from "./utills/NavigationContext";
// import ChatBot from "./components/ChatBotWidget"; // Full chat window component
// import Assessors from "./components/Assessors";
// import PortalDetails from "./components/PortalDetails";

// const AppContent = () => {
//   const location = useLocation();
//   const [showChat, setShowChat] = useState(false);

//   // Scroll to top handler
//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* ScrollToTop Floating Button */}
//       <Fab
//         size="small"
//         onClick={handleClick}
//         sx={{
//           position: "fixed",
//           bottom: 90, // Above chatbot
//           right: 20,
//           zIndex: 9998,
//           backgroundColor: "#e91e63",
//           color: "#fff",
//           "&:hover": {
//             backgroundColor: "#d81b60",
//           },
//         }}
//       >
//         <KeyboardArrowUpIcon />
//       </Fab>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms" element={<TermAndConditions />} />
//         <Route
//           path="/safe-workplace-policy"
//           element={<SafeWorkplacePolicy />}
//         />
//         <Route path="/grievance" element={<Grievance />} />
//         <Route path="/gallery" element={<OurGallery />} />
//         <Route path="/assessors" element={<Assessors />} />
        
//       </Routes>
//       {/* <PortalDetails /> */}
//       <Footer />

//       {/* Chat Window (conditionally rendered) */}
//       {showChat && <ChatBot onClose={() => setShowChat(false)} />}

//       {/* Floating Chat Icon */}
//       <Box
//         sx={{
//           position: "fixed",
//           bottom: 20,
//           right: 20,
//           zIndex: 9999,
//         }}
//       >
//         <IconButton
//           size="large"
//           onClick={() => setShowChat((prev) => !prev)}
//           sx={{
//             backgroundColor: "#1976d2",
//             color: "white",
//             "&:hover": { backgroundColor: "#1565c0" },
//           }}
//         >
//           {showChat ? <CloseIcon /> : <ChatIcon />}
//         </IconButton>
//       </Box>
//     </>
//   );
// };

// const App = () => (
//   <Router>
//     <NavigationProvider>
//       <AppContent />
//     </NavigationProvider>
//   </Router>
// );

// export default App;
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
  GlobalStyles,          // ✅ Global styles (no .css files needed)
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
import Assessors from "./components/Assessors";
// import PortalDetails from "./components/PortalDetails";

// ✅ New “connected look” helpers
// import PageShell from "./components/PageShell";
// import SectionRail from "./components/SectionRail";
// import ScrollProgressBar from "./components/ScrollProgressBar";

const AppContent = () => {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  // Only show connectors on the Home page
  const isHome = location.pathname === "/";

  // Scroll to top handler
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Global CSS via MUI (no .css files required) */}
      <GlobalStyles
        styles={{
          html: { scrollBehavior: "smooth" },
          "*": { boxSizing: "border-box" },
        }}
      />

      {/* ✅ Shared background that visually ties all sections */}
      {/* <PageShell>
        {/* ✅ Subtle top scroll progress — only on Home */}
        {/* {isHome && <ScrollProgressBar />}  */}

        {/* ScrollToTop Floating Button */}
        <Fab
          size="small"
          onClick={handleClick}
          sx={{
            position: "fixed",
            bottom: 90, // Above chatbot
            right: 20,
            zIndex: 9998,
            // 🔵 brand color (blue) instead of pink to match theme
            backgroundColor: "#0d47a1",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#0b3d8f",
            },
          }}
          aria-label="scroll to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>

        {/* Top Navbar */}
        <Navbar />

        {/* ✅ Left side scroll-rail that highlights sections — only on Home */}
        {/* {isHome && <SectionRail />} */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermAndConditions />} />
          <Route path="/safe-workplace-policy" element={<SafeWorkplacePolicy />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/gallery" element={<OurGallery />} />
          <Route path="/assessors" element={<Assessors />} />
          {/* <Route path="/portal" element={<PortalDetails />} /> */}
        </Routes>

        {/* Footer */}
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
            aria-label="open chat"
          >
            {showChat ? <CloseIcon /> : <ChatIcon />}
          </IconButton>
        </Box>
      {/* </PageShell> */}
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