import React from 'react';
import Grid from '@mui/material/Grid';
import { Hidden, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

import { Illustration } from './illustration';
import { InfoBanner } from './info-banner';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        homePageHeroMain: {
            padding: '10px 0',
            position: 'relative',
            background: 'linear-gradient(102.84deg, #0D324D 1.08%, #224C6C 59.23%, #062741 97.46%)'
        },
        homePageHeroInner: {
            flexGrow: 1,
            minHeight: 700,
            padding: '50px 0px 0px 0px',
            margin: 'auto',
            maxWidth: 1920
        }
    })
);

export const HomePageHeroSection: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.homePageHeroMain}>
            <Grid container justifyContent='space-between' alignItems='center' className={classes.homePageHeroInner}>
                <Grid item xs={12} md={6} style={{ marginBottom: 50 }}>
                    <InfoBanner />
                </Grid>

                <Hidden xsDown>
                    <Grid item xs={12} md={6}>
                        <Illustration />
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
};
