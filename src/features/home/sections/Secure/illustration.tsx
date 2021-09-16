import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from "react";
// import { SecureByDesign } from 'components/illustrations';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secureIllustratioCcontainer: {
            display: 'flex',
            [theme.breakpoints.up("sm")]: {
                justifyContent: 'flex-start',

            },
            [theme.breakpoints.down("md")]: {
                justifyContent: 'center',
            },
            [theme.breakpoints.only("xs")]: {
                marginTop: -50,
                width: '115vw',
                margin: 'auto'

            },
        },
        illustration: {
            marginTop: -150,
            pointerEvents: 'none',
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                height: 500,
                marginLeft: '-22vw'
            },
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()

    return (
        <motion.div
            className={classes.secureIllustratioCcontainer}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5 }}
            transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 1 },
            }}>
            {/* <SecureByDesign className={classes.illustration} color={'#4990a4'} /> */}
        </motion.div>
    )
}
