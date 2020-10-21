import React from 'react';
import prototype_svg from '../images/prototype_c.svg';
import styled from 'styled-components';

const StyledSVG = styled(prototype_svg)`
    width: 100%;
    max-height: 100%;

    @media (max-width: 900px){
        width: 100%;
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