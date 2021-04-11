
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import LayeredSVG from './layeredSVG/layeredSVG.styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import withScrollToggle from '../../../hoc/withScrollToggle';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
  }


const ExecutionStack = (props) => {
    console.log(props.animate)
    let refo = useRef(null);


    useEffect(() => {
        console.log('Animating: ' + props.animate);
        const rocks = refo.querySelectorAll('g[id*="rock"]');
        const roots = refo.querySelectorAll('g[id*="root"]');
        if (props.animate){
            const tl = gsap.timeline({ repeat: -1});
            tl.to(rocks, {
                y: -35,
                x: 70,
                duration: 15,
                stagger: { // wrap advanced options in an object
                    each: 0.5,
                    from: "center",
                    ease: "Power1.easeInOut",
                    repeat: -1,
                    yoyo: true
                },
            });
            gsap.to('#white', {
                y: -40,
                scaleY: 1.4,
                ease: "Power1.easeInOut",
                duration: 4,
                repeat: -1,
                yoyo: true
                
            })
            gsap.to('g[id*="drop"]', {
                duration: 0.3,
                y: -5,
                opacity: 0.3,
                repeat: -1,
                ease: "Power1.easeIn",
                stagger: 0.1
            })
            gsap.from(roots, {
                scrollTrigger: {
                    trigger: '#shipbottom',   // pin the trigger element while active
                    start: "center center",
                },
                duration: 4,
                stagger: 1,
                scaleY: 0.1,
                ease: "Power1.easeOut"
            })
        }
    }, [props])  
    
    return (
        <div id="executionStack" ref={(el) => (refo = el)}>
            <React.Suspense>
                <LayeredSVG/>
            </React.Suspense>
        </div>
    )
}

export default withScrollToggle(ExecutionStack);