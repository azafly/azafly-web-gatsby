import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import React from 'react';
import backImage from '../../../../../static/images/home/OBJECTS.png';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            backgroundImage: `url(${backImage})`,
            height: 600,
            width: '100%',

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // marginTop: -70,
            [theme.breakpoints.only('xs')]: {
                width: '90%',
                margin: 'auto'
            }
        },
        infoContainer1: {
            position: 'relative',
            width: 260,
            left: 370,
            top: 100,
            [theme.breakpoints.only('md')]: {
                left: 160
            },
            [theme.breakpoints.only('sm')]: {
                left: 320,
                width: 190
            },
            [theme.breakpoints.only('xs')]: {
                left: 130,
                width: 220
            }
        },
        infoContainer2: {
            position: 'relative',
            width: 360,
            left: 180,
            top: 160,
            [theme.breakpoints.only('md')]: {
                left: 50
            },
            [theme.breakpoints.only('sm')]: {
                left: 220
            },
            [theme.breakpoints.only('xs')]: {
                left: 20
            }
        },
        infoContainer3: {
            position: 'relative',
            width: 280,
            left: 450,
            top: 220,
            [theme.breakpoints.only('md')]: {
                left: 220
            },
            [theme.breakpoints.only('sm')]: {
                left: 370,
                width: 190
            },
            [theme.breakpoints.only('xs')]: {
                left: 180,
                width: 220
            }
        },
        notification: {
            position: 'relative',
            // marginRight: '20px',
            // marginBottom: '10px',
            padding: '10px',
            backgroundColor: 'white',

            minHeight: 70,
            color: '#4990A4',
            textAlign: 'left',
            font: "400 .9em 'Open Sans', sans-serif",
            border: '1px solid white',
            borderRadius: '10px',
            '&:after': {
                content: "''",
                position: 'absolute',
                width: '0',
                height: '0',
                borderTop: '15px solid white',
                borderRight: '15px solid transparent',
                borderLeft: '15px solid transparent',
                // bottom: '0'
                bottom: '-15px'
            }
        }
    })
);

interface Props {
    images: HomeImages;
}

export const Illustration = ({ images }: Props) => {
    const classes = useStyles();

    const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid;
    return (
        <Box className={classes.illustration}>
            <Box className={classes.infoContainer1}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography>Send money to almost any bank account.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer2}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography>Send cash for pickup at a thousands of partner locations around the world</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer3}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography>Send money directly to your recipient door</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
    // return <Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />;
};
