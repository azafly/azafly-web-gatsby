import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

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

interface Services {
  data: QueryData;
}

const Services: FunctionComponent<Services> = ({ data }) => {
  return (
    <>
      <SEO title="Services" image="/logo.png" />
      <Layout>
        <div></div>
      </Layout>
    </>
  );
};

export default Services;
