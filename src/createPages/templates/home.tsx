import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

import HomeView from '../../features/home';
import { FluidImageType } from '../../types';

export const pageQuery = graphql`
    query HomePageImages {
        heroMainImage1: file(relativePath: { eq: "images/home-main.jpeg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 800, maxHeight: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        setupImage: file(relativePath: { eq: "images/home-setup.jpeg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 800, maxHeight: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        footer: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        servicesHeaderText
                        servicesHeaderText_subtext1
                        servicesHeaderText_subtext1_button
                        servicesHeaderText_subtext1_image
                        servicesHeaderText_subtext2_button
                        servicesHeaderText_subtext2
                        servicesHeaderText_subtext2_image
                        servicesHeaderText_subtext3
                        servicesHeaderText_subtext3_button
                        servicesHeaderText_subtext3_image
                    }
                }
            }
        }
    }
`;

export interface HomeImages {
    heroMainImage1: FluidImageType;
    setupImage: FluidImageType;
}

interface Home {
    data: HomeImages;
}

const Home: FunctionComponent<Home> = ({ data }) => {
    return (
        <>
            <SEO
                title='Azafly | Emmigrate and Make Complex International Payments Easily'
                image='/logo.png'
            />
            <Layout>
                <HomeView images={data} />
            </Layout>
        </>
    );
};

export default Home;
