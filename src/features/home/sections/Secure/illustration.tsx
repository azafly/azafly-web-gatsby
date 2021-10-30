import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secureIllustratioCcontainer: {
            display: 'flex',
            marginBottom: '60px !important',
            [theme.breakpoints.up('sm')]: {
                justifyContent: 'flex-start'
            },
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center'
            },
            [theme.breakpoints.only('xs')]: {
                marginTop: '-60px',
                width: '100%',
                margin: 'auto',
                marginBottom: '-40px !important'
            }
        },
        illustration: {
            // marginTop: -150,
            pointerEvents: 'none',
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                justifyContent: 'center',
                height: 300
            }
        }
    })
);
interface Props {
    image: any;
}
export const Illustration = ({ image }: Props) => {
    const classes = useStyles();

    return (
        <motion.div
            className={classes.secureIllustratioCcontainer}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5 }}
            transition={{
                delay: 1,
                x: { type: 'spring', stiffness: 100 },
                default: { duration: 1 }
            }}
        >
            <Grid container justifyContent='center'>
                <Grid item xs={10} sm={12}>
                    <img className={classes.illustration} src={image} />
                </Grid>
            </Grid>
        </motion.div>
    );
};
