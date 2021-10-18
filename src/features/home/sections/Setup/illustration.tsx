import { makeStyles, Theme, createStyles } from '@material-ui/core';

import React from 'react';
import Image from 'gatsby-image';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            borderRadius: 25,
            position: 'relative',
            width: '90%',
            margin: 'auto'
        }
    })
);

interface Props {
    images: HomeImages;
}

export const Illustration = ({ images }: Props) => {
    const classes = useStyles();

    return (
        <div></div>
        // <Image
        //     // fluid={}
        //     // fluid={images.setupImage.childImageSharp.fluid}
        //     alt={'Main image'}
        //     // fixed={images.setupImage.childImageSharp.fixed}
        //     className={classes.illustration}
        // />
    );
};
