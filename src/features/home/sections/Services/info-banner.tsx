import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box, Link, Snackbar, InputAdornment, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            width: '85%',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.only('md')]: {
                marginLeft: '3vw',
                width: '100%'
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px 30px 10px 20px',
                marginLeft: '2vw',
                width: '100%'
            }
        },

        title: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '17%',
            textAlign: 'left',
            verticalAlign: 'top',
            textTransform: 'uppercase',
            color: '#4990A4',
            marginBottom: 10,
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                marginTop: 20
            }
        },
        content: {
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '33px',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                margin: 'auto',
                width: '100%',
                fontSize: '14px'
                // justifyContent: 'center !important'
            }
        },
        titleText: {
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',
            marginBottom: '40px',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                fontSize: '28px',
                lineHeight: '34px',
                marginBottom: '20px !important'
            }
        },
        heading: {
            marginTop: 30,
            marginBottom: 5,
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '32px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',
            '&:hover': {
                fontWeight: 600
            },
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                fontSize: '20px'
            }
        },
        customCard: {
            display: 'flex',
            border: 'none',
            boxShadow: 'none',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                justifyItems: 'center',
                justifyContent: 'center !important'
            }
        },
        circle: {
            background: 'transparent',
            height: '46px',
            width: '46px',
            justifyContent: 'center !important',
            border: '1px solid #0D324D',
            color: '#0D324D',
            '&:hover': {
                color: 'white',
                background: '#0D324D'
            }
        },
        icon: {
            alignItems: 'center',
            justifyContent: 'space-between',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                justifyContent: 'center !important'
            }
        },
        forward: {
            justifyContent: 'flex-end',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                justifyContent: 'center !important'
            }
        },
        backward: {
            justifyContent: 'flex-start',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                justifyContent: 'center !important'
            }
        },
        hr: {
            width: '100%',
            height: '25px',
            borderBottom: '1px solid #0D324D',
            transition: 'width 0.3s ease',
            marginBottom: 10,
            justifyContent: 'center !important',
            opacity: '40%',
            position: 'relative',
            '&:hover': {
                width: '167px',
                borderBottom: '4px solid #0D324D',
                opacity: '100%'
            },
            [theme.breakpoints.only('xs')]: {
                width: '126px',
                margin: 'auto',
                justifyContent: 'center !important',
                padding: 10
            }
        }
    })
);

export const ServiceInfoBanner = () => {
    const classes = useStyles();

    const theme = useTheme();
    const data = [
        { title: 'Lowest Fee', content: 'Our fee is the lowest in the market compare to any other', hoverWidth: '167px' },
        { title: ' Fast Transactions', content: 'The sky was cloudless and of a deep dark blue spectacle before.', hoverWidth: '267px' },
        { title: 'Safe & Secure', content: 'The sky was cloudless and of a deep dark blue spectacle before.', hoverWidth: '367px' }
    ];

    return (
        <motion.div>
            <Box className={classes.container}>
                <Typography className={classes.title}>Why choose us</Typography>
                <Typography className={classes.titleText}>Some of our advantages</Typography>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} container spacing={2}>
                            <Box clone order={{ xs: 1, sm: 1 }}>
                                <Grid item xs={12} sm={9} className={classes.backward} container>
                                    <Typography className={classes.heading}>{item.title}</Typography>
                                </Grid>
                            </Box>
                            <Box clone order={{ xs: 4, sm: 1 }}>
                                <Grid item xs={12} sm={2} className={classes.forward} container>
                                    <Box className={classes.circle} sx={{ borderRadius: '50%' }}>
                                        <KeyboardArrowRightIcon />
                                    </Box>
                                </Grid>
                            </Box>
                            <Box clone order={{ xs: 2, sm: 2 }}>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle1' component='p' className={classes.content}>
                                        {item.content}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box clone order={{ xs: 3, sm: 3 }}>
                                <Grid item xs={12} sm={11} justifyContent='center'>
                                    <Box className={classes.hr} />
                                </Grid>
                            </Box>
                        </Grid>
                    );
                })}
            </Box>
        </motion.div>
    );
};
