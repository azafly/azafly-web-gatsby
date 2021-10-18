import { makeStyles, Theme, createStyles, Box, Container, Grid, Paper, Card, CardMedia } from '@material-ui/core';
import React from 'react';
import EventsTable from './event-table';
import { SliderGallery } from './slider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 20
        },
        color: {
            color: theme.colors.mainGreen
        },
        text: {
            marginBottom: 50,
            marginTop: 10,
            flexGrow: 1,
            marginTop: '-80px',
            marginLeft: '10vw',
            marginRight: '10vw',
            [theme.breakpoints.only('md')]: {
                marginLeft: '8vw'
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: '-50px',
                marginBottom: 50
            }
        },
        innerText: {
            marginBottom: 50,
            marginTop: 150,

            marginLeft: '10vw',
            marginRight: '10vw',
            [theme.breakpoints.only('md')]: {
                marginLeft: '8vw',
                marginRight: '8vw'
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: 50,
                marginBottom: 50
            }
        },
        title: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 20
        },
        subTitle: {
            fontSize: 15
        },
        card: {
            width: 345,
            [theme.breakpoints.only('xs')]: {
                alignContent: 'center',
                alignItems: 'center'
            }
        }
    })
);

interface Events {
    date: string;
    name: string;
    location: string;
}

interface IEventsProps {
    eventsData: Events[];
}

const EventsView: React.FunctionComponent<IEventsProps> = ({ eventsData }) => {
    const classes = useStyles();
    const alternatingColor = ['#f5f6f7', '#a9a9a9'];

    return (
        <>
            <Box>
                <Container>
                    <div className={classes.title}>All azafly events</div>
                    <Grid
                        container
                        spacing={0}
                        style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginBottom: 200
                        }}
                    >
                        {eventsData?.map((event, index) => {
                            return (
                                <Grid key={index} style={{ bottom: 0 }} item xs={12} sm={12} md={12}>
                                    <Box>
                                        <EventsTable
                                            color={alternatingColor[index % alternatingColor.length]}
                                            name={event.name}
                                            date={event.date}
                                            location={event.location}
                                        />{' '}
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>
            <br />
            <SliderGallery />
        </>
    );
};
export default EventsView;
