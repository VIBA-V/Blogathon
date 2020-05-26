import React from "react";
import "./style2.css";
import Typography from "@material-ui/core/Typography";
export default function Video() {
  return (
    <div className="youtube">
      <div className="youtube1">
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
          Have A Glimpse
        </Typography>
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Cloning to the capture of camera lens, a visual leaps to extract an
          exact copy of the information viewed rather than what we read or hear.
          Then why is this wait..! Have a sneak peek of what we VIBA do through
          this video.
        </p>
      </div>
      <div className="grey">
        <iframe
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          width="310"
          height="175"
          src="https://www.youtube.com/embed/qsc1YqtL-Vg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
