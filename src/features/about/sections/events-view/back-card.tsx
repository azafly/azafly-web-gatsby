import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    backcard: {
        width: '100%',
        height: 400,
        backgroundColor: '#214662 ',
        marginBottom: 20
    },

    textCard: {
        height: '85%'
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    }
}));

interface IBackCardProps {
    handleFlipCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
    content: string;
}

const BackCard: React.FunctionComponent<IBackCardProps> = props => {
    const classes = useStyles();
    const { handleFlipCard, content } = props;
    return (
        <Card className={classes.backcard}>
            <Box className={classes.textCard}>
                <CardContent>
                    <Typography style={{ textAlign: 'center', color: 'white', marginTop: 30 }} variant='body2' color='textSecondary' component='p'>
                        {content}
                    </Typography>
                </CardContent>
            </Box>
            <CardActions disableSpacing>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <IconButton className={clsx(classes.expand)} onClick={handleFlipCard}>
                            <ThreeDRotationIcon style={{ color: 'grey' }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};
export default BackCard;
