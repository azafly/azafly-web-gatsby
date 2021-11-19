import { Link as RouteLink } from 'gatsby-theme-material-ui';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box, Button, Link } from '@material-ui/core';
import React from 'react';

import { RipplePlayButton } from '../../../../components/common/ripple-button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '40px !important',
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginBottom: ' 30px !important'
            }
        },
        btn: {
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center !important'
            }
        },
        links: {
            color: 'white',
            fontSize: '16px',
            [theme.breakpoints.only('xs')]: {
                fontSize: '14px'
            }
        },

        justify: {
            justifyContent: 'space-between',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center'
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
            width: '20ch',
            '&:hover': {
                background: ' #4990A4'
            },
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center',
                width: '100% !important',
                marginBottom: 20
            }
        }
    })
);

export const JoinUsButton: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} style={{ marginTop: 50 }}>
            <Grid container direction='row' className={classes.justify} alignItems={'center'}>
                <Grid item xs={12} sm={3} md={5}>
                    <Button component={RouteLink} to='/signup' className={classes.actionButtonExplore}>
                        Get Started
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={5} direction='row'>
                    <Box className={classes.btn}>
                        <Grid container direction='row' alignItems='center' justifyContent='center'>
                            <RipplePlayButton />
                            <Typography className={classes.links}>
                                <Link href='/services' color='inherit' underline='always'>
                                    See how it works?
                                </Link>
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
