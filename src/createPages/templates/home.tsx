import React, { FunctionComponent } from "react";


import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import HomeView from '../../features/home';


const Home: FunctionComponent = () => {




    return (
        <>
            <SEO title="Home" image="/logo.png" />
            <Layout>
                <HomeView />
            </Layout>
        </>
    );
};

export default Home;
