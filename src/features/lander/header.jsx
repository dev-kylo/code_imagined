import React from 'react'
import styled from 'styled-components'
import { H1 } from '../../components/UI/headings.styled'
import { P } from '../../components/UI/text.styled'
import { fadeIn } from '../../utils/animations'
import SignUp from '../signup/signup'
import ProfileCard from './profileCard/profileCard'

const Title = styled.div`
    display: inline-block;
    padding: 0.5em;
    padding-top: 0;
    z-index: 100;

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

    @media (min-width: 1500px) {
        padding: 2em;
    }

    @media (min-width: 1800px) {
        margin-top: 4rem;
        padding: 2em;
        h1 {
            font-size: 5rem;
        }
    }
`

const Container = styled.section`
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 20;

    @media (max-width: 480px) {
        display: ${({ mobileView }) => (mobileView ? 'none' : '')};
    }
`

const Strapline = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: -2;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/fantasy-bg.png') no-repeat;
        background-size: cover;
        background-position: center;
        animation: ${fadeIn} 4s ease-out 0s forwards;
        z-index: -1;
    }
`

const Span = styled.div`
    display: block;
    font-size: 1.75rem;
    font-family: ${props => props.theme.fonts.heading1};
    line-height: 1.5;
`

const Color = styled.div`
    color: ${props => props.theme.colors[`${props.color}`]};
    display: inline;
`

const Header = () => {
    return (
        <Strapline>
            <Container mobileView>
                <Title>
                    <H1 style={{ textAlign: 'center', color: 'black' }}>
                        <Color color="blue">Imagine</Color> applying <br />
                        JavaScript fundamentals to <br />
                        ANY project
                    </H1>
                    {/* <H1 style={{ textAlign: 'center', color: 'black' }}>
                        Imagine you were confident <br />
                        with JavaScript
                    </H1> */}
                    <Span style={{ maxWidth: '600px', textAlign: 'center', margin: 'auto', color: 'black' }}>
                        No more <Color color="red">TUTORIAL HELL</Color>
                    </Span>
                    <Span style={{ maxWidth: '700px', textAlign: 'center', margin: 'auto', color: 'black' }}>
                        No more overwhelming <Color color="black">IMPOSTER SYNDROME</Color>
                    </Span>
                </Title>
            </Container>
            <ProfileCard />
        </Strapline>
    )
}

export default Header
