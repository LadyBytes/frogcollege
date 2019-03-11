import React from "react";
import { withStyles } from "@material-ui/core/styles";

const Bio = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.headshot}>Headshot</div>

            <div className={classes.text}>BioBioBioBioBioBio</div>
            <div className={classes.text}>BioBioBioBioBioBio</div>
            <div className={classes.text}>BioBioBioBioBioBio</div>
        </div>
    );
};

const styles = theme => ({
    container: {textAlign: "center",},
    headshot: {
        marginBottom: '1em',
        fontSize: '1.2em',
    },
    text: {
        fontSize: '1em',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

export default withStyles(styles)(Bio);
