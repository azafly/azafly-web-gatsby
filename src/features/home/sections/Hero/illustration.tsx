import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";
import { HomeMainIllustration } from '../../../../components/illustrations';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            [theme.breakpoints.up("sm")]: {
                justifyContent: 'flex-end',
                marginRight: '7vw'
            },
            [theme.breakpoints.only("xs")]: {
                marginRight: '2vw',

            },
            [theme.breakpoints.down("md")]: {
                justifyContent: 'center',
            },
        },
        illustration: {
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                marginTop: - 140,
                width: '86vw'
            },
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()

    return (
        <div
            className={classes.container}>
            <HomeMainIllustration className={classes.illustration} color={'#4990a4'} />
        </div>
    )
}
