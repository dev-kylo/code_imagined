import React from 'react';
import prototype_svg from '../images/prototype_c.svg';
import styled from 'styled-components';

const StyledSVG = styled(prototype_svg)`
    width: 110%;
  
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 0;

    @media (max-width: 1400px){
        width: 120%;
    }

    @media (max-width: 1200px){
        width: 135%;
    }

    @media (max-width: 1000px){
        width: 160%;
    }
    @media (max-width: 800px){
        width: 200%;
    }


    .genie {}
    .beam{}
    .eyebrow1
    .eyebrow2
    .hair{}
`

const prototype = () => (
    <StyledSVG />
)

export default prototype;