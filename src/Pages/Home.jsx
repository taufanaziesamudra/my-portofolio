import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Taufan Ajie Samudro</h2>
        <div className="prompt">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            consequatur tenetur eaque tempore. Libero eos provident, sunt ipsum
            sit repudiandae.
          </p>
          <a href="https://www.linkedin.com/in/taufan-ajie-samudro-898406200/">
            <LinkedInIcon />
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlFmSSZwmRrNZHFKgtlqZlhMgFCTVPRNmstBVDXBQSFZCbnQZzwnWHqLztjjHlLqfPGWHL">
            <EmailIcon />
          </a>
          <a href="https://github.com/taufanaziesamudra">
            <GithubIcon />
          </a>
          <a href="https://api.whatsapp.com/send?phone=6280386588">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, BootStrap, ReactJS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MonggoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
