// @ts-ignore
import Slider from "react-slick";
import { forwardRef } from 'react'
import { SliderCard } from './slider-card';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRef } from "react";
// import { BackwardSvgComponent, ForwardSvgComponent } from 'components/icons';
import React, { useState } from 'react';


import { InfoBanner } from './info-banner'

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
    },
].map(({ src, name }) => <SliderCard src={src} name={name} />)


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        reviewSlider_container: {
            [theme.breakpoints.only("xs")]: {
                marginTop: 40,
                padding: '40px 0px',
            }
        },
        sliders: {
            width: '110vw',
            [theme.breakpoints.only("xs")]: {
                marginTop: 40,
                padding: '40px 0px',
                marginLeft: '5vw'
            }
        },
        prev: {
            marginRight: 5,
            cursor: 'pointer',
        },
        next: {
            marginLeft: 5,
            cursor: 'pointer'
        },
        overflow: {
            width: '120%'
        }
    })
)

interface ReviewSlidersProps {
    sliderRef?: any,
}
type ActiveScroller = 'prev' | 'next'

export const ReviewSliders = forwardRef((props: ReviewSlidersProps, ref) => {
    const classes = useStyles()
    const [activeScroller, setActiveScroller] = useState<ActiveScroller>('next')

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.only('xs'))
    const tablet = useMediaQuery(theme.breakpoints.only('sm'))
    const laptopSm = useMediaQuery(theme.breakpoints.only('md'))
    const laptopBg = useMediaQuery(theme.breakpoints.only('lg'))
    const computeNumberOfCards = () => {
        if (mobile || tablet) return 2
        else if (laptopSm) return 3
        else if (laptopBg) return 4
        else return 5

    }

    const sliderRef = useRef<Slider>(null)


    const settings = {
        dots: false,
        className: "slider overflow",
        infinite: true,
        speed: 1000,
        slidesToShow: computeNumberOfCards(),
        slidesToScroll: computeNumberOfCards(),
        autoplaySpeed: 10000,
        pauseOnHover: true,
        autoplay: true,
        arrows: false
    };

    const handleToggeleClass = (clickedScroller: ActiveScroller) => {
        setActiveScroller(clickedScroller)
        if (clickedScroller === 'prev') sliderRef?.current?.slickPrev()
        sliderRef?.current?.slickNext()

    }


    const scrollers = () => {

        return <>
            <div>Back Front</div>
            {/* <div opacity={activeScroller === 'prev' ? 1 : 0.3} className={classes.prev} onClick={() => handleToggeleClass("prev")} />
            <div opacity={activeScroller === 'next' ? 1 : 0.3} onClick={(e) => handleToggeleClass("next")} className={classes.next} /> */}
        </>


    }

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={4}>
            <InfoBanner scrollers={scrollers} />
            <Grid item xs={12} sm={7} md={8} className={classes.sliders}>
                <Slider ref={sliderRef} {...settings} className={classes.overflow}>
                    {cards}
                </Slider>
            </Grid>
        </Grid>
    );
})

