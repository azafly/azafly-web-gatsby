import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            minHeight: 220,
            marginBottom: 20,
            backgroundColor: `${theme.colors.mainGreen} !important`,
            transition: ' all 1s ease',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        },
        media: {
            minHeight: 200,
            width: '100%',
            backgroundImage: props => `linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(${props.images}) `,
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: ' all .5s ease',
            '&:hover': {
                width: '100%',
                background: theme.colors.mainGreen,
                color: 'white !important'
            }
        },

        title: {
            fontWeight: 'bolder',
            fontSize: 35
        },
        subtitle: {
            fontWeight: 'bold',
            fontSize: 20
        }
    })
);
interface ICard {
    title: string;
    subtitle: string;
    images: string;
    page: string;
}

const AboutUsCard: React.FunctionComponent<ICard> = props => {
    const classes = useStyles(props);
    const { title, subtitle, page } = props;

    return (
        <Box m='auto' className={classes.root}>
            <Link to={page} color='inherit' underline='none'>
                <Box className={classes.media}>
                    <div style={{ marginLeft: 40 }}>
                        <div className={classes.title}>{title}</div>
                        <div className={classes.subtitle} style={{ marginTop: 20 }}>
                            {subtitle} <KeyboardArrowRightIcon className={classes.color} />
                        </div>
                    </div>
                </Box>
            </Link>
        </Box>
    );
};

export default AboutUsCard;
