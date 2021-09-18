import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";
import { HomeMainIllustration } from '../../../../components/illustrations';
import Image, { FluidObject } from "gatsby-image";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '45vw',
            display: 'flex',
            marginRight: 30,
            [theme.breakpoints.up("sm")]: {
                justifyContent: 'flex-end',
                marginRight: '7vw'
            },
            [theme.breakpoints.only("xs")]: {
                marginRight: '2vw',

            },
            [theme.breakpoints.down("md")]: {
                justifyContent: 'center',
            },
        },
        illustration: {
            marginTop: - 100,
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                marginTop: - 140,
                width: '86vw'
            },
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()

    return (
        <div
            className={classes.container}>

            <img className={classes.illustration} src="https://cdn.pixabay.com/photo/2017/08/06/09/53/people-2590813_1280.jpg" alt="" style={{ borderRadius: 12, }} />
            {/* <HomeMainIllustration className={classes.illustration} color={'#4990a4'} /> */}
        </div>
    )
}
