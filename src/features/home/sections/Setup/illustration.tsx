import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";
import { EasySetupvgComponent } from '../../../../components/illustrations';

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
            marginBottom: -190,
            marginTop: -220,
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                marginBottom: -100,
                marginTop: -220
            },
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <EasySetupvgComponent className={classes.illustration} color={'#4990a4'} />
        </div>
    )
}
