import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import islandSvg from '../../../../images/rain_island_10.svg'
import withAnimationContext from '../../../../hoc/withAnimationContext'
import withAnimateOnScroll from '../../../../hoc/withAnimateOnScroll'

const StyledSVG = styled(islandSvg)`
    width: 80%;
    position: absolute;
    z-index: 100;
    right: 50px;

    @media (max-width: 2000px) {
        width: 65%;
        top: 20px;
        right: 35px;
    }

    @media (max-width: 1400px) {
        width: 85%;
        top: 20px;
        right: 1px;
    }

    @media (max-width: 1100px) {
        width: 100%;
        top: 90px;
        right: 1px;
    }

    @media (max-width: 600px) {
        width: 95%;
        top: 0;
        right: 1px;
    }

    @media (max-width: 480px) {
        width: 92%;
        right: 10px;
    }
    @media (max-width: 350px) {
        width: 90%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 45%;
        right: 25%;
    }

    .rain {
        z-index: -10;
        stroke-width: 10px;
    }
    .shrubs {
    }
    .toilet_shrubs {
    }
    .puddle {
    }
    .frontright {
    }
    .frontleft {
    }
`

const RainIsland = props => {
    let refo = useRef(null)

    const rainAnimation = (cloud, rain, puddle, toppuddle) => {
        const tl = gsap.timeline()
        tl.set(puddle, { transformOrigin: '50% 10%' })
        tl.set(toppuddle, {
            transformOrigin: '50% 10%',
            x: 10,
            y: 20,
        })

        tl.from(cloud, {
            delay: 0.5,
            x: 500,
            duration: 3,
            ease: 'power2.easeOut',
        })

        tl.from(rain, {
            duration: 0.01,
            opacity: 0,
            stagger: 0.01,
            repeat: -1,
            y: -100,
        })
        tl.to(toppuddle, {
            transformOrigin: '50% 50%',
            x: 130,
            y: 60,
            rotate: 30,
            opacity: 0.9,
        })
        tl.from(puddle, {
            scale: 0,
            zIndex: -500,
            duration: 3,
            ease: 'power2.easeOut',
        })
        return tl
    }

    useEffect(() => {
        const puddle = refo.querySelectorAll('.puddle')
        const cloud = refo.querySelector('#cloud')
        const rain = refo.querySelectorAll('#rain path')
        const toppuddle = refo.querySelector('#toppuddle')
        props.tl.add(rainAnimation(cloud, rain, puddle, toppuddle))
    }, [props.tl])

    return (
        <div ref={el => (refo = el)}>
            <StyledSVG />
        </div>
    )
}

export default withAnimateOnScroll(withAnimationContext(RainIsland, true), true)
