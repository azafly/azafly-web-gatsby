import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
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
                height: 400,
                marginLeft: '5vw',
                marginRight: '5vw'
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
            <img className={classes.illustration} src={image} />
        </motion.div>
    );
};
