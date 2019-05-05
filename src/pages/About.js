import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";



import Bio from "../components/Bio";
import { Translate } from "react-localize-redux";

import { Link } from "react-router-dom";
import frog from "../images/frog.png";
// import Grid from "@material-ui/core/Grid";

import "./About.scss";

function About(props) {
  const { classes } = props;

  return (
    <div className="About">
      <div>
        {" "}
        <div className={classes.header}> Frog College </div>
        <div className={classes.logline}> <Translate id={'about.logline'}/></div>
      </div>
      <div>
        <div className={classes.content}>
          <Translate id={'about.summary'}/>
        </div>{" "}
      </div>
      <div className="bios">
        <div>
          <Bio />
        </div>
        <div>
          <div className={classes.divider} />
          <Bio />
        </div>
        <div>
          <div className={classes.divider} />
          <Bio />
        </div>
        <div>
          <div className={classes.divider} />
          <Bio />
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  header: {
    fontWeight: "bold",
    fontSize: "2em",
    fontFamily: "'Luckiest Guy', cursive",
  },
  logline: {
    fontSize: "1.3em"
  },
  content:{
    width: '40%',
  },
  divider: {
    position: "absolute",
    borderLeft: "6px solid green",
    height: "8em"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(About);
