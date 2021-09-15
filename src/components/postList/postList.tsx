import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { Link } from "gatsby-theme-material-ui";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";

export interface PostList {
  posts: PostSnippet[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    tag: {
      color: theme.colors.mainGreen
    }
  }),
);

export const PostListItem: FunctionComponent<PostSnippet> = ({
  href,
  img,
  imgAlt,
  title,
  tags,
  summary,
}) => {
  const classes = useStyles()
  return (
    <div className={`${classes.root} flex mb-16 sm:mb-28 flex-col sm:flex-row`}>
      <div className="flex-shrink-0 mr-0 sm:mr-8 mb-6 sm:mb-0">
        <Link to={href} className={`hover:no-underline`}>
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="h-48 w-full sm:w-48 xl:h-52 xl:w-52 object-cover rounded-sm"
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="block">
          <Link to={href} className={`hover:no-underline`}>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
          </Link>
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map((tag, index) => (
              <span key={index} className="mr-4">
                <Link to={`/tags/${tag}`} className={`${classes.tag} hover:no-underline`}>
                  #{tag}
                </Link>
              </span>
            ))}
          </div>
          <Link to={href} className="hover:no-underline">
            <p className="mt-3 text-base leading-6 text-gray-500 hover:no-underline">{summary}</p>
          </Link>
        </div>
        <div className="mt-4">
          <Link to={href} className="block font-medium tracking-wide">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PostList: FunctionComponent<PostList> = ({ posts }) => {
  return (
    <div className="mt-3">
      {posts.map((post, index) => (
        <PostListItem {...post} key={index} />
      ))}
    </div>
  );
};
