/* eslint-disable @typescript-eslint/camelcase */
import { useStaticQuery, graphql } from 'gatsby';

interface FooterLinkList {
    [key: string]: string;
}
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
            intro_paragraph: string;
            heroMainImage1: string;
            paymentImage: string;
            offerText: string;
            consultButtonText: string;
            paymentButtonText: string;
            chatPromptText: string;
            servicesHeaderText: string;
            servicesHeaderText_subtext1: string;
            servicesHeaderText_subtext2: string;
            servicesHeaderText_subtext3: string;
            servicesHeaderText_subtext1_image: string;
            servicesHeaderText_subtext2_image: string;
            servicesHeaderText_subtext3_image: string;
            servicesHeaderText_subtext1_button: string;
            servicesHeaderText_subtext2_button: string;
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
            footerIntroContent: string;
            internationalOfficeAddress: string;
            internationalOfficePhone: string;
            internationalOfficeEmail: string;
            nigeriaOfficeAddress: string;
            nigeriaOfficePhone: string;
            nigeriaOfficeEmail: string;
            footerLinkList: FooterLinkList;
        };
    };
}

export const useFetchHomeData = () => {
    const response = useStaticQuery(graphql`
        query HomeFrontMatter {
            homeData: allMarkdownRemark(filter: { fields: { slug: { eq: "/home" } } }) {
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
                            footerHeading1
                            footerHeading2
                            footerHeading3
                            footerIntro
                            footerIntroContent
                            footerLinkList {
                                link1
                                link2
                                link4
                                link3
                                link5
                            }
                            footerLinkList1 {
                                link
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    return response?.homeData?.edges[0]?.node?.frontmatter as HomeFrontMatter['node']['frontmatter'];
};
