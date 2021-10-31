import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { InputBase, Typography, IconButton, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useSearchContainerStyle } from '../../classes';

const topics = [
    {
        label: 'my-account',
        link: ''
    },
    {
        label: 'payments',
        link: ''
    },
    {
        label: 'consultations',
        link: ''
    },
    {
        label: 'refund-policy',
        link: ''
    },
    {
        label: 'account',
        link: ''
    }
];

export const SearchContainer = () => {
    const classes = useSearchContainerStyle();
    return (
        <div className={classes.searchRoot}>
            <div>
                <Typography color='textSecondary' className={`${classes.heading} font-bolder`} variant='h4' gutterBottom align='center'>
                    {' '}
                    How can we help you?
                </Typography>
                <div className={classes.search}>
                    <Paper elevation={0} component='form' className={classes.search}>
                        <InputBase
                            className={classes.input}
                            placeholder='Search for a question'
                            inputProps={{ 'aria-label': 'Search for a Question' }}
                        />
                        <IconButton type='submit' className={classes.iconButton} aria-label='search'>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <Typography className='m-1 text-sm font-semibold text-center' color='textPrimary'>
                    {' '}
                    Popular Topics
                    <br />
                    <span className='font-semibold text-center'>
                        {topics.map(({ label, link }) => (
                            <Link key={link} to={link} className='p-2 text-sm text-center'>
                                #{label}
                            </Link>
                        ))}
                    </span>
                </Typography>
            </div>
        </div>
    );
};
