import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
// import { GlobeTravel } from 'components'
import { Button, } from '@material-ui/core';
import { Link } from "gatsby-theme-material-ui";

interface ServiceCardProps {
    icon: React.ReactElement,
    paragraph?: string
    heading: string
    actionText: string
    actionIcon?: React.ReactElement
    actionRoute?: string
}

import { useHomeImageData } from '../../hooks/use-images'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 'auto',
            alignSelf: 'start',
            borderRadius: 12,
            backgroundColor: theme.palette.background.default,
            paddingTop: 50,
            boxShadow: 'rgba(0, 27, 71, 0.16) 0px 29px 32px -25px',
        },
        media: {
            margin: 'auto',
            width: '100%',
            display: 'flex'
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        cardAction: {
            marginTop: 10,
            marginBottom: 30,
            display: 'flex',
            justifyContent: 'center'
        },
        mainButton: {
            textTransform: 'none',
            minWidth: 150,
            boxShadow: 'none',
            margin: theme.spacing(1),
            background: `${theme.colors.mainGreen}`,
        },
        learnMore: {
            textDecoration: 'none',
            width: '100%',
            margin: 'auto',
            '& .text': {
                fontWeight: 400,
                fontSize: '0.8rem',
                color: theme.colors.mainGreen,
                textTransform: 'none',
                textAlign: 'center',
                marginTop: 10,
                cursor: 'pointer',
            }
        },
        heading: {
            fontWeight: 700,
            color: '#0d324d',
            padding: '20px 0px',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontFamily: 'Nunito',
        },
        '& svg': {
            width: 350,
            margin: 'auto',
            height: 250
        },
        paragraph: {
            fontWeight: 400,
            fontSize: '0.9rem',
            color: '#999999',
            textAlign: 'center'

        },
        description: {
            fontSize: '0.9rem',
        },

    }),
);


export function ServiceCard({ icon, heading, actionText, actionIcon, actionRoute }: ServiceCardProps) {
    const classes = useStyles();



    return (
        <Card className={classes.root}>
            <CardMedia>
                <div className={classes.media}>
                    {icon}
                </div>
            </CardMedia>
            <CardContent>
                <Typography color="textSecondary" className={classes.heading}>
                    {heading}
                </Typography>
                <Typography component="p" className={classes.paragraph}>
                    {"We'll consult you over video for free"}

                </Typography>
                <Typography component="p" className={classes.paragraph}>
                    Our advisors will guide you through your options.
                    Helping you to understand.
              </Typography>
                {/* // TODO Go to Services */}
                <Link to="/booking" className={classes.learnMore}>
                    <Typography className={'text'}>Learn more</Typography>
                </Link>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link style={{ textDecoration: 'none' }} to={actionRoute}><Button endIcon={actionIcon} className={classes.mainButton} color={'primary'} variant={'contained'} size={'medium'}> {actionText}</Button></Link>
            </CardActions>
        </Card >
    );
}
