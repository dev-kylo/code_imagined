
import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.theme.colors.white};
    font-size: 55px;
    padding: 0.5em 0;

    @media (min-width: 370px){
        font-size: 65px
    }
    @media (min-width: 900px){
        font-size: 75px
    }
    @media (min-width: 1200px){
        font-size: 85px
    }
`

export const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => props.theme.colors.white};
    font-size: 35px;
    padding: 0.5em 0;
`
