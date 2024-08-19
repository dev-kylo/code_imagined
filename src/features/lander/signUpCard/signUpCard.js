import React from 'react'
import styled from 'styled-components'
import SignUp from '../../signup/signup'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    min-height: 200px;
    width: 100%;
    z-index: 20000;
    background: ${props => props.theme.colors.navy};
    margin: 0;
    padding-bottom: 1.8rem;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        img {
            max-height: 300px;
        }
    }
`

const Canvas = styled.div`
    color: black !important;
    texta-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
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

const SignupWrapper = styled.div`
    width: 100%;

    // label,
    // h2,
    // p,
    // span {
    //     color: white;
    // }
`

const SignUpCard = () => (
    <Card>
        <Canvas>
            <H2 as="span" style={{ margin: 0, padding: 0, fontSize: '2rem' }} color="pink">
                FREE ACCESS:
            </H2>
            <H2 style={{ color: 'white' }}> Learn the system that powers The Great Sync </H2>
            <P style={{ color: 'white' }}>
                The learning system that will help you become a confident JavaScript developer in 3 steps:{' '}
                <Highlight color="pink">See, Build, & Peg.</Highlight>
            </P>
            <P style={{ color: 'white', marginBottom: '1.5rem' }}>
                <Highlight bgColor="blue" style={{ color: 'white' }}>
                    Also included:{' '}
                </Highlight>
                A 2024 Roadmap to JavaScript Developer PDF
            </P>
            <SignupWrapper>
                <SignUp layout="plain" submitBtnText="Get The 3 Steps To Confidence" noLastName />
            </SignupWrapper>
        </Canvas>
        <div />
    </Card>
)

export default SignUpCard
