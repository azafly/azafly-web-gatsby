import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadata {
    title: string;
    description: string;
    siteUrl: string;
}

export const useSiteMetadata = (): SiteMetadata => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};
