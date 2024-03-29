import { makeStyles, Theme, createStyles, Box, Container, Grid, Button } from '@material-ui/core';
import { Link } from 'gatsby-material-ui-components';
import React from 'react';
import SubFooter from '../sub-footer';

import AwardList from './award-list';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 20
        },
        color: {
            color: theme.colors.mainGreen
        },
        text: {
            marginBottom: 50,
            marginTop: 10,
            flexGrow: 1,
            marginTop: '-80px',
            marginLeft: '10vw',
            marginRight: '10vw',
            [theme.breakpoints.only('md')]: {
                marginLeft: '8vw'
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: '-50px',
                marginBottom: 50
            }
        },

        title: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center'
        },
        subTitle: {
            fontSize: 15
        },

        grid: {
            marginLeft: '8vw',
            marginRight: '8vw',
            [theme.breakpoints.only('xs')]: {
                alignContent: 'center',
                alignItems: 'center'
            }
        }
    })
);

interface Awards {
    year: string;
    awardList: any;
}

interface IAwardsProps {
    awardsData: Awards[];
    content?: string;
}

const AwardsView: React.FunctionComponent<IAwardsProps> = ({ awardsData, content }) => {
    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Box className={classes.text}>
                    <div className={classes.title}>Recognitions</div>
                    <div className={classes.subTitle}>{content}</div>
                    <br />
                    <div className={classes.subTitle}>{content}</div>
                </Box>
                <div className={classes.title}>Awards</div>
                <Grid container style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} className={classes.grid}>
                        {awardsData?.map((award, index) => {
                            return <AwardList key={index} year={award.year} awardList={award.awardList} />;
                        })}
                    </Grid>
                </Grid>
            </Container>
            <SubFooter content='Check out our services' link='/services' buttonTitle='View services' />
        </Box>
    );
};
export default AwardsView;
