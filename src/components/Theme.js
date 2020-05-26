import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./layout.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Theme() {
  return (
    <div>
      <Typography
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        style={{
          margin: "3vh 0vh",
          color: "#FCF951FF",
          fontWeight: "bolder",
          letterSpacing: "4.5px",
        }}
        variant="h3"
        align="center"
      >
        RACHANA
      </Typography>
      <Typography
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        style={{
          margin: "3vh 0vh",
          color: "#422057FF",
          fontWeight: "bolder",
          letterSpacing: "4.5px",
        }}
        variant="h4"
        align="center"
      >
        Choose Your Theme
      </Typography>

      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        spacing={2}
        justify="space-around"
        alignItems="center"
        className="gridM"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Grid item xs={10} md={4} className="gids">
          <Paper className="gid1 gid" elevation={7}>
            Challenges faced in INDIAN Agriculture
          </Paper>
        </Grid>
        <Grid item xs={10} md={4} className="gids">
          <Paper className="gid2 gid" elevation={7}>
            Pandemic stab on INDIAN Economy and it's balance regain
          </Paper>
        </Grid>
        <Grid item xs={10} md={4} className="gids">
          <Paper className="gid3 gid" elevation={7}>
            Artwork & its Pleasure
          </Paper>
        </Grid>
        <Grid item xs={11} md={6} className="gids">
          <Paper className="gid" elevation={7}>
            <Grid container xs={12} md={12}>
              <Grid item xs={12} md={6} className="gid4 gid">
                Techology bucket and future StartUp's on :
              </Grid>
              <Grid item xs={12} md={6}>
                <ul style={{ listStyle: "none", margin: "1.2vh" }}>
                  <li>Robotics</li>
                  <li>IOT</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={10} md={4} className="gids">
          <Paper className="gid5 gid" elevation={7}>
            Human & Nature
            <li>Props & Cons</li>
          </Paper>
        </Grid>
        <Grid item xs={5} md={2} className="gids">
          <Paper className="gid6 gid" elevation={7}>
            Travel
          </Paper>
        </Grid>
        <Grid item xs={10} md={3} className="gids">
          <Paper elevation={7} className="gid11 gid">
            Natural Calamities & Measures to Overcome
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} className="gids">
          <Paper elevation={7} className="gid7 gid">
            Fantasy of Life
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} className="gids">
          <Paper elevation={7} className="gid8 gid">
            Social Media
          </Paper>
        </Grid>

        <Grid item xs={10} md={3} className="gids">
          <Paper elevation={7} className="gid10 gid">
            How to Slaughter Poverty in INDIA
          </Paper>
        </Grid>
        <Grid item xs={5} md={2} className="gids">
          <Paper elevation={7} className="gid9 gid">
            Spirituality
          </Paper>
        </Grid>
        <Grid item xs={10} md={2} className="gids">
          <Paper className="gid12 gid" elevation={7}>
            Science And Space
          </Paper>
        </Grid>
        <Grid item xs={10} md={4} className="gids">
          <Paper elevation={7} className="gid13 gid">
            Evolution of Education system & Learning strategies from times to
            now and future
          </Paper>
        </Grid>
        <Grid item xs={10} md={4} className="gids">
          <Paper elevation={7} className="gid14 gid">
            Unfold the ongoing and future course scenarios of community &
            Societal life
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
