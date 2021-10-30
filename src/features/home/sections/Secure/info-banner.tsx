import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            // display: 'flex',
            // flexDirection: 'column',
            [theme.breakpoints.only('xs')]: {
                alignItems: 'center',
                margin: 10,
                marginTop: -20,
                marginBottom: 50,
                padding: 10
            }
        },

        banner: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '17%',
            textTransform: 'uppercase',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                fontSize: '11px',
                textAlign: 'center',
                width: '100%'
            }
        },

        content: {
            marginTop: 20,
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '185.52%',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                // justifyContent: 'center',
                fontSize: '14px',
                textAlign: 'center',
                width: '100%'
            }
        },
        titleHeading: {
            color: theme.colors.black,
            fontSize: '42px',
            fontFamily: 'Nunito',
            textAlign: 'left',
            fontWeight: 900,
            marginBottom: 30,
            letterSpacing: '-3%',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                margin: 'auto',
                marginBottom: 20
            }
        },
        link: {
            color: '#4990A4',
            fontSize: '16px',
            [theme.breakpoints.only('xs')]: {
                fontSize: '14px'
            }
        },
        paragraph: {
            fontWeight: 450,
            lineHeight: 1.5,
            fontSize: '1rem',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                margin: 'auto',
                fontSize: '0.9rem'
            }
        },

        root: {},
        btn: {
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center !important'
            }
        }
    })
);

interface InfoBannerProps {
    isMobileScreenSize?: boolean;
}

export const InfoBanner = () => {
    const classes = useStyles();

    return (
        <motion.div className={classes.container}>
            <Box>
                <Grid item xs={12}>
                    <Typography className={classes.banner}>Lorem ipsum</Typography>
                    <Typography variant='h3' className={classes.titleHeading}>
                        Vitae nulla ac purus pharetra
                    </Typography>
                    <Grid container className={classes.content}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim auctor massa ut et sagittis. Justo facilisi massa eu
                            mauris adipiscing. Vel ut semper tristique.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
};
