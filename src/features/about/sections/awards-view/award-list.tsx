import { makeStyles, Theme, createStyles, Box, Typography, Link } from '@material-ui/core';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:hover': {
                backgroundColor: '#f5f6f7'
            }
        },
        color: {
            color: theme.colors.mainGreen,
            marginRight: 30,
            marginTop: 20
        },
        title: {
            marginLeft: 50,
            margingBottom: 50,
            marginTop: 20,
            fontSize: 17,

            '&:hover': {
                color: theme.colors.mainGreen
            }
        }
    })
);

interface IAwardListProps {
    year: string;
    awardList: any;
}

const AwardList: React.FunctionComponent<IAwardListProps> = ({ year, awardList }) => {
    const classes = useStyles();
    const [toggleArrow, setToggleArrow] = useState<boolean>(false);

    const handleToggle = () => {
        setToggleArrow(!toggleArrow);
    };
    const icon = !toggleArrow ? <KeyboardArrowDownIcon style={{ fontSize: 35 }} /> : <KeyboardArrowUpIcon style={{ fontSize: 35 }} />;
    return (
        <Box style={{ padding: 20 }}>
            <Box className={classes.root}>
                <Box onClick={handleToggle} display='flex' justifyContent='space-between' style={{ width: '100%', marginLeft: 20 }}>
                    <Box alignItems='end'>
                        <div style={{ fontSize: 27, fontWeight: 'bolder', marginTop: 20 }}>{year}</div>
                    </Box>
                    <Box className={classes.color}>{icon}</Box>
                </Box>

                {toggleArrow ? (
                    <Box>
                        <div style={{ padding: 20 }}>
                            {awardList.map((award, index) => {
                                return (
                                    <div key={index} className={classes.title}>
                                        <Link color='inherit' underline='always'>
                                            {award.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </Box>
                ) : (
                    ''
                )}
                <br />
            </Box>
            <hr />
        </Box>
    );
};
export default AwardList;
