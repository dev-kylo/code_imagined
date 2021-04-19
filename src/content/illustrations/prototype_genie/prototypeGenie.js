import React from 'react';
// import React, { useEffect, useRef } from 'react';
// import prototype_svg from '../../../images/prototype_c.svg';
// import styled from 'styled-components';
// import gsap from "gsap";
import withAnimationContext from '../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../hoc/withAnimateOnScroll';
import styled from 'styled-components';
import Prototype from './prototype';


const PrototypeGenie = (props) => {

    const Container = styled.div`
    width: 55%;
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 0;

    @media (max-width: 1400px){
        width: 58%;
    }

    @media (max-width: 1200px){
        width: 63%;
    }

    @media (max-width: 1000px){
        width: 65%;
    }


    @media (max-width: 700px){
        width: 70%;
    }

    @media (max-width: 600px){
        width: 40%;
    }

    @media (max-width: 600px) and (min-height: 700px){
        width: 35%;
    } 

    @media (max-width: 480px) and (min-height: 700px){
        width: 37%;
    }
`

    // const moveBeam = (beam) => {
    //     gsap.set(beam, {transformOrigin: '95% 3%'})
    //     const tl = gsap.timeline();
    //     tl.addLabel("start")
    //     tl.to(beam, {
    //         rotate: 70, 
    //         duration: 4,
    //         ease: 'power2.easeOut'
    //     });
    //     tl.to(beam, {
    //         rotate: 40, 
    //         duration: 6,
    //         ease: 'power2.easeOut'
    //     });
    //     return tl;
    // }

    // useEffect(() => {
    //     const beam = refo.querySelector('#beam');
    //     props.tl.add(moveBeam(beam));
    // });

    return (
        <Container>
            <Prototype />
        </Container>
    )
};

export default withAnimateOnScroll(withAnimationContext(PrototypeGenie, true), true);