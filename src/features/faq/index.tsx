import React from "react";

import { HeroContainer } from "./hero";
import { CardsContainer } from "./cards";
import { QuestionsTabsConatiner } from "./questions-tab";

import { useMainFAQStyle } from "./classes";
import { Header } from "../../components/layout/header";
import { SEO } from "../../components/seo";
import { Layout } from "../../components/layout";

export const FAQ = () => {
  const classes = useMainFAQStyle();
  return (
    <div className={classes.faq__main}>
      <HeroContainer />
      <CardsContainer />
      <QuestionsTabsConatiner />
    </div>
  );
};
