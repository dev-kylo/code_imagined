
import styled from 'styled-components';
import ECstack from '../../../images/ECI_base.svg';
import React from 'react';
import AnemoneIsland from './anemone';
import ObjectIsland from './ObjectIsland.styled';
import Ship from './Ship.styled';


export const SVGContainer = styled.div`
    width: 85%;
    left: 8%;
    position: absolute;
    z-index: 100;
    top:20px;

    #waterfall, #white {
        background-color: white;
        color: white;
    }

    @media (max-width: 1200px){
        top:3%;
        width: 100%;
    }

    @media (max-width: 1100px){
        width: 105%;
        max-height: auto;
    }

    @media (max-width: 1000px){
        top: 20%;
        width: 105%;
        left: 5%;
    }

    @media (max-width: 600px){
        top: 42%;
        left: 65px;
        width: 62%;
    }

    @media (max-width: 550px){
        top:38%;
        left: 30px;
        width: 75%;
    }

    @media (max-width: 550px) and (max-height: 750px){
        top:45%;
        left: 20%;
        width: 58%;
    }


    @media (max-width: 480px) and (min-height: 700px){
        top:45%;
        left: 30px;
        width: 80%;
    }


    @media (max-width: 380px){
        top:50%;
        left: 20px;
        width: 85%;
    }

    @media (max-width: 380px) and (max-height: 700px){
        top:47%;
        left: 30px;
        width: 75%;
    }

    @media (max-width: 340px){
        top:50%;
        left: 20px;
        width: 75%;
    }

    @media (max-width: 350px) and (max-height: 600px){
        top:60%;
        left: 50px;
        width: 55%;
    }
`;

const ExecutionContextIsle = styled(ECstack)`
    width: 100%;
    height: auto;
`

export const StyledSVG = () => (
    <SVGContainer>
        <ExecutionContextIsle/>
        <AnemoneIsland />
        <ObjectIsland />
        <Ship islandBottom/>
        <Ship islandTop />
    </SVGContainer>
)