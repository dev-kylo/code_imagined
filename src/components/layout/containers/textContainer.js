import styled from 'styled-components'

export const TextContainer = styled.section`
    margin: auto;
    padding: 2em;
    margin-bottom: 1em;
    background-color: white;

    @media (max-width: 800px) {
        padding: 1em;
    }

    ol,
    ul {
        list-style: auto;
        margin-left: 1em;
    }

    li::marker {
        color: ${props => props.theme.colors.red};
    }

    .language-js {
        margin: 2rem 0;
    }

    p,
    li,
    .layout-wrapper span.token {
        font-family: ${props => props.theme.fonts.par};
        color: ${props => props.theme.colors.navy};
        font-size: ${props => (props.small ? '18px' : '22px')};
        padding: 0.5em 0;
        line-height: ${props => (props.small ? '26px' : '33px')};
        z-index: 150;

        strong {
            color: ${props => props.theme.colors.red};
            font-weight: bold;
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

        em {
            font-style: italic;
        }

        .codespan {
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
            font-size: 0.8em;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            background: #021627;
            color: white;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 0.5rem;
            margin: 0 0.3rem;
            margin-right: 0.1em;
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
    }

    h2,
    h3 {
        font-family: ${props => props.theme.fonts.heading1};
        color: ${props => props.theme.colors.navy};
        text-align: left;
        padding: 0.5em 0;
        margin: 0.25em 0;

        a {
            background: #e8f5ff;
            color: rgb(28, 126, 214);
            text-decoration: none;
            :hover {
                text-decoration: underline;
            }
        }
    }
    h2 {
        font-size: 28px;
        font-family: ${props => props.theme.fonts.heading2};
        @media (min-width: 600px) {
            font-size: 30px;
        }
    }
    h3 {
        font-size: 22px;
        margin: 0.5em 0;
        @media (min-width: 600px) {
            font-size: 25px;
        }
    }

    ul {
        li {
            margin-left: 1rem;
            padding: 0.2rem;
            list-style: initial;
        }
    }
    img {
        max-width: 100%;
    }

    button {
        margin-top: 2rem;
    }
`
