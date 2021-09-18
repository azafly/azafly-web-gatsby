import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";

import { useFetchHomeData } from '../../hooks/use-data';
import { getFormattedImageUrl } from '../../utils'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            [theme.breakpoints.up("sm")]: {
                justifyContent: 'flex-end',

            },
            [theme.breakpoints.down("md")]: {
                justifyContent: 'center',
            },
        },
        illustration: {
            borderRadius: 25
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()
    const frontMatter = useFetchHomeData()
    const imageUrl = getFormattedImageUrl(frontMatter.setupImage)

    return (
        <div className={classes.container}>
            <img src={imageUrl} className={classes.illustration}></img>
        </div>
    )
}
