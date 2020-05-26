import React from "react";
import "./style5.css";
import img99 from "./img/47.jpg";
import img98 from "./img/cm.jpg";
import img97 from "./img/dh.jpeg";
import img96 from "./img/sa.jfif";
export default function Team() {
  return (
    <div>
      <h1
        className="head"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        "<b style={{ fontSize: "3.6vh" }}>Leadership</b> is the capacity to
        translate <b style={{ fontSize: "3.6vh" }}>vision</b> into reality"
      </h1>
      <div className="team1">
        <div
          className="team2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img99} />
          <h3>Dr.M.K.Kaushik</h3>
          <span>
            <b>CEO</b>
          </span>
        </div>
        <div
          className="team2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img98} />
          <h3>Dr.A.Chandramouli</h3>
          <span>
            <b>ADVISOR</b>
          </span>
        </div>
        <div
          className="team2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img97} />
          <h3>Dr.Durga Hari Kiran</h3>
          <span>
            <b>HEAD MENTOR</b>
          </span>
        </div>
        <div
          className="team2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img96} />
          <h3>Salim Jiwani</h3>
          <span>
            <b>OPERATIONS</b>
          </span>
        </div>
      </div>
    </div>
  );
}
