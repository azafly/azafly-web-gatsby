import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import React, { ReactElement } from 'react';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';

interface SideMenu {
    name: string;
    icon: ReactElement;
    isOpened?: boolean;
    isLogOut?: boolean;
    route?: string;
}

export const sideMenu: SideMenu[] = [
    {
        name: 'Home',
        isOpened: false,
        icon: <HomeOutlinedIcon />,
        route: '/'
    },
    {
        name: 'Blog',
        isOpened: false,
        icon: <BookOutlinedIcon />,
        route: '/blog'
    },
    {
        name: 'Support',
        isOpened: false,
        icon: <ContactSupportOutlinedIcon />,
        route: '/faq'
    },
    {
        name: 'Register',
        isOpened: false,
        icon: <SupervisedUserCircleOutlinedIcon />,
        route: `${process.env.GATSBY_APP_URL}/signup`
    },
    {
        name: 'Login',
        isOpened: false,
        icon: <LoginOutlinedIcon />,
        route: `${process.env.GATSBY_APP_URL}/signin`
    }
];

export const deskTopNavItems = [
    {
        name: 'About',
        route: '/about'
    },
    {
        name: 'Support',
        route: '/faq'
    },
    {
        name: 'Blog',
        route: '/blog'
    }
];

export function getFormattedImageUrl(path: string) {
    return `images${path.split('images')[1]}`;
}
