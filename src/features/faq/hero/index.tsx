import React from "react";
import { Hidden, Grid } from "@material-ui/core";

import { useHeroStyle } from "../classes";
import { FAQSvg } from "./illustrations/faq";
import { SearchContainer } from "./search";
import BgCircle from "./illustrations/background-circle.svg";

export const HeroContainer = () => {
  const classes = useHeroStyle();
  return (
    <div className={classes.hero__main}>
      <Grid container justifyContent="center" className="content">
        <Grid item xs={12} md={6}>
          <FAQSvg className={classes.illustration} />
        </Grid>
        <Grid item xs={12} md={6} alignItems="flex-start">
          <SearchContainer />
        </Grid>
      </Grid>
      <Hidden smDown>
        <img src={BgCircle} alt={"background"} className={classes.bg} />
      </Hidden>
    </div>
  );
};
