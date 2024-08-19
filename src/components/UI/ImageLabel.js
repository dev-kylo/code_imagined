import styled from 'styled-components'

export const ImageLabel = styled.small`
    position: absolute;
    font-size: 14px;
    z-index: 0;
    font-family: ${props => props.theme.fonts.subheading} !important;
    font-style: italic;
    color: white;
`
