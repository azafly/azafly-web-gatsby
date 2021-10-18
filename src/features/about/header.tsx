import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

interface IHeaderProps {
    image: string;
    title?: string;
}

const ImageHeader: React.FunctionComponent<IHeaderProps> = ({ image, title }) => {
    const headerStyle = {
        backgroundImage: title ? `linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)),url(${image})` : `url(${image})`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '40vh',
        marginTop: -30
    };
    return (
        <header style={headerStyle}>
            <Container>
                <Grid container direction='column'>
                    <Grid item>
                        <div
                            style={{
                                fontSize: 60,
                                fontWeight: 'bolder',
                                marginTop: 150
                            }}
                        >
                            <h1 className='display-4 text-white mt-5 mb-2'>{title}</h1>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};
export default ImageHeader;
