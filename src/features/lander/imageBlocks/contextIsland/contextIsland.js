import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageLabel } from '../../../../components/UI/ImageLabel'

const Container = styled.div`
    height: 100%;
    bottom: -1.5rem;
    right: 0;
    z-index: 0;
    transition: all 1s ease-out;

    img {
        object-fit: cover;
        z-index: -100;
    }

    @media (max-width: 500px) {
        display: ${props => (props.mobileHide ? 'none' : 'block')};
    }
`

const ContextIsland = ({ style, mobileHide, centered, showText }) => {
    return (
        <Container style={style} mobileHide={mobileHide} centered={centered}>
            <StaticImage
                src="../../../../images/contextIsland.png"
                alt="A floating island with a lake and lighthouse on it."
                placeholder="blurred"
                style={{ objectFit: 'cover', height: '100%' }}
                objectFit="cover"
            />
            <ImageLabel style={{ transform: 'rotate(-70deg)', top: '50%', right: '15%' }}>
                ~ Execution Context
            </ImageLabel>
            <ImageLabel style={{ top: '5%', left: '15%' }}>~ Function Scope</ImageLabel>
            <ImageLabel style={{ transform: 'rotate(40deg)', top: '20%', left: '50%' }}>~ Local Scope</ImageLabel>
        </Container>
    )
}

export default ContextIsland
