import React from "react";
import "./stylev.css";
import { SocialIcon } from "react-social-icons";
import Typography from "@material-ui/core/Typography";
const Index = () => {
  return (
    <div>
      <footer
        className="footer-distributed"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="footer-left">
          <Typography
            style={{
              margin: "3vh 0vh",
              color: "#FFFFFF",
              fontWeight: "bolder",
              letterSpacing: "4.5px",
              textAlign: "start",
            }}
            variant="h6"
          >
            Contact us at : 8106885376
          </Typography>

          <p>VIBA &copy; 2020</p>
        </div>
        <div class="footer-right">
          <SocialIcon url="https://www.instagram.com/ " />
          <SocialIcon url="https://www.linkedin.com/ " />
          <SocialIcon url="https://twitter.com/" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
