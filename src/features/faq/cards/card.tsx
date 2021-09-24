import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { useCardStyles } from "../classes";

export function Cards() {
  const classes = useCardStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root} elevation={0}>
        <CardActionArea className={classes.action}>
          <CardMedia
            className={classes.media}
            image="https://www.ntb.de/wp-content/uploads/2019/11/placeholder-image-icon-21.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6" align="center">
              How to pay
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
