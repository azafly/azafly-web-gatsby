import React from "react";
import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

import { RocketLaunch } from '../../../../components/illustrations';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            [theme.breakpoints.up("sm")]: {
                justifyContent: 'flex-start',
            },
            [theme.breakpoints.only("xs")]: {
                marginTop: -100,
                paddingBottom: 50,
            },
            [theme.breakpoints.down("md")]: {
                justifyContent: 'center',
            },
        },
        illustration: {
            minWidth: 350,
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
            },
            [theme.breakpoints.only("md")]: {
                width: '80%',
            },
            [theme.breakpoints.up("lg")]: {
                width: '70%',
            },
        }

    }),

);


export const Illustration = () => {
    const classes = useStyles()

    return (
        <motion.div
            className={classes.container}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5 }}
            transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 1 },
            }}>
            <RocketLaunch className={classes.illustration} color={'#4990a4'} />
        </motion.div>
    )
}
