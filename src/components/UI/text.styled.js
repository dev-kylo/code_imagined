import styled from 'styled-components'

export const P = styled.p`
    font-family: ${props => props.theme.fonts.par};
    color: ${props => (props.dark ? props.theme.colors.navy : props.theme.colors.white)};
    font-size: ${props => (props.small ? '18px' : '24px')};
    padding: 0.5em 0;
    line-height: ${props => (props.small ? '26px' : '33px')};
    z-index: 150;

    @media (max-width: 2000px) {
        line-height: 28px;
        font-size: 20px;
    }

    @media (max-width: 1100px) {
        line-height: 28px;
    }

    @media (max-width: 900px) {
        font-size: ${props => (props.small ? '18px' : '20px')};
        line-height: ${props => (props.small ? '26px' : '28px')};
    }

    @media (max-width: 800px) {
        font-size: 18px;
        line-height: 26px;
    }

    @media (max-width: 500px) {
        line-height: 24px;
    }

    @media (max-width: 350px) {
        font-size: 16px;
        line-height: 24px;
    }
`
export const Hl = styled.mark`
    background-color: ${props =>
        props.blue ? props.theme.colors.navy : props.red ? props.theme.colors.red : props.theme.colors.green};
    padding: ${props => (props.large ? '1em' : '0.1em 0.3em')};
    line-height: 30px;
    color: white;
`

export const CallOut = styled.div`
    background-color: ${props => props.theme.colors.pink};
    margin: 2em;
    padding: 2em;
    color: ${props => props.theme.colors.navy};
    & p {
        color: ${props => props.theme.colors.navy};
    }

    @media (max-width: 800px) {
        margin: 0.5em;
    }
`
