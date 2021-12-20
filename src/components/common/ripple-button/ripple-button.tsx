import { Box, Link } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import React, { FC } from 'react';

import PlayButton1 from '../../../../static/images/home/playBtn.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        round: {
            borderRadius: '50%'
        },
        text: {
            fontSize: '1.1rem',
            color: 'pink',
            fontWeight: 700
        },
        avatar: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            margin: '12.4px',
            width: '1rem',
            height: '1rem',
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 1)',
            animation: '$pulse 2s infinite'
        },
        '@keyframes pulse': {
            '0%': {
                transform: 'scale(0.95)',
                boxShadow: '0 0 0 0 rgb(135, 206, 235)'
            },
            '70%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)'
            },
            '100%': {
                transform: 'scale(0.95)',
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
            }
        }
    })
);

interface RipplePlayButtonProps {
    className?: string;
    href?: string;
    alt?: string;
    text?: string;
    icon?: string;
}

export const RipplePlayButton: FC<RipplePlayButtonProps> = ({ icon, className, href = '#', alt = 'How it works', text }) => {
    const classes = useStyles();

    return (
        <Link href={href} color='inherit' underline='none' className={className}>
            {!icon ? (
                <Avatar className={classes.avatar} alt='How it works' src={PlayButton1} />
            ) : (
                <div className={`${classes.avatar} ${classes.round}`}>
                    {' '}
                    <Box
                        fontSize={'1.1rem'}
                        color={'white'}
                        fontWeight={700}
                        display='flex'
                        justifyContent='center'
                        alignItems={'center'}
                        justifyItems='center'
                    >
                        {' '}
                        <span className={classes.text}>{text}&nbsp;</span>{' '}
                        <Avatar src={icon} alt={alt} sx={{ width: 35, height: 25 }} variant={'rounded'} />
                    </Box>
                </div>
            )}
        </Link>
    );
};
