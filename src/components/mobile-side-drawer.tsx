import React from "react";
import { Divider, Drawer, IconButton, List, useTheme } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "gatsby-theme-material-ui";
import { motion } from "framer-motion";

import { sideMenu } from "../lib/constants";
import { sideMenuAnimation } from "../lib/animations";
import { MenuListItem } from "./menuListItem";

interface MobileDrawerProps {
  handleDrawerClose: () => void;
  open: boolean;
  isSmallScreen: boolean;
}

const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "white",
      filter: "brightness(0.95)",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      background: theme.palette.background.default,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
      height: 0,
    },
  })
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileSideDrawer = ({
  open,
  handleDrawerClose,
  isSmallScreen,
}: MobileDrawerProps) => {
  const theme = useTheme();

  const classes = useStyles();
  return (
    <>
      {isSmallScreen && (
        <Drawer
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
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List component={motion.ul} variants={variants}>
            {sideMenu.map(({ name, icon, route }) => (
              <Link to={route} key={name}>
                <MenuListItem
                  variant={sideMenuAnimation.item}
                  text={name}
                  key={name}
                >
                  {icon}
                </MenuListItem>
              </Link>
            ))}
          </List>
          <Divider />

          <Link to={"/signin"}>
            <List component={motion.ul} variants={variants}>
              <MenuListItem
                variant={sideMenuAnimation.item}
                text={"LogIn"}
                key={"Login"}
              >
                {"Signin"}
              </MenuListItem>
            </List>
          </Link>
        </Drawer>
      )}
    </>
  );
};
