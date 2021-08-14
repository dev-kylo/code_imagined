import styled from 'styled-components';
import Orb from '../../../images/ArgsExiting_Orb.svg';
import Argonauts from './argonauts';
import React from 'react';

const StyledSVG = styled(Orb)`
    width: 100%;
    height: auto;
`

const SVGContainer = styled.div`
    width: 100%;
    right: -5%;
    top: 20%;
    position: absolute;
    z-index: 200;

    @media (max-width: 1100px){
        right: 0%;
    }

    @media (max-width: 600px){
        width: 95%;
        right: 0;
        left: 1%;
    }

    @media (max-width: 350px){
        width: 95%;
    }

    @media (orientation: landscape) and (max-width: 600px){
        width: 65%;
        left: 20%;
    }
`

const LayeredOrb = () => {
    return (
        <SVGContainer>
            <StyledSVG />
            <Argonauts />
        </SVGContainer>
        );
} 

export default LayeredOrb;