import { motion } from "framer-motion";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

import { useFetchHomeData } from "../../hooks/use-data";
import { CalendarSvgComponent } from "../../../../components/icons/calendar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.up("lg")]: {
        marginLeft: "8vw",
      },
      [theme.breakpoints.only("md")]: {
        marginLeft: "3vw",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "10px 30px 10px 20px",
        marginLeft: "2vw",
      },
    },
    titleHeading: {
      fontWeight: 800,
      fontFamily: "Nunito",
      letterSpacing: -1,
      color: theme.colors.black,
      fontSize: 45,
      [theme.breakpoints.only("xs")]: {
        fontSize: 40,
        fontWeight: 900,
      },
      [theme.breakpoints.only("sm")]: {
        fontSize: 45,
      },
    },
    paragraph: {
      color: "rgba(0, 0, 0, 0.5)",
      fontWeight: 500,

      marginTop: 20,
      [theme.breakpoints.only("xs")]: {},
    },
    offer: {
      color: theme.colors.mainGreen,
      fontWeight: 700,
      fontSize: "0.9em",
      marginTop: 5,
      [theme.breakpoints.only("xs")]: {},
    },
    actionDiv: {
      display: "flex",
    },
    actionButtonBook: {
      background: theme.colors.mainGreen,
      textTransform: "none",
      height: 40,
      width: "25ch",
      color: "white",
      fontWeight: 500,
      minWidth: 170,
      padding: "7px 15px",
      marginTop: 10,
      marginRight: 10,
      borderRadius: 6,
      "&:hover": {
        background: "#4990a4",
        opacity: 0.9,
      },
    },
    actionButtonExplore: {
      textTransform: "none",
      height: 40,
      marginTop: 10,
      border: "1px solid #4990A4",
      color: theme.colors.mainGreen,
      fontWeight: 600,
      padding: "7px 15px",
      width: "25ch",
      borderRadius: 6,
      minWidth: 170,
      "&:hover": {
        opacity: 0.9,
      },
    },
    link: {
      textDecoration: "none",
    },
  })
);

export const InfoBanner = () => {
  const classes = useStyles();
  const frontMatter = useFetchHomeData();

  return (
    <motion.div className={classes.container}>
      <Typography variant="h4" className={classes.titleHeading}>
        {frontMatter.intro}
      </Typography>
      <motion.p className={classes.paragraph}>{frontMatter.intro}</motion.p>
      <motion.p className={classes.offer}>{frontMatter.offerText}</motion.p>
      <div className={classes.actionDiv}>
        <Link
          to={`${process.env.GATSBY_APP_URL}/booking`}
          className={classes.link}
        >
          <Button
            variant="contained"
            className={classes.actionButtonBook}
            endIcon={<CalendarSvgComponent />}
          >
            {frontMatter.consultButtonText}
          </Button>
        </Link>
        <Link
          to={`${process.env.GATSBY_APP_URL}/payment`}
          className={classes.link}
        >
          <Button className={classes.actionButtonExplore}>
            {frontMatter.paymentButtonText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
