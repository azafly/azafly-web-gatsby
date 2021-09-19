import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

import HomeView from '../../features/home';






export const pageQuery = graphql`
 query HomePageImages{
    heroMainImage1: file(relativePath: { eq: "images/home-main.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800,maxHeight:600, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
     setupImage: file(relativePath: { eq: "images/home-setup.jpeg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
         fluid(maxWidth: 800,maxHeight:600, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
}
`


export interface HomeFrontMatter {
    node: {
        id: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string
            template: string
            description: string
            featured: boolean
            img: File
            imgAlt: string
            tags: [string]
            intro: string
            intro_paragraph: string
            heroMainImage1: string
            paymentImage: string
            offerText: string
            consultButtonText: string
            paymentButtonText: string
            chatPromptText: string
            servicesHeaderText: string
            servicesHeaderText_subtext1: string
            servicesHeaderText_subtext2: string
            servicesHeaderText_subtext3: string
            servicesHeaderText_subtext1_image: string
            servicesHeaderText_subtext2_image: string
            servicesHeaderText_subtext3_image: string
            servicesHeaderText_subtext1_button: string
            servicesHeaderText_subtext2_button: string
            servicesHeaderText_subtext3_button: string
            secureHeading: string
            setupImage: string
            secureParagraph: string
            reviewHeading: string
            reviewParagraph: string
            comingSoonHeading: string
            comingSoonParagraph: string
            comingSoonButton: string
            image: string
        };
    };
}

interface QueryData {
    homeData: {
        edges: HomeFrontMatter[];
    };
}

interface Home {
    data: any
}

const Home: FunctionComponent<Home> = ({ data }) => {


    return (
        <>
            <SEO title="Home" image="/logo.png" />
            <Layout>
                <HomeView images={data} />
            </Layout>
        </>
    );
};

export default Home;
