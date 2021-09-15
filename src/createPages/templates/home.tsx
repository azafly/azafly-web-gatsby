import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import { Layout } from "../../components/layout";
import { PostSnippet } from "../../types";
import { FeaturePosts } from "../../components/featurePosts";
import { SEO } from "../../components/seo";

export const pageQuery = graphql`
  {
    homeData: allMarkdownRemark(
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            title
            imgAlt
            description
            publishedDate
            img {
              childImageSharp {
                fluid(maxWidth: 2400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

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

interface Home {
    data: QueryData;
}

const Home: FunctionComponent<Home> = ({ data }) => {


    return (
        <>
            <SEO title="Home" image="/logo.png" />
            <Layout>

            </Layout>
        </>
    );
};

export default Home;
