import React, { useEffect } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Prototype from './prototype'
import LightBeam from '../lightbeam/lightbeam'
import withAnimationContext from '../../../../hoc/withAnimationContext'
import withAnimateOnScroll from '../../../../hoc/withAnimateOnScroll'

const BeamContainer = styled.div`
    position: absolute;
    top: 38%;
    right: 0;
    width: 100%;
    z-index: 100;
    right: 60%;
`

const Container = styled.div`
    width: 40%;
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 0;

    @media (max-width: 2000px) {
        width: 34%;
    }

    @media (max-width: 1400px) {
        width: 48%;
    }

    @media (max-width: 1000px) {
        width: 53%;
    }

    @media (max-width: 700px) {
        width: 70%;
    }

    @media (max-width: 600px) {
        width: 40%;
    }

    @media (max-width: 600px) and (min-height: 700px) {
        width: 35%;
    }

    @media (max-width: 480px) and (min-height: 700px) {
        width: 37%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 25%;
    }
`

const PrototypeGenie = props => {
    let beam

    useEffect(() => {
        const moveBeam = () => {
            gsap.set(beam, { transformOrigin: '95% 3%' })
            const tl = gsap.timeline()
            tl.to(beam, {
                rotate: 30,
                duration: 2,
                ease: 'power2.easeOut',
            })
            tl.to(beam, {
                rotate: 40,
                duration: 4,
                ease: 'power2.easeOut',
            })
            return tl
        }
        props.tl.add(moveBeam(beam))
    }, [props, beam])

    return (
        <Container>
            <BeamContainer ref={el => (beam = el)}>
                <LightBeam />
            </BeamContainer>
            <Prototype />
        </Container>
    )
}

export default withAnimateOnScroll(withAnimationContext(PrototypeGenie, true), true)
