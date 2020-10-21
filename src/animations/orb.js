import React from 'react';
import prototype_svg from '../images/orb.svg';
import styled from 'styled-components';

const StyledSVG = styled(prototype_svg)`
    width: 100%;
    max-height: 100%;

    @media (max-width: 900px){
        width: 100%;
        max-height: 70vh;
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