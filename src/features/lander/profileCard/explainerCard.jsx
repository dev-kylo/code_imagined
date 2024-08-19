import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Zoom } from 'react-awesome-reveal'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'

const Card = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
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

const Canvas = styled.div`
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
        max-width: 800px;
    }

    @media (max-width: 600px) {
        padding: 1.2rem;
    }

    span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.paragraph};
    }
`

const ExplainerCard = () => (
    <Card>
        <Canvas>
            <Zoom>
                <H2 style={{ color: 'black' }}>Let me help you</H2>
                <P style={{ color: 'black' }}>
                    I am a JavaScript developer, and have been for many years. That said, I am not a guru. I have not
                    worked for Google.
                </P>
                <P style={{ color: 'black' }}>
                    What I can say is that I once needed a way to 'level up' in JavaScript. I focussed on the
                    fundamentals, learnt the patterns, and applied them to projects. I have helped hundreds of students
                    do the same.
                </P>
                <P style={{ color: 'black' }}>
                    If you're trying to{' '}
                    <Highlight color="white" bgColor="navy" style={{ color: 'white', padding: '0.2rem 0.5rem' }}>
                        {' '}
                        break through and gain confidence{' '}
                    </Highlight>
                    with JavaScript ,
                    <br /> I can help you!
                </P>
                {/* <P style={{ color: 'black' }}>
                    <Highlight color="white" bgColor="navy" style={{ color: 'white', padding: '0.2rem 1rem' }}>
                        Here' are 2 OPTIONS to' work together:
                    </Highlight>
                </P> */}
            </Zoom>
        </Canvas>
        <StaticImage src="../../../images/Kylo2.png" alt="Dev Kylo by his screen" placeholder="blurred" />
    </Card>
)

export default ExplainerCard
