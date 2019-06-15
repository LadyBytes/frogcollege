import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Fade } from "@material-ui/core";

import ReactAudioPlayer from "react-audio-player";

import { Translate } from "react-localize-redux";

import { Link } from "react-router-dom";
import frog from "../images/frog.jpg";
// import Grid from "@material-ui/core/Grid";



import "./Index.scss";

function Index(props) {


  const { classes } = props;

  return (
    <div className="Index">
      <div className="cartoon">
        <figure>
          <img src={frog} />
          <figcaption> </figcaption>
        </figure>
      </div>

      <div class="text">
        <Fade in={true} timeout={100}>
          <Paper className={classes.container}>
            <div className={classes.logline}>
              <Translate id={"about.logline"} />
            </div>

            <div className={classes.summary}>
              <Translate id={"about.summary"} />
            </div>
          </Paper>
        </Fade>
      </div>
      <h1 class="ml6" >
        <span class="text-wrapper" >
          <span class="letters">coming soon!</span>
        </span>
      </h1>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  
  headline: {
    fontSize: "em",
    textAlign: "left"
  },
  logline: {
    textAlign: "center",
    fontSize: "1.2em",
    fontWeight: 100
  },
  summary: {
    fontSize: "1.1em",
    fontFamily: "Raleway",
    textAlign: "justify"
  },

  container: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    backgroundColor: "#FDF035",
    width: "60vw"
  }
});

export default withStyles(styles)(Index);
