
import React from 'react';
import clsx from 'clsx';
import { Link } from "gatsby-theme-material-ui";
import { motion } from "framer-motion"

// Material
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Divider, Drawer, IconButton, List, useTheme, useMediaQuery, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import { MenuListItem } from '../../components/menuListItem'

import { Header as NavBar } from '../../components/layout/header'
import { sideMenu, privateMenu } from '../../lib/constants'
import { sideMenuAnimation } from '../../lib/animations'
// import { SignOutSvgComponent } from 'components/icons'
// import { BGIllustration7 } from 'components/backgrounds';



import { ComingSoon } from './sections/ComingSoon/coming-soon';
import { Services } from './sections/Services/services';
import { HowToSetUp } from './sections/Setup/how-to-setup';
import { HomePageHeroSection } from './sections/Hero/hero'
import { HomePageReviewsSection } from './sections/Reviews'
import { Secure } from './sections/Secure/secure';




const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100vw',
            margin: 'auto',
            overflowX: 'hidden',
        },
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        hide: {
            display: 'none',
        },
        menuIcon: {
            color: theme.palette.primary.main
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            background: 'white',
            filter: 'brightness(0.95)'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            background: theme.palette.background.default,
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
            height: 0,
        },
        content: {
            maxWidth: '100vw',
            overflowX: 'hidden',
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        setupAndDesignSection: {
            position: 'relative',
            background: theme.palette.background.default,
            paddingTop: 120
        },
        setUpBackgroundVector1: {
            position: 'absolute',
            left: 0,
            opacity: 0.5,
            [theme.breakpoints.only('xs')]: {
                top: -40,
                opacity: 0.1
            },
        },
        setUpBackgroundVector2: {
            position: 'absolute',
            right: 0,
            top: 0,
            opacity: 0.3,
            [theme.breakpoints.only('xs')]: {
                opacity: 0.1
            },
        }
    }),
);

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


interface HomePops {
    frontMatter: any
}

const Home = ({ frontMatter }: HomePops) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const isSmallScreen = useMediaQuery('(max-width:950px)');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.container}>
            <NavBar handleDrawerOpen={handleDrawerOpen} open={open} classNames={classes} />
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader}></div>
                <HomePageHeroSection frontMatter={frontMatter} />
                <Services />
                <div className={classes.setupAndDesignSection}>
                    {/* <BGIllustration6 className={classes.setUpBackgroundVector1} /> */}
                    {/* <BGIllustration7 className={classes.setUpBackgroundVector2} /> */}
                    <HowToSetUp />
                    <Secure />
                    <HomePageReviewsSection />
                </div>
                <ComingSoon />
            </main>
            {isSmallScreen && <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List
                    component={motion.ul}
                    variants={variants}>

                    {sideMenu.map(({ name, icon, route }) => (
                        <Link to={route}>
                            <MenuListItem variant={sideMenuAnimation.item} text={name} key={name}>{icon}</MenuListItem>
                        </Link>

                    ))}
                </List>
                <Divider />

                <Link to={'/signin'}>
                    < List
                        component={motion.ul}
                        variants={variants}>
                        <MenuListItem
                            variant={sideMenuAnimation.item}
                            text={'LogIn'}
                            key={'Login'}

                        >{'Signin'}</MenuListItem>
                    </List>
                </Link>
            </Drawer>}
        </div>
    )
}

export default Home


