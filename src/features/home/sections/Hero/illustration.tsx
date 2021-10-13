import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';
import Image from 'gatsby-image';
import backImage from '../../images/Objects.png';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            backgroundImage: `url(${backImage})`,
            height: 600,
            width: '100%',

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // marginTop: -70,
            [theme.breakpoints.only('xs')]: {
                width: '90%',
                margin: 'auto'
            }
        },
        notification: {
            position: 'relative',
            // marginRight: '20px',
            // marginBottom: '10px',
            padding: '10px',
            backgroundColor: 'white',
            width: 300,
            minHeight: 90,
            textAlign: 'left',
            font: "400 .9em 'Open Sans', sans-serif",
            border: '1px solid white',
            borderRadius: '10px',
            '&:after': {
                content: "''",
                position: 'absolute',
                width: '0',
                height: '0',
                borderTop: '15px solid white',
                borderRight: '15px solid transparent',
                borderLeft: '15px solid transparent',
                // bottom: '0'
                bottom: '-15px'
            }
        }
    })
);

interface Props {
    images: HomeImages;
}

export const Illustration = ({ images }: Props) => {
    const classes = useStyles();

    const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid;
    return (
        <Box className={classes.illustration}>
            <Box className={classes.notification}></Box>
            <Box className={classes.notification}></Box>
            <Box className={classes.notification}></Box>
        </Box>
    );
    // return <Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />;
};
