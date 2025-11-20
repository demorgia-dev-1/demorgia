import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  List,
  ListItemText,
  Button,
  ListItemButton,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
import logo from "/logo.png";
import { useEffect, useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

/*Login Dropdown*/
const LoginDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonRef = useRef();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleOpen}
        ref={buttonRef}
        aria-controls="login-menu"
        aria-haspopup="true"
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Login
      </Button>
      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a
            href="https://admin.assessir.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Admin Login
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href="https://web.assessir.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Assessor Login
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href="https://candidate.assessir.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Candidate Login
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

const SectorsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sectors, setSectors] = useState([]);
  const buttonRef = useRef();

  useEffect(() => {
    fetch("/sectors.json")
      .then((res) => res.json())
      .then((data) => setSectors(data))
      .catch((err) => console.error("Failed to load sectors:", err));
  }, []);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleOpen}
        ref={buttonRef}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Sample Papers
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            width: "100vw",
            maxWidth: "100%",
            px: 4,
            py: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 3,
            overflowY: "auto",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 2,
          }}
        >
          {sectors.map((sector, index) => (
            <Box
              key={sector.name}
              onClick={handleClose}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                px: 2,
                py: 1.5,
                borderRight: (index + 1) % 5 !== 0 ? "1px solid #ddd" : "none",
                "&:hover": { backgroundColor: "#e3f2fd", cursor: "pointer" },
              }}
            >
              <a
                href={sector.url}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="body2">{sector.name}</Typography>
              </a>
            </Box>
          ))}
        </Box>
      </Menu>
    </>
  );
};

/*Solutions Dropdown - desktop only*/
const SolutionsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const goTo = (candidates) => {
    handleClose();
    const found =
      candidates.find(
        (id) => typeof document !== "undefined" && document.getElementById(id)
      ) || candidates[candidates.length - 1];
    scroller.scrollTo(found, {
      smooth: true,
      duration: 600,
      offset: -70,
    });
  };

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleOpen}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Solutions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          elevation: 10,
          sx: {
            mt: 1,
            minWidth: { xs: 220, sm: 280 },
            borderRadius: 2,
            overflow: "hidden",
            background: "linear-gradient(180deg, #284e87ff)",
            color: "white",
            boxShadow: "0 10px 25px rgba(7,40,80,0.25)",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            px: 3,
            py: 1.25,
            "&:hover": { background: "rgba(255,255,255,0.1)" },
          }}
        >
          <a
            href="https://assessir.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Managed Assessment
          </a>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            px: 3,
            py: 1.25,
            "&:hover": { background: "rgba(255,255,255,0.1)" },
          }}
        >
          <a
            href="https://dcsexam.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Self Serve Exam
          </a>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            px: 3,
            py: 1.25,
            userSelect: "none",
            "&:hover": { background: "rgba(255,255,255,0.1)" },
          }}
        >
          Placement Consulting
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            px: 3,
            py: 1.25,
            userSelect: "none",
            "&:hover": { background: "rgba(255,255,255,0.1)" },
          }}
        >
          IT Services & Consulting
        </MenuItem>
      </Menu>
    </>
  );
};

/*Nav Links*/
const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Why Us", to: "why" },
  { label: "Solutions", to: "solutions" },
  { label: "Placement", to: "placement" },
  { label: "Sectors", to: "sectors" },
  { label: "Contact", to: "contact" },
];

const Navbar = ({ onNavigate = {} }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    fetch("/sectors.json")
      .then((res) => res.json())
      .then((data) => setSectors(data))
      .catch((err) => console.error("Failed to load sectors:", err));
  }, []);

  const smartScroll = (ids) => {
    const found =
      ids.find((id) => typeof document !== "undefined" && document.getElementById(id)) ||
      ids[ids.length - 1];
    scroller.scrollTo(found, { smooth: true, duration: 600, offset: -70 });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: {
          xs: "#ffffff",
          sm: "linear-gradient(90deg, #ffffff 0%, #244567ff 65%)",
        },
        boxShadow: { xs: 1, sm: 3 },
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

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => {
            if (item.label === "Sectors") return <SectorsDropdown key={item.to} />;
            if (item.label === "Solutions") return <SolutionsDropdown key={item.to} />;
            return (
              <ScrollLink key={item.to} to={item.to} smooth duration={500} offset={-70}>
                <Button color="inherit" sx={{ textTransform: "none", fontWeight: 500 }}>
                  {item.label}
                </Button>
              </ScrollLink>
            );
          })}
        </Box>

        <IconButton
          sx={{ display: { sm: "none" }, color: { xs: "black", sm: "white" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 270 }}>
            <List>
              {navLinks.map((item) => {
                if (item.label === "Sectors") {
                  return (
                    <Box key="sectors">
                      <ListItemButton onClick={() => setSectorsOpen(!sectorsOpen)}>
                        <ListItemText primary="Sectors" />
                        {sectorsOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={sectorsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {sectors.map((sector) => (
                            <ListItemButton
                              key={sector.name}
                              component="a"
                              href={sector.url}
                              download
                              sx={{ pl: 4 }}
                              onClick={() => setDrawerOpen(false)}
                            >
                              <ListItemText primary={sector.name} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  );
                } else if (item.label === "Solutions") {
                  return (
                    <Box key="solutions">
                      <ListItemButton onClick={() => setSolutionsOpen(!solutionsOpen)}>
                        <ListItemText primary="Solutions" />
                        {solutionsOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={solutionsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton
                            component="a"
                            href="https://assessir.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 4 }}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary="Managed Assessment" />
                          </ListItemButton>

                          <ListItemButton
                            component="a"
                            href="https://dcsexam.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 4 }}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary="Self Serve Exam" />
                          </ListItemButton>

                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setDrawerOpen(false);
                            }}
                          >
                            <ListItemText primary="Placement Consulting" />
                          </ListItemButton>

                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setDrawerOpen(false);
                            }}
                          >
                            <ListItemText primary="IT Services & Consulting" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </Box>
                  );
                } else {
                  return (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemButton>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ScrollLink>
                  );
                }
              })}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;