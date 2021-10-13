import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box, Link } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Typewriter from 'typewriter-effect';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@material-ui/core/Avatar';
import playbtn from '../../images/playBtn.png';
import { useFetchHomeData } from '../../hooks/use-data';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // [theme.breakpoints.up('lg')]: {
            //     marginLeft: '8vw'
            // },
            [theme.breakpoints.only('md')]: {
                marginLeft: '3vw'
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px 30px 10px 20px',
                marginLeft: '2vw'
            }
        },

        titleHeading: {
            fontWeight: 800,
            fontFamily: 'Nunito',
            letterSpacing: -1,
            color: theme.colors.white,
            fontSize: 45,
            [theme.breakpoints.only('xs')]: {
                fontSize: 40,
                fontWeight: 900
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: 45
            }
        },
        subTitle: {
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 800,
            fontFamily: 'Nunito',
            letterSpacing: -1,
            color: '#89CDFF',
            fontSize: 45,
            [theme.breakpoints.only('xs')]: {
                fontSize: 40,
                fontWeight: 900
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: 45
            }
        },
        searchContainer: {
            width: '100%',
            background: 'white',
            height: 70,
            borderRadius: 10,
            marginTop: 30,
            padding: 5,
            [theme.breakpoints.only('xs')]: {
                minHeight: 200
            },
            [theme.breakpoints.only('sm')]: {
                minHeight: 200
            },
            [theme.breakpoints.only('md')]: {
                minHeight: 200
            }
        },
        paragraph: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontWeight: 500,

            marginTop: 20,
            [theme.breakpoints.only('xs')]: {}
        },
        offer: {
            color: theme.colors.mainGreen,
            fontWeight: 700,
            fontSize: '0.9em',
            marginTop: 20,
            [theme.breakpoints.only('xs')]: {}
        },
        actionDiv: {
            display: 'flex'
        },
        rootSelect: {
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #484850',
                borderRadius: '5px 5px 0 0'
            }
        },
        actionButtonBook: {
            textTransform: 'none',
            height: 50,
            minwidth: 100,
            color: 'white',
            fontWeight: 500,
            backgroundColor: '#214662',
            // padding: '7px 15px',
            margin: 5,
            // marginRight: 10,
            borderRadius: 6,
            '&:hover': {
                background: '#214662',
                opacity: 0.9
            },
            [theme.breakpoints.only('xs')]: {
                minWidth: '100%'
            },
            [theme.breakpoints.only('md')]: {
                minWidth: '100%'
            },
            [theme.breakpoints.only('sm')]: {
                minWidth: '100%'
            }
        },
        searchItem: {
            color: '#4990A4'
        },
        underline: {
            position: 'absolute',
            width: '167.05px',
            height: '13.19px',
            background: '#FFFFFF'
        },
        typeWriter: {
            marginLeft: 10,
            marginRight: 10,
            maxWidth: 85
        },
        actionButtonExplore: {
            textTransform: 'none',
            height: 0,
            marginTop: 10,
            border: '1px solid #4990A4',
            color: theme.colors.mainGreen,
            fontWeight: 600,
            padding: '7px 15px',
            width: '20ch',
            borderRadius: 6,
            minWidth: 170,
            '&:hover': {
                opacity: 0.9
            }
        },

        link: {
            textDecoration: 'none'
        },
        selectRoot: {
            color: '#FFFFFF'
        },
        select: {
            '& .MuiSvgIcon-root': {
                color: '#4990A4'
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #484850',
                borderRadius: '5px 5px 0 0'
            }
        }
    })
);

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

export const InfoBanner = () => {
    const classes = useStyles();

    const frontMatter = useFetchHomeData();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value }
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <motion.div className={classes.container}>
            <Typography variant='h4' className={classes.titleHeading}>
                {/* {frontMatter.intro} */}
                Send money from <span>Africa</span> to any other country
                {/* {frontMatter.intro} */}
            </Typography>

            {/* <motion.p className={classes.paragraph}>{frontMatter.intro}</motion.p> */}
            <motion.p className={classes.offer}>{frontMatter.offerText}</motion.p>
            <Grid container direction='row' alignItems='center' className={classes.subTitle}>
                <Grid item>
                    <Typography variant='h6'>Pay </Typography>
                </Grid>
                <Grid item>
                    <Box className={classes.typeWriter}>
                        <Typography variant='h6'>
                            <Typewriter
                                options={{
                                    strings: [' medical', ' morgage', 'tuition'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>bills in</Typography>
                </Grid>
                <Grid item>
                    <Box className={classes.typeWriter} style={{ color: 'white' }}>
                        <Typography variant='h6'>
                            <Typewriter
                                options={{
                                    strings: ['Africa', 'India', 'Europe'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 220
                                }}
                            />
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box className={classes.searchContainer}>
                <Grid container justify='space-around' spacing={1} alignItems='center' className={classes.searchItem}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <FormControl variant='standard' sx={{ width: '100%' }}>
                            <Select
                                color='primary'
                                displayEmpty
                                className={classes.select}
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                IconComponent={KeyboardArrowDownIcon}
                                renderValue={selected => {
                                    if (selected.length === 0) {
                                        return (
                                            <Grid className={classes.searchItem} container direction='row' alignItems='center'>
                                                <RoomIcon />
                                                <Typography style={{ marginLeft: 20 }}>Transfer money from </Typography>
                                            </Grid>
                                        );
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                            >
                                {names.map(name => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <FormControl fullWidth sx={{ width: '100%' }}>
                            <Select
                                color='primary'
                                displayEmpty
                                className={classes.select}
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                IconComponent={KeyboardArrowDownIcon}
                                renderValue={selected => {
                                    if (selected.length === 0) {
                                        return (
                                            <Grid className={classes.searchItem} container direction='row' alignItems='center'>
                                                <RoomIcon />
                                                <Typography style={{ marginLeft: 20 }}>Transfer money to </Typography>
                                            </Grid>
                                        );
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                            >
                                {names.map(name => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={2} container justify='center'>
                        <Button variant='contained' className={classes.actionButtonBook}>
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ marginTop: 100 }}>
                <Grid className={classes.searchItem} container direction='row' alignItems='center'>
                    <Link href='#' color='inherit' underline='none'>
                        <Avatar style={{ marginRight: 20, width: 50, height: 50 }} alt='How it works' src={playbtn} />
                    </Link>
                    <Typography style={{ color: 'white' }}>
                        <Link href='#' color='inherit' underline='always'>
                            See how it works?
                        </Link>
                    </Typography>
                </Grid>
            </Box>
        </motion.div>
    );
};
