import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";


import Image, { FluidObject } from "gatsby-image";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            borderRadius: 25,
            [theme.breakpoints.only('xs')]: {
                borderRadius: 15,
                width: '90%',
                margin: 'auto'
            }
        }
    }),

);

interface Props {
    images: any
}

export const Illustration = ({ images }: Props) => {
    const classes = useStyles()

    const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid
    return < Image fluid={imageUrl} alt={'Main image'} className={classes.illustration} />

}
