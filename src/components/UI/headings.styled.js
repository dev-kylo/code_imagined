
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
        font-size: 85px;
    }
`

export const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.dark? props.theme.colors.navy : props.theme.colors.white};
    font-size: 28px;
    text-align: center;
    padding: 0.5em 0;
    margin: ${props => props.large? '2em auto' : '1em auto'};
    @media (min-width: 600px){
        font-size: 35px;
        text-align: ${props => props.center? 'center' : 'left'};
    }
`

export const H3 = styled.h3`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.dark? props.theme.colors.navy : props.theme.colors.white};
    font-size: 26px;
    text-align: center;
    padding: 0.5em 0;
    margin: 'auto';
    @media (min-width: 600px){
        font-size: 32px;
        text-align: ${props => props.center? 'center' : 'left'};
    }
`
