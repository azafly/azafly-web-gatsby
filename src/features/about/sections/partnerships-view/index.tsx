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
            marginBottom: 20,
            textAlign: 'center'
        },
        subTitle: {
            fontSize: 15
        },
        card: {
            maxWidth: 345,
            [theme.breakpoints.only('xs')]: {
                alignContent: 'center',
                alignItems: 'center'
            }
        }
    })
);

interface Leaders {
    image: string;
    title: string;
}

interface ILeadersProps {
    partnersData: Leaders[];
    content?: string;
}

const PartnershipView: React.FunctionComponent<ILeadersProps> = ({ partnersData, content }) => {
    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Box className={classes.text}>
                    <div className={classes.subTitle}>{content}</div>
                </Box>
                <div className={classes.title}>Our partners</div>
                <Grid container spacing={2} style={{ alignContent: 'center', alignItems: 'center' }}>
                    {partnersData?.map((partner, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4} className={classes.card}>
                                <Card style={{ marginBottom: 60 }}>
                                    <CardMedia component='img' image={partner.image} alt={partner.title} />
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};
export default PartnershipView;
