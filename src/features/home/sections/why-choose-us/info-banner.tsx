import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useFetchHomeData } from '../../hooks/use-data';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            width: '85%',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        card: {
            border: 'none',
            boxShadow: 'none',
            width: '100%',
            marginTop: 20,
            marginBottom: 20,
            '&:hover': {
                '& $circle': {
                    color: 'white',
                    background: '#0D324D'
                },
                '& $hr': {
                    width: '200px',
                    borderBottom: '4px solid #0D324D',
                    opacity: '100%'
                },
                '& $heading': {
                    fontWeight: 600
                }
            }
        },

        title: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '17%',
            textAlign: 'left',
            verticalAlign: 'top',
            textTransform: 'uppercase',
            color: '#4990A4',
            marginBottom: 10,
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                marginTop: 20
            }
        },
        content: {
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '33px',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                margin: 'auto',
                width: '100%',
                fontSize: '14px'
            }
        },
        titleText: {
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',
            marginBottom: '40px',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                fontSize: '28px',
                lineHeight: '34px',
                marginBottom: '20px !important'
            }
        },
        heading: {
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '32px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',

            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                fontSize: '20px'
            }
        },

        circle: {
            background: 'transparent',
            border: '1px solid #0D324D',
            color: '#0D324D',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center !important',
                marginTop: '10px'
            }
        },

        hr: {
            width: '100%',
            height: '25px',
            borderBottom: '1px solid #0D324D',
            transition: 'width 0.5s ease',
            marginBottom: 10,
            justifyContent: 'center !important',
            opacity: '40%',
            position: 'relative',

            [theme.breakpoints.only('xs')]: {
                width: '126px',
                margin: 'auto',
                justifyContent: 'center !important',
                padding: 10
            }
        }
    })
);

export const ServiceInfoBanner = () => {
    const classes = useStyles();
    const formatter = useFetchHomeData();

    const serviceData = [
        { title: formatter.servicesHeaderText_subtext1, content: formatter.servicesHeaderText_content1, hoverWidth: '167px' },
        { title: formatter.servicesHeaderText_subtext2, content: formatter.servicesHeaderText_content2, hoverWidth: '267px' },
        { title: formatter.servicesHeaderText_subtext3, content: formatter.servicesHeaderText_content3, hoverWidth: '367px' }
    ];

    return (
        <motion.div>
            <Box className={classes.container}>
                <Typography className={classes.title}>Why choose us</Typography>
                <Typography className={classes.titleText}>{formatter.servicesHeaderText}</Typography>
                {serviceData.map((item, index) => {
                    return (
                        <Grid key={index} container spacing={2}>
                            <Card className={classes.card}>
                                <Box display={{ xs: 'none', lg: 'block', sm: 'block' }}>
                                    <CardHeader
                                        action={
                                            <Avatar className={classes.circle}>
                                                <KeyboardArrowRightIcon />
                                            </Avatar>
                                        }
                                        title={<Typography className={classes.heading}>{item.title}</Typography>}
                                    />
                                </Box>

                                <CardContent>
                                    <Box display={{ xs: 'block', lg: 'none', sm: 'none' }}>
                                        <Typography className={classes.heading}>{item.title}</Typography>
                                    </Box>

                                    <Box clone order={{ xs: 2, sm: 2 }}>
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle1' component='p' className={classes.content}>
                                                {item.content}
                                            </Typography>
                                        </Grid>
                                    </Box>

                                    <Grid item xs={12} sm={11} justifyContent='center'>
                                        <Box clone order={{ xs: 1, sm: 3 }}>
                                            <Box className={classes.hr} />
                                        </Box>
                                    </Grid>
                                    <Grid container xs={12} justify='center'>
                                        <Box justifyContent='center' alignContent='center' display={{ xs: 'block', lg: 'none', sm: 'none' }}>
                                            <Avatar className={classes.circle}>
                                                <KeyboardArrowRightIcon />
                                            </Avatar>
                                        </Box>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Box>
        </motion.div>
    );
};
