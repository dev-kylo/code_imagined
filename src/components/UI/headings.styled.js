import styled from 'styled-components'

export const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => 'white'};
    font-size: 35px;
    padding: 1rem;
    padding-top: 0;
    text-align: center;
    margin-top: 0.5em;
    z-index: 150;

    @media (min-width: 400px) {
        font-size: 45px;
    }

    @media (min-width: 600px) {
        font-size: 50px;
        text-align: left;
    }
    @media (min-width: 900px) {
        font-size: 70px;
    }
    @media (min-width: 1200px) {
        font-size: 75px;
    }
    @media (min-width: 1400px) {
        font-size: 4.5rem;
    }

    @media (orientation: landscape) and (max-width: 1200px) {
        font-size: 3.5em;
    }

    @media (orientation: landscape) and (max-width: 800px) {
        padding-top: 1rem;
        font-size: 2.2em;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        font-size: 1.8em;
    }
`

export const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props =>
        props.dark
            ? props.theme.colors.navy
            : props.color
            ? props.theme.colors[props.color]
            : props.theme.colors.white};
    font-size: 2.5rem;
    text-align: center;
    padding: 0.5em 0;
    z-index: 150;
    margin: ${props => (props.large ? '2em auto' : '0 auto')};
    @media (min-width: 600px) {
        font-size: ${props => (props.large ? '3.5rem' : '3rem')};
        text-align: ${props => (props.center ? 'center' : 'left')};
    }
`

export const H3 = styled.h3`
    font-family: ${props => props.theme.fonts.heading1};
    color: ${props => (props.dark ? props.theme.colors.navy : props.theme.colors.white)};
    font-size: 26px;
    text-align: center;
    padding: 0.5em 0;
    margin: 'auto';
    @media (min-width: 600px) {
        font-size: 32px;
        text-align: ${props => (props.center ? 'center' : 'left')};
    }
`
