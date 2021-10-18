import { makeStyles, Theme, createStyles, Box, Container, Grid } from '@material-ui/core';
import { Link } from 'gatsby-material-ui-components';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        color: {
            color: theme.colors.mainGreen
        },
        parent: {
            position: 'relative',
            width: 400,
            height: 300,
            backgroundImage: props => `url(${props.images}) `,
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginBottom: 200,
            [theme.breakpoints.only('md')]: {
                maxWidth: 345
            },
            [theme.breakpoints.only('sm')]: {
                maxWidth: 345
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                maxWidth: 345,
                marginBottom: 100,
                marginTop: 50
            }
        },
        child: {
            position: 'absolute',
            width: 400,
            height: 250,
            background: '#f5f6f7',
            bottom: -200,
            left: 50,
            marginBottom: 50,
            boxShadow: '0 0 3px',
            [theme.breakpoints.only('md')]: {
                maxWidth: 345
            },
            [theme.breakpoints.only('sm')]: {
                maxWidth: 345
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                maxWidth: 345,
                marginBottom: 100
            }
        },
        subChild: {
            position: 'absolute',
            width: 140,
            height: 38,
            background: 'black',
            top: -19,
            left: -20
        },
        articleTitle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            alignContent: 'center',
            fontSize: 18,
            marginTop: 7
        },

        card: {
            [theme.breakpoints.only('xs')]: {
                alignContent: 'center',
                alignItems: 'center'
            }
        }
    })
);

interface NewsCardProps {
    title: string;
    images: string;
    link: string;
}

const NewsCard: React.FunctionComponent<NewsCardProps> = props => {
    const classes = useStyles(props);
    const { title, link } = props;
    return (
        <Grid item xs={12} sm={6} md={6} lg={4} className={classes.card}>
            <Link to={link} color='inherit'>
                <Box>
                    <div className={classes.parent}>
                        <div className={classes.child}>
                            <div className={classes.subChild}>
                                <div className={classes.articleTitle}>Article</div>
                            </div>

                            <Container>
                                <div style={{ fontSize: 15, marginTop: 35 }}>October 1, 2021</div>
                                <div
                                    style={{
                                        fontSize: 18,
                                        marginTop: 15,
                                        fontWeight: 'bolder'
                                    }}
                                >
                                    {title}
                                </div>
                                <div className={classes.color} style={{ fontSize: 16, marginTop: 30 }}>
                                    Read more <KeyboardArrowRightIcon />
                                </div>
                            </Container>
                        </div>
                    </div>
                </Box>
            </Link>
        </Grid>
    );
};
export default NewsCard;
