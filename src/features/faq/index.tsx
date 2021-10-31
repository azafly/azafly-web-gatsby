import React from 'react';

import { HeroContainer } from './hero';
import { CardsContainer } from './cards';
import { QuestionsTabsContainer } from './questions-tab';

import { useMainFAQStyle } from './classes';

export const FAQ = () => {
    const classes = useMainFAQStyle();
    return (
        <div className={classes.faq__main}>
            <HeroContainer />
            <CardsContainer />
            <QuestionsTabsContainer />
        </div>
    );
};
