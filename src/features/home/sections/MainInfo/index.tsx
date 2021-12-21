import { Grid, makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';

import { Illustration } from './illustration';
import { InfoBanner } from './info-banner';
import { SecureButton } from './button';
import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secureByDesignContainer: {
            paddingBottom: 50,
            margin: '6vw',
            marginTop: 0,
            flexGrow: 1,
            marginBottom: 0,
            [theme.breakpoints.only('xs')]: {
                paddingBottom: 10
            }
        }
    })
);

export const MainInfo: React.FC = () => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    const {
        section1: { section1Image, section1InfoText, section1MainHeading, section1ShortHeading },
        section2: { section2Image, section2InfoText, section2MainHeading, section2ShortHeading },
        section3: { section3Image, section3InfoText, section3MainHeading, section3ShortHeading }
    } = useFetchHomeData();

    const contentData = [
        {
            image: handleFormatContent(section1Image),
            shortTitle: handleFormatContent(section1ShortHeading),
            title: handleFormatContent(section1MainHeading),
            content: handleFormatContent(section1InfoText),
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 2
            },
            illustOrder: {
                xs: 2,
                sm: 1
            }
        },
        {
            image: handleFormatContent(section2Image),
            shortTitle: handleFormatContent(section2ShortHeading),
            title: handleFormatContent(section2MainHeading),
            content: handleFormatContent(section2InfoText),
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 1
            },
            illustOrder: {
                xs: 2,
                sm: 2
            }
        },
        {
            image: handleFormatContent(section3Image),
            shortTitle: handleFormatContent(section3ShortHeading),
            title: handleFormatContent(section3MainHeading),
            content: handleFormatContent(section3InfoText),
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 2
            },
            illustOrder: {
                xs: 2,
                sm: 1
            }
        }
    ];
    return (
        <main className={classes.secureByDesignContainer}>
            {contentData.map((data, index) => {
                return (
                    <Grid
                        container
                        key={index}
                        justifyContent='space-around'
                        alignItems='center'
                        style={{ maxWidth: 1600, margin: 'auto', paddingTop: 50 }}
                    >
                        <Box clone order={{ xs: data.bannerOrder.xs, sm: data.bannerOrder.sm }}>
                            <Grid item xs={12} sm={6} md={5}>
                                <InfoBanner title={data.title} content={data.content} shortTitle={data.shortTitle} />
                                <Box display={{ xs: 'none', lg: 'block', sm: 'block' }}>
                                    <SecureButton />
                                </Box>
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: data.illustOrder.xs, sm: data.illustOrder.sm }}>
                            <Grid item xs={12} sm={6} md={5}>
                                <Illustration image={data.image} />
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: 3 }} display={{ xs: 'block', lg: 'none', sm: 'none' }}>
                            <Grid item xs={10}>
                                <SecureButton />
                            </Grid>
                        </Box>
                    </Grid>
                );
            })}
        </main>
    );
};
