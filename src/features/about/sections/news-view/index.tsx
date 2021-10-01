import { makeStyles, Theme, createStyles, Box, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby-material-ui-components';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import SubFooter from '../sub-footer';
import NewsCard from './news-card';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '-80px',
            marginLeft: '8vw',
            marginRight: '8vw'
        },

        title: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 20
        }
    })
);

interface News {
    title: string;
    images: string;
    link: string;
}

interface INewsProps {
    newsData?: News[];
}

const NewsView: React.FunctionComponent<INewsProps> = ({ newsData }) => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.root}>
                <div className={classes.title}>Latest news and annoucement</div>
                <Grid
                    container
                    spacing={2}
                    style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    {newsData?.map((newsList, index) => {
                        return <NewsCard key={index} title={newsList.title} images={newsList.images} link={newsList.link} />;
                    })}
                </Grid>
            </Box>
            <SubFooter content='Get in touch' link='/services' buttonTitle='Contact us' />
        </Box>
    );
};
export default NewsView;
