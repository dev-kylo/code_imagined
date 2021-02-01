import object_svg from '../../../images/object_island.svg';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger); 
//   }


const StyledSVG = styled(object_svg)`
    width: 100%;

    position: absolute;
    transform: translate(30px, 10px);
    z-index: 10;
    @media (max-width: 1000px){
        transform: translate(30px, 50px);
    }

    @media (max-width: 600px){
        width: 90%;
        top: -50%;
        right: 50%;
        transform: translate(50%, 50%);
    };

    @media (max-width: 480px){
        width: 80%;
        top: -50%;
    };

    @media (max-width: 480px) and (min-height: 700px){
        width: 90%;
    }

    .captain {}
    .captain .telescope{}
    .loo{}
    .rock{}
`

const RockIsland = () => {

    let refo = useRef(null);

    useEffect(() => {
		gsap.to('#objectIsland svg', {
            y: -5,
            ease: 'power2.easeInOut',
            repeat: -1,
            duration: 2.5,
            yoyo: true
        })

    }, [])  

    return (
        <div id="objectIsland" ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
}

export default RockIsland;