
import ECstack from '../images/ec_stack.svg';
import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";

const StyledSVG = styled(ECstack)`
    width: 100%;
    max-height: 118%;
    position: absolute;
    z-index: 100;

    .white {}
    .drop{}
    .rock{}
    .waterfall{}


    @media (max-width: 1200px){
        top:50px;
        width: 110%;
        max-height: auto;
    }

    @media (max-width: 1100px){
        top:120px;
        width: 110%;
        max-height: auto;
    }

    @media (max-width: 1000px){
        top:140px;
        width: 115%;
    }

    @media (max-width: 600px){
        top:350px;
        left: 20px;
        width: 75%;
    }

    @media (max-width: 550px){
        top:270px;
        left: 30px;
        width: 75%;
    }


    @media (max-width: 480px) and (min-height: 700px){
        top:380px;
    }


    @media (max-width: 380px){
        top:320px;
    }

    @media (max-width: 340px){
        top:280px;
    }

`

const ExecutionStack = () => {

    let refo = useRef(null);

    useEffect(() => {
		gsap.to('#executionStack svg', {
            y: -12,
            ease: 'power2.easeInOut',
            repeat: -1,
            duration: 3.5,
            yoyo: true
        });
        const tl = gsap.timeline({ repeat: -1});
        tl.to('.rock', {
            y: -40,
            x: -10,
            ease: "Power1.easeOut",
            duration: 3,
            stagger: { // wrap advanced options in an object
                each: 1,
                from: "end",
                ease: "power2.inOut",
              }
        });
        tl.to('.rock', {
            y: 30,
            x: 20,
            ease: "Power1.easeInOut",
            duration: 4,
            stagger: { // wrap advanced options in an object
                each: 1,
                from: "random",
                ease: "power2.inOut",
              }
        });
        tl.to('.rock', { 
            y: 0,
            x: 0,
            ease: "Power1.easeIn",
            duration: 3,
            stagger: { // wrap advanced options in an object
                each: .1,
                from: "random",
                ease: "power2.inOut",
              }
        });
        tl.yoyo(true)

        


       
		// tl.to('#beam', {transformOrigin: '0% 0%', rotate: -15, ease: 'power3'})
		// tl.to('#beam', {transformOrigin: '0% 0%', rotate: 0, ease: 'power3'})
    }, [])  
    
    return (
        <div id="executionStack" ref={(el) => (refo = el)}>
            <StyledSVG />
        </div>
    )
}

export default ExecutionStack;