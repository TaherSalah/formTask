import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';

import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [visible, setVisible] = useState(false);


  const hide = () => {
    setClick(!click);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  
  useEffect(() => {
    changeNavColor();
    window.addEventListener("scroll", changeNavColor);
  });


  return (
    <div>
      
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg navbar-light bg-light fixed-top "
            : "navbar navbar-expand-lg navbar-dark bg-dark fixed-top  "
        }
      >
        <div className="container">
          <Link
            className={
              navbar ? "navbar-brand text-black" : "navbar-brand text-white"
            }
            to="/"
            onClick={hide}
          >
            Form
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menubar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={hide}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              click
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse hide"
            }
            id="menubar"
          >
            <ul
              className={
                navbar
                  ? "navbar-nav bg-light ms-auto "
                  : "navbar-nav bg-dark ms-auto "
              }
            >
    
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/"
                    onClick={hide}
                  >
                    About
                  </Link>
                </li>
        
            </ul>
             
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
