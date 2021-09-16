import React from 'react'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { useCardContainerStyle } from '../classes'


import { Cards } from './card';

export const CardsContainer = () => {
    const classes = useCardContainerStyle()
    return (
        <>
            <Hidden mdUp>
                <Typography variant="h5" color="textPrimary" className="font-bold text-center mt-5">Featured Topics</Typography>
            </Hidden>
            <Grid container className={classes.cards} spacing={5} alignContent="center">
                {[1, 2, 3, 4].map(card => <Cards />)}
            </Grid>
            <Hidden smDown>
                <Typography variant="h5" color="textPrimary" className="font-bold text-center mt-5">Featured Topics</Typography>
            </Hidden>
        </>
    )
}
