import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-columns: ${({ reverse }) => (reverse ? '2fr 1fr' : '1fr 2fr')};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    min-height: 400px;
    width: 100%;
    z-index: 20000;
    background: white;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        img {
            max-height: 300px;
        }
    }
`

export const Canvas = styled.div`
    background: white;
    color: black !important;
    texta-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 10;

    padding: 2rem;
    p {
        text-align: center;
        font-size: 1.2rem;
        max-width: 600px;
    }

    @media (max-width: 600px) {
        padding: 1.2rem;
    }

    span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.paragraph};
    }
`
