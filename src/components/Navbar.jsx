import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from "/logo.png";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Why Us", to: "why" },
  { label: "Solutions", to: "solutions" },
  { label: "Placement", to: "placement" },
  // { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

const Navbar = ({ onNavigate = {} }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #ffffff 20%, #0d47a1 80%)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              height: 70,
              width: "auto",
              objectFit: "contain",
              padding: "5px 10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={onNavigate.home}
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

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-70}
            >
              <Button color="inherit">{item.label}</Button>
            </ScrollLink>
          ))}
        </Box>

        {/* Hamburger Icon */}
        <IconButton
          sx={{ display: { sm: "none" }, color: "white" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Menu */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItem button>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </ScrollLink>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
