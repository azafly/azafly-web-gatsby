import { makeStyles, Theme, createStyles, Container } from '@material-ui/core';
import React from 'react';
import InfoStory from './short-info/info-story';
import AboutUs from './about-us/about-us';
import FeatureContent from './featured-content/featured-content';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: 'white'
        }
    })
);
const AboutViewPage: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <InfoStory />
            <AboutUs />
            <FeatureContent />
        </Container>
    );
};
export default AboutViewPage;
