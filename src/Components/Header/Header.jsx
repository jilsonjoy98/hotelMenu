import { Box, Typography, styled } from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import logoImg from  '../../assets/logo.png';

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState({left:false})
  const navgate=useNavigate()

const toogleDrawer= (anchor, open)=>(event)=>{
  if(event.type ==="keydown" && (event.type ==="Tab" || event.type ==="Shift")){
    return;
  }
  setMobileMenu({...mobileMenu,[anchor]:open})

}
const list = (anchor) => (
  <Box
    sx={{
      width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
    }}
    role="presentation"
    onClick={toogleDrawer(anchor, false)}
    onKeyDown={toogleDrawer(anchor, false)}
  >
    <List>
      {nav_title.map((item, index) => (
        <ListItem
          key={item.index}
          disablePadding
          onClick={() => navgate(item.path)}
        >
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <FeaturedPlayListIcon />}
              {index === 2 && <MiscellaneousServicesIcon />}
              {index === 3 && <ContactsIcon />}
            </ListItemIcon>
            <ListItemText primary={item.display} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

  const nav_title = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];

  const NavBarlinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const NavBarlink = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#4F561",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));
  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor:'pointer',
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display:'none',
    marginRight:'theme.spacing(2)',
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomMenuIcon onClick={toogleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toogleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          {/* <NavBarLogo src={logoImg} /> */}
          <h3>SLR Solutions</h3>
        </Box>
        <NavBarlinksBox>
          {nav_title.map((item, index) => (
            <NavBarlink variant="body2" onClick={() => navgate(item.path)}>
              {item.display}
            </NavBarlink>
          ))}
        </NavBarlinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarlink variant="body2">Sign Up</NavBarlink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
}

export default Header;
