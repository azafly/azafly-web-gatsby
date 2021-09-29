import { makeStyles, Theme, createStyles, Box, Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 20,
            marginTop: 10,
            flexGrow: 1,
            marginLeft: '10vw',
            marginRight: '10vw',
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
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 40
        },
        heading2: {
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 40
        },
        card: {
            maxWidth: 400,
            minHeight: 300
        }
    })
);

const FeatureContent: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box textAlign='center'>
                <Typography variant='div' className={classes.heading}>
                    Our core values
                </Typography>
                <br />
                <Typography variant='div' className={classes.heading2}>
                    Global first | Inclusivity | integrity | Curiosity | Courageous | Creativity | Autonomous teams | Pursuit of Excelence
                </Typography>
            </Box>
            <br />
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
                lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum
                neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat
                scelerisque varius morbi enim nunc faucibus.
            </Typography>
            <br />
            <br />
        </Box>
    );
};
export default FeatureContent;
