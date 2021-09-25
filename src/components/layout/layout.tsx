import React, { FunctionComponent, PropsWithChildren } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./header";
import { Footer } from "./footer";

const footer = {
  copyrightOwner: "Azafly",
  socialMedia: [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "https://www.instagram.com/azafly",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/azafly",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/azafly",
    },
  ],
  support: [
    { link: "About Us" },
    { link: "Features" },
    { link: "FAQ's" },
    { link: "Blog" },
    { link: "Contact" },
  ],
  address1: "455 West Orchard Street Kings Mountain, NC, 28097",
  phone1: "(272) 211-7370",
  email1: "support@azafly.com",
  address2: "77 Kings Royal Street Ajah, Lagos, Nigeria",
  phone2: "(272) 211-7370",
  email2: "support@azafly.com",
  aboutContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.",
};

interface FooterProps {
  children?: any;
  footerContent?: any;
}

export const Layout: FunctionComponent = ({
  children,
}: PropsWithChildren<FooterProps>) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ffffff"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="theme-color" content="#fff" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Header />
      <div className="min-h-screen">
        <div className="bg-white"> {children}</div>
      </div>
      <Footer {...footer} />
    </>
  );
};

export default Layout;
