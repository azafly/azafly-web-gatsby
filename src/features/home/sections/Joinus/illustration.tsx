import { makeStyles, Theme, createStyles, Box, Grid } from '@material-ui/core';
import React from 'react';
import joinBackImg from '../../../../../static/images/home/joinus.png';
import { HomeImages } from '../../../../createPages/templates/home';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: ' 50px !important',
            marginLeft: '40px !important',

            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: ' 10px !important'
            },
            [theme.breakpoints.only('sm')]: {
                margin: 'auto',
                marginTop: ' 10px !important'
            }
        },
        illustration: {
            height: '100%',
            margin: 'auto',
            width: '100%',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

            // marginTop: -70,
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                margin: 'auto'
            },
            [theme.breakpoints.only('sm')]: {
                width: '100%',
                margin: 'auto'
            }
        }
    })
);

interface Props {
    images: HomeImages;
}

export const JoinUsIllustration = ({ images }: Props) => {
    const classes = useStyles();

    const imageUrl = images?.heroMainImage1?.childImageSharp?.fluid;
    return (
        <Box className={classes.root}>
            <Box>
                <img className={classes.illustration} src={joinBackImg} alt='join us' />
            </Box>
        </Box>
    );
};
