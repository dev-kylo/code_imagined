import React from 'react';
import island_svg from '../images/rain_island.svg';
import styled from 'styled-components';

const StyledSVG = styled(island_svg)`
    width: 100%;
    position: absolute;
    z-index: 100;
    right: 50px;

    @media (max-width: 1400px){
        width: 105%;
        top: 80px;
        right: 1px;
    }

    @media (max-width: 1100px){
        width: 110%;
        top: 80px;
        right: 1px;
    }

    @media(max-width: 600px){
        width: 95%;
        top: 0;
        right: 1px;
    }

    @media(max-width: 480px){
        width: 92%;
        right: 10px;
    }
    @media(max-width: 350px){
        width: 90%;
    }

    .rain {}
    .shrubs{}
    .toilet_shrubs{}
    .puddle{}
    .frontright{}
    .frontleft{}
`

const island = () => (
    <StyledSVG />
)

export default island;