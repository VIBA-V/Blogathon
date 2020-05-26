import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid, Paper } from "@material-ui/core";
import Util1 from "./Util1";
import "./layout.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "54vh",
    magrinLeft: "auto",
    marginRight: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container xs={12} className="tab">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Eligibility" {...a11yProps(0)} />
          <Tab label="Judging Criteria" {...a11yProps(1)} />
          <Tab label="Tips & Tricks" {...a11yProps(2)} />
          <Tab label="Do's & Dont" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Paper
            className="eligi"
            elevation={7}
            style={{ borderRadius: "16px" }}
          >
            <Typography
              variant="h4"
              align="center"
              style={{
                marginBottom: "2.5vh",
                color: "#422057FF",
                fontWeight: "bolder",
                letterSpacing: "5.6px",
              }}
            >
              Eligibility...
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
            <Typography variant="h6" align="center">
              All enthusiastic folks irrespective of age, education and
              occupation are invited to participate..!
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper
            className="just"
            elevation={7}
            style={{ borderRadius: "16px" }}
          >
            <Typography
              variant="h4"
              align="center"
              style={{
                marginBottom: "2.5vh",
                color: "#422057FF",
                fontWeight: "bolder",
                letterSpacing: "5.6px",
              }}
            >
              Judging Criteria...
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
            <Typography variant="h6" align="center">
              <ul style={{ listStyle: "none" }}>
                <li>Relevance to the topic.</li>
                <li>Visual aids utilized.</li>
                <li>Originality and quality of the content.</li>
                <li>Understanding and research.</li>
                <li>Structure of blog.</li>
              </ul>
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paper className="tip" elevation={7} style={{ borderRadius: "16px" }}>
            <Typography
              variant="h4"
              align="center"
              style={{
                marginBottom: "2.5vh",
                color: "#422057FF",
                fontWeight: "bolder",
                letterSpacing: "5.6px",
              }}
            >
              Tips & Tricks...
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
            <Typography variant="h6" align="center">
              <ul style={{ listStyle: "none" }}>
                <li>Check your grammar errors on Grammarly.</li>
                <li>
                  Utilise free online plagiarism check softwares to ensure your
                  blog is plagiarism free.
                </li>
                <li>
                  Add value to the topics by adding your thoughts and opinions.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Util1 />
        </TabPanel>
      </div>
    </Grid>
  );
}
