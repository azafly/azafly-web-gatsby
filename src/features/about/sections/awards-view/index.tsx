import { makeStyles, Theme, createStyles, Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
    const [toggleArrow, setToggleArrow] = useState<boolean>(false);

    const handleToggle = () => {
        setToggleArrow(!toggleArrow);
    };
    const icon = !toggleArrow ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
    return (
        <Box>
            <Container>
                <Box className={classes.text}>
                    <div className={classes.subTitle}>{content}</div>
                </Box>
                <div className={classes.title}>Awards</div>
                <Grid container style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} className={classes.grid}>
                        {awardsData?.map((award, index) => {
                            return (
                                <Box key={index}>
                                    <Box display='flex' justifyContent='space-between' style={{ width: '100%' }}>
                                        <Box alignItems='end'>
                                            <div style={{ fontSize: 25, fontWeight: 'bolder' }}>{award.year}</div>
                                        </Box>
                                        <Box onClick={handleToggle} className={classes.color}>
                                            {icon}
                                        </Box>
                                    </Box>
                                    <hr />

                                    {!toggleArrow ? (
                                        <Box style={{ backgroundColor: '#dfe9ec' }}>
                                            {award.awardList.map((awardList, index) => {
                                                return (
                                                    <Typography
                                                        key={index}
                                                        style={{
                                                            marginLeft: 50,
                                                            margingBottom: 50
                                                        }}
                                                    >
                                                        {awardList.title}
                                                    </Typography>
                                                );
                                            })}
                                        </Box>
                                    ) : (
                                        ''
                                    )}
                                    <br />
                                </Box>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default AwardsView;
