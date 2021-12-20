import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

interface InfoBannerProps {
    scrollers: any;
    title: string;
    subtitle?: string;
    information?: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        infoBanner_reviews: {
            zIndex: 999,
            alignSelf: 'start',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center'
            }
        },
        lightHeading: {
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: '#000000',
            opacity: 0.38,
            marginBottom: 20
        },
        largeHeading: {
            fontWeight: 900,
            fontSize: '2em',
            marginBottom: 20,
            fontFamily: 'Nunito',
            color: theme.colors.black,
            [theme.breakpoints.only('xs')]: {
                padding: 10
            }
        },
        paragraph: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: '1.3em',
            [theme.breakpoints.only('xs')]: {
                padding: 10
            }
        }
    })
);

export const InfoBanner: React.FC<InfoBannerProps> = ({ scrollers, title, subtitle, information }: InfoBannerProps) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={4} md={3} className={classes.infoBanner_reviews} alignContent={'flex-start'}>
            <div>
                <Typography className={classes.lightHeading}> {title}</Typography>
                <Typography className={classes.largeHeading}> {subtitle}</Typography>
                <Typography paragraph className={classes.paragraph}>
                    {information}
                </Typography>
            </div>
            {scrollers && scrollers()}
        </Grid>
    );
};
