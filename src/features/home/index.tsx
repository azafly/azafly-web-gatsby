import React, { createRef } from 'react';

// Material
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { HomePageHeroSection } from './sections/Hero/hero';
import { HomePageReviewsSection } from './sections/Reviews';
import { JoinUs } from './sections/Joinus';
import { QuestionsTabsContainer } from '../faq/questions-tab';
import { MainInfo } from './sections/MainInfo';
import { Services } from './sections/why-choose-us';

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
            background: theme.palette.background.default
        }
    })
);

const Home: React.FC = () => {
    const classes = useStyles();
    const faqRef = createRef();

    return (
        <div className={classes.container}>
            <main className={classes.content}>
                <div className={classes.drawerHeader}></div>
                <HomePageHeroSection />
                <Services />
                <div className={classes.setupAndDesignSection}>
                    <MainInfo />
                </div>
                <QuestionsTabsContainer ref={faqRef} />
                <JoinUs />
                <HomePageReviewsSection />
            </main>
        </div>
    );
};

export default Home;
