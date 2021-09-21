import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Illustration } from "./illustration";
import { InfoBanner } from "./info-banner";
import { HomeImages } from '../../../../createPages/templates/home'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flexGrow: 1,
            width: "80%",
            margin: "auto",
            height: 800,
            paddingTop: 20,
            display: "flex",
            [theme.breakpoints.only("xs")]: {
                marginTop: 10,
                padding: "10px 10px",
                width: "100%",
                margin: "auto",
                marginBottom: 80,
            },
            [theme.breakpoints.only("md")]: {
                width: "80%",
            },
            [theme.breakpoints.only("sm")]: {
                width: "85%",
            },
        },
    })
);

interface HomePageHeaderSectionProps {
    isMobileScreenSize?: boolean;
    images: HomeImages;
}

export const HowToSetUp = ({ images }: HomePageHeaderSectionProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container justify="space-around" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Illustration images={images} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoBanner />
                </Grid>
            </Grid>
        </div>
    );
};
