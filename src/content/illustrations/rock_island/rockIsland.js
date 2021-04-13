import object_svg from '../../../images/object_island.svg';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import withAnimateOnScroll from '../../../hoc/withAnimateOnScroll';
import withAnimationContext from '../../../hoc/withAnimationContext';



const StyledSVG = styled(object_svg)`
    width: 100%;

    position: absolute;

    z-index: 10;

    @media (max-width: 1000px){
      
    }

    @media (max-width: 600px){
        width: 90%;
        top: -50%;
        right: 50%;
      
    };

    @media (max-width: 480px){
        width: 80%;
        top: 0;
        right: 20px;
    };

    @media (max-width: 480px) and (min-height: 700px){
        width: 90%;
    }

    .captain {}
    .captain .telescope{}
    .loo{}
    .rock{}
`

const RockIsland = (props) => {

    let refo = useRef(null);

    const hover = (el) => {
        let tl = gsap.timeline({paused: true});
        tl.to(el, {
            y: '-10',
            ease: 'power2.easeInOut',
            repeat: -1,
            duration: 2.5,
            yoyo: true
        })
        return tl
    }

    useEffect(( ) => {
        const island  = refo.querySelector('svg');
        props.tl.add(hover(island))
    })  

    return (
        <div id="objectIsland" ref={(el) => (refo = el)}>
           <StyledSVG  /> 
        </div>
    )
}

export default withAnimateOnScroll(withAnimationContext(RockIsland, true), true);

