import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box, Link, Snackbar, InputAdornment, CircularProgress } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@material-ui/core/Avatar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import useGeolocation from '../../hooks/useGeolocation';
import playbtn from '../../../../../static/images/home/playBtn.png';
import { useFetchHomeData } from '../../hooks/use-data';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}
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
        clipPath: {
            position: 'relative',

            '&:after': {
                content: "''",
                position: 'absolute',
                left: '0',
                bottom: '-10px',
                height: '15px',
                width: '100%',
                border: 'solid 5px white',
                borderColor: 'white transparent transparent transparent',
                borderRadius: '60%'
            }
        },

        titleHeading: {
            fontWeight: 800,
            fontFamily: 'Nunito',
            letterSpacing: -1,
            color: theme.colors.white,
            fontSize: '64px',
            [theme.breakpoints.only('xs')]: {
                fontSize: 40,
                fontWeight: 900,
                textAlign: 'center'
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: '32px'
            }
        },
        subContainer: {
            marginTop: 20,
            marginBottom: 20,
            color: '#89CDFF',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center'
            }
        },
        subTitle: {
            fontWeight: 700,
            fontFamily: 'Nunito',
            letterSpacing: -1,

            fontSize: '36px',
            lineHeight: '29.05px',

            [theme.breakpoints.only('xs')]: {
                fontSize: '24px'
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
            fontSize: '18px',
            marginTop: 20,

            [theme.breakpoints.only('xs')]: {
                fontSize: '16px',
                textAlign: 'center'
            }
        },
        offerContainer: {
            [theme.breakpoints.only('lg')]: {
                marginRigt: 200
            }
        },
        actionDiv: {
            display: 'flex'
        },

        actionButtonBook: {
            textTransform: 'none',
            height: 50,
            minWidth: '100% !important',
            color: 'white',
            fontWeight: 500,
            backgroundColor: '#214662',
            padding: '7px 15px',
            margin: 'auto',

            // marginRight: 10,
            borderRadius: 6,
            '&:hover': {
                background: '#214662',
                opacity: 0.9
            },
            [theme.breakpoints.only('xs')]: {
                minWidth: '100% !important',
                margin: 'auto',
                justifyContent: 'center !important'
            }
        },
        searchItem: {
            color: '#4990A4',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center !important'
            }
        },
        searchItemControl: {
            color: '#4990A4',
            display: 'flex',
            // height: 20,
            justifyContent: 'flex-start !important',
            alignItems: 'center',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center'
            }
        },
        underline: {
            position: 'absolute',
            width: '167.05px',
            height: '13.19px',
            background: '#FFFFFF'
        },
        typeWriter: {
            marginLeft: 20,
            marginRight: 20,
            minWidth: 85,
            textAlign: 'center',
            [theme.breakpoints.only('xs')]: {
                marginLeft: 10,
                marginRight: 10,
                minWidth: 85
            }
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
        formControl: {
            width: '100% !important',
            [theme.breakpoints.up('md')]: {
                width: '95% !important '
            },
     
        },
        overflow: {
            [theme.breakpoints.only('lg')]: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '9rem'
            }
        },
        link: {
            textDecoration: 'none'
        },

        setMiddle: {
            marginTop: 80,

            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center'
            }
        },
        select: {
            '& .MuiSvgIcon-root': {
                color: '#4990A4'
            }
        },
        avatar: {
            marginRight: '12.4px',
            width: '46px',
            height: '46px',
            [theme.breakpoints.only('xs')]: {
                marginRight: '10px',
                width: '26px',
                height: '26px'
            }
        },
        links: {
            color: 'white',
            fontSize: '16px',
            [theme.breakpoints.only('xs')]: {
                fontSize: '14px'
            }
        },
        searchText: {
            marginLeft: 2,
            fontWeight: 500,
            fontSize: '16px',
            [theme.breakpoints.only('xs')]: {
                fontSize: '14px'
            }
        }
    })
);

const otherCountries = ['Germany', 'Canada', 'United States of America', 'United Kingdom'];
const africa = ['Nigeria', 'Cameroon', 'Ghana'];
function getStyles(name: string, sendMoneyFrom: readonly string[], theme: Theme) {
    return {
        fontWeight: sendMoneyFrom.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
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
    const [sendMoneyFrom, setSendMoneyFrom] = useState<string[]>([]);
    const [sendMoneyTo, setSendMoneyto] = useState<string[]>([]);
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // getting users location via IP address
    const { location } = useGeolocation();

    const handleCloseSnack = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarOpen(false);
    };
    const handleChangeMoneyFrom = (event: SelectChangeEvent<typeof sendMoneyFrom>) => {
        const {
            target: { value }
        } = event;
        setSendMoneyFrom(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };
    const handleChangeMoneyTo = (event: SelectChangeEvent<typeof sendMoneyTo>) => {
        const {
            target: { value }
        } = event;
        setSendMoneyto(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };
    // eslint-disable-next-line no-console

    const handleSearch = () => {
        if (sendMoneyFrom.length === 0 || sendMoneyTo.length === 0) {
            setError('Please select region');
            setSnackBarOpen(true);
        }
    };
    return (
        <motion.div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={snackBarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnack}
            >
                <Alert onClose={handleCloseSnack} severity='warning'>
                    {error}
                </Alert>
            </Snackbar>
            {/* <Container> */}

            <Box className={classes.container}>
                {/* {location.loaded ? ( */}
                <Typography variant='h4' className={classes.titleHeading}>
                    Send money from <span className={classes.clipPath}>{location.loaded ? location.locations : 'Africa'}</span> to any other country
                </Typography>

                {/* <motion.p className={classes.paragraph}>{frontMatter.intro}</motion.p> */}
                <Box className={classes.offerContainer}>
                    <motion.p className={classes.offer}>{frontMatter.offerText}</motion.p>
                </Box>

                <Grid container direction='row' className={classes.subContainer}>
                    <Grid item>
                        <Typography className={classes.subTitle}>Pay </Typography>
                    </Grid>
                    <Grid item>
                        <Box className={classes.typeWriter}>
                            <Typography className={classes.subTitle}>
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
                        <Typography className={classes.subTitle}>bills in</Typography>
                    </Grid>
                    <Grid item>
                        <Box className={classes.typeWriter} style={{ color: 'white' }}>
                            <Typography className={classes.subTitle}>
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
                <Box>
                    <Box className={classes.searchContainer}>
                        <Grid container spacing={1} className={classes.searchItem}>
                            <Grid item xs={12} sm={12} lg={5} className={classes.searchItemControl}>
                                <FormControl fullWidth variant='standard' sx={{ width: '100%' }}>
                                    <Select
                                        displayEmpty
                                        className={classes.select}
                                        value={sendMoneyFrom}
                                        onChange={handleChangeMoneyFrom}
                                        startAdornment={
                                            <InputAdornment position='start'>
                                                <RoomIcon style={{ fontSize: 23 }} />
                                            </InputAdornment>
                                        }
                                        input={<OutlinedInput />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return (
                                                    <Grid className={classes.searchItemControl} container>
                                                        <div className={classes.overflow}>
                                                            <Typography className={classes.searchText}>Transfer money from </Typography>
                                                        </div>
                                                    </Grid>
                                                );
                                            }

                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}
                                    >
                                        {africa.map(name => (
                                            <MenuItem key={name} value={name} style={getStyles(name, sendMoneyFrom, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={5} className={classes.searchItemControl}>
                                <FormControl fullWidth variant='standard' sx={{ width: '100%' }}>
                                    <Select
                                        displayEmpty
                                        className={classes.select}
                                        value={sendMoneyTo}
                                        onChange={handleChangeMoneyTo}
                                        startAdornment={
                                            <InputAdornment position='start'>
                                                <RoomIcon style={{ fontSize: 23 }} />
                                            </InputAdornment>
                                        }
                                        input={<OutlinedInput />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return (
                                                    <Grid className={classes.searchItemControl} container>
                                                        <div className={classes.overflow}>
                                                            <Typography className={classes.searchText}>Transfer money to </Typography>
                                                        </div>
                                                    </Grid>
                                                );
                                            }

                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}
                                    >
                                        {otherCountries.map(name => (
                                            <MenuItem key={name} value={name} style={getStyles(name, sendMoneyTo, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={12} lg={2}>
                                <Button
                                    style={{ fontSize: '16px' }}
                                    onClick={() => handleSearch()}
                                    variant='contained'
                                    className={classes.actionButtonBook}
                                >
                                    Get Started
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className={classes.setMiddle}>
                    <Grid className={classes.searchItem} container direction='row' alignItems='center'>
                        <Link href='#' color='inherit' underline='none'>
                            <Avatar className={classes.avatar} alt='How it works' src={playbtn} />
                        </Link>
                        <Typography className={classes.links}>
                            <Link href='#' color='inherit' underline='always'>
                                See how it works?
                            </Link>
                        </Typography>
                    </Grid>
                </Box>
            </Box>
            {/* </Container> */}
        </motion.div>
    );
};
