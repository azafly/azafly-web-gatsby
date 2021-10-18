import React from 'react';
import PartnershipView from '../../features/about/sections/partnerships-view';
import AboutTemplate from '../../features/about/about-template';

const Partnerships: React.FunctionComponent = () => {
    const partnersData = [
        {
            image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80',
            title: 'Google'
        },
        {
            image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            title: 'aws'
        },
        {
            image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
            title: 'Vox'
        },
        {
            image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80',
            title: 'Google'
        },
        {
            image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            title: 'aws'
        },
        {
            image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
            title: 'Vox'
        }
    ];
    const partnersContent =
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mibibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odiout. Integer feugiat scelerisque varius morbi enim nunc faucibus.';
    return (
        <>
            <AboutTemplate
                name='Partnerships'
                image='https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
            >
                <PartnershipView partnersData={partnersData} content={partnersContent} />
            </AboutTemplate>
        </>
    );
};
export default Partnerships;
