import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { fadeIn, slideInFromBottomLeft } from '../../../../utils/animations'

const ImpContainer = styled.div`
    opacity: 0;
    position: absolute;
    z-index: 1000;
    transition: all 1s ease-out;

    animation: ${slideInFromBottomLeft} 3s ease-out 0s forwards;

    @media (max-width: 500px) {
        display: ${props => (props.mobileHide ? 'none' : 'block')};
    }
`

const ImpText = styled.small`
    opacity: 0;
    position: absolute;
    right: 10px;
    bottom: 50%;
    font-size: 12px;
    width: 50px;
    font-family: ${props => props.theme.fonts.subheading} !important;
    animation: ${fadeIn} 2s ease-out 3s forwards !important;

    @media (max-width: 500px) {
        display: none;
    }
`

const ImpTextBottom = styled.small`
    opacity: 0;
    position: absolute;
    right: -70px;
    bottom: 0;
    font-size: 10px;
    font-family: ${props => props.theme.fonts.subheading} !important;
    font-style: italic;
    animation: ${fadeIn} 2s ease-out 3s forwards !important;

    @media (max-width: 500px) {
        display: none;
    }
`

const Imp = ({ style, mobileHide }) => {
    return (
        <ImpContainer style={style} mobileHide={mobileHide}>
            <ImpText>Beware The Imp</ImpText>
            <ImpTextBottom> ~ imposter syndrome </ImpTextBottom>
            <div className="imp">
                <StaticImage src="../../../../images/imp.png" alt="A devilish impish character" placeholder="blurred" />
            </div>
        </ImpContainer>
    )
}

export default Imp
