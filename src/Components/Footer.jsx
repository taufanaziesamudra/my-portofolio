import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/?hl=id">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/TaufanAzie">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/taufanthegunners">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/taufan-ajie-samudro-898406200/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Taufan Ajie Samudro</p>
    </div>
  );
};

export default Footer;
