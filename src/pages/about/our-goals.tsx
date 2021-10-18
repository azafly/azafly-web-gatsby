import React from 'react';
import OurGoalsView from '../../features/about/sections/our-goals-view';
import AboutTemplate from '../../features/about/about-template';

const OurGoals: React.FunctionComponent = () => {
    return (
        <>
            <AboutTemplate
                name='Our Goals'
                image='https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80'
            >
                <OurGoalsView />
            </AboutTemplate>
        </>
    );
};
export default OurGoals;
