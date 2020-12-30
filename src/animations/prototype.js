import React, { useEffect, useRef } from 'react';
import prototype_svg from '../images/prototype_c.svg';
import styled from 'styled-components';
import gsap from "gsap";

const StyledSVG = styled(prototype_svg)`
    width: 105%;
  
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 0;

    @media (max-width: 1400px){
        width: 120%;
    }

    @media (max-width: 1200px){
        width: 135%;
    }

    @media (max-width: 1000px){
        width: 150%;
    }


    @media (max-width: 700px){
        width: 140%;
    }

    @media (max-width: 600px){
        width: 80%;
    }

    @media (max-width: 600px) and (min-height: 700px){
        width: 60%;
    } 

    @media (max-width: 480px) and (min-height: 700px){
        width: 80%;
    }


    .genie {}
    .beam{}
    .eyebrow1
    .eyebrow2
    .hair{}
`

const Prototype = () => {

    let refo = useRef(null);

    useEffect(() => {
        console.log('Lets log the ref element');
        console.log(refo);
        gsap.set('#beam', {transformOrigin: '95% 3%'})
        const tl = gsap.timeline();
        tl.to('#beam', {delay: 2, rotate: 90, ease: 'power3'})
		// tl.to('#beam', {transformOrigin: '0% 0%', rotate: -15, ease: 'power3'})
		// tl.to('#beam', {transformOrigin: '0% 0%', rotate: 0, ease: 'power3'})
    }, [])  

    return (
        <div ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
};

export default Prototype;