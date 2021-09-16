import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { motion, Variants } from 'framer-motion'
import { FadeInWhenVisible } from '../../../../components/animate-in-view';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import { Link } from "gatsby-theme-material-ui";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            fontFamily: 'Varela Round',
            flexDirection: 'column',
            borderRadius: 6,
            justifyContent: 'center',
            padding: 30,
            marginRight: 10,
            [theme.breakpoints.up("sm")]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only("xs")]: {
                alignItems: 'center',
                boxShadow: 'none',
                padding: 0,
            },
            '& .link': {
                textDecoration: 'none'
            }
        },
        titleHeading: {
            color: theme.colors.black,
            fontFamily: 'Nunito',
            fontWeight: 900,
            fontSize: 40,
            [theme.breakpoints.down('md')]: {
                fontSize: 35,
            },
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                paddingTop: 50
            },
        },
        paragraph: {
            color: theme.palette.text.primary,
            fontWeight: 450,
            fontSize: '0.95em',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                width: '88vw'
            },
        },
        actionDiv: {},
        actionButton: {
            background: theme.colors.mainGreen,
            textTransform: 'none',
            color: 'white',
            fontWeight: 450,
            width: 170,
            padding: '7px 25px',
            '&:hover': {
                background: '#4990a4',
                opacity: 0.7
            }
        },
        items: {
            paddingLeft: 0
        },
        item: {
            display: 'flex',
            '& span': {
                color: theme.colors.black,
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: 20,
                marginLeft: 20,
            },
            '& .MuiSvgIcon-root': {
                color: theme.colors.mainGreen
            }
        }
    })
);

interface InfoBannerProps {
    isMobileScreenSize?: boolean
}


const containerVariants: Variants = {
    enter: {
        x: 0,
        opacity: 1,
        decelerate: 20,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.4,
        },
    },
    exit: { x: -300, opacity: 0 },
};

const childVariants: Variants = {
    enter: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -20,
        opacity: 0,
    },
};


const childVariants2: Variants = {
    enter: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -20,
        opacity: 0,
    },
};

export const InfoBanner = () => {
    const classes = useStyles();


    return (
        <FadeInWhenVisible>
            <motion.div className={classes.container}
            >
                <Typography variant='h4' className={classes.titleHeading} >Set up in 3 steps </Typography>
                <motion.p className={classes.paragraph} >
                    It takes about 2 minutes to set you up for success.
                 </motion.p >
                <motion.ul
                    layout
                    variants={containerVariants}
                    className={classes.items}
                    initial="exit"
                    animate="enter"
                    exit="exit">
                    <motion.li variants={childVariants} className={classes.item}> <VerifiedUser /> <span> Open a Free Account</span> </motion.li>
                    <motion.li variants={childVariants} className={classes.item}> <VerifiedUser />  <span>Make a Request</span> </motion.li>
                    <motion.li variants={childVariants2} className={classes.item}><VerifiedUser />  <span>Done</span> </motion.li>
                </motion.ul>

                <div className={classes.actionDiv} >
                    <Link className="link" to="/signup"> <Button className={classes.actionButton}>Get started</Button></Link>
                </div>
            </motion.div>
        </FadeInWhenVisible>


    )
}
