import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Fade } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
  faSoundcloud,
  faItunesNote
} from "@fortawesome/free-brands-svg-icons";

import frog from "../images/frog.png";

import { Config } from "../update_me.js";

// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

import "./EpisodeLog.scss";

// var episodes = Config.UPCOMING;
var episodes = Config.EPISODES;

function EpisodeLog(props) {
  const { classes } = props;

  return (
    <div className="EpisodeLog">
      <div className={classes.header}>
        {episodes.map(function(item) {
          return (
            // <Paper>
            <div className="episode">
              <a target="_blank" href={item.link}>
                <img src={frog} />
              </a>

              <div className="summary">
                <div className="number">{item.title}</div>
                <div className="summary-text">{item.summary}</div>
                <div className="socials">
                  <div>
                    <a target="_blank" href={item.link}>
                      <FontAwesomeIcon size="1x" icon={faSoundcloud} />
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
            // </Paper>
          );
        })}
      </div>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  picture: {
    height: "50px"
  },
  header: {
    // fontSize: "1.2em",
    justifySelf: "center",
    textAlign: "center",
    fontSize: "1em"
  },
  container: {
    // fontFamily: "'Raleway'"
  }
});

EpisodeLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeLog);



 // <div>
 //                    <a target="_blank" href={item.link}>
 //                      <FontAwesomeIcon size="1x" icon={faSpotify} />
 //                    </a>
 //                  </div>
 //                  <div>
 //                    <a target="_blank" href={item.link}>
 //                      <FontAwesomeIcon size="1x" icon={faItunesNote} />
 //                    </a>
 //                  </div>