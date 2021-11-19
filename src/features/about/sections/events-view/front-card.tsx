import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import clsx from 'clsx';
import PreviewIcon from '@mui/icons-material/Preview';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: '100%',
        minHeight: 400,
        backgroundColor: '#214662 !important',
        marginBottom: 20
    },
    media: {
        height: 0,
        paddingTop: '61%', // 16:9
        [theme.breakpoints.only('md')]: {
            paddingTop: '75%'
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: '80%'
        }
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    }
}));
interface IFrontCardProps {
    image: string;
    date: string;
    title: string;
    handleFlipCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleOpenModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FrontCard: React.FunctionComponent<IFrontCardProps> = props => {
    const classes = useStyles();
    const { handleFlipCard, handleOpenModal, image, date, title } = props;
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={image} title='Paella dish' />
            <CardContent>
                <Typography
                    style={{ textAlign: 'center', margin: 'auto', color: 'white', fontSize: 18, textTransform: 'capitalize' }}
                    variant='body2'
                    color='textSecondary'
                    component='p'
                >
                    {title}
                </Typography>
                <br />
                <Typography
                    style={{ textAlign: 'center', margin: 'auto', color: 'white', fontSize: 14 }}
                    variant='body2'
                    color='textSecondary'
                    component='p'
                >
                    {date}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <Tooltip title='view'>
                            <IconButton onClick={handleOpenModal} aria-label='view pictures'>
                                <PreviewIcon style={{ color: 'grey' }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title='Flip Card'>
                            <IconButton className={clsx(classes.expand)} onClick={handleFlipCard}>
                                <ThreeDRotationIcon style={{ color: 'grey' }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};
export default FrontCard;
