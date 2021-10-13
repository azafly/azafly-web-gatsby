import React from 'react';
import EventsView from '../../features/about/sections/events-view';
import AboutTemplate from '../../features/about/about-template';

const Events: React.FunctionComponent = () => {
    const eventsData = [
        { date: '1 SEP', name: 'Getting over the top', location: 'Germany' },
        { date: '1 SEP', name: 'Getting over the top', location: 'Germany' },
        { date: '1 SEP', name: 'Getting over the top', location: 'Germany' },
        { date: '1 SEP', name: 'Getting over the top', location: 'Germany' }
    ];
    return (
        <>
            <AboutTemplate
                name='Events'
                image='https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
            >
                <EventsView eventsData={eventsData} />
            </AboutTemplate>
        </>
    );
};
export default Events;
