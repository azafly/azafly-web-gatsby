import { Box, Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import React from 'react';
import { Illustration } from './illustration';
import { InfoBanner } from './info-banner';
import { HomeImages } from '../../../../createPages/templates/home';

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
            maxWidth: 1920,
            [theme.breakpoints.only('xs')]: {}
        },
        homeBgllustration1: {
            position: 'absolute',
            left: 0,
            top: -100,
            pointerEvents: 'none',
            opacity: 0.7,
            height: '100%',
            [theme.breakpoints.only('xs')]: {
                left: -50,
                top: -90,

                height: 500
            }
        },
        homeBgllustration2: {
            position: 'absolute',
            right: 0,
            top: -128,
            pointerEvents: 'none',
            opacity: 0,
            height: '110%',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        homeBgllustration3: {
            position: 'absolute',
            left: 0,
            pointerEvents: 'none',
            bottom: 0,
            opacity: 0.8,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    })
);

interface Props {
    images: HomeImages;
}

export const HomePageHeroSection = ({ images }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.homePageHeroMain}>
            <Grid container justify='space-between' spacing={2} alignItems='center' className={classes.homePageHeroInner}>
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item xs={12} md={6} style={{ marginBottom: 50 }}>
                        <InfoBanner />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Illustration images={images} />
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};
