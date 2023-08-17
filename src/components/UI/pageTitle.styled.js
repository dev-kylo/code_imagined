import styled from 'styled-components'
import React from 'react'
import { H1 } from './headings.styled'

const TitleContainer = styled.div`
    background-color: ${({ theme, postTitle }) => (postTitle ? theme.colors.navy : theme.colors.red)};
    margin: auto;
    text-align: center;
    height: 20rem;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
        text-align: center;
    }
`

const PageTitle = ({ children, postTitle }) => (
    <TitleContainer postTitle={postTitle}>
        <H1>{children}</H1>
    </TitleContainer>
)

export default PageTitle
