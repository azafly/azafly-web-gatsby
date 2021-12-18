import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';

import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            justifyContent: 'center',
            padding: 50,
            borderRadius: 8,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                margin: 'auto'
            }
        }
    })
);

export const ServiceIllustration: React.FC = () => {
    const handleFormatContent = useFormatContentBasedOnLocation();
    const classes = useStyles();
    const {
        whyChooseUs: { whyChooseUsImage }
    } = useFetchHomeData();

    return (
        <Box className={classes.illustration}>
            <img src={handleFormatContent(whyChooseUsImage)} alt='service' />
        </Box>
    );
};
