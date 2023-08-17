import styled from 'styled-components'
import React from 'react'
import { H1 } from './headings.styled'

const TitleContainer = styled.div`
    background-color: ${({ theme, postTitle }) => (postTitle ? theme.colors.navy : theme.colors.red)};
    margin: auto;
    text-align: center;
    height: 12rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;

    @media (min-width: 780px) {
        padding: 0 4rem;
    }

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
