import { makeStyles, Theme, createStyles, Container, Link, Box } from '@material-ui/core';

import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Layout } from '../../../components/layout/layout';
import ImageHeader from '../header';
import { SEO } from '../../../components/seo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 20
        },
        color: {
            color: theme.colors.mainGreen
        },
        blogLink: {
            fontWeight: 'bolder',
            cursor: 'pointer'
        }
    })
);
interface IAboutProps {
    name: string;
    image: string;
}

const AboutTemplate: React.FunctionComponent<IAboutProps> = ({ name, image, children }) => {
    const classes = useStyles();
    return (
        <>
            <Box style={{ backgroundColor: 'white', width: '100%' }}>
                <SEO title='About' image='/logo.png' />
                <ImageHeader image={image} title={name} />
                <Box>
                    <Container className={classes.root}>
                        <Link href='/about' underline='none' className={classes.blogLink}>
                            <KeyboardArrowLeftIcon className={classes.color} /> About
                        </Link>
                    </Container>
                </Box>

                <hr />
            </Box>
            <Layout>{children}</Layout>
        </>
    );
};
export default AboutTemplate;
