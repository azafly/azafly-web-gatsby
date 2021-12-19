import { Box, Container, createStyles, Grid, IconButton, Link, makeStyles } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { FunctionComponent } from 'react';

import { useFetchHomeData } from '../../../features/home/hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../hooks/use-format-content-based-on-location';

interface FooterLink {
    link: string;
}
interface Media {
    name: string;
    icon: JSX.Element;
    link: string;
}

export interface FooterProps {
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
const useStyles = makeStyles(() =>
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
            color: 'white',
            textDecoration: 'none',
            marginTop: 20,
            marginBottom: 20
        },

        text: {
            color: 'white',
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10
        },
        contentMargin: {
            marginRight: 60
        },
        copyright: { color: 'white' }
    })
);
const helpfulLinks = [
    {
        name: 'About Us',
        route: '/about'
    },
    { name: 'Services', route: '/services' },
    {
        name: 'FAQs',
        route: '/faq'
    },
    {
        name: 'Blog',
        route: '/blog'
    }
];

const socialMediaIcons = {
    facebook: <FacebookIcon />,
    linkedIn: <LinkedInIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />
};

export const Footer: FunctionComponent = () => {
    const classes = useStyles();
    const handleFormatContent = useFormatContentBasedOnLocation();
    // const {
    //     footer: {
    //         footerIntroContent,
    //         internationalOfficeAddress,
    //         internationalOfficeEmail,
    //         internationalOfficePhone,
    //         nigeriaOfficeAddress,
    //         nigeriaOfficeEmail,
    //         nigeriaOfficePhone,
    //         socialMediaLinks: { facebook, instagram, twitter, linkedIn }
    //     }
    // } = useFetchHomeData();

    //  const socialMediaUrls = [facebook, instagram, twitter, linkedIn];

    return (
        <footer style={{ background: '#0D324D' }}>
            {/* <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={7} md={9} lg={4}>
                            <Box className={classes.title}>lucqax</Box>
                            <Box className={classes.contentMargin}>
                                <div className={classes.text}>{handleFormatContent(footerIntroContent)}</div>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={4} md={3} lg={2}>
                            <Box>
                                <Box className={classes.subTitle}>Helpful Links</Box>
                            </Box>
                            {helpfulLinks.map(({ name, route }) => {
                                return (
                                    <Box key={route} className={classes.link}>
                                        <Link href={route} color='inherit'>
                                            <KeyboardArrowRightIcon /> {name}
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
                                <div className={classes.text}>{internationalOfficeAddress}</div>
                                <div className={classes.text}>Phone: {internationalOfficePhone}</div>
                                <div className={classes.text}>Email: {internationalOfficeEmail}</div>
                            </Box>
                        </Grid>
                        <Grid item xs={9} sm={6} lg={3}>
                            <Box>
                                <Box className={classes.subTitle}>Nigeria Office</Box>
                            </Box>
                            <Box className={classes.contentMargin}>
                                <div className={classes.text}>{nigeriaOfficeAddress}</div>
                                <div className={classes.text}>Phone: {nigeriaOfficePhone}</div>
                                <div className={classes.text}>Email: {nigeriaOfficeEmail}</div>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box>
                        <hr style={{ marginTop: 30 }} />
                        <Box className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
                            <Box className='flex justify-center md:order-2'>
                                {socialMediaUrls.map((media, index) => {
                                    return (
                                        <Box key={index} display='inline-block' marginRight='1rem' marginBottom='1rem'>
                                            <IconButton href={media} color='primary'>
                                                {socialMediaIcons[media as keyof typeof socialMediaIcons]}
                                            </IconButton>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className='mt-8 md:mt-0 md:order-1'>
                                <p className={`text-center text-base leading-6 ${classes.copyright}`}>
                                    © {new Date().getFullYear()} {'Azafly'}. All rights reserved.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> */}
        </footer>
    );
};
