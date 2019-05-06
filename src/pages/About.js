import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Bio from "../components/Bio";
import { Translate } from "react-localize-redux";
import Masonry from "react-masonry-css";

import { Link } from "react-router-dom";
import frog from "../images/frog.png";
// import Grid from "@material-ui/core/Grid";
import Sara from "../images/sara.jpg";
import Chris from "../images/chris.jpg";
import Dan from "../images/dan.jpg";
import Mike from "../images/mike.jpg";
import Kat from "../images/kat.jpg";
import "./About.scss";

var items = [
  {
    name: "Katherine Gorham",
    role: "Creator/Head Writer/Treehugger Girl",
    bio:
      "Katherine Gorham is a NYC-based writer, performer, and choreographer with a BA in Theater from an alright school. Frog College is her first and favorite actualized series. She continues her study of comedy and screenwriting in NYC, while working as a choreographer and freelance copywriter. She also teaches ballet to babies in TriBeCa, which, unfortunately, is what she is best at. She’s thrilled to share Frog College with the world.",
    photo: Kat
  },
  {
    name: "Chris Matos",
    role: "Editor/Frog",
    bio:
      "Christopher Matos is a director, writer, producer, actor, editor, born, raised, and residing in New York City. He loves all aspects of production and all avenues of storytelling. He has produced short films with MOVE Collaborative and theatrical plays with You Up Productions. In his free time he plays with cats he is allergic to, edits videos as a freelancer, and is always looking for great new people to collaborate with.",
    photo: Chris
  },
  {
    name: "Meghan Ames",
    role: "Sound Designer/Amelia",
    bio:
      "Meghan is a performer and entertainer currently residing in Etampes, France where she studies movement based performance and clown. When she is not entertaining families at the Long Island Children's Museum Theater, she trains in circus arts including tissu, hammock, and acrobalance: completely useless for a podcast. She continues to study, perform, and develop new work in NY and internationally. Keep an eye out for her artistic website which will include details on these new projects."
  },
  {
    name: "Dan Chaffkin",
    role: "Sound Designer/Roommate",
    bio:
      "Dan Chaffkin is a comedy and math person. He likes doing stand up and improv and making videos. He has been told that he would have a great singing voice if he took some lessons. Dan is a black sash in Shoalin Kung-Fu, and he is developing a fundamental theory of comedy using first-order predicate calculus. He has also been known to make himself laugh for twenty minutes by spelling out 'fart' three times in a game of Bananagrams.",
    photo: Dan
  },
  { name: "Sam Kellman", role: "Professor", bio: "" },
  { name: "Mike Flandrau", role: "Scientist", bio: "", photo: Mike },
  {
    name: "Sara Neil",
    role: "Frog Mom",
    bio:
      "Sara Neil is a writer, performer, and grad student in library science and history at Queens College. She performs improv, watches a lot of tv and has a dog named Lucy. You can follow her twitter @sararoseneil for some real gold. Find her other work, somewhere, eventually, one day, when she finishes things and publishes them.",
    photo: Sara
  },{
    name: "Lisa Wagner",
    role: "Tech Support",
    bio:
      "",
    
  }
];

var bios = (items = items.map(function(item) {
  return (
    <Bio name={item.name} role={item.role} bio={item.bio} photo={item.photo} />
  );
}));

function About(props) {
  const { classes } = props;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div classes="container" className='About'>
      <div>
        {" "}
        <div className={classes.header}> Frog College </div>
        <div className={classes.logline}>
          {" "}
          <Translate id={"about.logline"} />
        </div>
      </div>
      <div>
        <div className={classes.content}>
          <Translate id={"about.summary"} />
        </div>{" "}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {bios}
      </Masonry>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  container: {
    fontFamily: "'Raleway'"
  },
  header: {
    fontWeight: "bold",
    fontSize: "2em",
    fontFamily: "'Luckiest Guy', cursive"
  },
  logline: {
    fontSize: "1.3em",
    width: "40%"
  },
  content: {
    width: "40%"
  },
  divider: {
    position: "absolute",
    borderLeft: "6px solid green",
    height: "8em"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"

    // color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(About);
