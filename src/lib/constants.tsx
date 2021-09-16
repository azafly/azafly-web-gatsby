import React, { ReactElement } from 'react'
import { ActivitySvgComponent, HomeSvgComponent, ProfileSvgComponent, SignOutSvgComponent } from '../components/common/icons'




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
        name: 'Register',
        isOpened: false,
        icon: <ActivitySvgComponent />,
        route: '/signup'
    },
    {
        name: 'Support',
        isOpened: false,
        icon: <ActivitySvgComponent />,
        route: '/faq'
    },
]


export const deskTopNavItems = [
    {
        name: 'About',
        route: '/about'
    },
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
