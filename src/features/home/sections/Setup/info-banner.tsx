import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { motion, Variants } from "framer-motion";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%);",
      borderRadius: 25,
      padding: 150,
      [theme.breakpoints.up("sm")]: {
        height: "80%",
        marginLeft: "-25%",
      },
      [theme.breakpoints.only("xs")]: {
        boxShadow: "none",
        padding: 0,
        margin: 0,
      },
      "& .link": {
        textDecoration: "none",
      },
    },
    titleHeading: {
      color: theme.colors.black,
      fontFamily: "Nunito",
      fontWeight: 900,
      fontSize: 40,
      marginBottom: 30,
      marginLeft: "25%",
      [theme.breakpoints.down("md")]: {
        fontSize: 35,
      },
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        paddingTop: 50,
        marginLeft: 0,
      },
    },
    actionButton: {
      background: theme.colors.mainGreen,
      textTransform: "none",
      marginLeft: "25%",
      color: "white",
      marginTop: 20,
      fontWeight: 450,
      width: 170,
      padding: "7px 25px",
      "&:hover": {
        background: "#4990a4",
        opacity: 0.7,
      },
      [theme.breakpoints.only("xs")]: {
        marginLeft: "0%",
      },
    },
    items: {
      marginLeft: "25%",
    },
    item: {
      display: "flex",
      marginLeft: 10,
      margin: "auto",
      [theme.breakpoints.only("xs")]: {
        marginLeft: "0%",
      },
      "& span": {
        color: theme.colors.black,
        fontSize: "0.9rem",
        fontFamily: "Nunito",
        fontWeight: 700,
        marginBottom: 20,
        marginLeft: 20,
      },
      "& .MuiSvgIcon-root": {
        color: theme.colors.mainGreen,
      },
    },
  })
);

interface InfoBannerProps {
  isMobileScreenSize?: boolean;
}

const containerVariants: Variants = {
  enter: {
    x: 0,
    opacity: 1,
    decelerate: 20,
    transition: {
      when: "beforeChildren",
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
    opacity: 0,
  },
};

const childVariants2: Variants = {
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const InfoBanner = () => {
  const classes = useStyles();

  return (
    <motion.div className={classes.container}>
      <Typography variant="h4" className={classes.titleHeading}>
        Set up in 3 steps{" "}
      </Typography>
      <motion.ul
        layout
        variants={containerVariants}
        className={classes.items}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.li variants={childVariants} className={classes.item}>
          {" "}
          <VerifiedUser /> <span> Open a Free Account</span>{" "}
        </motion.li>
        <motion.li variants={childVariants} className={classes.item}>
          {" "}
          <VerifiedUser /> <span>Make a Request</span>{" "}
        </motion.li>
        <motion.li variants={childVariants2} className={classes.item}>
          <VerifiedUser /> <span>Done</span>{" "}
        </motion.li>
      </motion.ul>

      <div>
        <Link className="link" to="/signup">
          {" "}
          <Button className={classes.actionButton}>Get started</Button>
        </Link>
      </div>
    </motion.div>
  );
};
