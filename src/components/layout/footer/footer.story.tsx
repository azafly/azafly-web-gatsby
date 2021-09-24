import React from "react";
import { storiesOf } from "@storybook/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Geek SG",

  socialMedia: [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "https://geek.sg/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://geek.sg/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://geek.sg/",
    },
    {
      name: "Dribble",
      icon: <LanguageIcon />,
      link: "https://geek.sg/",
    },
    {
      name: "Github",
      icon: <GitHubIcon />,
      link: "https://geek.sg/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://geek.sg/",
    },
  ],
  support: [
    { title: "Contact", link: "/" },
    { title: "Support", link: "/" },
    { title: "Terms and Condition", link: "/" },
    { title: "Green Post", link: "/" },
  ],
  account: [
    { title: "Login", link: "/" },
    { title: "Register", link: "/" },
    { title: "Chat", link: "/" },
  ],
  aboutContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.",
};

story.add("Footer", () => <Footer {...data} />);
