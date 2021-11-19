import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import React from 'react';

import { RipplePlayButton } from '../../../../components/common/ripple-button';
import backImage from '../../../../../static/images/home/globemap.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            backgroundImage: `url(${backImage})`,
            height: 600,
            width: '102%',
            paddingRight: 100,
            position: 'relative',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            [theme.breakpoints.up('md')]: {
                marginTop: '-10%'
            }
        },
        uk: {
            position: 'absolute',
            width: 200,
            left: '40%',
            top: '20%',
            marginTop: 20,
            [theme.breakpoints.only('md')]: {
                left: 220
            },
            [theme.breakpoints.only('xs')]: {
                left: 160,
                width: 200
            }
        },
        eu: {
            position: 'absolute',
            width: 260,
            left: '50%',
            top: '20%',
            marginRight: 10
        },
        us: {
            position: 'absolute',
            width: 220,
            marginRight: 10,
            top: '25%',
            left: '2%',
            [theme.breakpoints.only('xs')]: {
                left: '-10%'
            },
            [theme.breakpoints.up('lg')]: {
                left: '15%'
            }
        },
        canada: {
            position: 'absolute',
            width: 220,
            marginRight: 10,
            top: '35%',
            left: '0%',
            [theme.breakpoints.only('xs')]: {
                left: '-10%'
            },
            [theme.breakpoints.up('lg')]: {
                left: '12%'
            }
        },
        naija: {
            position: 'absolute',
            width: 200,
            left: '35%',
            top: '40%',
            marginTop: 20,
            [theme.breakpoints.only('md')]: {
                left: 190
            },
            [theme.breakpoints.only('xs')]: {
                left: 160,
                width: 200
            }
        },

        india: {
            position: 'absolute',
            width: 250,
            right: '-2%',
            top: '50%',
            marginTop: 10
        },
        innerText: {
            fontSize: '0.85rem',
            fontWeight: 500,
            [theme.breakpoints.only('xs')]: {
                fontSize: '10px'
            }
        },
        notification: {
            position: 'relative',
            padding: '10px',
            backgroundColor: '#B0C4DE',
            minHeight: 50,
            color: '#040d21',
            border: '1px solid #B0C4DE',
            borderRadius: '10px',
            '&:after': {
                content: "''",
                position: 'absolute',
                width: '0',
                height: '0',
                borderTop: '15px solid #B0C4DE',
                borderRight: '15px solid transparent',
                borderLeft: '15px solid transparent',
                bottom: '-15px'
            }
        }
    })
);

const getFlag = (countryCode: string) => {
    return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${countryCode}.svg`;
};

export const Illustration: React.FC<unknown> = () => {
    const classes = useStyles();
    return (
        <Box className={classes.illustration}>
            <Box className={classes.uk}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('GB')} text={'GBP'} />
                </Box>
            </Box>
            <Box className={classes.eu}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={'https://freesvg.org/img/Anonymous-Flag-of-European-Union.png'} text={'EUR'} />
                </Box>
            </Box>
            <Box className={classes.naija}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('NG')} text={'NGN'} />
                </Box>
            </Box>
            <Box className={classes.us}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('US')} text={'USD'} />
                </Box>
            </Box>
            <Box className={classes.canada}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('CA')} text={'CAD'} />
                </Box>
            </Box>
            <Box className={classes.india}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('IN')} text={'INR'} />
                </Box>
            </Box>
        </Box>
    );
};
