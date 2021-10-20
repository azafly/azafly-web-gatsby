import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box, Link, Snackbar, InputAdornment, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.only('md')]: {
                marginLeft: '3vw'
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px 30px 10px 20px',
                marginLeft: '2vw'
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
            color: '#4990A4'
        },
        content: {
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '33px',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#4990A4'
        },
        titleText: {
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D'
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
            }
        },
        customCard: {
            display: 'flex',
            border: 'none',
            boxShadow: 'none',
            '&:hover + *': {}
        },
        hr: {
            width: '556px',
            height: '25px',
            borderBottom: '1px solid #0D324D',
            transition: 'width 0.3s ease',
            marginBottom: 30,
            opacity: '40%',
            position: 'relative',
            '&:hover': {
                width: '167px',
                borderBottom: '4px solid #0D324D',
                opacity: '100%'
            }
        }
    })
);

export const ServiceInfoBanner = () => {
    const classes = useStyles();

    const theme = useTheme();

    return (
        <motion.div>
            <Box className={classes.container}>
                <Typography className={classes.title}>Why choose us</Typography>
                <Typography className={classes.titleText}>Some of our advantages</Typography>

                <Box className={classes.customCard}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography component='div' variant='h5' className={classes.heading}>
                            Lowest Fee
                        </Typography>
                        <Typography variant='subtitle1' component='p' className={classes.content}>
                            Our fee is the lowest in the market compare to any other
                        </Typography>
                        <Box className={classes.hr} />
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};
