import { Box } from '@material-ui/core';
import React from 'react';

const Header: React.FunctionComponent = () => {
    const image =
        'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80';
    const headerStyle = {
        background: `linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(${image}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '20vh'
    };
    return <header style={headerStyle}></header>;
};
export default Header;
