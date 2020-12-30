import React from 'react';
import prototype_svg from '../images/prototype_c.svg';
import styled from 'styled-components';

const StyledSVG = styled(prototype_svg)`
    width: 105%;
  
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
        width: 150%;
    }


    @media (max-width: 700px){
        width: 140%;
    }

    @media (max-width: 600px){
        width: 80%;
    }

    @media (max-width: 600px) and (min-height: 700px){
        width: 60%;
    } 

    @media (max-width: 480px) and (min-height: 700px){
        width: 80%;
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