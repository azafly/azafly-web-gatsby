import { Grid, makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';
import { SecureButton } from './button';
import saveMoney from '../../../../../static/images/home/save_money.png';
import transferMoney from '../../../../../static/images/home/transfer_money.png';
import withdrawMoney from '../../../../../static/images/home/withdraw_money.png';
import { Illustration } from './illustration';
import { InfoBanner } from './info-banner';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secureByDesigncontainer: {
            flexGrow: 1,
            // marginLeft: '14vw',

            [theme.breakpoints.only('md')]: {
                marginLeft: '8vw'
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: '7vw'
            },
            [theme.breakpoints.only('xs')]: {
                margin: 'auto',
                marginTop: '-30px'
            }
        }
    })
);

export const Secure = () => {
    const classes = useStyles();
    const secureData = [
        {
            image: saveMoney,
            shortTitle: 'Lorem ipsum',
            title: 'Vitae nulla ac purus pharetra',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus praesent viverra egestas cras arcu. Eget sed malesuada dolor ornare metus, elit. Vestibulum maecenas convallis enim velit, nulla amet scelerisque. Faucibus arcu dignissim sem ornare',
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 2
            },
            illustOrder: {
                xs: 2,
                sm: 1
            }
        },
        {
            image: saveMoney,
            shortTitle: 'Lorem ipsum',
            title: 'Vitae nulla ac purus pharetra',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus praesent viverra egestas cras arcu. Eget sed malesuada dolor ornare metus, elit. Vestibulum maecenas convallis enim velit, nulla amet scelerisque. Faucibus arcu dignissim sem ornare',
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 1
            },
            illustOrder: {
                xs: 2,
                sm: 2
            }
        },
        {
            image: withdrawMoney,
            shortTitle: 'Lorem ipsum',
            title: 'Vitae nulla ac purus pharetra',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus praesent viverra egestas cras arcu. Eget sed malesuada dolor ornare metus, elit. Vestibulum maecenas convallis enim velit, nulla amet scelerisque. Faucibus arcu dignissim sem ornare',
            route: '',
            bannerOrder: {
                xs: 1,
                sm: 2
            },
            illustOrder: {
                xs: 2,
                sm: 1
            }
        }
    ];
    return (
        <div className={classes.secureByDesigncontainer}>
            {secureData.map((data, index) => {
                return (
                    <Grid container key={index} justify='space-around' spacing={2} alignItems='center' style={{ maxWidth: 1400, margin: 'auto' }}>
                        <Box clone order={{ xs: data.bannerOrder.xs, sm: data.bannerOrder.sm }}>
                            <Grid item xs={12} sm={6} md={5}>
                                <InfoBanner />
                                <Box display={{ xs: 'none', lg: 'block', sm: 'block' }}>
                                    <SecureButton />
                                </Box>
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: data.illustOrder.xs, sm: data.illustOrder.sm }}>
                            <Grid item xs={12} sm={6} md={5}>
                                <Illustration image={data.image} />
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: 3 }} display={{ xs: 'block', lg: 'none', sm: 'none' }}>
                            <Grid item xs={10}>
                                <SecureButton />
                            </Grid>
                        </Box>
                    </Grid>
                );
            })}
        </div>
    );
};
