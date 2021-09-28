import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export interface HomeFrontMatter {
    node: {
        id: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
            template: string;
            description: string;
            featured: boolean;
            img: File;
            imgAlt: string;
            tags: [string];
            intro: string;
            // eslint-disable-next-line camelcase
            intro_paragraph: string;
            heroMainImage1: string;
            paymentImage: string;
            offerText: string;
            consultButtonText: string;
            paymentButtonText: string;
            chatPromptText: string;
            servicesHeaderText: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext1: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext2: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext3: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext1_image: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext2_image: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext3_image: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext1_button: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext2_button: string;
            // eslint-disable-next-line camelcase
            servicesHeaderText_subtext3_button: string;
            secureHeading: string;
            setupImage: string;
            secureParagraph: string;
            reviewHeading: string;
            reviewParagraph: string;
            comingSoonHeading: string;
            comingSoonParagraph: string;
            comingSoonButton: string;
            image: string;
        };
    };
}

export const useFetchHomeData = () => {
    const response = useStaticQuery(graphql`
        query HomeFrontMatter {
            homeData: allMarkdownRemark(
                filter: { frontmatter: { title: { regex: "/Home/" } } }
            ) {
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
                            setupImage
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
                            heroMainImage1
                        }
                    }
                }
            }
        }
    `);
    // eslint-disable-next-line no-console
    console.log(response.homeData);

    return response.homeData.edges[0].node
        .frontmatter as HomeFrontMatter['node']['frontmatter'];
};
