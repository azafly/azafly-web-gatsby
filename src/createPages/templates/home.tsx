import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { useDispatch } from 'react-redux';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { Dispatch } from '../../app/store';

import HomeView from '../../features/home';
import { FluidImageType } from '../../types';

export interface HomeImages {
    heroMainImage1: FluidImageType;
    setupImage: FluidImageType;
}

interface HomeProps {
    data: any;
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const dispatch = useDispatch<Dispatch>();

    React.useEffect(() => {
        dispatch.global.setHomeImage({
            home: {
                hero: data.file.childImageSharp.fluid
            }
        });
    }, [dispatch.global]);
    return (
        <>
            <SEO title='Azafly | The cross-border digital bank for Africans' image='/logo.png' />
            <Layout>
                <HomeView />
            </Layout>
        </>
    );
};

export const query = graphql`
    query ImageQuery {
        file(relativePath: { eq: "images/home/hero.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Home;
