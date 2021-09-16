import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            background: theme.colors.black,
            height: 500,
            color: 'white'

        },
        titleWrapper: {
            textAlign: 'center'
        },
        title: {
            fontSize: 40,
            fontWeight: 'bold',

        },
        subText: {
            fontSize: 30,
        }
    })
);

export const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            Footer here
        </div>
    )
}
