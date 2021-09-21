import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Image from "gatsby-image";
import { Link } from "gatsby-theme-material-ui";
import { PostSnippet } from "../../../types";

export interface FeaturePosts {
  featurePosts: PostSnippet[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      color: theme.colors.mainGreen,
      textDecoration: "none",
    },
  })
);

export const FeaturePost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
  tags,
}) => {
  const classes = useStyles();
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Link to={href} className="hover:no-underline">
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="h-48 w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map((tag, index) => (
              <span key={index}>
                <Link
                  to={`/tags/${tag}`}
                  className={`${classes.tag} hover:no-underline`}
                >
                  #{tag}
                </Link>{" "}
              </span>
            ))}
          </p>
          <Link to={href} className="block hover:no-underline">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 ">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500 hover:no-underline">
              {summary}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const TopFeaturePost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
}) => {
  return (
    <div>
      <Link to={href} className=" hover:no-underline">
        <Image
          fluid={img}
          alt={imgAlt || title}
          className="h-144 w-full object-cover rounded"
        />
        <h1 className="text-4xl text-center my-3">{title}</h1>
        <div className="mb-16 max-w-prose mx-auto text-center text-lg text-gray-600">
          {summary}
        </div>
      </Link>
    </div>
  );
};

export const FeaturePosts: FunctionComponent<FeaturePosts> = ({
  featurePosts,
}) => {
  const [topPost, ...otherFeature] = featurePosts;
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <TopFeaturePost {...topPost} />
        <h2 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center mt-3 mb-8">
          Featured Posts
        </h2>
        <div className="mt-3 grid gap-5 xl:gap-10 max-w-lg mx-auto grid-cols-1 md:grid-cols-3 md:max-w-none">
          {otherFeature.map((featurePost, index) => (
            <FeaturePost {...featurePost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
