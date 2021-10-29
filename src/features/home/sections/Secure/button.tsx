import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Typography, Grid, Box, Button, Avatar, Link } from '@material-ui/core';
import React from 'react';
import { Link as RouteLink } from 'gatsby-theme-material-ui';
import playbtn from '../../../../../static/images/home/playBtn.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.only('xs')]: {
                marginBottom: 60
            }
        },
        avatar: {
            marginRight: '12.4px',
            width: '50px',
            height: '50px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.03)',
            [theme.breakpoints.only('xs')]: {
                marginRight: '10px',
                width: '26px',
                height: '26px'
            }
        },
        links: {
            color: '#4990A4',
            fontSize: '16px',

            [theme.breakpoints.only('xs')]: {
                fontSize: '14px'
            }
        },

        justify: {
            justifyContent: 'space-between',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center',
                margin: 'auto'
            }
        },
        actionButtonExplore: {
            top: '69',
            background: ' #4990A4',
            textTransform: 'capitalize',
            fontWeight: 600,
            padding: '10px 15px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            color: 'white',
            minWidth: 120,
            '&:hover': {
                background: ' #4990A4'
            },
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
                width: '100% !important',
                marginBottom: 20
            }
        }
    })
);

export const SecureButton = () => {
    const classes = useStyles();

    return (
        <motion.div className={classes.root}>
            <Box style={{ marginTop: 30 }}>
                <Grid container direction='row' spacing={1} className={classes.justify}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Button component={RouteLink} to='/signup' className={classes.actionButtonExplore}>
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={12} lg={6}>
                        <Grid container direction='row' justifyContent='center' alignItems='center'>
                            <Link href='/services' color='inherit' underline='none'>
                                <Avatar className={classes.avatar} alt='How it works' src={playbtn} />
                            </Link>
                            <Typography className={classes.links}>
                                <Link href='/services' color='inherit' underline='always'>
                                    See how it works?
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
};
