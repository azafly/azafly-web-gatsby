import { AppBar, Toolbar, Button, IconButton, useMediaQuery, MenuItem } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';

import { deskTopNavItems } from '../../../lib/constants';
import { MobileSideDrawer } from '../../mobile-side-drawer';
import { LogoSvgComponent } from '../../common/logo';
import { ViewToggleSwitch } from '../../view-toggle-switch';

interface NavbarProps {
    handleDrawerOpen?: () => void;
    classNames?: any;
    open?: boolean;
    location?: string;
}

const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navbarContainer: {
            width: '100vw',
            overflowX: 'hidden',
            marginBottom: 100,
            [theme.breakpoints.only('xs')]: {
                marginBottom: 70
            }
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            background: 'linear-gradient(102.84deg, #0D324D 1.08%, #224C6C 59.23%, #062741 97.46%)'
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginRight: drawerWidth
        },
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            width: '80vw',
            margin: 'auto',
            height: 70
        },
        logo: {
            flexGrow: 1,
            textDecoration: 'none',
            display: 'flex',
            width: 100,
            transform: 'scale(1.2)',
            [theme.breakpoints.only('sm')]: {
                paddingLeft: '5ch'
            },
            [theme.breakpoints.only('xs')]: {
                paddingLeft: '3ch'
            }
        },
        links: {
            color: 'white',
            display: 'flex',
            fontWeight: 450,
            fontSize: '1.0rem',
            marginRight: 15
        },
        active: {
            display: 'inline-block',
            borderBottom: '1px solid #4990A4',
            color: theme.colors.mainGreen,
            paddingRight: 0
        },
        title: {
            flexGrow: 1,
            fontWeight: 900,
            opacity: 0.7,
            color: theme.colors.black
        },
        hide: {
            display: 'none'
        },
        menuIcon: {
            color: 'white',
            position: 'absolute',
            right: 0,
            justifySelf: 'flex-end'
        },
        authLink: {
            flexGrow: 1,
            marginLeft: 70,
            fontWeight: 500,
            justifyContent: 'space-between',
            display: 'flex'
        },
        register: {
            textTransform: 'capitalize',
            color: 'white',
            flexGrow: 1,
            fontWeight: 450,
            textDecoration: 'none',
            fontSize: '1.0rem',
            transition: 'background .25s ease-in -out, transform .15s ease,- webkit - transform .15s ease',
            '&:hover': {
                opacity: 0.9,
                textDecoration: 'none',
                background: theme.palette.primary.main,
                borderRadius: 6
            }
        },
        underline: {
            border: '3px solid #4990A4'
        }
    })
);

export const Header: React.FC<NavbarProps> = ({ location }) => {
    const classes = useStyles();
    const [currentLink, setCurrentLink] = useState('');

    const [open, setOpen] = React.useState(false);

    const isSmallScreen = useMediaQuery('(max-width:950px)');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickListItem = (name: string) => {
        setCurrentLink(name);
    };
    const setActive = (route: string) => route === location;

    return (
        <div className={`${classes.navbarContainer} classNames`}>
            <MobileSideDrawer open={open} handleDrawerClose={handleDrawerClose} isSmallScreen={isSmallScreen} />
            {isSmallScreen ? (
                <AppBar
                    elevation={0}
                    position='fixed'
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar>
                        <Link to='/' className={`${classes.logo}`}>
                            <LogoSvgComponent />
                        </Link>
                        <ViewToggleSwitch />
                        <IconButton
                            color='secondary'
                            aria-label='open drawer'
                            edge='end'
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                        >
                            <MenuIcon color={'inherit'} className={classes.menuIcon} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            ) : (
                <AppBar className={classes.appBar} elevation={0}>
                    <Toolbar className={classes.toolBar}>
                        <Link to='/' className={`${classes.logo}`}>
                            <LogoSvgComponent />
                        </Link>
                        <section className={classes.links}>
                            {deskTopNavItems.map(({ name, route }) => {
                                return (
                                    <Link
                                        to={route}
                                        className={clsx({
                                            [classes.underline]: currentLink === name,
                                            [classes.active]: setActive(route)
                                        })}
                                        onClick={() => handleClickListItem(name)}
                                        key={name}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {' '}
                                        <MenuItem className={classes.links}>{name}</MenuItem>
                                    </Link>
                                );
                            })}
                        </section>
                        <section className={classes.authLink}>
                            <ViewToggleSwitch />
                            <Button
                                endIcon={<LockOpenIcon />}
                                component={Link}
                                to={`${process.env.GATSBY_APP_URL}/signin`}
                                className={classes.register}
                            >
                                Login
                            </Button>
                            <Button
                                endIcon={<HowToRegIcon />}
                                component={Link}
                                to={`${process.env.GATSBY_APP_URL}/signup`}
                                className={classes.register}
                            >
                                Register
                            </Button>
                        </section>
                    </Toolbar>
                </AppBar>
            )}
        </div>
    );
};
