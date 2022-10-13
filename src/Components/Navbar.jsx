import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
// import { Reorder } from "@mui/icons-material";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
