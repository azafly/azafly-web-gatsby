import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { format } from "date-fns";
import Image, { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "gatsby-theme-material-ui";


interface BlogPost {
  title: string;
  tags: string[];
  img: FluidObject;
  imgAlt?: string;
  publishedDate: Date;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.colors.black
    },
    tag: {
      color: theme.colors.mainGreen
    },
    blogLink: {
      fontWeight: "bolder",
      cursor: 'pointer',
      color: theme.colors.black
    },
    heroImage: {
      [theme.breakpoints.up('sm')]: {
        height: 500,
        width: '60vw',
        margin: 'auto'
      }
    }
  }),
);


export const BlogPost: FunctionComponent<BlogPost> = ({
  title,
  tags,
  img,
  imgAlt,
  publishedDate,
  children,
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <h1 className="text-2xl sm:text-4xl text-center font-bold mt-8 mb-2">
          {title}
        </h1>
        <div className="text-center mb-3 text-gray-500">
          {format(publishedDate, "dd MMM, yyyy")}
        </div>
        <div className="text-center mb-3 text-gray-500">
          <Link to="/blog" className={classes.blogLink} ><ArrowBackIcon /> Back </Link>
          {tags.map((tag, index) => (
            <Link to={`/tags/${tag}`}
              key={index}
              className={`${classes.tag}text-sm leading-5 font-medium mx-2`}
            >
              #{tag}
            </Link>
          ))}
        </div>
        <Image fluid={img} alt={imgAlt || title} className={classes.heroImage} />
        {imgAlt && (
          <div className="text-center my-2 text-gray-500">{imgAlt}</div>
        )}
        <div className="flex justify-center">
          <div className="max-w-screen-lg">
            <div className="prose sm:prose-md md:prose-lg text-gray-700">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
