import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Fade } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSoundcloud,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { Translate } from "react-localize-redux";

import { Link } from "react-router-dom";
import frog from "../images/frog.png";
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
      <h1 class="ml6">
        <span class="text-wrapper">
          <span class="letters">out now!</span>
        </span>
      </h1>
      <div class="buttons">
        <a target="_blank" href="https://www.instagram.com/frogcollege/">
          <FontAwesomeIcon size="1x" icon={faInstagram} />
        </a>
        <a target="_blank" href="https://www.twitter.com/frogcollege/">
          <FontAwesomeIcon size="1x" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

//<a target="_blank" href="https://www.facebook.com/SearchPartyHunts/">
// <FontAwesomeIcon size="1x" icon={faFacebook} />
// </a>

//<a target="_blank" href="https://www.instagram.com/frogcollege/">
// <FontAwesomeIcon size="2x" icon={faSoundcloud} />
// </a>

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
    fontWeight: 900,
    paddingBottom: ".4em"
  },
  summary: {
    fontSize: "1.1em",
    // fontFamily: "Josefin Sans",
    textAlign: "justify"
  },

  container: {
    padding: theme.spacing.unit * 4,
    textAlign: "center",
    backgroundColor: "#FDF035",
    width: "60vw"
  }
});

export default withStyles(styles)(Index);
