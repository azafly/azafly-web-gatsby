import React from 'react';
import EventsView from '../../features/about/sections/events-view';
import AboutTemplate from '../../features/about/about-template';

const Events: React.FunctionComponent = () => {
    const eventsData = [
        {
            date: '1 Apr 2018',
            title: 'CEO party',
            image: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '12 Oct 2020',
            title: 'youth conference',
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            content:
                ' Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.'
        },
        {
            date: '27 Sep 2020',
            title: 'african gala',
            image: 'https://images.unsplash.com/photo-1510743006598-4845616e044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            date: '3 May 2021',
            title: 'Best initiative award',
            image: 'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            content:
                ' Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus.'
        },
        {
            date: '17 June 2021',
            title: 'A new year',
            image: 'https://images.unsplash.com/photo-1601601392622-5d18104a78fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            content: ' A communit out react to give back to the children with special needs'
        }
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
