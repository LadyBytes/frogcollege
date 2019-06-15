import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

import "./EpisodeLog.scss";

var countDownDate = new Date("Sep 3, 2019 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "RELEASED";
  }
}, 1000);

function EpisodeLog(props) {
  const { classes } = props;

  return (
    <div className="EpisodeLog">
      <div className={classes.header}>
        <div class="contCentre">
          <p class="wobblyText">September 3rd 2019</p>
           <p id="countdown" />
        </div>
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
    textAlign: "center",
    fontSize: "3em",
    color: "black"
  },
  container: {
    fontFamily: "'Raleway'"
  }
});

EpisodeLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeLog);
