import React from 'react';

const ImageHeader: React.FunctionComponent = () => {
    const Image =
        'https://images.unsplash.com/photo-1573496267526-08a69e46a409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';
    const headerStyle = {
        backgroundImage: `url(${Image})`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '40vh'
    };
    return <header style={headerStyle}></header>;
};
export default ImageHeader;
