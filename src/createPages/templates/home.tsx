import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

import HomeView from '../../features/home';


export const pageQuery = graphql`
{
  homeData: allMarkdownRemark(filter: {frontmatter: {title: {regex: "/Home/"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          imgAlt
          description
          chatPromptText
          comingSoonButton
          comingSoonHeading
          comingSoonParagraph
          consultButtonText
          featured
          image
          intro
          offerText
          paymentButtonText
          paymentImage
          reviewHeading
          reviewParagraph
          secureHeading
          secureParagraph
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


interface Home {
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
        edges: Home[];
    };
    recentPosts: {
        edges: Home[];
    };
}

interface Home {
    data: QueryData;
}

const Home: FunctionComponent<any> = ({ data }) => {

    const homeData = data.homeData.edges[0].node.frontmatter
    return (
        <>
            <SEO title="Home" image="/logo.png" />
            <Layout>
                <HomeView frontMatter={homeData} />
            </Layout>
        </>
    );
};

export default Home;
