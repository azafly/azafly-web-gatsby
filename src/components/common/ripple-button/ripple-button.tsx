import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Link } from '@material-ui/core';

import PlayButton1 from '../../../../static/images/home/playBtn.png';
import PlayButton2 from '../../../../static/images/home/playBtn2.png';

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
            width: '56px',
            height: '56px',
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

type Icon = React.ReactNode | string;
interface RipplePlayButtonProps {
    className?: string;
    href?: string;
    variant?: '1' | '2' | Icon;
    alt?: string;
    text?: string;
    icon: Icon;
}

export const RipplePlayButton: FC<RipplePlayButtonProps> = ({ icon, className, href = '#', variant = '1', alt = 'How it works', text }) => {
    const classes = useStyles();
    const centerIcon = variant === '1' ? PlayButton1 : PlayButton2;
    const iconButton =
        typeof icon === 'string' ? (
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
                    <span className={classes.text}>{text}</span> {icon}
                </Box>{' '}
            </div>
        ) : (
            icon
        );

    return (
        <Link href={href} color='inherit' underline='none' className={className}>
            {icon ? iconButton : <Avatar className={classes.avatar} alt='How it works' src={centerIcon} />}
        </Link>
    );
};
