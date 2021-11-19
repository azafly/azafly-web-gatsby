import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import { Title } from '@mui/icons-material';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BackCard from './back-card';
import FrontCard from './front-card';

interface IFlipCardProps {
    date?: string;
    image?: string;
    title?: string;
    content?: string;
}
const style = {
    position: 'absolute' as const,
    top: '10%',
    left: '10%',
    bottom: '10%',
    right: '10%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    heigth: '100%',
    // marginLeft: '5%',
    // marginRight: '5%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
const useStyles = makeStyles((theme: Theme) => ({
    media: {
        width: '100%',
        height: '100%',
        backgroundColor: '#214662 ',
        marginBottom: 20
    },
    card: {
        marginLeft: '10% !important',
        marginTop: '5% !important',
        width: '80%',
        height: '80%',
        justifyContent: 'center !important'
    }
}));

const FlipCard: React.FunctionComponent<IFlipCardProps> = ({ image, title, content, date }) => {
    const classes = useStyles();
    const [isFlipped, setIsFlipped] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleFlip = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <FrontCard handleFlipCard={handleFlip} image={image} title={title} date={date} handleOpenModal={handleOpen} />
                <BackCard handleFlipCard={handleFlip} content={content} />
            </ReactCardFlip>
            <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
                {/* <Box sx={style}> */}
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={image} title={Title} />
                </Card>
                {/* </Box> */}
            </Modal>
        </Grid>
    );
};
export default FlipCard;
