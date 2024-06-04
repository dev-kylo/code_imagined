import React from 'react'
import styled from 'styled-components'
import { H1 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { DesktopDisplay, MobileDisplay } from '../../../components/layout/containers/containers.styled'
import SignUp from '../../signup/signup'

export const Title = styled.div`
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

const SignupWrapper = styled.div`
    label,
    h2,
    p,
    span {
        color: white;
    }
`

const LanderSignUp = () => (
    <>
        <H1 style={{ textAlign: 'center' }}>The Great Sync JavaScript Mental Model</H1>
        <P style={{ maxWidth: '600px', textAlign: 'center', margin: '1rem auto', color: 'white' }}>
            <span style={{ color: 'pink', fontWeight: 'bold' }}> Are you worried your fundamentals are lacking? </span>
            Sign up for a free resource: A Visual Deep Dive Into JavaScript Objects.
        </P>
        <SignupWrapper>
            <SignUp layout="plain" borderless submitBtnText="Gain Access" noLastName />
        </SignupWrapper>
    </>
)

const Intro = ({ mobile }) => {
    if (mobile) {
        return (
            <MobileDisplay>
                <Container>
                    <Title>
                        <LanderSignUp />
                    </Title>
                </Container>
            </MobileDisplay>
        )
    }
    return (
        <Container mobileView>
            <Title>
                <DesktopDisplay>
                    <LanderSignUp />
                </DesktopDisplay>
            </Title>
        </Container>
    )
}

export default Intro
