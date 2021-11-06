import { Button, Typography, Grid, Box, Link, Snackbar, InputAdornment } from '@material-ui/core';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import RoomIcon from '@mui/icons-material/Room';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { RipplePlayButton } from '../../../../components/common/ripple-button';
import { useFetchHomeData } from '../../hooks/use-data';
import useGeolocation from '../../hooks/useGeolocation';

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
            [theme.breakpoints.up('md')]: {
                marginLeft: '4vw',
                width: '90%'
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px 30px 10px 20px',
                marginLeft: '2vw'
            }
        },
        titleHeading: {
            fontWeight: 750,
            fontFamily: 'LL Bold',
            letterSpacing: -1,
            color: theme.colors.white,
            fontSize: 48,
            [theme.breakpoints.only('xs')]: {
                fontSize: 40,
                fontWeight: 900,
                textAlign: 'center'
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: 48
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
        paragraph: {
            fontWeight: 550,
            color: 'grey',
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

        getStarted: {
            textTransform: 'none',
            height: 40,
            minWidth: '10ch',
            width: '100%',
            color: 'white',
            fontWeight: 500,
            backgroundColor: '#214662',
            padding: '7px 15px',
            borderRadius: 6,
            '&:hover': {
                background: '#214662',
                opacity: 0.9
            },
            [theme.breakpoints.down('sm')]: {
                minWidth: '100% !important',
                margin: 'auto',
                justifyContent: 'center !important'
            }
        },
        searchItem: {
            color: '#040d21',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center !important'
            }
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
        underline: {
            [theme.breakpoints.down('sm')]: {
                borderBottom: '1px solid grey'
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
        } else {
            window.location.replace(`https://app-staging.lucqax.com/payment?send_from=${sendMoneyFrom[0]}&sendTo=${sendMoneyTo}`);
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
            <Box className={classes.container}>
                {/* {location.loaded ? ( */}
                <Typography variant='h4' className={classes.titleHeading} gutterBottom>
                    Pay your most important international bills and invoices
                </Typography>
                <Typography paragraph className={classes.paragraph}>
                    We empower individuals and small businesses in{' '}
                    <span className={classes.clipPath}>{location.loaded ? location.locations : 'Africa'}</span> to pay their most important bills and
                    invoices to any institution or business in the world.
                </Typography>

                <Box>
                    <Box className={classes.searchContainer}>
                        <Grid container spacing={1} className={classes.searchItem}>
                            <Grid item xs={12} md={4} className={classes.searchItemControl}>
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
                                        input={<Input disableUnderline={true} className={classes.underline} />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return (
                                                    <Grid className={classes.searchItemControl} container>
                                                        <div className={classes.overflow}>
                                                            <Typography className={classes.searchText}>Pay from </Typography>
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
                            <Grid item xs={12} md={4} className={classes.searchItemControl}>
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
                                        input={<Input disableUnderline={true} />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return (
                                                    <Grid className={classes.searchItemControl} container>
                                                        <div className={classes.overflow}>
                                                            <Typography className={classes.searchText}>Pay to </Typography>
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
                            <Grid container item xs={12} md={4} justifyContent={'center'} alignItems={'center'}>
                                <Button onClick={handleSearch} variant='contained' className={classes.getStarted} disableElevation>
                                    Get Started
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className={classes.setMiddle}>
                    <Box sx={{ pl: 1, color: 'grey' }}>
                        <Typography>Built By Africans for Africans 🙌🏿</Typography>
                    </Box>
                    <Grid className={classes.searchItem} container direction='row' alignItems='center'>
                        <RipplePlayButton />
                        <Typography className={classes.links}>
                            <Link href='#' color='inherit' underline='always'>
                                See how it works?
                            </Link>
                        </Typography>
                    </Grid>
                </Box>
            </Box>
        </motion.div>
    );
};
