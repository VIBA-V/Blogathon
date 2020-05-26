import React from "react";
import "./style3.css";
import img35 from "./img/v.jpeg";
import Typography from "@material-ui/core/Typography";
export default function Viba() {
  return (
    <div>
      <Typography
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        variant="h4"
        align="center"
        style={{
          color: "#422057FF",
          letterSpacing: "3.6px",
          fontWeight: "bolder",
          margin: "3vh",
        }}
      >
        Explore Us
      </Typography>
      <div className="viba1">
        <div
          className="viba3"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img35} />
        </div>
        <div
          className="viba2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <p>
            VIBA Influences the Entrepreneurial ecosystem.It Identifies and
            promotes a business opportunity. It aims to develop and acclimatize
            students to entrepreneurial ambiance and assists the growth of
            student from a stage of ideation to business enhancement. It
            facilitates an environment for a free flow of student ideas. It also
            incubates startups by students, faculty and potent individuals or
            group and accelarates towards their launch into market.
          </p>
          <p>
            VIBA serves in the aspects of innovation, entrepreneurship,
            internships, technical support, work space and seed fund.
          </p>
        </div>
      </div>
    </div>
  );
}
