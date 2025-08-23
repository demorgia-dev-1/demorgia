// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   Box,
//   List,
//   ListItemText,
//   Button,
//   Avatar,
//   ListItemButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link as ScrollLink } from "react-scroll";
// import { motion } from "framer-motion";
// import logo from "/logo.png";
// import { useEffect, useState, useRef } from "react";
// import { Menu, MenuItem } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import Collapse from "@mui/material/Collapse";

// const LoginDropdown = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const buttonRef = useRef();

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <Button
//         color="inherit"
//         endIcon={<ArrowDropDownIcon />}
//         onClick={handleOpen}
//         ref={buttonRef}
//         aria-controls="login-menu"
//         aria-haspopup="true"
//       >
//         Login
//       </Button>
//       <Menu
//         id="login-menu"
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} sx={{ textDecoration: "none" }}>
//           <a
//             href="https://admin.assessir.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             Admin Login
//           </a>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <a
//             href="https://web.assessir.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             Assessor Login
//           </a>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <a
//             href="https://candidate.assessir.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             Candidate Login
//           </a>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// };

// const SectorsDropdown = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [sectors, setSectors] = useState([]);
//   const buttonRef = useRef();

//   useEffect(() => {
//     fetch("/sectors.json")
//       .then((res) => res.json())
//       .then((data) => setSectors(data))
//       .catch((err) => console.error("Failed to load sectors:", err));
//   }, []);

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   // Square grid size
//   const gridSize = Math.ceil(Math.sqrt(sectors.length));

//   return (
//     <>
//       <Button
//         color="inherit"
//         endIcon={<ArrowDropDownIcon />}
//         onClick={handleOpen}
//         ref={buttonRef}
//         sx={{ textTransform: "none", fontWeight: 500 }}
//       >
//         SAMPLE PAPERS
//       </Button>

//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         PaperProps={{
//           sx: {
//             width: "100vw",
//             maxWidth: "100%",
//             px: 4,
//             py: 3,
//             backgroundColor: "#f9f9f9",
//             borderRadius: 2,
//             boxShadow: 3,
//             overflowY: "auto",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(5, 1fr)",
//             gap: 2,
//           }}
//         >
//           {sectors.map((sector, index) => (
//             <Box
//               key={sector.name}
//               onClick={handleClose}
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 px: 2,
//                 py: 1.5,
//                 borderRight:
//                   (index + 1) % gridSize !== 0 ? "1px solid #ddd" : "none",
//                 "&:hover": {
//                   backgroundColor: "#e3f2fd",
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               {/* <Avatar
//                 src={sector.image}
//                 alt={sector.name}
//                 sx={{ width: 30, height: 30, mr: 2 }}
//               /> */}
//               <a
//                 href={sector.url}
//                 download
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <Typography variant="body2">{sector.name}</Typography>
//               </a>
//             </Box>
//           ))}
//         </Box>
//       </Menu>
//     </>
//   );
// };

// const navLinks = [
//   { label: "Home", to: "hero" },
//   { label: "About", to: "about" },
//   { label: "Why Us", to: "why" },
//   { label: "Solutions", to: "solutions" },
//   { label: "Placement", to: "placement" },
//   { label: "Sectors", to: "sectors" },
//   { label: "Contact", to: "contact" },
//   { label: "Login", to: "Login" },
// ];

// const Navbar = ({ onNavigate = {} }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [sectors, setSectors] = useState([]);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);

//   useEffect(() => {
//     fetch("/sectors.json")
//       .then((res) => res.json())
//       .then((data) => setSectors(data))
//       .catch((err) => console.error("Failed to load sectors:", err));
//   }, []);

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background: "linear-gradient(to right, #ffffff 20%, #0d47a1 80%)",
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <motion.img
//             src={logo}
//             alt="Logo"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             style={{
//               height: 70,
//               width: "auto",
//               objectFit: "contain",
//               padding: "5px 10px",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//             onClick={onNavigate.home}
//           />
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 600,
//               color: "#0d47a1",
//               animation: "pulse 2s infinite",
//               "@keyframes pulse": {
//                 "0%": { opacity: 1 },
//                 "50%": { opacity: 0.7 },
//                 "100%": { opacity: 1 },
//               },
//             }}
//           >
//             Demorgia Consulting Services Pvt Ltd
//           </Typography>
//         </Box>

//         <Box sx={{ display: { xs: "none", sm: "block" } }}>
//           {navLinks.map((item) => {
//             if (item.label === "Login") {
//               return <LoginDropdown key={item.to} />;
//             } else if (item.label === "Sectors") {
//               return <SectorsDropdown key={item.to} />;
//             } else {
//               return (
//                 <ScrollLink
//                   key={item.to}
//                   to={item.to}
//                   smooth
//                   duration={500}
//                   offset={-70}
//                 >
//                   <Button color="inherit">{item.label}</Button>
//                 </ScrollLink>
//               );
//             }
//           })}
//         </Box>

//         {/* Hamburger Icon */}
//         <IconButton
//           sx={{ display: { sm: "none" }, color: "white" }}
//           onClick={() => setDrawerOpen(true)}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Drawer Menu */}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={() => setDrawerOpen(false)}
//         >
//           <Box sx={{ width: 250 }}>
//             <List>
//               {navLinks.map((item) => {
//                 if (item.label === "Login") {
//                   return (
//                     <Box key="login">
//                       <ListItemButton onClick={() => setLoginOpen(!loginOpen)}>
//                         <ListItemText primary="Login" />
//                         {loginOpen ? <ExpandLess /> : <ExpandMore />}
//                       </ListItemButton>
//                       <Collapse in={loginOpen} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding>
//                           <ListItemButton
//                             component="a"
//                             href="https://admin.assessir.com/login"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{ pl: 4 }}
//                             onClick={() => setDrawerOpen(false)}
//                           >
//                             <ListItemText primary="Admin Login" />
//                           </ListItemButton>
//                           <ListItemButton
//                             component="a"
//                             href="https://web.assessir.com/login"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{ pl: 4 }}
//                             onClick={() => setDrawerOpen(false)}
//                           >
//                             <ListItemText primary="Assessor Login" />
//                           </ListItemButton>
//                           <ListItemButton
//                             component="a"
//                             href="https://candidate.assessir.com/login"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{ pl: 4 }}
//                             onClick={() => setDrawerOpen(false)}
//                           >
//                             <ListItemText primary="Candidate Login" />
//                           </ListItemButton>
//                         </List>
//                       </Collapse>
//                     </Box>
//                   );
//                 } else if (item.label === "Sectors") {
//                   return (
//                     <Box key="sectors">
//                       <ListItemButton
//                         onClick={() => setSectorsOpen(!sectorsOpen)}
//                       >
//                         <ListItemText primary="Sectors" />
//                         {sectorsOpen ? <ExpandLess /> : <ExpandMore />}
//                       </ListItemButton>
//                       <Collapse in={sectorsOpen} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding>
//                           {sectors.map((sector) => (
//                             <ListItemButton
//                               key={sector.name}
                              
//                               component="a"
//                               href={sector.url}
//                               download
//                               sx={{ pl: 4 }}
//                               onClick={() => setDrawerOpen(false)}
//                             >
//                               <ListItemText primary={sector.name} />
//                             </ListItemButton>
//                           ))}
//                         </List>
//                       </Collapse>
//                     </Box>
//                   );
//                 } else {
//                   return (
//                     <ScrollLink
//                       key={item.to}
//                       to={item.to}
//                       smooth
//                       duration={500}
//                       offset={-70}
//                       onClick={() => setDrawerOpen(false)}
//                     >
//                       <ListItemButton>
//                         <ListItemText primary={item.label} />
//                       </ListItemButton>
//                     </ScrollLink>
//                   );
//                 }
//               })}
//             </List>
//           </Box>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
import logo from "/logo.png";
import { useEffect, useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

/* ------------------- Login Dropdown ------------------- */
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
        <MenuItem onClick={handleClose} sx={{ textDecoration: "none" }}>
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

/* ------------------- Sectors Dropdown ------------------- */
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
        SAMPLE PAPERS
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

/* ------------------- Solutions Dropdown (with smart scroll) ------------------- */
const SolutionsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const targets = {
    assessment: [
      "assessment-solution",
      "assessment",
      "assessmentSolution",
      "solutions-assessment",
      "solutions",
    ],
  };

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
      >
        {/* Works as before */}
        <MenuItem onClick={() => goTo(targets.assessment)}>
          Assessment Solution
        </MenuItem>

        {/* Leads nowhere: just closes the menu, no scroll */}
        <MenuItem
          onClick={handleClose}
          sx={{ userSelect: "none" }}
        >
          Job Fair &amp; Placement
        </MenuItem>

        {/* Leads nowhere: just closes the menu, no scroll */}
        <MenuItem
          onClick={handleClose}
          sx={{ userSelect: "none" }}
        >
          Software Solution
        </MenuItem>
      </Menu>
    </>
  );
};

/* ------------------- Nav Links ------------------- */
const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Why Us", to: "why" },
  { label: "Solutions", to: "solutions" }, // desktop shows dropdown instead
  { label: "Placement", to: "placement" },
  { label: "Sectors", to: "sectors" },
  { label: "Contact", to: "contact" },
  { label: "Login", to: "Login" },
];

/* ------------------- Navbar ------------------- */
const Navbar = ({ onNavigate = {} }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false); // for Drawer

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
        background: "linear-gradient(to right, #ffffff 20%, #0d47a1 80%)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo + Brand */}
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

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => {
            if (item.label === "Login") return <LoginDropdown key={item.to} />;
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

        {/* Hamburger Icon */}
        <IconButton
          sx={{ display: { sm: "none" }, color: "white" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Menu (Mobile) */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 270 }}>
            <List>
              {navLinks.map((item) => {
                if (item.label === "Login") {
                  return (
                    <Box key="login">
                      <ListItemButton onClick={() => setLoginOpen(!loginOpen)}>
                        <ListItemText primary="Login" />
                        {loginOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={loginOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton
                            component="a"
                            href="https://admin.assessir.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 4 }}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary="Admin Login" />
                          </ListItemButton>
                          <ListItemButton
                            component="a"
                            href="https://web.assessir.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 4 }}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary="Assessor Login" />
                          </ListItemButton>
                          <ListItemButton
                            component="a"
                            href="https://candidate.assessir.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 4 }}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary="Candidate Login" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </Box>
                  );
                } else if (item.label === "Sectors") {
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
                          {/* Works as before */}
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setDrawerOpen(false);
                              smartScroll([
                                "assessment-solution",
                                "assessment",
                                "assessmentSolution",
                                "solutions-assessment",
                                "solutions",
                              ]);
                            }}
                          >
                            <ListItemText primary="Assessment Solution" />
                          </ListItemButton>

                          {/* Leads nowhere: closes drawer only */}
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setDrawerOpen(false);
                              // no navigation
                            }}
                          >
                            <ListItemText primary="Job Fair & Placement" />
                          </ListItemButton>

                          {/* Leads nowhere: closes drawer only */}
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setDrawerOpen(false);
                              // no navigation
                            }}
                          >
                            <ListItemText primary="Software Solution" />
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