import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.only('xs')]: {
                alignItems: 'center',
                margin: 10,
                marginTop: -20,
                marginBottom: 50,
                padding: 10
            }
        },
        banner: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '1.5rem',
            letterSpacing: '17%',
            textTransform: 'uppercase',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                fontSize: '1rem',
                textAlign: 'center',
                width: '100%'
            }
        },
        titleHeading: {
            color: theme.colors.black,
            fontSize: '2.5rem',
            textAlign: 'left',
            fontWeight: 750,
            fontFamily: 'Nunito Sans',
            letterSpacing: -1,
            marginBottom: 20,
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                margin: 'auto',
                marginBottom: 20,
                fontSize: '1.7rem'
            }
        },
        content: {
            marginTop: 10,
            fontWeight: 500,
            fontSize: '1.2rem',
            lineHeight: '185.52%',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                fontSize: '1rem',
                textAlign: 'center',
                width: '100%'
            }
        }
    })
);

interface InfoBannerProps {
    title: string;
    content: string;
    shortTitle: string;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ title, content, shortTitle }: InfoBannerProps) => {
    const classes = useStyles();

    return (
        <motion.div className={classes.container}>
            <Box>
                <Grid item xs={12}>
                    <Typography className={classes.banner}>{shortTitle}</Typography>
                    <Typography variant='h3' className={classes.titleHeading}>
                        {title}
                    </Typography>
                    <Grid container>
                        <Typography className={classes.content}>{content}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
};
