import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid, Paper } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#0099FF" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Do's" {...a11yProps(0)} />
          <Tab label="Dont" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper className="eligi" elevation={7} style={{ borderRadius: "16px" }}>
          <Typography variant="h6" align="center">
            <ul style={{ listStyle: "none" }}>
              <li>
                ✓ Each participant has to select a topic and submit your blog on
                the selected theme.
              </li>
              <li>✓ You can use visual aids like images, icons, charts etc.</li>
              <li>✓ Research in the area of your selected theme to write.</li>
              <li>
                ✓ Provide in with the necessary details required to fill in the
                form.
              </li>
            </ul>
          </Typography>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper className="eligi" elevation={7} style={{ borderRadius: "16px" }}>
          <Typography variant="h6" align="center">
            <ul style={{ listStyle: "none" }}>
              <li>
                × Plagiarism is unacceptable and such entries will be
                disqualified.
              </li>
              <li>× Already published blogs will not be accepted.</li>
              <li>
                × Content shouldn't contain obscene language, photos or links
              </li>
              <li>
                × Framing misleading, defamatory and fradulant content cannot be
                tolerated adn leads to disqualification
              </li>
            </ul>
          </Typography>
        </Paper>
      </TabPanel>
    </div>
  );
}
