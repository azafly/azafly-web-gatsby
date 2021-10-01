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

interface Leaders {
    image: string;
    name: string;
    title: string;
}

interface ILeadersProps {
    leadersData: Leaders[];
}

const OurLeadersView: React.FunctionComponent<ILeadersProps> = ({ leadersData }) => {
    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Box className={classes.text}>
                    <div className={classes.subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi
                        bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio
                        ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                    </div>
                </Box>
                <div className={classes.title}>Meet our growing team</div>
                <Grid
                    container
                    spacing={5}
                    style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    {leadersData?.map((leader, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} className={classes.card}>
                                <Card>
                                    <CardMedia component='img' image={leader.image} alt={leader.name} />
                                </Card>
                                <Box>
                                    <div
                                        style={{
                                            fontSize: 25,
                                            fontWeight: 'bolder',
                                            marginTop: 20
                                        }}
                                    >
                                        {leader.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            marginBottom: 10
                                        }}
                                    >
                                        {leader.title}
                                    </div>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};
export default OurLeadersView;
