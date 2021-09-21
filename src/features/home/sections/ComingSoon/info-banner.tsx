import React from "react";
import { motion } from "framer-motion";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commingSooncontainer: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 10,
      [theme.breakpoints.up("md")]: {
        paddingRight: 10,
        width: "80%",
      },
      [theme.breakpoints.only("sm")]: {
        marginLeft: "5vw",
      },
      [theme.breakpoints.only("xs")]: {
        alignItems: "center",
        marginTop: -150,
      },
      "& .link": {
        textDecoration: "none",
      },
    },
    titleHeading: {
      fontWeight: 900,
      fontSize: 50,
      fontFamily: "Nunito",
      marginBottom: 30,
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        fontSize: 35,
        marginBottom: 20,
      },
    },
    paragraph: {
      fontWeight: 200,
      fontSize: "0.9rem",
      marginBottom: 10,
      color: "rgba(255, 255, 255, 0.75)",
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        paddingTop: 20,
        marginBottom: 20,
      },
    },
    actionButton: {
      background: "white",
      textTransform: "none",
      color: theme.palette.primary.main,
      fontWeight: 600,
      marginTop: 15,
      padding: "7px 40px",
      borderRadius: 6,
      "&:hover": {
        background: "rgba(255, 255, 255, 0.75)",
        opacity: 0.9,
      },
      [theme.breakpoints.only("xs")]: {
        alignItems: "center",
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
    <motion.div className={classes.commingSooncontainer}>
      <Typography variant="h3" className={classes.titleHeading}>
        Coming Soon
      </Typography>
      <motion.div className={classes.paragraph}>
        Anticipate the amazing features in the works here on AzaFly. Singnup
        below to keep updated. We will send you an email every month. Promise No
        Spam.
      </motion.div>
      <div>
        <Link className="link" to={`${process.env.GATSBY_APP_URL}/signin`}>
          {" "}
          <Button className={classes.actionButton}>Sign me up</Button>
        </Link>
      </div>
    </motion.div>
  );
};
