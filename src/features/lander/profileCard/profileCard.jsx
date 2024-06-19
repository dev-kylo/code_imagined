import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
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

const ProfileCard = () => (
    <Card>
        <StaticImage src="../../../images/Kylo.jpg" alt="Profile picture of Kylo" placeholder="blurred" />
        <Canvas>
            <H2 style={{ color: 'black' }}>Hi, I'm Kylo</H2>
            <P style={{ color: 'black' }}>
                I'm a <span style={{ color: 'red' }}>Break-Through JavaScript Coach</span>, and a full-time Senior
                Developer.{' '}
            </P>
            <P style={{ color: 'black' }}>
                I use proven effective learning methods to help you build a mental model of JavaScript fundamentals.
            </P>
            <P style={{ color: 'black' }}>I call it The Great Sync.</P>
        </Canvas>
    </Card>
)

export default ProfileCard
