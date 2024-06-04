/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { H1 } from '../../components/UI/headings.styled'

const Title = styled.div`
    display: inline-block;
    z-index: 100;
    transition: opacity 1s ease-in-out;
    background: #00000085;
    h1 {
        margin-top: 0;
        font-size: 3rem;
    }

    @media (min-width: 600px) {
        padding: 2em;
        font-size: 1rem;
        background: none;
        h1 {
            font-size: 3rem;
        }
    }

    @media (min-width: 1200px) {
        padding: 2em;
        font-size: 1rem;
        h1 {
            font-size: 4rem;
            margin-top: 2rem;
        }
        // padding-top: 1em;
    }

    @media (min-width: 1800px) {
        h1 {
            font-size: 5rem;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 70%;
        height: 50%;
        background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            url('./fantasy-bg.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        filter: blur(2px);
        z-index: -1;

        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`

const Container = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2000;
    transition: opacity 1s ease-in-out;

    #lander-heading {
    }

    @media (max-width: 600px) {
        #lander-heading {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
    }
`

const Strapline = styled.div`
    position: relative;
    width: 100%;
    height: 95vh;
    background: white;
    z-index: -2;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            url('./fantasy-bg.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`

const Span = styled.div`
    display: block;
    font-size: 2rem;
    font-family: ${props => props.theme.fonts.heading1};
    line-height: 1.5;
    @media (max-width: 1000px) {
        font-size: 1.3rem;
    }
`

const Color = styled.div`
    // color: ${props => props.theme.colors[`${props.color}`]};
    display: inline;
    textshadow: 2px 2px 4px rgba(0, 0, 0, 0.5)';
`

const Header2 = () => {
    return (
        <Strapline>
            <Container>
                <Title>
                    <H1
                        id="lander-heading"
                        as="span"
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            display: 'block',
                        }}
                    >
                        <Color color="blue">Imagine</Color>
                        <br /> building JavaScript Projects <br />
                        with CONFIDENCE
                    </H1>

                    <Span
                        style={{
                            maxWidth: '600px',
                            textAlign: 'center',
                            margin: 'auto',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        No more <Color color="red">TUTORIAL HELL</Color>
                    </Span>
                    <Span
                        style={{
                            maxWidth: '700px',
                            textAlign: 'center',
                            margin: 'auto',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        No more <Color color="black">IMPOSTER SYNDROME</Color>
                    </Span>
                    {/* <Span
                        style={{
                            maxWidth: '700px',
                            textAlign: 'center',
                            margin: 'auto',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        Guided by a VISUAL MENTAL MODEL of the fundamentls
                    </Span> */}
                </Title>
            </Container>
        </Strapline>
    )
}

export default Header2
