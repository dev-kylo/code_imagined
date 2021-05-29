import React, { useEffect, useRef } from 'react';
import FloatingRock from './floatingrocks.styled';
import gsap from "gsap";
import withAnimationContext from '../../../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../../../hoc/withAnimateOnScroll';

const Rocks = ( props ) => {

    let RockElements = useRef(null);

    useEffect(() => {
        const rocks = RockElements.querySelectorAll('div[class*="floatingrocksstyled"]');
        const flyRock = () => {
            const tl = gsap.timeline();
            // gsap.set(RockElement, {transform: props.transform})
            tl.to(rocks, {
                duration: 5,
                x: 10,
                y: -10,
                ease: "Power1.easeInOut",
                stagger: 1,
                delay: -1,
                yoyo: true
            });
    
            return tl;
        }
        props.tl.add(flyRock());
    }, [props])

   return (
    <div ref={(el) => (RockElements = el)}>
        <FloatingRock 
            size="2x"
            position={{
                left:"95%", 
                bottom:"27%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="2x"
            position={{
                left:"15%", 
                bottom:"17%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="3x"
            position={{
                left:"75%", 
                bottom:"10%",
                transform:"rotate(1deg)",
            }}
        />
        <FloatingRock 
            size="1x"
            position={{
                left:"45%", 
                bottom:"20%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="1x"
            position={{
                left:"45%", 
                bottom:"45%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="2x"
            position={{
                left:"45%", 
                bottom:"35%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="3x"
            position={{
                left:"15%", 
                bottom:"5%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="2x"
            position={{
                left:"76%", 
                bottom:"60%",
                transform:"rotate(5deg)",
            }}
        />
        <FloatingRock 
            size="4x"
            position={{
                left:"4%", 
                bottom:"0%",
                transform:"rotate(50deg)",
            }}
        />
        <FloatingRock 
            size="3x"
            position={{
                left:"85%", 
                bottom:"7%",
                transform:"rotate(20deg)",
            }}
        />

    </div>
   )
};
export default withAnimateOnScroll(withAnimationContext(Rocks, true), true, true);