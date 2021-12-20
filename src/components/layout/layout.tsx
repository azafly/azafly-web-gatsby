import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { withPrefix } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';

import { Footer } from './footer';
import { Header } from './header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import useGeolocation from '../hooks/useGeolocation';

import './layout.css';
import { Dispatch } from '../../app/store';

interface FooterProps {
    children?: any;
}

export const Layout: FunctionComponent = ({ children }: PropsWithChildren<FooterProps>) => {
    const { title } = useSiteMetadata();
    const dispatch = useDispatch<Dispatch>();
    const {
        location: { isAfrica }
    } = useGeolocation();

    useEffect(() => {
        dispatch.global.setIsLocationAfrica(isAfrica ?? false);
    }, [dispatch.global]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <link rel='apple-touch-icon' sizes='180x180' href={`${withPrefix('/')}img/apple-touch-icon.png`} />
                <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-32x32.png`} sizes='32x32' />
                <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-16x16.png`} sizes='16x16' />

                <link rel='mask-icon' href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color='#ffffff' />
                <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
                <meta name='theme-color' content='#fff' />
                <link
                    rel='stylesheet'
                    type='text/css'
                    charSet='UTF-8'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
            </Helmet>
            <Header />
            <div className='min-h-screen'>
                <div className='bg-white'> {children}</div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
