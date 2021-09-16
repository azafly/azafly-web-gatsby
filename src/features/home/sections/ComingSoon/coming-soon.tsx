import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { Illustration, } from './illustration'
import { InfoBanner } from './info-banner';
// import { ComingSoonBG, ComingSoonBG2 } from 'components/backgrounds';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        comingSoonContainer: {
            position: 'relative',
            flexGrow: 1,
            color: '#FFFFFF',
            width: '100%',
            height: 750,
            paddingBottom: 50,
            background: theme.palette.primary.main,
            [theme.breakpoints.only('xs')]: {
                height: 'auto',
            },
        },
        inner: {
            flexGrow: 1,
            padding: '70px 10px',
            marginLeft: '6vw',
            width: '75%',
            [theme.breakpoints.only('xs')]: {
                width: '100vw',
                margin: 'auto'
            },
        },
        bgIllustration: {
            position: 'absolute',
            right: 0,
            height: '100%',
            opacity: 1.0,
            pointerEvents: 'none'
        },
        bgIllustration2: {
            position: 'absolute',
            right: 0,
            height: '100%',
            top: 30,
            opacity: 0.8,
            pointerEvents: 'none'
        }
    }),

);



export const ComingSoon = () => {
    const classes = useStyles()
    return (
        <div className={classes.comingSoonContainer}>
            {/* <ComingSoonBG className={classes.bgIllustration} />    <ComingSoonBG2 className={classes.bgIllustration2} /> */}
            <Grid container justify="space-around" spacing={3} alignItems="center" className={classes.inner}>
                <Grid item xs={12} sm={6}>
                    <Illustration />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoBanner />
                </Grid>
            </Grid>
        </div>

    );
}
