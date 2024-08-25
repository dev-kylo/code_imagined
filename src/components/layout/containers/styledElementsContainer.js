import styled from 'styled-components'

export const StyledElementsContainer = styled.div`
    position: relative;
    background: white;
    padding: 2rem;

    p,
    ul,
    li,
    span,
    h1,
    h2 {
        color: black;
    }

    h1,
    h2 {
        text-align: center;
    }

    ul {
        list-style-type: disc;
        padding-left: 2rem;
        line-height: 1.5;
    }

    a {
        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        /* This is the dangerous one in WebKit, as it breaks things wherever */
        word-break: break-all;
        /* Instead use this non-standard one: */
        word-break: break-word;
        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        text-decoration: none;
        background: #e8f5ff;
        color: rgb(28, 126, 214);
        :hover {
            text-decoration: underline;
        }
    }

    li {
        line-height: 1;
        font-style: italic;
    }

    .diagram {
        width: 100%;
        margin: 2rem auto;
        max-width: 500px;
        small {
            font-family: 'Raleway', sans-serif;
            color: #041440;
        }
    }
`
