import React from 'react';
import ECstack from '../images/ec_stack.svg';
import styled from 'styled-components';

const StyledSVG = styled(ECstack)`
    width: 100%;
    max-height: 118%;

    @media (max-width: 900px){
        width: 100%;
        max-height: 70vh;
    }
`

const executionStack = () => (
    <StyledSVG />
)

export default executionStack;