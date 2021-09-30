import React from 'react';
import OurLeadersView from '../../features/about/sections/our-leaders-view';
import AboutTemplate from '../../features/about/about-template';

const OurLeaders: React.FunctionComponent = () => {
    const leadersData = [
        {
            name: 'John Carrie',
            title: 'VP Logistics',
            image: 'https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80'
        },
        {
            name: 'Kevin Costner',
            title: 'Software Developer',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Anton Mole',
            title: 'VP Design',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Emanuel Jamborin',
            title: 'UX Designer',
            image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Cane Vice',
            title: 'Data Analyst',
            image: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Anton Mole',
            title: 'VP Design',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Emanuel Jamborin',
            title: 'UX Designer',
            image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
    ];
    return (
        <>
            <AboutTemplate
                name='Our Leaders'
                image='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            >
                <OurLeadersView leadersData={leadersData} />
            </AboutTemplate>
        </>
    );
};
export default OurLeaders;
