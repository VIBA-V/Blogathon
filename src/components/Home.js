import React from "react";
import Theme from "./Theme";
import Win from "./Win";
import Rules from "./Rules";
import Last from "./Last";
import About from "./Shiva/About";
import Index1 from "./Shiva/Index1";
import Index from "./Shiva/Index";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div>
      <Index1 />
      <About />
      <Theme />
      <Rules />
      <Win />
      <Last />
      <Index  />
      <div>
        <Typography
          style={{
            margin: "1vh 0vh",
            color: "#422057FF",
            letterSpacing: "2.7px",
          }}
          variant="h5"
          align="center"
        >
          powered by{" "}
          <b
            style={{
              fontSize: "4.5vh",
              fontWeight: "bolder",
              color: "#F93822FF",
            }}
          >
            Avasyu
          </b>
        </Typography>
      </div>
    </div>
  );
}
