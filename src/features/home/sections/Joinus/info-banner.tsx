import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';

import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: ' 70px !important',
            marginLeft: '40px !important',
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: ' 30px !important'
            }
        },

        banner: {
            width: '81px',
            height: '30px',
            left: '431.96px',
            top: '5578.47px',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '0.17em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            opacity: 0.7,
            [theme.breakpoints.only('xs')]: {
                fontSize: '11px',
                textAlign: 'center',
                width: '100%'
            }
        },
        titleHeading: {
            marginTop: '20px !important',
            width: '482.67px',
            height: '102px',
            left: '431.96px',
            top: '5578.47px',
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            [theme.breakpoints.only('xs')]: {
                fontSize: '26px',
                textAlign: 'center',
                width: '100%',
                marginTop: '5px !important',
                lineHeight: '31px',
                height: '53px'
            }
        },
        content: {
            marginTop: 20,
            fontWeight: 500,
            width: '482.67px',
            height: '96px',
            left: '431.96px',
            top: '5748.47px',
            fontSize: '18px',
            lineHeight: '185.52%',

            color: '#FFFFFF',
            opacity: 0.7,
            [theme.breakpoints.only('xs')]: {
                // justifyContent: 'center',
                fontSize: '14px',
                textAlign: 'center',
                width: '100%'
            }
        }
    })
);

export const JoinUsInforBanner = (): JSX.Element => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    const {
        mainCTA: { mainCTAMainHeading, mainCTAShortHeading, mainCTAInfoText }
    } = useFetchHomeData();
    return (
        <Box className={classes.root}>
            <Box>
                <Typography className={classes.banner}>{handleFormatContent(mainCTAShortHeading)}</Typography>
                <Typography variant='h3' className={classes.titleHeading}>
                    {handleFormatContent(mainCTAMainHeading)}
                </Typography>
                <Grid container className={classes.content}>
                    <Typography>{handleFormatContent(mainCTAInfoText)}</Typography>
                </Grid>
            </Box>
        </Box>
    );
};
