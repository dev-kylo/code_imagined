import React from 'react'
import styled from 'styled-components'
import Prototype from './prototype'
import LightBeam from '../lightbeam/lightbeam'

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
    return (
        <Container>
            <BeamContainer>
                <LightBeam />
            </BeamContainer>
            <Prototype />
        </Container>
    )
}

export default PrototypeGenie
