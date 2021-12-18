import React from 'react';

import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secureIllustrationContainer: {
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
            pointerEvents: 'none',
            margin: 20,
            [theme.breakpoints.only('xs')]: {
                alignSelf: 'center',
                justifyContent: 'center',
                height: 300
            }
        }
    })
);
interface Props {
    image: string;
}
export const Illustration: React.FC<Props> = ({ image }: Props) => {
    const classes = useStyles();

    return (
        <motion.div
            className={classes.secureIllustrationContainer}
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
