import { makeStyles, Theme, createStyles, Box, Typography, Container, Grid } from '@material-ui/core';
import { margin } from '@mui/system';

import React from 'react';
import AboutUsCard from './card';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 20,
            marginLeft: 30
        },
        heading: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 40
        }
    })
);

const AboutUs: React.FunctionComponent = () => {
    const classes = useStyles();
    const links = [
        {
            title: 'Our Goals',
            subtitle: 'Read more',
            image: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80'
        },
        {
            title: 'Our Leaders',
            subtitle: 'Meet the team more',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Awards',
            subtitle: 'Read more',
            image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80'
        },
        {
            title: 'News',
            subtitle: 'View all news',
            image: 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Partnerships',
            subtitle: 'Read more',
            image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Events',
            subtitle: 'View all events',
            image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        }
    ];
    return (
        <Box className={classes.root}>
            <Typography variant='div' className={classes.heading}>
                About us
            </Typography>
            <Grid container direction='row' spacing={2} style={{ marginTop: 20 }}>
                {links.map((link, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <AboutUsCard key={index} title={link.title} subtitle={link.subtitle} images={link.image} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
export default AboutUs;
