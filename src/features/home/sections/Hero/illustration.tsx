import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Img from 'gatsby-image';
import React from 'react';

import { RipplePlayButton } from '../../../../components/common/ripple-button';
import { RootState } from '../../../../app/store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        illustration: {
            height: 600,
            width: '102%',
            paddingRight: 100,
            position: 'relative',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            [theme.breakpoints.up('sm')]: {
                marginTop: '-10%'
            }
        },
        heroImage: {
            width: '110%',
            marginTop: '15vh',
            [theme.breakpoints.down('sm')]: {
                width: '100vw',
                marginTop: '10vh'
            }
        },
        uk: {
            position: 'absolute',
            width: 200,
            marginTop: 20,
            left: '35%',
            top: '5%',
            [theme.breakpoints.only('lg')]: {
                left: '30%',
                top: '4%'
            },
            [theme.breakpoints.only('md')]: {
                left: '20%',
                top: '0%'
            },
            [theme.breakpoints.only('sm')]: {
                left: '40%',
                top: '10%'
            }
        },
        eu: {
            position: 'absolute',
            width: 260,
            left: '40%',
            top: '10%',
            marginRight: 10,
            [theme.breakpoints.only('md')]: {
                left: '30%',
                top: '0%'
            },
            [theme.breakpoints.only('lg')]: {
                left: '30%',
                top: '7%'
            }
        },
        us: {
            position: 'absolute',
            width: 220,
            marginRight: 10,
            [theme.breakpoints.up('xl')]: {
                top: '15%',
                left: '15%'
            },
            [theme.breakpoints.only('lg')]: {
                top: '10%',
                left: '7%'
            },
            [theme.breakpoints.only('md')]: {
                left: '4%',
                top: '2%'
            },
            [theme.breakpoints.only('sm')]: {
                top: '8%',
                left: ' 10%'
            }
        },
        canada: {
            position: 'absolute',
            width: 220,
            marginRight: 10,
            top: '25%',
            left: '15%',
            [theme.breakpoints.only('lg')]: {
                top: '19%',
                left: '5%'
            },
            [theme.breakpoints.only('md')]: {
                left: '2%',
                top: '10%'
            },
            [theme.breakpoints.only('sm')]: {
                top: '20%',
                left: '10%'
            }
        },
        naija: {
            position: 'absolute',
            width: 200,
            left: '40%',
            top: '30%',
            marginTop: 20,
            [theme.breakpoints.only('md')]: {
                top: '10%',
                left: '25%'
            },
            [theme.breakpoints.only('sm')]: {
                left: '35%',
                top: '25%'
            },
            [theme.breakpoints.only('lg')]: {
                left: '35%',
                top: '20%'
            }
        },
        india: {
            position: 'absolute',
            width: 250,
            marginTop: 10,
            right: '1%',
            top: '30%',
            [theme.breakpoints.only('md')]: {
                top: '15%',
                right: '0%'
            },
            [theme.breakpoints.only('sm')]: {
                right: '0%',
                top: '30%'
            },
            [theme.breakpoints.only('lg')]: {
                right: '1%',
                top: '30%'
            }
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
    const {
        isAfrica = false,
        images: {
            home: { hero: heroImage }
        }
    } = useSelector((state: RootState) => state.global);
    return (
        <Box className={classes.illustration}>
            <Img fluid={heroImage} alt='hero image' className={classes.heroImage} />
            <Box className={classes.uk}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('GB')} />
                </Box>
            </Box>
            <Box className={classes.eu}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={'https://freesvg.org/img/Anonymous-Flag-of-European-Union.png'} />
                </Box>
            </Box>
            <Box className={classes.naija}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('NG')} />
                </Box>
            </Box>
            <Box className={classes.us}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('US')} />
                </Box>
            </Box>
            <Box className={classes.canada}>
                <Box display='flex' justifyContent='center' justifyItems='center'>
                    <RipplePlayButton icon={getFlag('CA')} />
                </Box>
            </Box>
            {isAfrica && (
                <Box className={classes.india}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                        <RipplePlayButton icon={getFlag('IN')} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};
