import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ReactAudioPlayer from "react-audio-player";

import { Link } from "react-router-dom";
import frog from "../images/frog.png";
// import Grid from "@material-ui/core/Grid";

import "./Index.scss";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Index(props) {
  const { classes } = props;

  return (
    <div className="Index">
      <div className="logo">
        <Link to="/">
          <div> FROG </div>
          <div> COLLEGE</div>
        </Link>{" "}
      </div>
      <div className="player">
        <div className="cover">
          {" "}
          <img src={frog} />
        </div>
        <div>
          <ReactAudioPlayer src="" autoPlay controls />{" "}
        </div>
      </div>

      <div className="episode-log">
        <Link to="/episodes/">EPISODES</Link>{" "}
      </div>
      <div className="about">
        <div>
          <Link to="/about/">ABOUT</Link>
        </div>
      </div>
      <div className="cartoon">
        {" "}
        <figure>
          <img src={frog} />
          <figcaption> </figcaption>
        </figure>{" "}
      </div>
    </div>
  );
}
// function Index(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
