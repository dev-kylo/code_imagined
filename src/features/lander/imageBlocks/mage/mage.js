import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const MageContainer = styled.div`
    position: absolute;
    bottom: 50%;
    transform: translate(20%, 50%) scale(1.2);
    z-index: 1000;
    width: ${props => (props.invoking ? '70%' : '100%')};
    filter: ${props => (props.invoking ? 'saturate(0.3)' : 'saturate(1.1)')};
    transition: all 1s ease-out;

    @media (max-width: 500px) {
        display: none;
    }
`
const MageFunk = () => {
    return (
        <MageContainer>
            <div>
                <StaticImage
                    src="../../../../images/mage.png"
                    alt="Mage Funk sorceress character with an invocation orb"
                    placeholder="blurred"
                    fullWidth
                />
            </div>
        </MageContainer>
    )
}

export default MageFunk
