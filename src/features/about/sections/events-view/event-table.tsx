import { makeStyles, Theme, createStyles, Box, Container, Grid, Paper, Card, CardMedia } from '@material-ui/core';
import React from 'react';

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

interface EventsTableProps {
    date?: string;
    name?: string;
    location?: string;
    color?: string;
}

const EventsTable: React.FunctionComponent<EventsTableProps> = ({ color, name, date, location }) => {
    const classes = useStyles();

    return (
        <Box style={{ height: 50, backgroundColor: color }}>
            <Box display='flex' justifyContent='space-between' style={{}}>
                <Box>{date}</Box>
                <Box>{location}</Box>
                <Box>{name}</Box>
            </Box>
        </Box>
    );
};
export default EventsTable;
