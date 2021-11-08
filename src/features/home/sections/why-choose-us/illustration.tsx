import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';
import serviceImage from '../../../../../static/images/home/joinus.png';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            boxShadow: '0 2px 20px 0 rgba(0,0,0,.05) !important',
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

interface Props {
    images: HomeImages;
}

export const ServiceIllustration = () => {
    const classes = useStyles();

    // const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid;
    return (
        <Box className={classes.illustration}>
            <img src={serviceImage} alt='service' />
        </Box>
    );
    // return <Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />;
};
