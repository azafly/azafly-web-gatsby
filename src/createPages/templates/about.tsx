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
    return (
        <>
            <SEO title='About' image='/logo.png' />

            <Layout>
                <ImageHeader />
                <AboutViewPage />
            </Layout>
        </>
    );
};

export default About;
