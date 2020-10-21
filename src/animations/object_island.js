import React from 'react';
import object_svg from '../images/object_island.svg';
import styled from 'styled-components';

const StyledSVG = styled(object_svg)`
    width: 100%;

    position: absolute;
    transform: translate(30px, 10px);
    z-index: 10;
    @media (max-width: 1000px){
        transform: translate(30px, 50px);
    }

    .captain {}
    .captain .telescope{}
    .loo{}
    .rock{}
`

const objectIsland = () => (
    <StyledSVG />
)

export default objectIsland;