
import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.theme.colors.white};
    font-size: 40px;
    padding-top: 0;
    text-align: center;
    margin-top: 0.5em;

    @media (min-width: 400px){
        font-size: 45px;
    }

    @media (min-width: 600px){
        font-size: 50px;
        text-align: left;
    }
    @media (min-width: 900px){
        font-size: 70px;
    }
    @media (min-width: 1200px){
        font-size: 75px;
    }
    @media (min-width: 1400px){
        font-size: 95px;
    }
`

export const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.theme.colors.white};
    font-size: 28px;
    padding: 0.5em 0;

    @media (min-width: 600px){
        font-size: 35px;
    }
`
