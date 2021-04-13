import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import island_svg from '../../../images/rain_island_10.svg';
import withAnimationContext from '../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../hoc/withAnimateOnScroll';


const StyledSVG = styled(island_svg)`
    width: 100%;
    position: absolute;
    z-index: 100;
    right: 50px;

    @media (max-width: 1400px){
        width: 105%;
        top: 80px;
        right: 1px;
    }

    @media (max-width: 1100px){
        width: 110%;
        top: 80px;
        right: 1px;
    }

    @media(max-width: 600px){
        width: 95%;
        top: 0;
        right: 1px;
    }

    @media(max-width: 480px){
        width: 92%;
        right: 10px;
    }
    @media(max-width: 350px){
        width: 90%;
    }

    .rain {
        z-index:-10;
        stroke-width: 10px;
    }
    .shrubs{}
    .toilet_shrubs{}
    .puddle{}
    .frontright{}
    .frontleft{}
    #microphone{
        z-index: 500;
    }
`   

const RainIsland = (props) => {

    let refo = useRef(null);

    const rainAnimation = (cloud, rain, puddle) => {
        const tl = gsap.timeline();
        tl.set(puddle, {transformOrigin: '50% 10%'});
      
        tl.from(cloud, {
            x: 500,
            duration: 3,
            ease: 'power2.easeOut'
        });
   
        tl.from(rain, {
            duration:0.01,
            opacity: 0,
            stagger: 0.01,
            repeat: -1,
            y: -100
        });
    
        tl.from(puddle, {
            scale: 0, 
            zIndex: -500,
            duration: 3,
            ease: 'power2.easeOut'
        });
        return tl;
    }

    useEffect(() => {
        const puddle = refo.querySelectorAll('.puddle');
        const cloud = refo.querySelector('#cloud');
        const rain = refo.querySelectorAll('#rain path');
        props.tl.add(rainAnimation(cloud, rain, puddle));
    });  

    return (
        <div ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
}

export default withAnimateOnScroll(withAnimationContext(RainIsland, true), true);
