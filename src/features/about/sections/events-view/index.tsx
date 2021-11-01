import { makeStyles, Theme, createStyles, Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import FlipCard from './flip-card';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 20,
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                textAlign: 'center'
            }
        }
    })
);

interface Events {
    date: string;
    image: string;
    title: string;
    content: string;
}

interface IEventsProps {
    eventsData: Events[];
}

const EventsView: React.FunctionComponent<IEventsProps> = ({ eventsData }) => {
    const classes = useStyles();

    return (
        <>
            <Box>
                <Container>
                    <Box className={classes.title}>All azafly events</Box>
                    <Grid container spacing={2}>
                        {eventsData.map((listData, index) => {
                            return (
                                <FlipCard key={index} image={listData.image} title={listData.title} content={listData.content} date={listData.date} />
                            );
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
export default EventsView;
