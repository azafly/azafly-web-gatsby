
import React from 'react';
import clsx from 'clsx';


// Material
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import { HomeBGIllustration6, HomeBGIllustration7 } from '../../components/illustrations/backgrounds';
import { ComingSoon } from './sections/ComingSoon/coming-soon';
import { Services } from './sections/Services/services';
import { HowToSetUp } from './sections/Setup/how-to-setup';
import { HomePageHeroSection } from './sections/Hero/hero'
import { HomePageReviewsSection } from './sections/Reviews'
import { Secure } from './sections/Secure/secure';




const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            margin: 'auto',
            overflowX: 'hidden',
        },
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        hide: {
            display: 'none',
        },
        menuIcon: {
            color: theme.palette.primary.main
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            background: 'white',
            filter: 'brightness(0.95)'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            background: theme.palette.background.default,
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
            height: 0,
        },
        content: {
            maxWidth: '100vw',
            overflowX: 'hidden',
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        setupAndDesignSection: {
            position: 'relative',
            background: theme.palette.background.default,
            paddingTop: 120
        },
        setUpBackgroundVector1: {
            position: 'absolute',
            left: 0,
            opacity: 0.5,
            [theme.breakpoints.only('xs')]: {
                top: -40,
                opacity: 0.1
            },
        },
        setUpBackgroundVector2: {
            position: 'absolute',
            right: 0,
            top: 0,
            opacity: 0.3,
            [theme.breakpoints.only('xs')]: {
                opacity: 0.1
            },
        }
    }),
);


interface HomePops {
    frontMatter: any
}

const Home = ({ frontMatter }: HomePops) => {
    const classes = useStyles();



    return (
        <div className={classes.container}>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader}></div>
                <HomePageHeroSection frontMatter={frontMatter} />
                <Services />
                <div className={classes.setupAndDesignSection}>
                    < HomeBGIllustration6 className={classes.setUpBackgroundVector1} />
                    < HomeBGIllustration7 className={classes.setUpBackgroundVector2} />
                    <HowToSetUp />
                    <Secure />
                    <HomePageReviewsSection />
                </div>
                <ComingSoon />
            </main>
        </div>
    )
}

export default Home


