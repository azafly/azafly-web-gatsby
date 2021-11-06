import React, { forwardRef, useEffect, useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';

import { getFakeArticles } from '../../../mocks/faq';
import { CollapsibleList } from './collapsible-list';
import { useTabStyles } from '../classes';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
    isVertical?: boolean;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, isVertical, ...other } = props;
    const tabOrientation = isVertical ? 'vertical' : 'horizontal';

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`${tabOrientation}-tabpanel-${index}`}
            aria-labelledby={`${tabOrientation}-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any, isVertical?: boolean) {
    const tabOrientation = isVertical ? 'vertical' : 'horizontal';
    return {
        id: `${tabOrientation}-tab-${index}`,
        'aria-controls': `${tabOrientation}-tabpanel-${index}`
    };
}

export const QuestionsTabsContainer = forwardRef((props, ref) => {
    const classes = useTabStyles();
    const [articles, setArticles] = useState<any>([]);
    const [value, setValue] = useState(0);

    // eslint-disable-next-line @typescript-eslint/ban-types
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        getFakeArticles.then((response: any) => {
            setArticles(response);
        });
    }, []);

    return (
        <div ref={ref} className={classes.tabContainer}>
            <Typography className={classes.title} variant='h5' gutterBottom color='secondary'>
                Frequently Asked Questions
            </Typography>
            <div className={classes.root}>
                <Tabs
                    orientation={'vertical'}
                    value={value}
                    onChange={handleChange}
                    aria-label='faq tabs'
                    indicatorColor='secondary'
                    className={classes.tabs}
                >
                    {articles.map((article: any, index: number) => {
                        return <Tab key={index} label={article[0]} {...a11yProps(index)} className={classes.tab} />;
                    })}
                </Tabs>
                <div className='container'>
                    {articles.map((article: any, index: number) => {
                        return (
                            <TabPanel key={index} value={value} index={index}>
                                <CollapsibleList articles={article[1]} />
                            </TabPanel>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});
