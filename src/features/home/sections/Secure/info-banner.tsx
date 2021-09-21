import { motion } from "framer-motion";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.only("xs")]: {
        alignItems: "center",
        margin: 10,
        marginTop: -20,
        marginBottom: 80,
        padding: 10,
      },
    },
    titleHeading: {
      color: theme.colors.black,
      fontSize: 30,
      fontFamily: "Nunito",
      fontWeight: 900,
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        margin: "auto",
      },
    },
    paragraph: {
      fontWeight: 450,
      lineHeight: 1.5,
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        margin: "auto",
        fontSize: "0.95em",
      },
    },
  })
);

interface InfoBannerProps {
  isMobileScreenSize?: boolean;
}

export const InfoBanner = () => {
  const classes = useStyles();

  return (
    <motion.div className={classes.container}>
      <Typography variant="h4" className={classes.titleHeading} gutterBottom>
        Secure by design
      </Typography>
      <Typography className={classes.paragraph}>
        Already trusted by thousands of happy clients. We are protected by EU
        Financial charter. You have nothing to be worried about
        <br />
        <br />
        Pay for all your service with secure payment channels. We accept dozens
        of methods across multiple currencies.
      </Typography>
    </motion.div>
  );
};
