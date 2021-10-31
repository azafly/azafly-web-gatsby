import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Container } from '@material-ui/core';
import React from 'react';
import { JoinUsIllustration } from './illustration';
import { JoinUsInforBanner } from './info-banner';
import { JoinUsBotton } from './button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white'
        },
        paper: {
            width: '100%',
            minHeight: '621px',
            marginBottom: '100px',
            background: '#0D324D !important',
            borderRadius: '50px',
            [theme.breakpoints.only('xs')]: {
                minHeight: '715px'
            }
        }
    })
);
export const JoinUs = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container justify='center' alignItems='center' className={classes.paper}>
                <Grid item xs={11} sm={11} md={12}>
                    <Container>
                        <Grid container spacing={2}>
                            <Box clone order={{ xs: 1, sm: 1 }}>
                                <Grid item xs={11} sm={11} md={6}>
                                    <JoinUsInforBanner />
                                    <Box display={{ xs: 'none', lg: 'block', sm: 'block' }}>
                                        <JoinUsBotton />
                                    </Box>
                                </Grid>
                            </Box>

                            <Box clone order={{ xs: 2, sm: 2 }}>
                                <Grid item xs={11} sm={10} md={5}>
                                    <JoinUsIllustration />
                                </Grid>
                            </Box>

                            <Box clone order={{ xs: 3 }} display={{ xs: 'block', lg: 'none', sm: 'none' }}>
                                <Grid item xs={11}>
                                    <JoinUsBotton />
                                </Grid>
                            </Box>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
};
