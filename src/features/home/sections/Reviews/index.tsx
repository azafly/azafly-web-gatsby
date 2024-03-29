import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

import { ReviewSliders } from './sliders';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100vw',
            position: 'relative',
            paddingLeft: '5vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 150,
            paddingTop: 250,
            zIndex: 999,
            marginTop: -100,
            background: `linear-gradient(360deg, rgba(73,144,164,1) -100%, rgba(115,171,185,1) 0%, rgba(247,248,249,0.43461134453781514) 100%, rgba(145,190,200,0.7343312324929971) 20%)`,
            [theme.breakpoints.only('xs')]: {
                paddingLeft: 0,
                paddingTop: 120,
                paddingBottom: 180
            }
        },
        bgIllustration: {
            position: 'absolute',
            bottom: -50,
            left: -50,
            pointerEvents: 'none',
            zIndex: -1
        }
    })
);

export const HomePageReviewsSection: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ReviewSliders />
            <div className={classes.bgIllustration}></div>
        </div>
    );
};
