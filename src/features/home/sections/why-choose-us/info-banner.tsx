import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Typography, Grid, Box, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';

import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                paddingRight: '6vw'
            },
            [theme.breakpoints.only('sm')]: {
                width: '86vw',
                margin: 'auto'
            }
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
            fontFamily: 'Nunito Sans',
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

export const ServiceInfoBanner: React.FC = () => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    const {
        whyChooseUs: {
            whyChooseUsShortHeading,
            whyChooseUsSubHeading,
            whyChooseUsReason1: { whyChooseUsReason1Heading, whyChooseUsReason1InfoText },
            whyChooseUsReason2: { whyChooseUsReason2Heading, whyChooseUsReason2InfoText },
            whyChooseUsReason3: { whyChooseUsReason3Heading, whyChooseUsReason3InfoText }
        }
    } = useFetchHomeData();
    const serviceData = [
        { title: handleFormatContent(whyChooseUsReason1Heading), content: handleFormatContent(whyChooseUsReason1InfoText), hoverWidth: '167px' },
        { title: handleFormatContent(whyChooseUsReason2Heading), content: handleFormatContent(whyChooseUsReason2InfoText), hoverWidth: '267px' },
        { title: handleFormatContent(whyChooseUsReason3Heading), content: handleFormatContent(whyChooseUsReason3InfoText), hoverWidth: '367px' }
    ];

    return (
        <motion.div>
            <Box className={classes.container}>
                <Typography className={classes.title}>{handleFormatContent(whyChooseUsShortHeading)}</Typography>
                <Typography className={classes.titleText}>{handleFormatContent(whyChooseUsSubHeading)}</Typography>
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
