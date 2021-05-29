import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import LightBeam from '../../../lightbeam/lightbeam';
import gsap from "gsap";
import withAnimationContext from '../../../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../../../hoc/withAnimateOnScroll';

const LightBeam1 = styled.div`
    position: absolute;
    bottom: 31%;
    left: 62%;
    transform: rotate(20deg);
    z-index: 2000;
    width: 25%;
`
const LightBeam2 = styled.div`
    position: absolute;
    bottom: 56%;
    left: 10%;
    transform: rotate(260deg);
    z-index: 2000;
    width: 15%;
`

const LightBeam3 = styled.div`
    position: absolute;
    top: 0%;
    right: 25%;
    transform: rotate(20deg);
    z-index: 2000;
    width: 8%;
`

const LightBeam4 = styled.div`
    position: absolute;
    top: 4%;
    left: 22%;
    transform: rotate(250deg);
    z-index: 2000;
    width: 8%;
`

const LightHouseBeams = (props) => {
    let lightEls = useRef(null);

    useEffect(() => {
        const beams = lightEls.querySelectorAll('div[class*="lighthousesstyled"]');
        
    const alternateBeams = (beams) => {
            const tl = gsap.timeline();
            tl.fromTo(beams, {
                opacity: 0,
                delay: 3,
                duration: 2
            }, {
        
                delay: 4,
                opacity: 1,
                duration: 2,
                stagger: -1,
                each: 0.3,
                repeat: -1 
            });
            return tl;
        }
        props.tl.add(alternateBeams(beams));

    }, [props])

    return (
        <div ref={(el) => (lightEls = el)}>
            <LightBeam4>
                <LightBeam />
            </LightBeam4>
            <LightBeam3>
                <LightBeam />
            </LightBeam3>
            <LightBeam2>
                <LightBeam />
            </LightBeam2>
            <LightBeam1>
                <LightBeam />
            </LightBeam1>
        </div>
    )
}





export default withAnimateOnScroll(withAnimationContext(LightHouseBeams, true), true, true);;