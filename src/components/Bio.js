import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const Bio = props => {
    const { classes, name, role, bio } = props;
    var delay = Math.floor(Math.random() * 900) + 200  
    return (
        <Fade in={true}  timeout={delay}>
            <div className={classes.container}>
                <div className={classes.headshot}>Headshot</div>

                <div className={classes.text}>{name}</div>
                <div className={classes.text}>{role}</div>
                <div className={classes.text}>{bio}</div>
            </div>
        </Fade>
    );
};

const styles = theme => ({
    container: { textAlign: "center" },
    headshot: {
        marginBottom: "1em",
        fontSize: "1.2em"
    },
    text: {
        fontSize: "1em"
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

export default withStyles(styles)(Bio);
