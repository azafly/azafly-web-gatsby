import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import React, { forwardRef, useState, useRef } from 'react';
import Slider from 'react-slick';

import { InfoBanner } from './info-banner';
import { SliderCard } from './slider-card';

const cards = [
    {
        name: 'Ola Remike',
        src: 'https://cdn.pixabay.com/photo/2016/11/18/17/08/fashion-1835871_1280.jpg',
        text: ''
    },
    {
        name: 'Jenifer Alomo',
        src: 'https://headshots-berlin.de/wp-content/uploads/2020/03/Victoire-Laly-by-Chris-Marxen-Headshots-Berlin.png',
        text: ''
    },
    {
        name: 'Jumoke Oniburedi',
        src: 'https://headshots-berlin.de/wp-content/uploads/2020/03/Victoire-Laly-by-Chris-Marxen-Headshots-Berlin.png',
        text: ''
    },
    {
        name: 'Lara George',
        src: 'https://headshots-berlin.de/wp-content/uploads/2020/04/Aemilia-Scott-Actress-and-Director-by-Portrait-und-Headshot-Fotograf-Chris-Marxen-Studio-Berlin_Studio_geotagged.jpg',
        text: ''
    },
    {
        name: 'Happy Woman',
        src: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg',
        text: ''
    },
    {
        name: 'Moin Moin',
        src: 'https://headshots-berlin.de/wp-content/uploads/2020/03/Victoire-Laly-by-Chris-Marxen-Headshots-Berlin.png',
        text: ''
    }
].map(({ src, name }) => <SliderCard key={src} src={src} name={name} />);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        reviewSlider_container: {
            [theme.breakpoints.only('xs')]: {
                marginTop: 40,
                padding: '40px 0px'
            }
        },
        sliders: {
            width: '110vw',
            [theme.breakpoints.only('xs')]: {
                marginTop: 40,
                padding: '40px 0px',
                marginLeft: '5vw'
            }
        },
        prev: {
            marginRight: 5,
            cursor: 'pointer'
        },
        next: {
            marginLeft: 5,
            cursor: 'pointer'
        },
        overflow: {
            width: '120%'
        },
        scrollers: {
            display: 'flex',
            [theme.breakpoints.only('xs')]: {
                justifyContent: 'center'
            }
        }
    })
);

interface ReviewSlidersProps {
    sliderRef?: any;
}
type ActiveScroller = 'prev' | 'next';

export const ReviewSliders = forwardRef(() => {
    const classes = useStyles();
    const [activeScroller, setActiveScroller] = useState<ActiveScroller>('next');

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const laptopSm = useMediaQuery(theme.breakpoints.only('md'));
    const laptopBg = useMediaQuery(theme.breakpoints.only('lg'));
    const computeNumberOfCards = () => {
        if (mobile || tablet) return 2;
        if (laptopSm) return 3;
        if (laptopBg) return 4;
        return 5;
    };

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        className: 'slider overflow',
        infinite: true,
        speed: 1000,
        slidesToShow: computeNumberOfCards(),
        slidesToScroll: computeNumberOfCards(),
        autoplaySpeed: 5000,
        pauseOnHover: true,
        autoplay: true,
        arrows: false
    };

    const handleToggleClass = (clickedScroller: ActiveScroller) => {
        setActiveScroller(clickedScroller);
        if (clickedScroller === 'prev') sliderRef?.current?.slickPrev();
        sliderRef?.current?.slickNext();
    };

    const scrollers = () => {
        return (
            <div className={classes.scrollers}>
                <ArrowBackOutlinedIcon
                    opacity={activeScroller === 'prev' ? 1 : 0.3}
                    className={classes.prev}
                    onClick={() => handleToggleClass('prev')}
                />
                <ArrowForwardOutlinedIcon
                    opacity={activeScroller === 'next' ? 1 : 0.3}
                    onClick={e => handleToggleClass('next')}
                    className={classes.next}
                />
            </div>
        );
    };
    const information = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies neque at nisl auctor.';

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={4}>
            <InfoBanner scrollers={scrollers} title='Testimonials' subtitle=' What clients are saying about us' information={information} />
            <Grid item xs={12} sm={7} md={8} className={classes.sliders}>
                <Slider ref={sliderRef} {...settings} className={classes.overflow}>
                    {cards}
                </Slider>
            </Grid>
        </Grid>
    );
});
