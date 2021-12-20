import { Button, Typography, Grid, Box, Link, Snackbar } from '@material-ui/core';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { RipplePlayButton } from '../../../../components/common/ripple-button';
import { RootState } from '../../../../app/store';
import { useFetchHomeData } from '../../hooks/use-data';
import { useFormatContentBasedOnLocation } from '../../../../hooks/use-format-content-based-on-location';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = (isAfrica: boolean) => {
    return makeStyles((theme: Theme) =>
        createStyles({
            container: {
                order: 1,
                display: 'flex',
                margin: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                [theme.breakpoints.up('md')]: {
                    marginLeft: '4vw',
                    width: '90%',
                    marginTop: '100px'
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 30px 10px 20px',
                    marginLeft: '2vw',
                    marginTop: '50px'
                }
            },
            titleHeading: {
                fontWeight: 700,
                fontFamily: 'Nunito',
                letterSpacing: -1,
                color: theme.colors.white,
                fontSize: '3.2rem',
                [theme.breakpoints.down('md')]: {
                    fontSize: '2.5rem'
                }
            },
            subTitle: {
                fontWeight: 700,
                fontFamily: 'Nunito',
                letterSpacing: -1,
                fontSize: '1.3rem',
                lineHeight: -1,
                color: 'grey',
                marginTop: 20,
                [theme.breakpoints.only('xs')]: {
                    fontSize: '1rem'
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
            clipPath: {
                position: 'relative',
                color: 'white',
                '&:after': {
                    content: "''",
                    position: 'absolute',
                    left: '0',
                    bottom: '-10px',
                    height: '15px',
                    width: '100%',
                    border: 'solid 1px white',
                    borderColor: 'white transparent transparent transparent',
                    borderRadius: '60%'
                }
            },
            searchContainer: {
                width: '100%',
                maxWidth: 600,
                background: 'white',
                borderRadius: 4,
                marginTop: 30,
                padding: 5,
                [theme.breakpoints.down('sm')]: {
                    margin: 'auto',
                    marginTop: 30
                }
            },
            offer: {
                color: theme.colors.mainGreen,
                fontWeight: 700,
                fontSize: '18px',
                marginTop: 20,
                [theme.breakpoints.only('xs')]: {
                    fontSize: '16px'
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

            getStarted: {
                textTransform: 'none',
                height: 40,
                minWidth: '10ch',
                width: '100%',
                color: 'white',
                fontWeight: 500,
                border: '2px solid white',
                padding: '7px 15px',
                backgroundColor: isAfrica ? 'transparent' : '#214662',
                borderRadius: 6,
                '&:hover': {
                    background: '#214662',
                    opacity: 0.9
                }
            },
            searchItem: {
                color: '#040d21',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            searchItemControl: {
                color: '#040d21',
                display: 'flex',
                height: 60,
                justifyContent: 'flex-start !important',
                alignItems: 'center',
                [theme.breakpoints.only('xs')]: {
                    justifyContent: 'center'
                }
            },
            actionButtonExplore: {
                textTransform: 'none',
                height: 0,
                marginTop: 10,
                border: '1px solid #040d21',
                color: theme.colors.mainGreen,
                fontWeight: 600,
                padding: '7px 15px',
                width: '20ch',
                borderRadius: 6,
                '&:hover': {
                    opacity: 0.9
                }
            },
            formControl: {
                width: '100% !important',
                [theme.breakpoints.up('md')]: {
                    width: '95% !important '
                }
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
                [theme.breakpoints.only('sm')]: {
                    justifyContent: 'left'
                }
            },
            select: {
                '& .MuiSvgIcon-root': {
                    color: '#040d21'
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
};

interface Country {
    country: string;
    flag: string;
    currencyCode: string;
    active: boolean;
}
const otherCountries = [
    {
        country: 'Germany',
        flag: 'DE',
        currencyCode: 'EUR',
        active: false
    },
    {
        country: 'Canada',
        flag: 'CA',
        currencyCode: 'CAD',
        active: false
    },
    {
        country: 'United States of America',
        flag: 'US',
        currencyCode: 'USD',
        active: false
    },
    {
        country: 'United Kingdom',
        flag: 'GB',
        currencyCode: 'GBP',
        active: false
    }
];

const africa = [
    {
        country: 'Nigeria',
        flag: 'NG',
        currencyCode: 'NGN',
        active: false
    },
    {
        country: 'Cameroon',
        flag: 'CM',
        currencyCode: 'XAF',
        active: true
    },
    {
        country: 'Ghana',
        flag: 'GH',
        currencyCode: 'GHS',
        active: true
    }
];

function getStyles(name: string, sendMoneyFrom: Country, theme: Theme) {
    return {
        fontWeight: theme.typography.fontWeightMedium,
        fontFamily: 'Nunito',
        fontSize: '1em'
    };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 'max-content',
            minWidth: 250
        }
    }
};

export const InfoBanner: React.FC = () => {
    const theme = useTheme();
    const [sendMoneyFrom, setSendMoneyFrom] = useState<Country>(otherCountries[0]);
    const [sendMoneyTo, setSendMoneyTo] = useState<Country>(africa[0]);
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

    // data
    const { heroMainHeading, heroSubHeading } = useFetchHomeData();
    const handleFormatContent = useFormatContentBasedOnLocation();

    const { isAfrica = false } = useSelector((state: RootState) => state.global);

    const moneyFromCountryList = isAfrica ? africa : otherCountries;
    const moneyToCountryList = isAfrica ? otherCountries : africa;

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
        setSendMoneyFrom(value);
    };
    const handleChangeMoneyTo = (event: SelectChangeEvent<typeof sendMoneyTo>) => {
        const {
            target: { value }
        } = event;
        setSendMoneyTo(value);
    };

    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3006' : `https://app-staging.lucqax.com`;
    const handleSearch = () => {
        window.location.replace(`${url}/payment?send_from=${sendMoneyFrom.currencyCode}&send_to=${sendMoneyTo.currencyCode}`);
    };
    const getCurrentCurrency = (options: any, currency: any) => {
        return options.filter(option => option.currencyCode === currency.currencyCode)[0];
    };

    const BANNER_TEXT = {
        heading: handleFormatContent(heroMainHeading),
        subHeading: handleFormatContent(heroSubHeading)
    };
    const classes = useStyles(isAfrica)();
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
                    {'error'}
                </Alert>
            </Snackbar>
            <Box className={classes.container}>
                {/* {location.loaded ? ( */}
                <Typography variant='h4' className={classes.titleHeading} gutterBottom>
                    {BANNER_TEXT.heading}
                </Typography>
                <Typography paragraph className={classes.subTitle}>
                    {BANNER_TEXT.subHeading}
                </Typography>
                <Box>
                    {!isAfrica ? (
                        <Box className={classes.searchContainer}>
                            <Grid container spacing={1} className={classes.searchItem}>
                                <Grid item xs={12} md={4} className={classes.searchItemControl}>
                                    <FormControl fullWidth variant='standard' sx={{ width: '100%' }}>
                                        <Select
                                            displayEmpty
                                            className={classes.select}
                                            value={getCurrentCurrency(otherCountries, sendMoneyFrom.currencyCode)}
                                            onChange={handleChangeMoneyFrom}
                                            input={<Input disableUnderline={true} />}
                                            IconComponent={KeyboardArrowDownIcon}
                                            MenuProps={MenuProps}
                                            defaultValue={otherCountries[0]}
                                        >
                                            {moneyFromCountryList.map((name, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={name}
                                                    disabled={name.active}
                                                    style={getStyles(name.country, sendMoneyFrom, theme)}
                                                >
                                                    <div style={{ display: 'flex' }}>
                                                        <img
                                                            alt={name.country}
                                                            src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${name.flag}.svg`}
                                                            style={{ paddingLeft: '1ch' }}
                                                        />
                                                        &nbsp; &nbsp;
                                                        <span style={{ fontSize: 14, fontWeight: 400, fontFamily: 'Nunito' }}>
                                                            {name.country} &nbsp; &nbsp;
                                                        </span>
                                                        <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Nunito' }}>
                                                            {name.currencyCode}
                                                        </span>
                                                        &nbsp;
                                                        {name.active && (
                                                            <span style={{ fontSize: 11, background: 'grey', padding: 5, borderRadius: 8 }}>
                                                                Coming Soon
                                                            </span>
                                                        )}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.searchItemControl}>
                                    <FormControl fullWidth variant='standard' sx={{ width: '100%' }}>
                                        <Select
                                            displayEmpty
                                            className={classes.select}
                                            value={getCurrentCurrency(africa, sendMoneyTo.currencyCode)}
                                            onChange={handleChangeMoneyTo}
                                            input={<Input disableUnderline={true} />}
                                            IconComponent={KeyboardArrowDownIcon}
                                            MenuProps={MenuProps}
                                            defaultValue={africa[0]}
                                        >
                                            {moneyToCountryList.map((name, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={name}
                                                    disabled={name.active}
                                                    style={getStyles(name.country, sendMoneyTo, theme)}
                                                >
                                                    <div style={{ display: 'flex' }}>
                                                        <img
                                                            alt={name.country}
                                                            src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${name.flag}.svg`}
                                                            style={{ paddingLeft: '1ch' }}
                                                        />
                                                        &nbsp; &nbsp;
                                                        <span style={{ fontSize: 14, fontWeight: 400, fontFamily: 'Nunito' }}>
                                                            {name.country} &nbsp;
                                                        </span>
                                                        <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Nunito' }}>
                                                            {name.currencyCode}
                                                        </span>
                                                        &nbsp; &nbsp;
                                                        {name.active && (
                                                            <span style={{ fontSize: 11, background: 'grey', padding: 5, borderRadius: 8 }}>
                                                                Coming Soon
                                                            </span>
                                                        )}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12} md={4} justifyContent={'center'} alignItems={'center'}>
                                    <Button onClick={handleSearch} variant='contained' className={classes.getStarted} disableElevation>
                                        Get Started
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <Grid container item xs={12} md={4} justifyContent={'center'} alignItems={'center'}>
                            <Button
                                onClick={() => window.location.replace('https://app-staging.lucqax.com/')}
                                variant='outlined'
                                className={classes.getStarted}
                                disableElevation
                                color={'secondary'}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    )}
                </Box>
                <Grid container className={classes.setMiddle}>
                    <Grid item container direction='row' alignItems='center' xs={12} sm={6}>
                        <Box sx={{ pl: 1, color: 'grey' }}>
                            <Typography>By Africans for Africans 🙌🏽</Typography>
                        </Box>
                    </Grid>

                    <Grid item container direction='row' alignItems='center' xs={12} sm={6}>
                        <RipplePlayButton />
                        <Typography className={classes.links}>
                            <Link href='#' color='inherit' underline='always'>
                                See how it works?
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
};
