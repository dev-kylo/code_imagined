import React, { memo } from 'react'
import styled from 'styled-components'

const StyledTOC = styled.aside`
    position: sticky;
    height: 100vh;
    top: 0;
    overflow: auto;
    padding-top: 4rem;

    /* Scrollbar Styles */
    &::-webkit-scrollbar {
        width: 12px;
    }
    & {
        scrollbar-width: thin;
        scrollbar-color: var(--yellow) var(--light);
    }
    &::-webkit-scrollbar-track {
        background: var(--light);
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--yellow);
        border-radius: 6px;
        border: 3px solid var(--light);
    }
`

function TableOfContents({ children }) {
    return <StyledTOC>{children}</StyledTOC>
}

export default memo(TableOfContents)
