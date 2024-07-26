import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-awesome-reveal'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 6rem;
    margin-top: -2rem;
`

export const Card = styled.div`
    margin: 3rem 2rem;
    z-index: 20000;
    background: transparent !important;
    align-self: ${({ align }) => align || 'center'};
`

const Canvas = styled.div`
    z-index: 10;
    padding: 0rem;
    max-width: 600px;
    text-align: center;
    padding: 25px 20px;
    position: relative;
    // border: ${({ theme }) => `7px solid ${theme.colors.pink}`};
    border-radius: 15px;
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme, color }) => `${theme.colors[color]}bf`};
    // background: #000000bf;

    @media (max-width: 780px) {
        padding: 15px 10px;
    }

    h2 {
        padding: 0;
        font-size: 2.5rem;
    }
    p {
        font-size: 1.3rem;
        max-width: 800px;
        text-align: center;
        font-family: ${props => props.theme.fonts.paragraph};
        padding: 0;
    }

    @media (max-width: 600px) {
        padding: 1.2rem;
        h2 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1.1rem;
        }
    }

    span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.paragraph};
    }
`

const BurningProblemCard = () => (
    <Container>
        <Card style={{ marginTop: 0 }}>
            <Zoom duration={1000}>
                <Canvas color="navy">
                    <H2 style={{ color: 'white', textAlign: 'center' }}>Does learning JavaScript sound like this?</H2>
                </Canvas>
            </Zoom>
        </Card>
        <Card align="flex-end">
            <Zoom duration={1000} delay={500}>
                <Canvas color="black">
                    <P style={{ color: 'white' }}> Stuck in endless tutorials...😠</P>
                </Canvas>
            </Zoom>
        </Card>
        <Card align="flex-start">
            <Zoom duration={1000} delay={500}>
                <Canvas color="black">
                    <P style={{ color: 'white' }}>Can't remember what you've learnt...😳</P>
                </Canvas>
            </Zoom>
        </Card>
        <Card align="flex-end">
            <Zoom duration={1000} delay={500}>
                <Canvas color="black">
                    <P style={{ color: 'white' }}>Zero confidence in your fundamentals...😔</P>
                </Canvas>
            </Zoom>
        </Card>
        <Card align="flex-start">
            <Zoom duration={1000} delay={500}>
                <Canvas color="black">
                    <P style={{ color: 'white' }}>Can't build anything on your own...😰</P>
                </Canvas>
            </Zoom>
        </Card>
        <Card>
            <Zoom duration={1000} delay={500}>
                <Canvas color="red">
                    <P style={{ color: 'white' }}>Wondering if you will ever 'get it'...🤔</P>
                </Canvas>
            </Zoom>
        </Card>
    </Container>
)

export default BurningProblemCard
