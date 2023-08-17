import React from 'react'
import styled from 'styled-components'
import { H2 } from './headings.styled'

export const Heading = styled.div`
    display: flex;
    justify-content: center;
    margin: 4em auto;

    div {
        padding: 1em;
        background-color: ${props => props.theme.colors.green};

        h2 {
            margin: 0;
        }
    }
`

const PageSubtitle = ({ children }) => (
    <Heading>
        <div>
            <H2 center> {children}</H2>
        </div>
    </Heading>
)

export default PageSubtitle
