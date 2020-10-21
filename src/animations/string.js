import React from 'react';
import island_svg from '../images/rain_island.svg';
import styled from 'styled-components';

const StyledSVG = styled(island_svg)`
    width: 100%;
    max-height: 100%;

    @media (max-width: 900px){
        width: 100%;
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