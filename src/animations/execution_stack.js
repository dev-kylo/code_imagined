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
    }

    @media (max-width: 600px){
        top:350px;
        left: 20px;
        width: 75%;
    }

    @media (max-width: 550px){
        top:270px;
        left: 30px;
        width: 75%;
    }


    @media (max-width: 480px) and (min-height: 700px){
        top:380px;
    }


    @media (max-width: 380px){
        top:320px;
    }

    @media (max-width: 340px){
        top:280px;
    }

`

const executionStack = () => (
    <StyledSVG />
)

export default executionStack;