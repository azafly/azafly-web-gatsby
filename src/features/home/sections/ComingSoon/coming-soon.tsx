import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Illustration } from "./illustration";
import { InfoBanner } from "./info-banner";
import {
  ComingSoonBG,
  ComingSoonBG2,
} from "../../../../components/illustrations/backgrounds";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    comingSoonContainer: {
      position: "relative",
      flexGrow: 1,
      display: "flex",
      color: "#FFFFFF",
      width: "100%",
      height: "auto",
      background: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        padding: "50px 10px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "50px 10px",
      },
    },
    inner: {
      flexGrow: 1,
      marginLeft: "6vw",
      width: "75%",
      [theme.breakpoints.only("xs")]: {
        width: "100vw",
        margin: "auto",
      },
    },
    bgIllustration: {
      position: "absolute",
      right: 0,
      height: "100%",
      opacity: 1.0,
      pointerEvents: "none",
    },
    bgIllustration2: {
      position: "absolute",
      right: 0,
      height: "100%",
      top: 30,
      opacity: 0.8,
      pointerEvents: "none",
    },
  })
);

export const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.comingSoonContainer}>
      <ComingSoonBG className={classes.bgIllustration} />{" "}
      <ComingSoonBG2 className={classes.bgIllustration2} />
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.inner}
        style={{ maxWidth: 1400, margin: "auto" }}
      >
        <Grid item xs={12} sm={6}>
          <Illustration />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InfoBanner />
        </Grid>
      </Grid>
    </div>
  );
};
