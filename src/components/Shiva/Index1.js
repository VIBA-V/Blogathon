import React from "react";
import "./stylev1.css";
import { SocialIcon } from "react-social-icons";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const H2 = () => {
  return (
    <div>
      <div className="main-grid">
        <header>
          <img
            class="logo"
            src={require("./img/vi.png")}
            style={{ width: "120px", height: "100px" }}
            alt="The Box"
          />
          <nav
            className="nav"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Link to="/Rachana/" className="navLink">
              Home
            </Link>
            <Link to="/Rachana/About" className="navLink">
              About us
            </Link>
            <Link to="/Rachana/Rachana" className="navLink">
              RACHANA
            </Link>
            <Link to="Rachana/Contact" className="navLink">
              Contact us
            </Link>
          </nav>
        </header>

        <main>
          <Typography
            variant="h2"
            align="center"
            style={{
              color: "#422057FF",
              letterSpacing: "3.6px",
              fontWeight: "bolder",
              margin: "3vh",
            }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            RACHANA
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            variant="h6"
            align="center"
            style={{
              color: "#422057FF",
              letterSpacing: "3.6px",
              fontWeight: "bolder",
              margin: "3vh",
            }}
          >
            VIBA's Blogathon...!
          </Typography>
          <div
            className="primary-image"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <iframe
              width="320"
              height="315"
              src="https://www.youtube.com/embed/p5VB21E7d4k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Typography
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            variant="h5"
            align="center"
            style={{
              color: "#422057FF",
              letterSpacing: "3.6px",
              fontWeight: "bolder",
              margin: "3vh",
            }}
          >
            As the pace matters in a race, so is the quality of content in a
            blog and we call this race as BLOGATHON.
          </Typography>

          <p className="description"></p>
        </main>

        <footer>
          <div
            className="social-links"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <a href="#" className="social-link" aria-label="snapchat">
              <SocialIcon
                url="https://twitter.com/jaketrent"
                bgColor="#fff"
                fgColor="black"
              />
            </a>
            <a href="#" className="social-link" aria-label="airbnb">
              <SocialIcon
                url="https://www.instagram.com/"
                bgColor="#fff"
                fgColor="black"
              />
            </a>
            <a href="#" className="social-link" aria-label="instagram">
              <SocialIcon
                url="https://www.linkedin.com/"
                bgColor="#fff"
                fgColor="black"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default H2;
