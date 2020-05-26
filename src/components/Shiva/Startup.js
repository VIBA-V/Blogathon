import React from "react";
import "./style.css";
import img31 from "./img/1.png";
import img32 from "./img/2.png";
import img33 from "./img/3.png";
import img34 from "./img/4.png";
import img35 from "./img/5.png";
import Typography from "@material-ui/core/Typography";

export default function Startup() {
  return (
    <div className="dosa3">
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
        StartUp's with us
      </Typography>
      <div className="dosa">
        <div
          className="dosa1"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img31} />
        </div>
        <div
          className="dosa7"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img32} />
        </div>
        <div
          className="dosa6"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img33} />
        </div>
        <div
          className="dosa4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img34} />
        </div>
        <div
          className="dosa5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img35} />
        </div>
      </div>
    </div>
  );
}
