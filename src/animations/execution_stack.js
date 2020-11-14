import React from 'react';
import ECstack from '../images/ec_stack.svg';
import styled from 'styled-components';

const StyledSVG = styled(ECstack)`
    width: 100%;
    max-height: 118%;
    position: absolute;
    z-index: 100;

    @media (max-width: 1200px){
        top:50px;
        width: 110%;
        max-height: auto;
    }

    @media (max-width: 1100px){
        top:120px;
        width: 110%;
        max-height: auto;
    }

    @media (max-width: 1000px){
        top:140px;
        width: 115%;
        max-height: auto;
    }

    @media (max-width: 600px){
        top:350px;
        left: 20px;
        width: 75%;
        max-height: auto;
    }


`

const executionStack = () => (
    <StyledSVG />
)

export default executionStack;