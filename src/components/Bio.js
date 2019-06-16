import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    onHover = () => {
        this.setState({
            hovered: true
        });
    };
    render() {
        const { classes, name, role, bio, photo } = this.props;
        var delay = Math.floor(Math.random() * 900) + 200;

        return !this.state.hovered ? (
            <Fade in={true} timeout={delay}>
                <div onTouchStart={this.onHover} onMouseEnter={this.onHover} className={classes.headshot}>
                    <img className={classes.headshot} src={photo} />
                </div>
            </Fade>
        ) : (
            <Fade in={this.state.hovered} timeout={delay}>
                <Paper className={classes.container}>
                    <div className={classes.headshot}>
                        <img className={classes.headshot} src={photo} />
                    </div>
                    <div className={classes.text}>{name}</div>
                    <div className={classes.text}>{role}</div>
                    <div className={classes.bio}>{bio}</div>
                </Paper>
            </Fade>
        );
        // return (
        //     <Fade in={true} timeout={delay}>
        //         <Paper className={classes.container}>
        //             <div className={classes.headshot}>
        //                 <img className={classes.headshot} src={photo} />
        //             </div>

        //             <div className={classes.text}>{name}</div>
        //             <div className={classes.text}>{role}</div>
        //             <div className={classes.bio}>{bio}</div>
        //         </Paper>
        //     </Fade>
        // );
    }
}

const styles = theme => ({
    container: {
        textAlign: "center",
        backgroundColor: "#93bdd8",
        // backgroundColor: "#ffe860",
        padding: "1.5em"
    },
    headshot: {
        marginBottom: "1em",
        "& img": {
            maxHeight: "150px",
            maxWidth: "150px",
            margin: "0 auto",
            display: "block",

            borderRadius: "50%"
            // border: "solid 1px white"
        }
    },
    text: {
        fontSize: "1em"
    },
    bio: {
        textAlign: "justify"
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

export default withStyles(styles)(Bio);
