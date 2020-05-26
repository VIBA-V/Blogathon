import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import img2 from "./img2.png";
import "./layout.css";

export default function Rules() {
  const rules = [
    "Your blog may take inspiration from other sources but the same content cannot be furnished.",

    "By enrolling to our competition, you give us the right to utilize your blog for our website.",

    "The contest kicked off officially on Monday, 25 May 2020 at 11:00 AM.",

    "All submissions are made by making entries in the google form.",

    "Blog has to be submitted in English and can be uploaded in any file format (Word or PDF).",

    "All entries are to be uploaded in the Google form by Thursday, 28 May 2020.",

    "Word limit of each blog is 800-1200 words.",

    "Plagiarism check is made and your blog will be tend to rejection upon presence of 30% and above plagiarized content",
  ];
  return (
    <div>
      <Typography
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        variant="h4"
        style={{
          fontWeight: "bolder",
          color: "#422057FF",
          textAlign: "center",
          margin: "2vh 5vh",
          marginTop: "3vh",
          letterSpacing: "4.5px",
        }}
      >
        Rules{" "}
        <b
          style={{
            fontSize: "5.4vh",
            fontWeight: "bolder",
            color: "#F93822FF",
          }}
        >
          &
        </b>{" "}
        Regulations
      </Typography>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Grid item xs={12} sm={5} md={5} className="pic">
          <img src={img2} />
        </Grid>
        <Grid item xs={12} sm={7} md={7} className="rule">
          {rules.map((rul, index) => (
            <Paper elevation={5} className="rull">
              <Typography variant="h6" align="center">
                <h1
                  style={{
                    color: "#F93822FF",
                    marginBottom: "1vh",
                    marginTop: "-1vh",
                    fontSize: "3vh",
                    fontWeight: "bolder",
                  }}
                >
                  Rule : {index + 1}
                </h1>
                {rul}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
