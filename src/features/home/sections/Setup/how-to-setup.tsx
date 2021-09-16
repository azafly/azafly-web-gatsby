import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { Illustration } from './illustration'
import { InfoBanner } from './info-banner';
import React, { useState } from "react";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flexGrow: 1,
            width: '80%',
            margin: 'auto',
            paddingTop: 20,
            [theme.breakpoints.only("xs")]: {
                marginTop: 10,
                padding: '10px 10px',
                width: '100%',
                margin: 'auto',
                marginBottom: 80
            },
            [theme.breakpoints.only('md')]: {
                width: '80%',
            },
            [theme.breakpoints.only('sm')]: {
                width: '85%',
            },
        },
    }),
);

interface HomePageHeaderSectionProps {
    isMobileScreenSize?: boolean
}


export const HowToSetUp = () => {
    const classes = useStyles()
    return (

        <Grid container justify="space-around" className={classes.container} spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
                <Illustration />
            </Grid>
            <Grid item xs={12} sm={6}>
                <InfoBanner />
            </Grid>
        </Grid>

    );
}
