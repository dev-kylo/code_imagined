
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { StyledSVG } from './SVG.styled';


const ExecutionIsles = () => {

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

export default ExecutionIsles;