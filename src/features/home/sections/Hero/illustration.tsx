import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";

import { getFormattedImageUrl } from '../../utils'
import { useFetchHomeData } from '../../hooks/use-data';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            borderRadius: 25,
            [theme.breakpoints.only('xs')]: {
                width: '88vw',
                margin: 'auto',
                borderRadius: 15,
            }
        }
    }),

);


export const Illustration = () => {
    const classes = useStyles()
    const frontMatter = useFetchHomeData()

    const imageUrl = getFormattedImageUrl(frontMatter.heroMainImage1)


    return <img className={classes.illustration} src={imageUrl} />
}
