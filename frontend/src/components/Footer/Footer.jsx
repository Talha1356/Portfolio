import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Talha Tai. I am a Frontend Developer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Talha1356" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/shorts/17uy5jdXnSU" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/talha_1356/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/talha-tai" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
