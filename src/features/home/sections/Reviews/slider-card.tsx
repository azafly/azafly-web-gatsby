import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';

import { StarRating } from '../../../../components/star-ratings';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        review_card_container: {
            margin: 5,
            maxWidth: 320,
            zIndex: 999
        },
        paragraph: {
            fontSize: '0.9em',
            color: '#044941',
            fontWeight: 300
        },
        flex: {
            display: 'flex'
        },
        starName: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 20,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 10
            }
        },
        title: {
            fontWeight: 700,
            fontSize: '1.1em',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9em'
            }
        },
        ratingStars: {
            [theme.breakpoints.down('sm')]: {
                fontSize: 15
            }
        },
        avatar: {
            height: 70,
            width: 70
        }
    })
);

interface ReviewCardProps {
    text?: string;
    src?: string;
    name: string;
}

export const SliderCard = ({ text, src, name }: ReviewCardProps) => {
    const classes = useStyles();
    const [rating, setRating] = useState(5);

    return (
        <div className={classes.review_card_container}>
            <Card elevation={0}>
                <CardContent>
                    <Typography className={classes.paragraph} gutterBottom paragraph>
                        {text ||
                            'Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque lacus ligula, dapibus nec dignissim Sed non dui aliquam, ullamcorper est non'}
                    </Typography>
                    <div className={classes.flex}>
                        <Avatar aria-label='recipe' alt={'avatar'} src={src} className={classes.avatar} sizes={'small'} />

                        <div className={classes.starName}>
                            <Typography className={classes.title} color='textSecondary' gutterBottom variant={'h6'}>
                                {name}
                            </Typography>
                            <StarRating rating={rating} setRating={setRating} classNames={classes.ratingStars} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
