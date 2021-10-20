import { makeStyles, Theme, createStyles, Grid, Box, Typography } from '@material-ui/core';
import React from 'react';
import serviceImage from '../../../../../static/images/home/services.png';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            // backgroundImage: `url(${serviceImage})`,
            // minHeight: '618.35px',
            justifyContent: 'center',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // marginTop: -70,
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

export const ServiceIllustration = ({ images }: Props) => {
    const classes = useStyles();

    const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid;
    return (
        <Box className={classes.illustration}>
            <img src={serviceImage} alt='service' />
        </Box>
    );
    // return <Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />;
};
