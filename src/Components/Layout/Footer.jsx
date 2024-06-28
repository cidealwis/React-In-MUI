import React from "react";
import { Box, Typography, IconButton, colors } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 40px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo and Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{ height: 50, width: 100 }}
            alt="Logo"
            src={logo}
          />

          <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <IconButton aria-label="twitter" href="https://twitter.com">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="facebook" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="instagram" href="https://instagram.com">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Our Services */}
        <Box>
          <Typography variant="h6">Our Services</Typography>
          <Typography>IOS Development</Typography>
          <Typography>Mobile Development</Typography>
          <Typography>Enterprise Solutions</Typography>
          <Typography>Blockchain Development</Typography>
          <Typography>IOT Solutions</Typography>
          <Typography>Web Development</Typography>
          <Typography>Digital Marketing</Typography>
          <Typography>Multimedia Creations</Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="h6">Quick Links</Typography>
          <Typography>Home</Typography>
          <Typography>Services</Typography>
          <Typography>About Us</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Careers</Typography>
        </Box>

        {/* Contact Information */}
        <Box>
          <Typography variant="h6">Contact Us</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon />
            <Typography>+44 79 155 119 89</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon />
            <Typography>+34 603 84 55 48</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon />
            <Typography>info@lyxux.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon />
            <Typography>London, United Kingdom</Typography>
          </Box>
        </Box>
      </Box>

      {/* Copyright Information */}
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "20px",
          background: "black",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography variant="body2" sx={{ color: "white" }}>
          Copyright © 2024 LYXUX LTD All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
