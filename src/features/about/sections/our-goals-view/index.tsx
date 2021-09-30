import { makeStyles, Theme, createStyles, Box, Typography, Container, Grid, Paper } from '@material-ui/core';
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
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20
        },
        subTitle: {
            fontSize: 15
        }
    })
);

const OurGoalsView: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Box className={classes.text}>
                    <div className={classes.title}>Achieve enduring commercial success and sustained growth</div>
                    <div className={classes.subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi
                        bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio
                        ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                    </div>
                </Box>
            </Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box
                        style={{
                            width: '100%',
                            height: 600,
                            WebkitBackgroundSize: 'cover',
                            MozBackgroundSize: 'cover',
                            OBackgroundSize: 'cover',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url('https://images.unsplash.com/photo-1616924551095-5156721a1cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80')`
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box className={classes.innerText}>
                            <div className={classes.title}>Our mission and Vision</div>
                            <div className={classes.subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus
                                turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas
                                dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                            </div>
                        </Box>
                    </Container>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Container>
                        <Box className={classes.innerText}>
                            <div className={classes.title}>Be an awesome partner for clients and their ambitious missions</div>
                            <div className={classes.subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus
                                turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas
                                dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                            </div>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        style={{
                            width: '100%',
                            height: 600,
                            WebkitBackgroundSize: 'cover',
                            MozBackgroundSize: 'cover',
                            OBackgroundSize: 'cover',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url('https://images.unsplash.com/photo-1632902346990-4550c46a2314?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        style={{
                            width: '100%',
                            height: 600,
                            WebkitBackgroundSize: 'cover',
                            MozBackgroundSize: 'cover',
                            OBackgroundSize: 'cover',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url('https://images.unsplash.com/photo-1632948415553-c765f1ace7f6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box className={classes.innerText}>
                            <div className={classes.title}>Revolutionize the technology industry</div>
                            <div className={classes.subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus
                                turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas
                                dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                            </div>
                        </Box>
                    </Container>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Container>
                        <Box className={classes.innerText}>
                            <div className={classes.title}>Achieve enduring commercial success and sustained growth</div>
                            <div className={classes.subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus
                                turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas
                                dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.
                            </div>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        style={{
                            width: '100%',
                            height: 600,
                            WebkitBackgroundSize: 'cover',
                            MozBackgroundSize: 'cover',
                            OBackgroundSize: 'cover',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url('https://images.unsplash.com/photo-1632770817612-99149e09259f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80')`
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default OurGoalsView;
