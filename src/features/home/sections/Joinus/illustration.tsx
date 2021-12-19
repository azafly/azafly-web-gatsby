import React from 'react';
import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';

import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: ' 50px !important',
            marginLeft: '40px !important',

            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: ' 10px !important'
            },
            [theme.breakpoints.only('sm')]: {
                margin: 'auto',
                marginTop: ' 10px !important'
            }
        },
        illustration: {
            height: '100%',
            margin: 'auto',
            width: '100%',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: 'auto'
            }
        }
    })
);

export const JoinUsIllustration = (): JSX.Element => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    const {
        mainCTA: { mainCTAImage }
    } = useFetchHomeData();
    console.log(handleFormatContent(mainCTAImage));
    return (
        <Box className={classes.root}>
            <Box>
                <img className={classes.illustration} src={handleFormatContent(mainCTAImage)} alt='join us' />
            </Box>
        </Box>
    );
};
