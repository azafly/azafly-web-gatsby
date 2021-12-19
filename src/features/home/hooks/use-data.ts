import { useStaticQuery, graphql } from 'gatsby';

export interface HomeFrontMatter {
    node: {
        id: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            heroMainHeading: {
                heroHeadingLocal: string;
                heroMainHeadingAbroad: string;
            };
            section2: {
                section2Image: {
                    section2ImageLocal: string;
                    section2ImageAbroad: string;
                };
                section2InfoText: {
                    section2InfoTextAbroad: string;
                    section2InfoTextLocal: string;
                };
                section2MainHeading: {
                    section2MainHeadingAbroad: string;
                    section2MainHeadingLocal: string;
                };
                section2ShortHeading: {
                    section2ShortHeadingAbroad: string;
                    section2ShortHeadingLocal: string;
                };
            };
            section3: {
                section3Image: {
                    section3ImageAbroad: string;
                    section3ImageLocal: string;
                };
                section3InfoText: {
                    section3InfoTextAbroad: string;
                    section3InfoTextLocal: string;
                };
                section3MainHeading: {
                    section3MainHeadingAbroad: string;
                    section3MainHeadingLocal: string;
                };
                section3ShortHeading: {
                    section3ShortHeadingAbroad: string;
                    section3ShortHeadingLocal: string;
                };
            };
            heroSubHeading: {
                heroSubHeadingAbroad: string;
                heroSubHeadingLocal: string;
            };
            whyChooseUs: {
                whyChooseUsImage: {
                    whyChooseUsAbroadImage: string;
                    whyChooseUsLocalImage: string;
                };
                whyChooseUsReason1: {
                    whyChooseUsReason1Heading: {
                        whyChooseUsReason1HeadingAbroad: string;
                        whyChooseUsReason1HeadingLocal: string;
                    };
                    whyChooseUsReason1InfoText: {
                        whyChooseUsReason1InfoTextAbroad: string;
                        whyChooseUsReason1InfoTextLocal: string;
                    };
                };
                whyChooseUsReason2: {
                    whyChooseUsReason2Heading: {
                        whyChooseUsReason2HeadingAbroad: string;
                        whyChooseUsReason2HeadingLocal: string;
                    };
                    whyChooseUsReason2InfoText: {
                        whyChooseUsReason2InfoTextAbroad: string;
                        whyChooseUsReason2InfoTextLocal: string;
                    };
                };
                whyChooseUsReason3: {
                    whyChooseUsReason3Heading: {
                        whyChooseUsReason3HeadingAbroad: string;
                        whyChooseUsReason3HeadingLocal: string;
                    };
                    whyChooseUsReason3InfoText: {
                        whyChooseUsReason3InfoTextAbroad: string;
                        whyChooseUsReason3InfoTextLocal: string;
                    };
                };
                whyChooseUsShortHeading: {
                    whyChooseUsShortHeadingAbroad: string;
                    whyChooseUsShortHeadingLocal: string;
                };
                whyChooseUsSubHeading: {
                    whyChooseUsSubHeadingAbroad: string;
                    whyChooseUsSubHeadingLocal: string;
                };
            };
            section1: {
                section1Image: {
                    section1ImageLocal: string;
                    section1ImageAbroad: string;
                };
                section1InfoText: {
                    section1InfoTextAbroad: string;
                    section1InfoTextLocal: string;
                };
                section1MainHeading: {
                    section1MainHeadingAbroad: string;
                    section1MainHeadingLocal: string;
                };
                section1ShortHeading: {
                    section1ShortHeadingAbroad: string;
                    section1ShortHeadingLocal: string;
                };
            };
            mainCTA: {
                mainCTAImage: {
                    mainCTAImageLocal: string;
                    mainCTAImageAbroad: string;
                };
                mainCTAInfoText: {
                    mainCTAInfoTextAbroad: string;
                    mainCTAInfoTextLocal: string;
                };
                mainCTAMainHeading: {
                    mainCTA3MainHeadingAbroad: string;
                    mainCTA3MainHeadingLocal: string;
                };
                mainCTAShortHeading: {
                    mainCTAHeadingLocal: string;
                    mainCTAShortHeadingAbroad: string;
                };
            };
            footer: {
                footerIntroContent: {
                    footerIntroContentLocal: string;
                    footerIntroContentAbroad: string;
                };
                internationalOfficeAddress: string;
                internationalOfficeEmail: string;
                internationalOfficePhone: string;
                nigeriaOfficeAddress: string;
                nigeriaOfficeEmail: string;
                nigeriaOfficePhone: string;
                socialMediaLinks: {
                    facebook: string;
                    instagram: string;
                    linkedIn: string;
                    twitter: string;
                };
            };
        };
    };
}

export const useFetchHomeData = () => {
    const response = useStaticQuery(graphql`
        query HomeFrontMatter {
            homeData: allMarkdownRemark(filter: { fields: { slug: { eq: "/home" } } }) {
                nodes {
                    frontmatter {
                        heroMainHeading {
                            heroHeadingLocal
                            heroMainHeadingAbroad
                        }
                        section2 {
                            section2Image
                            section2InfoText {
                                section2InfoTextAbroad
                                section2InfoTextLocal
                            }
                            section2MainHeading {
                                section2MainHeadingAbroad
                                section2MainHeadingLocal
                            }
                            section2ShortHeading {
                                section2ShortHeadingAbroad
                                section2ShortHeadingLocal
                            }
                        }
                        section3 {
                            section3Image
                            section3InfoText {
                                section3InfoTextAbroad
                                section3InfoTextLocal
                            }
                            section3MainHeading {
                                section3MainHeadingAbroad
                                section3MainHeadingLocal
                            }
                            section3ShortHeading {
                                section3ShortHeadingAbroad
                                section3ShortHeadingLocal
                            }
                        }
                        heroSubHeading {
                            heroSubHeadingAbroad
                            heroSubHeadingLocal
                        }
                        whyChooseUs {
                            whyChooseUsImage
                            whyChooseUsReason1 {
                                whyChooseUsReason1Heading {
                                    whyChooseUsReason1HeadingAbroad
                                    whyChooseUsReason1HeadingLocal
                                }
                                whyChooseUsReason1InfoText {
                                    whyChooseUsReason1InfoTextAbroad
                                    whyChooseUsReason1InfoTextLocal
                                }
                            }
                            whyChooseUsReason2 {
                                whyChooseUsReason2Heading {
                                    whyChooseUsReason2HeadingAbroad
                                    whyChooseUsReason2HeadingLocal
                                }
                                whyChooseUsReason2InfoText {
                                    whyChooseUsReason2InfoTextAbroad
                                    whyChooseUsReason2InfoTextLocal
                                }
                            }
                            whyChooseUsReason3 {
                                whyChooseUsReason3Heading {
                                    whyChooseUsReason3HeadingAbroad
                                    whyChooseUsReason3HeadingLocal
                                }
                                whyChooseUsReason3InfoText {
                                    whyChooseUsReason3InfoTextAbroad
                                    whyChooseUsReason3InfoTextLocal
                                }
                            }
                            whyChooseUsShortHeading {
                                whyChooseUsShortHeadingAbroad
                                whyChooseUsShortHeadingLocal
                            }
                            whyChooseUsSubHeading {
                                whyChooseUsSubHeadingAbroad
                                whyChooseUsSubHeadingLocal
                            }
                        }
                        section1 {
                            section1Image
                            section1InfoText {
                                section1InfoTextAbroad
                                section1InfoTextLocal
                            }
                            section1MainHeading {
                                section1MainHeadingAbroad
                                section1MainHeadingLocal
                            }
                            section1ShortHeading {
                                section1ShortHeadingAbroad
                                section1ShortHeadingLocal
                            }
                        }
                        mainCTA {
                            mainCTAImage
                            mainCTAInfoText {
                                mainCTAInfoTextAbroad
                                mainCTAInfoTextLocal
                            }
                            mainCTAMainHeading {
                                mainCTA3MainHeadingAbroad
                                mainCTA3MainHeadingLocal
                            }
                            mainCTAShortHeading {
                                mainCTAHeadingLocal
                                mainCTAShortHeadingAbroad
                            }
                        }
                        footer {
                            footerIntroContent
                            internationalOfficeAddress
                            internationalOfficeEmail
                            internationalOfficePhone
                            nigeriaOfficeAddress
                            nigeriaOfficeEmail
                            nigeriaOfficePhone
                            socialMediaLinks {
                                facebook
                                instagram
                                linkedIn
                                twitter
                            }
                        }
                    }
                }
            }
        }
    `);
    console.log(response);
    return response.homeData.nodes[0].frontmatter as HomeFrontMatter['node']['frontmatter'];
};
