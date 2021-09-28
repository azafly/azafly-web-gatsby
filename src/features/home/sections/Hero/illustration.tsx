import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from 'react';
import Image from 'gatsby-image';

import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            borderRadius: 25,
            marginTop: -70,
            [theme.breakpoints.only('xs')]: {
                borderRadius: 15,
                width: '90%',
                margin: 'auto'
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
        <Image
            fluid={imageUrl}
            alt={'Main image'}
            className={classes.illustration}
        />
    );
};
