import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import island_svg from '../../../images/rain_island_10.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
  }


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

const RainIsland = () => {

    let refo = useRef(null);

    useEffect(() => {
        gsap.set('.puddle', {transformOrigin: '50% 10%'})
        const tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: "#rain_island",   // pin the trigger element while active
              start: "top center",
            // when the top of the trigger hits the top of the viewport
             // end after scrolling 500px beyond the start// smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            onLeave: ({progress, direction, isActive}) => {
                console.log('I am on Leave')
                tl.seek('rain').pause();
               },
            // onLeaveBack: ({progress, direction, isActive}) => {
            //     console.log('I am on Leave Back')
            //     tl.seek('start').play();
            // },
            //  onEnter: ({progress, direction, isActive}) => {
            //     console.log('I am on Enter')
            //     tl.play()
            //  },
            onEnterBack: ({progress, direction, isActive}) => {
                console.log('I am on Enter Back')
                    tl.seek('start').play()
                }

            }
          });
        tl.addLabel("start")
        tl.from('#cloud', {
            x: 500,
            duration: 3,
            ease: 'power2.easeOut'
        });
        tl.addLabel("rain")
        tl.from("#rain path", {
            duration:0.01,
            opacity: 0,
            stagger: 0.01,
            repeat: -1,
            y: -100});
        tl.addLabel("puddles")
        tl.from('.puddle', {
            scale: 0, 
            zIndex: -500,
            duration: 3,
            ease: 'power2.easeOut'
        });
        // tl.addLabel("shrubs")
        // tl.from('#toilet_shrubs', {
        //     scale: 0, 
        //     duration: 3,
        //     ease: 'power2.easeOut',
        //     delay: -1
        // });



    }, [])  

    return (
        <div ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
}

export default RainIsland;