import React from 'react';
import NewsView from '../../features/about/sections/news-view';
import AboutTemplate from '../../features/about/about-template';

const News: React.FunctionComponent = () => {
    const newsData = [
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            link: '/about'
        },
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
            link: '/services'
        },
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1607858066933-1e2e91382182?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            link: '/blog'
        },
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            link: ''
        },
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
            link: ''
        },
        {
            title: '  Making progress in payment platform to reduce balck marke and help transition into new world',
            images: 'https://images.unsplash.com/photo-1632934376531-544b3614b2f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
            link: ''
        }
    ];
    return (
        <>
            <AboutTemplate
                name='News'
                image='https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
            >
                <NewsView newsData={newsData} />
            </AboutTemplate>
        </>
    );
};
export default News;
