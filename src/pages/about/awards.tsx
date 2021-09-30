import React from 'react';
import AwardsView from '../../features/about/sections/awards-view';
import AboutTemplate from '../../features/about/about-template';

const Awards: React.FunctionComponent = () => {
    const awardsData = [
        {
            year: '2021',
            awardList: [
                { title: 'Best payment platform in Nigeria ' },
                {
                    title: ' Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mibibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod.  '
                },
                {
                    title: ' Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mibibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod.  '
                },
                { title: 'Reliable international payment platform ' }
            ]
        }
    ];
    const awardContent =
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mibibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odiout. Integer feugiat scelerisque varius morbi enim nunc faucibus.';
    return (
        <>
            <AboutTemplate
                name='Awards and recognition'
                image='https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80'
            >
                <AwardsView content={awardContent} awardsData={awardsData} />
            </AboutTemplate>
        </>
    );
};
export default Awards;
