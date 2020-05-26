import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import img1 from "./img.png";
import "./layout.css";

export default function Win() {
  return (
    <Grid container xs={12}>
      <div>
        <Typography
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          variant="h4"
          align="center"
          style={{
            letterSpacing: "2.5px",
            color: "#422057FF",
            fontWeight: "bolder",
            marginTop: "3vh",
          }}
        >
          What Will Your{" "}
          <b
            style={{
              fontSize: "5.4vh",
              fontWeight: "bolder",
              color: "#F93822FF",
            }}
          >
            Win
          </b>{" "}
          Bag You...
          <b
            style={{
              fontSize: "5.4vh",
              fontWeight: "bolder",
              color: "#F93822FF",
            }}
          >
            !
          </b>
        </Typography>
        <Grid
          container
          xs={12}
          lg={12}
          md={12}
          className="gM"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Grid
            item
            xs={12}
            md={10}
            lg={4}
            className="gW"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img src={img1} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            className="gE"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Paper
              elevation={7}
              className="cardd"
              style={{ borderRadius: "16px" }}
            >
              <Typography
                variant="h4"
                align="center"
                style={{
                  letterSpacing: "2.5px",
                  color: "#422057FF",
                  fontWeight: "bolder",
                  margin: "2.5vh",
                  marginBottom: "3.2vh",
                }}
              >
                Top{" "}
                <b
                  style={{
                    fontSize: "5.4vh",
                    fontWeight: "bolder",
                    color: "#F93822FF",
                  }}
                >
                  3
                </b>
              </Typography>
              <Typography variant="h6" align="center" className="toper">
                Top 3 participants will be provided with a certificate and their
                blogs entries will be publised in the VIBA's website.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            className="gA"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Paper
              elevation={7}
              className="cardd"
              style={{ borderRadius: "16px" }}
            >
              <Typography
                variant="h4"
                align="center"
                style={{
                  letterSpacing: "2.5px",
                  color: "#422057FF",
                  fontWeight: "bolder",
                  margin: "2.5vh",
                  marginBottom: "3.2vh",
                }}
              >
                Top{" "}
                <b
                  style={{
                    fontSize: "5.4vh",
                    fontWeight: "bolder",
                    color: "#F93822FF",
                    letterSpacing: "0px",
                  }}
                >
                  10
                </b>
              </Typography>
              <Typography variant="h6" align="center" className="toper">
                Top 10 participants can claim the opportunity to be a part of
                VIBA and travel with us in future endeavours.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
