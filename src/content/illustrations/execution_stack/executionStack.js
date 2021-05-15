
import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import LayeredSVG from './layeredSVG/layeredSVG.styled';
import withAnimateOnScroll from '../../../hoc/withAnimateOnScroll';
import withAnimationContext from '../../../hoc/withAnimationContext';

//   const flyRocks = (el) => {
//     const tl = gsap.timeline();
//     tl.to(el, {
//         y: -35,
//         x: 70,
//         duration: 15,
//         stagger: { // wrap advanced options in an object
//             each: 0.5,
//             from: "center",
//             ease: "Power1.easeInOut",
 
//         },
//     });
//     return tl;
// }

// const foaming = (el) => {
//     const tl = gsap.timeline();
//     tl.to(el, {
//         y: -40,
//         scaleY: 1.4,
//         ease: "Power1.easeInOut",
//         duration: 4,
//         repeat: -1,
//         yoyo: true
        
//     })
//     return tl;
// };

// const dropletSpray = (el) => {
//     const tl = gsap.timeline();
//     tl.to(el, {
//         y: -40,
//         scaleY: 1.4,
//         ease: "Power1.easeInOut",
//         duration: 4,
//         repeat: -1,
//         yoyo: true
//     })
//     return tl;
// }

// const rootGrow = (el) => {
//     const tl = gsap.timeline();
//     tl.from(el, {
//         scrollTrigger: {
//             trigger: '#shipbottom',   // pin the trigger element while active
//             start: "center center",
//         },
//         duration: 4,
//         stagger: 1,
//         scaleY: 0.1,
//         ease: "Power1.easeOut"
//     });
//     return tl;
// }

const ExecutionStack = (props) => {
    let refo = useRef(null);

    useEffect(() => {
        // const rocks = refo.querySelectorAll('g[id*="rock"]');
        // const roots = refo.querySelectorAll('g[id*="root"]');
        // const drops = refo.querySelectorAll('g[id*="drop"]');
        // const foam = refo.querySelector('#white');
        // props.tl.add(flyRocks(rocks));
        // props.tl.add(foaming(foam));
        // props.tl.add(dropletSpray(drops));
        // props.tl.add(rootGrow(roots));
    }, [])
     
    
    return (
        <div id="executionStack" ref={(el) => (refo = el)}>
                <LayeredSVG/>
        </div>
    )
}

export default withAnimateOnScroll(withAnimationContext(ExecutionStack, true));






