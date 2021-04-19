import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import gsap from "gsap";
import withAnimationContext from '../../../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../../../hoc/withAnimateOnScroll';

const Island1Container = styled.div`
    position: absolute;
    bottom: 47%;
    left: 45%;
    transform: rotate(5deg);
    z-index: 2000;
    width: 17%;
`

const Island2Container = styled.div`
    position: absolute;
    top: 10%;
    left: 45%;
    z-index: 2000;
    transform: scaleX(-1);
    width: 9%;
`

const Ship = (props) => {

    const flyShip = () => {
        const tl = gsap.timeline();
        tl.to('#shipbottom', {
            duration: 20,
            delay: 1,
            x: 150,
            ease: "Power1.easeOut"
        });
        tl.to('#shiptop', {
            duration: 30,
            delay: 0,
            x: 170,
            ease: "Power1.easeIn"
        })
        return tl;
    }

    useEffect(() => {
        props.tl.add(flyShip());
    })

    if (props.islandTop){
        return (
            <Island1Container>
                <div id="shipbottom">
                <StaticImage
                    src="../../../../../images/Ship_vsmall.png"
                    alt="The Execution Stack - a stack of isles with waterfalls"
                    placeholder="tracedSVG"
                    fullWidth
                />
                </div>
            </Island1Container>
        )
    }
    else return (
        <Island2Container>
            <div id="shiptop">
                <StaticImage
                    src="../../../../../images/Ship_vsmall.png"
                    alt="The Execution Stack - a stack of isles with waterfalls"
                    placeholder="tracedSVG"
                    fullWidth
                />
            </div>
        </Island2Container>
    )
}

export default withAnimateOnScroll(withAnimationContext(Ship), true);


