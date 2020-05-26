import React from "react";
import Grid from "@material-ui/core/Grid";
import Apply from "./Apply";
import Util from "./Util";
import Typography from "@material-ui/core/Typography";

export default function Last() {
  return (
    <div>
      <Grid container xs={12} sm={12} md={12}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Util />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Typography
            variant="h5"
            style={{
              margin: "3vh 0vh",
              color: "#422057FF",
              fontWeight: "bolder",
              maxWidth: "100%",
            }}
            align="center"
          >
            Follow these to check-in into the Google Form
          </Typography>
          <Apply />
          <Typography
            style={{
              margin: "3vh 0vh",
              color: "#422057FF",
              fontWeight: "bolder",
              fontSize: "81%",
              maxWidth: "100%",
            }}
            align="center"
          >
            https://forms.gle/nruNDAySeXHZU9iGA
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
