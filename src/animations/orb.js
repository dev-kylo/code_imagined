import React from 'react';
import prototype_svg from '../images/orb.svg';
import styled from 'styled-components';

const StyledSVG = styled(prototype_svg)`
    width: 105%;
    position: absolute;
    top: 60px;
    z-index: 100;

    @media (max-width: 1400px){
        top: 150px;
    }

    @media (max-width: 600px){
        width: 95%;
        top: -50%;
        right: 50%;
        transform: translate(50%, 50%);
    }

    .orange {}
    .black{}
    .light{}
    .outer{}

`

const orb = () => (
    <StyledSVG />
)

export default orb;