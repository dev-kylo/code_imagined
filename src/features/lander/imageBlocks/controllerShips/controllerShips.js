import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ImageLabel } from '../../../../components/UI/ImageLabel'

const SphereContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 21%;
    z-index: 2000;
    width: 70%;

    @media (min-width: 1200px) {
        width: 55%;
    }

    @media (min-width: 1500px) {
        width: 60%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 35%;
        left: 35%;
    }
`

const ControllerLabel = styled(ImageLabel)`
    bottom: 0%;
    right: 0%;
`

const ControllerShips = () => (
    <SphereContainer>
        <ControllerLabel>~ Controller Functions</ControllerLabel>
        <StaticImage
            src="../../../../images/controllers.png"
            alt="A formation of flying carrier ships with a lake of water on each."
            placeholder="blurred"
        />
    </SphereContainer>
)

export default ControllerShips
