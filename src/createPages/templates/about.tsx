import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import AboutViewPage from '../../features/about/sections';
import ImageHeader from '../../features/about/header';
import { Layout } from '../../components/layout';
import { PostSnippet } from '../../types';
import { FeaturePosts } from '../../features/blog/featurePosts';
import { SEO } from '../../components/seo';

interface Post {
    node: {
        id: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            tags: string[];
            title: string;
            imgAlt: string;
            description: string;
            publishedDate: string;
            img: { childImageSharp: { fluid: FluidObject } };
        };
    };
}

interface QueryData {
    featuredPosts: {
        edges: Post[];
    };
    recentPosts: {
        edges: Post[];
    };
}

interface About {
    data: QueryData;
}

const About: FunctionComponent<About> = ({ data }) => {
    const Image =
        'https://images.unsplash.com/photo-1573496267526-08a69e46a409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';
    return (
        <>
            <SEO title='About' image='/logo.png' />

            <Layout>
                <ImageHeader image={Image} />
                <AboutViewPage />
            </Layout>
        </>
    );
};

export default About;
