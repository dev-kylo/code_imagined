import styled from 'styled-components'

export const Highlight = styled.span`
    color: ${props => props.theme.colors[props.color || 'black']};
    background: ${props => (props.bgColor ? props.theme.colors[props.bgColor] : 'transparent')};
    display: inline;
    margin-right: 0.2rem;
`
