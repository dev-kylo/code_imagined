import styled from 'styled-components';

export const P  = styled.p`
    font-family: ${props => props.theme.fonts.par};
    color: ${props => props.theme.colors.white};
    font-size: 24px;
    padding: 0.5em 0;
    line-height: 33px;
`