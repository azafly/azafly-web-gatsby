import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Link } from '@material-ui/core';

import PlayButton1 from '../../../../static/images/home/playBtn.png';
import PlayButton2 from '../../../../static/images/home/playBtn2.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            margin: '12.4px',
            width: '46px',
            height: '46px',
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
    variant?: '1' | '2';
}

export const RipplePlayButton: FC<RipplePlayButtonProps> = ({ className, href = '#', variant = '1' }) => {
    const playButton = variant === '1' ? PlayButton1 : PlayButton2;
    const classes = useStyles();
    return (
        <Link href={href} color='inherit' underline='none' className={className}>
            <Avatar className={classes.avatar} alt='How it works' src={playButton} />
        </Link>
    );
};
