import { Grid, makeStyles, Theme, createStyles, Box } from "@material-ui/core";
import React from "react";

import { Illustration } from "./illustration";
import { InfoBanner } from "./info-banner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secureByDesigncontainer: {
      flexGrow: 1,
      marginLeft: "14vw",
      [theme.breakpoints.only("md")]: {
        marginLeft: "8vw",
      },
      [theme.breakpoints.only("sm")]: {
        marginLeft: "7vw",
      },
      [theme.breakpoints.only("xs")]: {
        margin: "auto",
        marginTop: "-30px",
      },
    },
  })
);

export const Secure = () => {
  const classes = useStyles();
  return (
    <div className={classes.secureByDesigncontainer}>
      <Grid
        container
        justify="space-around"
        spacing={3}
        alignItems="center"
        style={{ maxWidth: 1400, margin: "auto" }}
      >
        <Box clone order={{ xs: 2, sm: 1 }}>
          <Grid item xs={12} sm={5} md={4}>
            <InfoBanner />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 2 }}>
          <Grid item xs={12} sm={7} md={8}>
            <Illustration />
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};
