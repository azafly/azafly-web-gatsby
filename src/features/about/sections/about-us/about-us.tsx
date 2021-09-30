import { makeStyles, Theme, createStyles, Box, Grid } from '@material-ui/core';

import React from 'react';
import AboutUsCard from './card';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 20,
            marginLeft: 30
        },
        imgContainer: {
            marginTop: 30,
            [theme.breakpoints.only('xs')]: {
                marginTop: 20,
                alignContent: 'center',
                alignItems: 'center'
            }
        },
        heading: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 30
        }
    })
);

const AboutUs: React.FunctionComponent = () => {
    const classes = useStyles();
    const links = [
        {
            title: 'Our Goals',
            subtitle: 'Read more',
            page: 'about/our-goals',
            image: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80'
        },
        {
            title: 'Our Leaders',
            subtitle: 'Meet the team',
            page: 'about/our-leaders',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Awards',
            subtitle: 'Read more',
            page: '/about/awards',
            image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80'
        },
        {
            title: 'News',
            subtitle: 'View all news',
            page: '/about/news',
            image: 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Partnerships',
            subtitle: 'Read more',
            page: '/about/partnerships',
            image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Events',
            subtitle: 'View all events',
            page: '/about/events',
            image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        }
    ];
    return (
        <Box className={classes.root}>
            <div variant='div' className={classes.heading}>
                About us
            </div>
            <Grid container direction='row' spacing={5} className={classes.imgContainer}>
                {links.map((link, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                            <AboutUsCard title={link.title} subtitle={link.subtitle} images={link.image} page={link.page} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
export default AboutUs;
