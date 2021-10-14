import { Box, Grid, Hidden, Theme } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles, createStyles } from '@material-ui/styles';
import React from 'react';
import { Illustration } from './illustration';
import { InfoBanner } from './info-banner';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        homePageHeroMain: {
            position: 'relative',
            background: 'linear-gradient(102.84deg, #0D324D 1.08%, #224C6C 59.23%, #062741 97.46%)',
            width: '100%',
            minHeight: 600
        },
        homePageHeroInner: {
            flexGrow: 1,
            padding: '50px 50px 50px 0px',
            maxWidth: 1600,
            margin: 'auto',
            [theme.breakpoints.only('xs')]: {
                padding: 5
            }
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
            {/* <Hidden smDown>
                <HomeBGIllustration1 className={classes.homeBgllustration1} /> <HomeBGIllustration3 className={classes.homeBgllustration3} />
            </Hidden> */}

            <Grid container justify='space-around' spacing={3} alignItems='center' className={classes.homePageHeroInner}>
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item xs={12} sm={12} md={6} style={{ marginBottom: 50 }}>
                        <InfoBanner />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Illustration images={images} />
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};
