import React from 'react'
import styled from 'styled-components'
import Operator from './operator'

const Container = styled.div`
    width: 100%;
    position: absolute;
    z-index: 10;
    bottom: -1.5rem;
    right: 0;

    @media (max-width: 2000px) {
        width: 80%;
    }

    @media (max-width: 1400px) {
        width: 85%;
    }

    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (max-width: 700px) {
        width: 80%;
    }

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 380px) {
        width: 60%;
        margin: auto;
    }

    @media (max-width: 600px) and (min-height: 700px) {
        width: 85%;
    }

    @media (max-width: 480px) and (min-height: 700px) {
        width: 80%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 70%;
    }
    @media (orientation: portrait) and (min-height: 1000px) {
        width: 130%;
    }
`

const DarkLord = props => {
    return (
        <Container>
            <Operator />
        </Container>
    )
}

export default DarkLord
