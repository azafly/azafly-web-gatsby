import React, { PropsWithChildren } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    background_container: {
      position: "relative",
      overflowX: "hidden",
      width: "100vw",
      background: theme.palette.background.default,
    },
    bgIllustration1: {
      position: "absolute",
      left: 0,
      top: -78,
      zIndex: -1,
      opacity: 0.7,
      pointerEvents: "none",
    },
    bgIllustration2: {
      position: "absolute",
      top: -64,
      right: 0,
      opacity: 0.6,
      pointerEvents: "none",
      [theme.breakpoints.down("sm")]: {
        top: -64,
        left: 0,
        opacity: 0.3,
      },
    },
    bgIllustration3: {
      opacity: 0.7,
      pointerEvents: "none",
      position: "absolute",
      left: -10,
      bottom: -50,
    },
  })
);

export const DefaultBackgroundLayout = ({
  children,
}: PropsWithChildren<any>) => {
  const classes = useStyle();
  return (
    <div className={classes.background_container}>
      {/* < BGIllustration2 className={classes.bgIllustration2} />
            < SignUpBG2 className={classes.bgIllustration3} /> */}
      {children}
    </div>
  );
};
