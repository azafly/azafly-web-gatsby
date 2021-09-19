import { makeStyles, Theme, createStyles } from '@material-ui/core';

import React from "react";
import Image, { FluidObject } from "gatsby-image"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            borderRadius: 25,
            position: 'relative',


        }
    }),

);

interface Props {
    images: any
}

export const Illustration = ({ images }: Props) => {
    const classes = useStyles()

    return < Image
        fluid={images.setupImage.childImageSharp.fluid}
        alt={'Main image'}
        // fixed={images.setupImage.childImageSharp.fixed}
        className={classes.illustration}
    />

}
