import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

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
            fontWeight: 800,
            fontSize: '16px',
            lineHeight: '30px',
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
            fontWeight: 700,
            fontFamily: 'Nunito Sans',
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            [theme.breakpoints.only('xs')]: {
                fontSize: '26px',
                textAlign: 'center',
                width: '100%',
                marginTop: '5px !important',
                lineHeight: '31px'
            }
        },
        content: {
            marginTop: 20,
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '185.52%',
            color: '#FFFFFF',
            opacity: 0.7,
            [theme.breakpoints.only('xs')]: {
                fontSize: '14px',
                textAlign: 'center',
                width: '100%'
            }
        }
    })
);

export const JoinUsInfoBanner = (): JSX.Element => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    const {
        mainCTA: { mainCTAMainHeading }
    } = useFetchHomeData();
    return (
        <Box className={classes.root}>
            <Box>
                <Typography variant='h3' className={classes.titleHeading}>
                    {handleFormatContent(mainCTAMainHeading)}
                </Typography>
            </Box>
        </Box>
    );
};
