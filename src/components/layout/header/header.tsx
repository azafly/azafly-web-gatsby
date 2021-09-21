import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  MenuItem,
} from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

import { deskTopNavItems } from "../../../lib/constants";
import { Logo1SvgComponent } from "../../common/icons";
import { MobileSideDrawer } from "../../mobile-side-drawer";

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
      width: "100vw",
      overflowX: "hidden",
      background: theme.colors.white,
      marginBottom: 100,
      [theme.breakpoints.only("xs")]: {
        marginBottom: 70,
      },
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "inherit",
      color: theme.colors.black,
      boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      width: "80vw",
      margin: "auto",
      height: 70,
    },
    logo: {
      flexGrow: 1,
      textDecoration: "none",
      display: "flex",
      width: 100,
    },
    links: {
      color: theme.palette.secondary.main,
      display: "flex",
      fontWeight: 400,
      fontSize: "0.85rem",
      marginRight: 15,
      justifyContent: "space-around",
    },
    active: {
      display: "inline-block",
      borderBottom: "2px solid #4990A4",
      color: theme.colors.mainGreen,
      paddingRight: 0,
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,
      opacity: 0.7,
      color: theme.colors.black,
    },
    hide: {
      display: "none",
    },
    menuIcon: {
      color: theme.colors.pink,
      position: "absolute",
      right: 0,
      justifySelf: "flex-end",
    },
    authLink: {
      flexGrow: 1,
      marginLeft: 70,
      fontWeight: 500,
      justifyContent: "flex-end",
      display: "flex",
    },
    register: {
      background: theme.palette.primary.main,
      textTransform: "capitalize",
      color: "white",
      fontWeight: 500,
      paddingRight: 25,
      paddingLeft: 25,
      textDecoration: "none",
      transition:
        "background .25s ease-in -out, transform .15s ease,- webkit - transform .15s ease",
      "&:hover": {
        opacity: 0.9,
        textDecoration: "none",
        background: theme.palette.primary.main,
        transform: "scale(1.01)",
        borderRadius: 6,
      },
    },
    signin: {
      textTransform: "capitalize",
      marginRight: "2vw",
      fontWeight: 500,
      color: theme.palette.secondary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
    underline: {
      border: "3px solid #4990A4",
    },
  })
);

export const Header = ({ location }: NavbarProps) => {
  const classes = useStyles();
  const [currentLink, setCurrentLink] = useState("");

  const [open, setOpen] = React.useState(false);

  const isSmallScreen = useMediaQuery("(max-width:950px)");

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
      <MobileSideDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        isSmallScreen={isSmallScreen}
      />
      {isSmallScreen ? (
        <AppBar
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Link to="/" className={`${classes.logo}`}>
              <Logo1SvgComponent />{" "}
            </Link>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <Link to="/" className={`${classes.logo}`}>
              <Logo1SvgComponent />{" "}
            </Link>
            <section className={classes.links}>
              {deskTopNavItems.map(({ name, route }) => {
                return (
                  <Link
                    to={route}
                    className={clsx({
                      [classes.underline]: currentLink === name,
                      [classes.active]: setActive(route),
                    })}
                    onClick={() => handleClickListItem(name)}
                    key={name}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <MenuItem className={classes.links}>{name}</MenuItem>
                  </Link>
                );
              })}
            </section>
            <section className={classes.authLink}>
              <Button
                component={Link}
                to={`${process.env.GATSBY_APP_URL}/signin`}
                className={classes.signin}
              >
                Sign in
              </Button>
              <Button
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
