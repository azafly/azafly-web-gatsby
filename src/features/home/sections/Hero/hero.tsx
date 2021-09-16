import { Box, Grid, Hidden, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Illustration } from './illustration'
import { InfoBanner } from './info-banner';
import React from "react";
import { HomeBGIllustration2, HomeBGIllustration3 } from '../../../../components/illustrations/backgrounds'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        homePageHeroMain: {
            width: '100%',
            position: 'relative',
        },
        homePageHeroInner: {
            flexGrow: 1,
            background: '#F7F8F9',
            padding: 50,
            [theme.breakpoints.only('xs')]: {
                padding: 5,
            }
        },
        homeBgllustration2: {
            position: 'absolute',
            right: 0,
            top: -128,
            pointerEvents: 'none',
            opacity: 0.5,
            height: '110%',
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            }
        },
        homeBgllustration3: {
            position: 'absolute',
            left: 0,
            pointerEvents: 'none',
            bottom: 0,
            opacity: 0.6,
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            }

        }

    }),
);

interface HomePageHeroSectionProps {
    frontMatter: any
}



export const HomePageHeroSection = ({ frontMatter }: HomePageHeroSectionProps) => {
    const classes = useStyles()

    return (
        <div className={classes.homePageHeroMain}>
            <Hidden smDown>
                <HomeBGIllustration2 className={classes.homeBgllustration2} /> <HomeBGIllustration3 className={classes.homeBgllustration3} />
            </Hidden>

            <Grid container justify="space-around" spacing={3} alignItems="center" className={classes.homePageHeroInner}>
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <InfoBanner frontMatter={frontMatter} />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Illustration />
                    </Grid>
                </Box>
            </Grid>
        </div>


    );
}
