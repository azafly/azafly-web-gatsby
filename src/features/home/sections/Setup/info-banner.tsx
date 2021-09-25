import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "auto",
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        paddingTop: 50,
      },
      [theme.breakpoints.up("sm")]: {
        paddingLeft: 50,
      },
    },
    titleHeading: {
      color: theme.colors.black,
      fontFamily: "Nunito",
      fontWeight: 900,
      fontSize: 40,
      marginBottom: 20,
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        margin: "auto",
        marginBottom: 20,
      },
    },
    paragraph: {
      fontWeight: 450,
      lineHeight: 1.5,
      fontSize: "1rem",
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
        margin: "auto",
        fontSize: "0.9rem",
      },
    },
    actionButton: {
      background: theme.colors.mainGreen,
      textTransform: "none",
      color: "white",
      marginTop: 20,
      fontWeight: 450,
      padding: "7px 25px",
      "&:hover": {
        background: "#4990a4",
        opacity: 0.7,
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
    <div>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.titleHeading} gutterBottom>
          A better way to plan
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          Live your life on your terms and without limits. With an Azafly
          account, you can add money to your wallet for free, within seconds and
          start making transfers to other wallets or any bank accounts for
          free.*
          <br />
          <Link className="link" to="/signup">
            {" "}
            <Button className={classes.actionButton}>Get started</Button>
          </Link>
        </Typography>
      </div>
    </div>
  );
};
