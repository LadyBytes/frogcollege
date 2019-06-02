import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

import './EpisodeLog.scss'



function EpisodeLog(props) {
  const { classes } = props;

  return (
    <div className="EpisodeLog">
       
        <div className={classes.header}>
          <p> Episodes - Placeholder</p>
        </div>
     

    
    </div>
  );
}


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    fontFamily: "'Luckiest Guy', cursive",
    // fontSize: "1.2em",
    justifySelf: "center",
    textAlign:'center',
    fontSize: "3em",
    color: "black"
  },
  container: {
    fontFamily: "'Raleway'"
  },
 
});

EpisodeLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeLog);
