import React from 'react'


import { HeroContainer } from './hero';
import { CardsContainer } from './cards';
import { QuestionsTabsConatiner } from './questions-tab'



import { useMainFAQStyle } from './classes';
import { Header } from '../../components/layout/header';



export const FAQ = () => {
    const classes = useMainFAQStyle()
    return (
        <>
            <Header />
            <div className={classes.faq__main}>
                <HeroContainer />
                <CardsContainer />
                <QuestionsTabsConatiner />
            </div>
        </>
    )
}

