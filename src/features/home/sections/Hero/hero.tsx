import { Box, Grid, Hidden, Theme } from "@material-ui/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles, createStyles } from "@material-ui/styles";
import React from "react";
import { Illustration } from "./illustration";
import { InfoBanner } from "./info-banner";
import {
  HomeBGIllustration1,
  HomeBGIllustration3,
} from "../../../../components/illustrations/backgrounds";
import { HomeImages } from "../../../../createPages/templates/home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homePageHeroMain: {
      width: "100%",
      position: "relative",
      borderRadius: "50%",
    },
    homePageHeroInner: {
      flexGrow: 1,
      background: "#F7F8F9",
      padding: 50,
      [theme.breakpoints.only("xs")]: {
        padding: 5,
      },
    },
    homeBgllustration1: {
      position: "absolute",
      left: 0,
      top: -100,
      pointerEvents: "none",
      opacity: 0.7,
      height: "100%",
      [theme.breakpoints.only("xs")]: {
        left: -50,
        top: -90,
        height: 500,
      },
    },
    homeBgllustration2: {
      position: "absolute",
      right: 0,
      top: -128,
      pointerEvents: "none",
      opacity: 0,
      height: "110%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    homeBgllustration3: {
      position: "absolute",
      left: 0,
      pointerEvents: "none",
      bottom: 0,
      opacity: 0.8,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

interface Props {
  images: HomeImages;
}

export const HomePageHeroSection = ({ images }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.homePageHeroMain}>
      <Hidden smDown>
        <HomeBGIllustration1 className={classes.homeBgllustration1} />{" "}
        <HomeBGIllustration3 className={classes.homeBgllustration3} />
      </Hidden>

      <Grid
        container
        justify="space-around"
        spacing={3}
        alignItems="center"
        className={classes.homePageHeroInner}
      >
        <Box clone order={{ xs: 2, sm: 1 }}>
          <Grid item xs={12} sm={6}>
            <InfoBanner />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 2 }}>
          <Grid item xs={12} sm={6}>
            <Illustration images={images} />
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};
