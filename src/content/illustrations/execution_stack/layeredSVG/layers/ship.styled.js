import React, { useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import gsap from "gsap";
import withAnimationContext from '../../../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../../../hoc/withAnimateOnScroll';

const ShipContainer = styled.div`
    position: absolute;
    bottom: ${props => props.position.bottom};
    left: ${props => props.position.left};
    transform: ${props => props.position.transform};
    z-index: 2000;
    width: ${props => props.position.size === 'small' ? '9%' : '17%'};
`

const Ship = (props) => {

    let shipElement = useRef(null);


    useEffect(() => {
        const flyShip = () => {
            const tl = gsap.timeline();
            gsap.set(shipElement, {transform: props.transform})
            tl.to(shipElement, {
                duration: props.animation.duration,
                delay: props.animation.delay,
                x: props.animation.x,
                ease: props.animation.ease,
                yoyo: true
            });
    
            return tl;
        }
        props.tl.add(flyShip());
    }, [props])

    return (
        <ShipContainer animation={{...props.animation}} position={{...props.position}}>
            <div ref={(el) => (shipElement = el)}>
                <StaticImage
                    src="../../../../../images/Ship_vsmall.png"
                    alt="The Execution Stack - a stack of isles with waterfalls"
                    placeholder="tracedSVG"
                    fullWidth
                />
            </div>
        </ShipContainer>
    )
}

export default withAnimateOnScroll(withAnimationContext(Ship, true), true, true);



