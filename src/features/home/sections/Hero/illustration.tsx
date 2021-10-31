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
            position: 'relative',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            [theme.breakpoints.only('xs')]: {
                width: '90%',
                margin: 'auto'
            }
        },
        infoContainer1: {
            position: 'absolute',
            width: 250,
            left: '50%',
            top: '20%',
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
        infoContainer2: {
            position: 'absolute',
            width: 250,
            left: '2%',
            top: '25%',
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
        infoContainer3: {
            position: 'absolute',
            width: 250,
            right: '5%',
            top: '50%',
            marginTop: 10,
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
        infoContainer4: {
            position: 'absolute',
            width: 250,
            right: '2%',
            top: '30%',
            marginTop: 20,
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
            fontSize: '0.85rem',
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
            color: '#040d21',
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
                        <Typography className={classes.innerText}>
                            The most <strong>affordable</strong> way to pay your school fees in 🇬🇧 and 🇪🇺.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer2}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography className={classes.innerText}>
                            The <strong>fastest</strong> way to pay for that important course in 🇺🇸 and 🇨🇦{' '}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer3}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography className={classes.innerText}>
                            The most <strong>efficient</strong> way to pay your urgent medical bill in 🇮🇳
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.infoContainer4}>
                <Box className={classes.notification}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <Typography className={classes.innerText}>
                            The <strong>surest</strong> way to pay your suppliers in China 🇨🇳
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
