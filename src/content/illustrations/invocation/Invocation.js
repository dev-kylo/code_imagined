
import React, { useEffect, useRef } from 'react';
import { StyledSVG } from './SVG.styled';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
  }


const Invocation = () => {

    let refo = useRef(null);
    
    useEffect(() => {
        const beam = refo.querySelector('#beam');
        const genie = refo.querySelector('#genie');
        gsap.set(beam, {transformOrigin: '95% 3%'})
        const tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: genie,   // pin the trigger element while active
                start: "top center", // when the top of the trigger hits the top of the viewport
                // end after scrolling 500px beyond the start// smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
            });
        tl.addLabel("start")
        tl.to(beam, {
            rotate: 70, 
            duration: 4,
            ease: 'power2.easeOut'
        });
        tl.to(beam, {
            rotate: 40, 
            duration: 6,
            ease: 'power2.easeOut'
        });
        // tl.to('#beam', {transformOrigin: '0% 0%', rotate: -15, ease: 'power3'})
        // tl.to('#beam', {transformOrigin: '0% 0%', rotate: 0, ease: 'power3'})
    }, [])  

    return (
        <div ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
};



export default Invocation;