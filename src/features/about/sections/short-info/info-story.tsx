import { makeStyles, Theme, createStyles, Box, Typography, Container } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 20,
            marginTop: 10,
            flexGrow: 1,
            marginLeft: '10vw',
            marginRight: '11vw',
            [theme.breakpoints.only('md')]: {
                marginLeft: '8vw'
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: '-30px'
            }
        },
        heading: {
            fontSize: 45,
            fontWeight: 'bolder',
            marginTop: 40
        }
    })
);

const InfoStory: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <div className={classes.heading}>Our story</div>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
                lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum
                neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat
                scelerisque varius morbi enim nunc faucibus.
            </Typography>
            <br />
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
                lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum
                neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat
                scelerisque varius morbi enim nunc faucibus.
            </Typography>
        </Box>
    );
};
export default InfoStory;
