import { makeStyles, Theme, createStyles, Box, Container, Button } from '@material-ui/core';
import { Link } from 'gatsby-material-ui-components';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        service: {
            marginTop: 300,
            height: 120,
            background: theme.colors.mainGreen
        },

        boxText: {
            padding: 40
        }
    })
);

interface ISubFooterProps {
    buttonTitle?: string;
    content?: string;
    link?: string;
}

const SubFooter: React.FunctionComponent<ISubFooterProps> = ({ link, buttonTitle, content }) => {
    const classes = useStyles();

    return (
        <Box className={classes.service}>
            <Container>
                <Box display='flex' justifyContent='space-between' className={classes.boxText}>
                    <div style={{ fontSize: 25, color: 'white', fontWeight: 'bolder' }}>{content} </div>
                    <Link to={link}>
                        <Button
                            style={{
                                backgroundColor: '#f5f6f7',
                                paddingLeft: 40,
                                paddingRight: 40,
                                paddingTop: 10,
                                paddingBottom: 10
                            }}
                        >
                            {buttonTitle}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};
export default SubFooter;
