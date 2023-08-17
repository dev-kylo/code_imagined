import React from 'react'
import { StyledButton } from './button.styled'

const DownloadLink = props => (
    <StyledButton {...props} as="a">
        {props.children}
    </StyledButton>
)

export default DownloadLink
