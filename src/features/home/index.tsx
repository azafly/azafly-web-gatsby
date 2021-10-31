import React from 'react';

// Material
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { Services } from './sections/Services/services';
import { HomePageHeroSection } from './sections/Hero/hero';
import { HomePageReviewsSection } from './sections/Reviews';
import { Secure } from './sections/Secure/secure';

import { QuestionsTabsContainer } from '../faq/questions-tab';
import { JoinUs } from './sections/Joinus';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            margin: 'auto',
            overflowX: 'hidden',
            marginTop: -95
        },
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        hide: {
            display: 'none'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            background: theme.palette.background.default,
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
            height: 0
        },
        content: {
            maxWidth: '100vw',
            overflowX: 'hidden',

            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        setupAndDesignSection: {
            position: 'relative',
            background: theme.palette.background.default,
            paddingTop: 120
        }
    })
);

interface HomeViewProps {
    images: any;
}

const Home = ({ images }: HomeViewProps) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <main className={classes.content}>
                <div className={classes.drawerHeader}></div>
                <HomePageHeroSection images={images} />
                <Services />
                <div className={classes.setupAndDesignSection}>
                    <Secure />
                    <HomePageReviewsSection />
                </div>
                <Box style={{ maxWidth: 1400, margin: 'auto' }}>
                    <QuestionsTabsContainer />
                </Box>
                <JoinUs />
            </main>
        </div>
    );
};

export default Home;
