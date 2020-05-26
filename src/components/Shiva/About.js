import React from "react";
import "./style1.css";
import img33 from "./img/blog.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function About() {
  return (
    <div className="aboutus">
      <div
        className="aboutus1"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            color: "#422057FF",
            letterSpacing: "3.6px",
            fontWeight: "bolder",
            margin: "3vh",
          }}
        >
          About Rachana
        </Typography>
        <p className="para">
          Every human spells a zillion thoughts but some thoughts when penned as
          words can influence a wide set of people and thence the knowledge
          flourishes. It can be in the form of articles, blogs, books etc.,
          Inorder to activate your cerebral space and hone your thoughts, we
          VIBA came out with a mesmerizing happening that is "RACHANA-VIBA's
          Blogathon"
        </p>
        <p className="para">
          'Rachana' means composition. We intend to sprout your thoughts on the
          themes we provided. Gather the twinkles of words and shine out with
          the light of your content by participating in our race of words.
        </p>
        <p className="para">
          VIBA- Vaagdevi Incubation and Businesses Accelerator, is envisioned to
          drive the budding youth towards entrepreneurial space and live up with
          their life of independancy.
        </p>
        <Link to="/Abouts">
          <button className="btn">Know more</button>
        </Link>
      </div>
      <div
        className="aboutus2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img src={img33} />
      </div>
    </div>
  );
}
