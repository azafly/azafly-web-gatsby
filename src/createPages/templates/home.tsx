import React, { FunctionComponent } from 'react';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

import HomeView from '../../features/home';
import { FluidImageType } from '../../types';

export interface HomeImages {
    heroMainImage1: FluidImageType;
    setupImage: FluidImageType;
}

interface Home {
    data: HomeImages;
}

const Home: FunctionComponent = () => {
    return (
        <>
            <SEO title='Azafly | The cross-border digital bank for Africans' image='/logo.png' />
            <Layout>
                <HomeView />
            </Layout>
        </>
    );
};

export default Home;
