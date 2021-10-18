import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import React from 'react';
import backImage from '../../../../../static/images/home/globemap.png';
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
            left: 300,
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
                width: 200
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
                left: 10,
                width: 300
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
                left: 160,
                width: 200
            }
        },
        innerText: {
            fontSize: '18px',
            fontWeight: 500,
            [theme.breakpoints.only('xs')]: {
                fontSize: '10px'
            }
        },
        notification: {
            position: 'relative',

            padding: '10px',
            backgroundColor: 'white',
            minHeight: 50,
            color: '#4990A4',
            textAlign: 'left',
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
                        <Typography className={classes.innerText}>Send money to almost any bank account.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer2}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography className={classes.innerText}>
                            Send cash for pickup at a thousands of partner locations around the world
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer3}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography className={classes.innerText}>Send money directly to your recipient door</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
    // return <Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />;
};
