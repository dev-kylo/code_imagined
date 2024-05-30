import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { fadeIn } from '../../../../utils/animations'

const bobbing = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
`

const MageText = styled.small`
    opacity: 0;
    position: absolute;
    right: -70%;
    bottom: 60%;
    font-size: 10px;
    width: 100px;
    font-family: ${props => props.theme.fonts.subheading} !important;
    font-style: italic;
    animation: ${fadeIn} 3s ease-out 1s forwards !important;
`

const MageContainer = styled.div`
    position: absolute;
    bottom: 50%;
    right: ${props => (props.centered ? '50%' : 'unset')};
    transform: ${props => (props.centered ? 'translate(20%, 50%) scale(1.2)' : 'translate(0%, 50%) scale(1.1)')};
    z-index: 30000;
    width: ${props => (props.invoking ? '70%' : '100%')};
    filter: ${props => (props.invoking ? 'saturate(0.3)' : 'saturate(1.1)')};
    transition: all 1s ease-out;

    @media (max-width: 500px) {
        display: ${props => (props.mobileHide ? 'none' : 'block')};
    }
`

const AnimatedImage = styled.div`
    animation: ${props =>
        props.invoking
            ? css`
                  ${bobbing} 1.5s ease-in-out infinite
              `
            : 'none'};
`

const MageFunk = ({ style, invoking, mobileHide, centered, showText }) => {
    return (
        <MageContainer style={style} mobileHide={mobileHide} centered={centered}>
            {showText && <MageText>Function Invoking</MageText>}
            <AnimatedImage invoking={invoking}>
                <StaticImage
                    src="../../../../images/mage.png"
                    alt="Mage Funk sorceress character with an invocation orb"
                    placeholder="blurred"
                />
            </AnimatedImage>
        </MageContainer>
    )
}

export default MageFunk
