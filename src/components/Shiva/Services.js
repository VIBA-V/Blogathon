import React from "react";
import "./style4.css";
import img64 from "./img/hs.png";
import img65 from "./img/g.png";
import img66 from "./img/c.png";
import img67 from "./img/f.png";
import img68 from "./img/hsh.png";
import img69 from "./img/m.png";
import Typography from "@material-ui/core/Typography";
export default function Services() {
  return (
    <div>
      <Typography
        variant="h4"
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
        Our Services
      </Typography>
      <div className="services1">
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img64} />
          <h3>Innovation</h3>
          <p>
            Free flow of ideation is enabled altering the thought process
            thereby tending students towards efficient and unique solution.
          </p>
        </div>
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img65} />
          <h3>Internship</h3>
          <p>
            Offered for the selected candidates through VIBA's events and the
            individual is trained by work in the selected domains. VIBA assures
            a quality experience for the work time.
          </p>
        </div>
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img66} />
          <h3>Work Space</h3>
          <p>
            Teamed up according to domains but work on a sole motive. A healthy
            participation along with interactive and smart work ambit.
          </p>
        </div>
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img67} />
          <h3>Idea Filtration</h3>
          <p>
            Picking up the problem and offering a solution by creating a quirky
            business model to compete in the market.It leads to stand out as a
            best product.
          </p>
        </div>
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img68} />
          <h3>Technical Support</h3>
          <p>
            Offered from our expert fraternity onboard. Our existing VIBA team
            also gives their support. It can also be provided through the
            technical labs setup in VIBA.
          </p>
        </div>
        <div
          className="services2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={img69} />
          <h3>Seed Fund</h3>
          <p>
            A novel idea is given push forward and a proposal for the ideated
            solution is made. Later, launch is set by seed fund from VIBA's
            partnered companies.
          </p>
        </div>
      </div>
    </div>
  );
}
