import React, { FunctionComponent } from 'react';
import { Box, Container, createStyles, Grid, IconButton, Link, makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useFetchHomeData } from '../../../features/home/hooks/use-data';

interface FooterLink {
    link: string;
}
interface Media {
    name: string;
    icon: any;
    link: string;
}

export interface Footer {
    copyrightOwner: string;
    socialMedia: Media[];
    aboutContent?: string;
    support?: FooterLink[];
    address1?: string;
    email1?: string;
    phone1?: string;
    address2?: string;
    email2?: string;
    phone2?: string;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontWeight: 900,
            fontSize: 35,
            marginTop: -20
        },
        subTitle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        link: {
            color: grey[700],
            textDecoration: 'none',
            marginTop: 20,
            marginBottom: 20
        },

        text: {
            color: grey[700],
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10
        },
        contentMargin: {
            marginRight: 60
        },
        copywrite: { color: theme.colors.mainGreen }
    })
);

export const Footer: FunctionComponent<Footer> = ({ copyrightOwner, socialMedia }) => {
    const classes = useStyles();
    const url = ['/about', '/services', '/faq', '/blog', '/contact'];
    const frontmatter = useFetchHomeData();
    console.log(frontmatter);
    const helfulLink = [
        { link: frontmatter.footerLinkList.link1 },
        { link: frontmatter.footerLinkList.link2 },
        { link: frontmatter.footerLinkList.link3 },
        { link: frontmatter.footerLinkList.link4 },
        { link: frontmatter.footerLinkList.link5 }
    ];

    return (
        <footer style={{ background: '#0D324D' }}>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={7} md={9} lg={4}>
                            <Box className={classes.title}>azafly</Box>
                            <Box className={classes.contentMargin}>
                                <div className={classes.text}>{frontmatter.footerIntroContent}</div>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={4} md={3} lg={2}>
                            <Box>
                                <Box className={classes.subTitle}>Helpful Links</Box>
                            </Box>
                            {helfulLink.map((link, index) => {
                                return (
                                    <Box key={index} className={classes.link}>
                                        <Link href={url[index]} color='inherit'>
                                            <KeyboardArrowRightIcon /> {link.link}
                                        </Link>
                                    </Box>
                                );
                            })}
                        </Grid>
                        <Grid item xs={7} sm={6} lg={3}>
                            <Box>
                                <Box className={classes.subTitle}>International Office</Box>
                            </Box>
                            <Box className={classes.contentMargin}>
                                <div className={classes.text}>{frontmatter.internationalOfficeAddress}</div>
                                <div className={classes.text}>Phone: {frontmatter.internationalOfficePhone}</div>
                                <div className={classes.text}>Email: {frontmatter.internationalOfficeEmail}</div>
                            </Box>
                        </Grid>
                        <Grid item xs={9} sm={6} lg={3}>
                            <Box>
                                <Box className={classes.subTitle}>Nigeria Office</Box>
                            </Box>
                            <Box className={classes.contentMargin}>
                                <div className={classes.text}>{frontmatter.nigeriaOfficeAddress}</div>
                                <div className={classes.text}>Phone: {frontmatter.nigeriaOfficePhone}</div>
                                <div className={classes.text}>Email: {frontmatter.nigeriaOfficeEmail}</div>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box>
                        <hr style={{ marginTop: 30 }} />
                        <Box className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
                            <Box className='flex justify-center md:order-2'>
                                {socialMedia.map((media, index) => {
                                    return (
                                        <Box key={index} display='inline-block' marginRight='1rem' marginBottom='1rem'>
                                            <IconButton href={media.link} color='primary'>
                                                {media.icon}
                                            </IconButton>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className='mt-8 md:mt-0 md:order-1'>
                                <p className={`text-center text-base leading-6 ${classes.copywrite}`}>
                                    © {new Date().getFullYear()} {copyrightOwner}. All rights reserved.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};
