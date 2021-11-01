import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { ServiceIllustration } from './illustration';

import { ServiceInfoBanner } from './info-banner';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100vw',
            overflowX: 'hidden',
            position: 'relative',
            padding: '50px 0px 0px 0px',
            background: 'white',
            [theme.breakpoints.down('sm')]: {
                padding: '40px 0px 40px 0px',
                marginBottom: 50
            }
        },
        titleWrapper: {
            color: theme.colors.black,
            '& p': {
                fontWeight: 175
            }
        },
        title: {
            textAlign: 'center',
            fontWeight: 900,
            color: theme.colors.black,
            fontFamily: 'Nunito',
            fontSize: 40,
            [theme.breakpoints.only('xs')]: {
                fontSize: 30
            }
        },
        subText: {
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontWeight: 500,
            padding: 10
        },
        serviceCardContainer: {
            width: '86vw',
            maxWidth: 1200,
            margin: 'auto',
            marginTop: 50
        },
        serviceCard: {
            height: 300,
            margin: 'auto',
            fontFamily: 'Nunito'
        }
    })
);

export const Services: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container justify='space-around' spacing={2} alignItems='center' className={classes.serviceCardContainer}>
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item xs={12} sm={12} md={7} style={{ marginBottom: 50 }}>
                        <ServiceInfoBanner />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item xs={10} sm={10} md={5}>
                        <ServiceIllustration />
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
};
