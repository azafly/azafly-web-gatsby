import React, { ReactElement } from 'react'
import { ActivitySvgComponent, AvatarManSvgComponent, HomeSvgComponent, ProfileSvgComponent, SignOutSvgComponent } from '../components/common/icons'




interface SideMenu {
    name: string
    icon: ReactElement
    isOpened?: boolean,
    isLogOut?: boolean,
    route?: string
}

export const sideMenu: SideMenu[] = [
    {
        name: 'Home',
        isOpened: false,
        icon: <HomeSvgComponent />,
        route: '/'
    },
    // {
    //     name: 'FAQ',
    //     isOpened: false,
    //     icon: <ActivitySvgComponent />,
    //     route: '/faq'
    // },
    {
        name: 'Services',
        isOpened: false,
        icon: <HomeSvgComponent />,
        route: '/services'
    },
    {
        name: 'Blog',
        isOpened: false,
        icon: <ActivitySvgComponent />,
        route: '/blog'
    },
    {
        name: 'Consult us',
        isOpened: false,
        icon: <ActivitySvgComponent />,
        route: '/consult-us'
    },
    {
        name: 'Register',
        isOpened: false,
        icon: <ActivitySvgComponent />,
        route: '/signup'
    },
]

export const privateMenu: SideMenu[] = [
    {
        name: 'Dashboard',
        isOpened: false,
        icon: <HomeSvgComponent />,
        route: '/dashboard'
    },
    {
        name: 'Profile',
        isOpened: false,
        icon: < ProfileSvgComponent />,
        route: '/profile'
    },
    {
        name: 'Logout',
        isOpened: false,
        isLogOut: true,
        icon: < SignOutSvgComponent />
    },
]


export const deskTopNavItems = [
    {
        name: 'About',
        route: '/about'
    },
    // {
    //     name: 'FAQ',
    //     route: '/faq'
    // },
    {
        name: 'Support',
        route: '/faq'
    }, {
        name: 'Blog',
        route: '/blog'
    },
    {
        name: 'Services',
        route: '/services'
    }

]

// todo : ftech from server
export const experts = [
    {
        name: 'Ola John',
        img: <AvatarManSvgComponent />
    },
    // {
    //     name: 'Brit Spear',
    //     img: <AvatarWomanSvgComponent />
    // },
    {
        name: 'Femi Fola',
        img: <AvatarManSvgComponent />
    },
    // {
    //     name: 'Meg Smart',
    //     img: <AvatarWomanSvgComponent />
    // }


]


// export const internationalPayments = [
//     {
//         name: 'WES',
//         img: <WesSvgComponent />
//     },
//     {
//         name: 'SEVIS',
//         img: <WesSvgComponent />
//     },
//     {
//         name: 'Application2',
//         img: <AvatarManSvgComponent />
//     },
//     {
//         name: 'Tuitione',
//         img: <WesSvgComponent />
//     },
//     {
//         name: 'WES2',
//         img: <WesSvgComponent />
//     },
//     {
//         name: 'SEVISes',
//         img: <WesSvgComponent />
//     },
// ]
