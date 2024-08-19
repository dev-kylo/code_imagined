import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import { ImageLabel } from '../../../../components/UI/ImageLabel'

const Container = styled.div`
    width: 420px;
    height: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 100;

    @media (max-width: 1100px) {
        width: 300px;
    }

    @media (max-width: 800px) {
        width: 250px;
        left: 45%;
    }
    @media (max-width: 500px) {
        width: 200px;
    }
    @media (max-width: 350px) {
        width: 150px;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 150px;
    }
`

const ArgumentsLabel = styled(ImageLabel)`
    bottom: 20%;
    left: -10%;
    color: black;

    @media (max-width: 600px) {
        bottom: -15%;
    }
`

const InvocationLabel = styled(ImageLabel)`
    top: -30%;
    left: -50%;
    color: black;
    transform: rotate(-30deg);

    @media (max-width: 600px) {
        top: -70%;
    }
`

const Argonauts = () => {
    return (
        <Container>
            <ArgumentsLabel>~ Arguments</ArgumentsLabel>
            <InvocationLabel>~ Function Invocation</InvocationLabel>
            <StaticImage
                src="../../../../images/Argonauts.png"
                alt="A flying ship with windows"
                placeholder="blurred"
            />
        </Container>
    )
}

export default Argonauts
