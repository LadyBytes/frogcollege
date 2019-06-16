import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Bio from "../components/Bio";
import { Translate } from "react-localize-redux";
import Masonry from "react-masonry-css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Link } from "react-router-dom";
import frog from "../images/frog.png";
// import Grid from "@material-ui/core/Grid";
import Sara from "../images/sara.jpg";
import Chris from "../images/chris.jpg";
import Meghan from "../images/meghan.jpg";
import Dan from "../images/dan.jpg";
import Mike from "../images/mike.jpg";
import Kat from "../images/kat.jpg";
import James from "../images/james.jpg";
import Sam from "../images/sam.jpg";
import Lisa from "../images/lisa.jpg";
import Frog from "../images/frogschool.png";

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
      "Meghan is a performer and entertainer currently residing in Etampes, France where she studies movement based performance and clown. When she is not entertaining families at the Long Island Children's Museum Theater, she trains in circus arts including tissu, hammock, and acrobalance: completely useless for a podcast. She continues to study, perform, and develop new work in NY and internationally. Keep an eye out for her artistic website which will include details on these new projects.",
    photo: Meghan
  },
  {
    name: "Dan Chaffkin",
    role: "Sound Designer/Roommate",
    bio:
      "Dan Chaffkin is a comedy and math person. He likes doing stand up and improv and making videos. He has been told that he would have a great singing voice if he took some lessons. Dan is a black sash in Shoalin Kung-Fu, and he is developing a fundamental theory of comedy using first-order predicate calculus. He has also been known to make himself laugh for twenty minutes by spelling out 'fart' three times in a game of Bananagrams.",
    photo: Dan
  },
  {
    name: "Sam Kellman",
    role: "Professor",
    bio:
      "Sam Kellman is an actor and writer from Syracuse, New York.  He recently graduated from The Neighborhood Playhouse theater conservatory and went on to star in Riding Lessons with The New Jersey Reparatory Company. He would like to thank Katherine Gorham for creating this amazing podcast and casting him!",
      photo: Sam
  },
  {
    name: "Mike Flandrau",
    role: "Scientist",
    bio:
      "Mike Flandrau is 5'9\" and 159lbs. That translates into 1.75 meters and 72.3 kilograms. He has brown hair and green eyes and a moderate athletic build. You can find him where he is and you won't find him where he isn't. Time is fleeting, so try to enjoy the moment. ",
    photo: Mike
  },

  {
    name: "Sara Neil",
    role: "Frog Mom/Social Media Coordinator",
    bio:
      "Sara Neil is a writer, performer, and grad student in library science and history at Queens College. She performs improv, watches a lot of tv and has a dog named Lucy. You can follow her twitter @sararoseneil for some real gold. Find her other work, somewhere, eventually, one day, when she finishes things and publishes them.",
    photo: Sara
  },
  {
    name: "James Harvey",
    role: "Music",
    bio:
      "James Harvey is a musician, comedian and musical theatre writer. His debut comedy special, The Bald-Faced Truth, is  currently available on Prime Video, Spotify and Itunes. James wrote the book, music and lyrics for The Crack in the Ceiling, which was presented at the New York Musical Theatre Festival and the New York International Fringe Festival, where it received the award for Overall Excellence in a Musical. He co-hosts The Second Cousins Show, a monthly variety show, and he can be heard every week on What Makes U Sing with Larry Owens, a Forever Dog podcast. ",
    photo: James
  },

  {
    name: "Lisa Wagner",
    role: "Tech Support",
    bio:
      "Lisa has a degree in Computer Science and has been working as a Developer and IT Project Manager for 5 years. Her most recent gig is with Memorial Sloan Kettering Cancer Center developing code to support cancer researchers.",
    photo: Lisa
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
    <React.Fragment>
      <div classes="container" className="About">
        <div className={classes.header}>
          <p>About</p>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {bios}
        </Masonry>
      </div>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    // fontFamily: "'Luckiest Guy', cursive",
    // fontSize: "1.2em",
    justifySelf: "center",
    fontSize: "3em",

    // paddingLeft: "1.5em",
    // paddingRight: "1.5em",
    // backgroundColor: "#3f7396",
    color: "black"
  },
  container: {
    // fontFamily: "'Raleway'"
  },
  // header: {
  //   // flexGrow: 1,
  //   paddingTop: ".2em",
  //   justifySelf: "center",
  //   fontSize: "2em",
  //   marginRight: "1em"
  // },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  logline: {
    fontSize: "1.3em"
  },
  frog: {
    justifySelf: "center",
    alignSelf: "center"
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
