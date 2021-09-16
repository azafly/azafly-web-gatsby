import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, } from '@material-ui/core';
import React from "react";
import { ServicesBG2 } from '../../../../components/illustrations/backgrounds';
import { ServiceCard } from './service-card';
import { PayOnline, Travellers, ConnectedWord } from '../../../../components/illustrations';
import { CalendarSvgComponent } from '../../../../components/icons/calendar';


const services = [
    {
        icon: <PayOnline
            style={{
                width: 175,
                margin: 'auto',
                height: 150
            }} />,
        heading: 'International Payments',
        paragraph: '',
        actionText: 'Make a payment',
        actionRoute: '/payment',
        redirectParam: 'tobeDecided'
    },
    {
        icon: <Travellers style={{
            width: 175,
            margin: 'auto',
            height: 150
        }} />,
        heading: 'Immigration consultation',
        paragraph: '',
        actionText: 'Consult for Free',
        actionRoute: '/booking',
        actionIcon: <CalendarSvgComponent />
    },
    {
        icon: <ConnectedWord
            style={{
                width: 175,
                margin: 'auto',
                height: 150
            }} />,
        heading: 'Explore the world',
        paragraph: '',
        actionText: 'Start Now',
        actionRoute: '/booking',
    }

]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100vw',
            overflowX: 'hidden',
            position: 'relative',
            padding: '100px 0px',
            background: 'white',
            [theme.breakpoints.only("xs")]: {
                marginTop: 40,
                padding: '40px 0px',
                marginBottom: 50
            }
        },
        titleWrapper: {
            color: theme.colors.black,
            '& p': {
                fontWeight: 175,
            }
        },
        title: {
            textAlign: 'center',
            fontWeight: 800,
            color: theme.colors.black,
            fontFamily: 'Nunito',
            fontSize: 40,
            [theme.breakpoints.only('xs')]: {
                fontSize: 30,
            },
        },
        subText: {
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontWeight: 500,
            padding: 10
        },
        bgIllustration: {
            position: 'absolute',
            left: 0,
            top: -100,
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.8,
            [theme.breakpoints.only('xs')]: {
                left: -50,
                top: -100,
                height: 500
            }
        },
        bgIllustration2: {
            position: 'absolute',
            right: -80,
            top: -150,
            height: '100%',
            opacity: 0.3,
            pointerEvents: 'none',
            [theme.breakpoints.only('xs')]: {
                display: 'none'
            }
        },
        serviceCardContainer: {
            width: '86vw',
            margin: 'auto',
            marginTop: 50,

        },
        serviceCard: {
            height: 300,
            margin: 'auto',
            fontFamily: 'Nunito',
        }
    })
);

export function Services() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {/* <ServicesBG2 className={classes.bgIllustration2} /> */}
            <div className={classes.titleWrapper}>
                <Typography variant='h3' className={classes.title}>
                    We put all the pieces together
            </Typography>
                <p className={classes.subText}>We combine data and extensive expertize to offer you a personalized experience.</p>
            </div>
            <div className={classes.serviceCardContainer} >
                <Grid container justify={'space-around'} spacing={3} className={classes.serviceCardContainer}>
                    {services.map(({ icon, heading, paragraph, actionText, actionIcon, actionRoute }) => {
                        return (<Grid item xs={12} sm={4} >
                            <ServiceCard icon={icon} heading={heading} paragraph={paragraph} actionText={actionText} actionIcon={actionIcon} actionRoute={actionRoute} />
                        </Grid>)
                    })}
                </Grid>
            </div>
        </div>
    )
}
