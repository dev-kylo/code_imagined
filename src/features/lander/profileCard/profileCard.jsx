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
    margin-top: 2em;
    min-height: 300px;
    max-width: 800px;
`

const Canvas = styled.div`
    background: white;
    opacity: 0.7;
    color: black !important;
    texta-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    p {
        text-align: center;
        font-size: 1.2rem;
    }

    span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.paragraph};
    }
`

const ProfileCard = () => (
    <Card>
        <StaticImage src="../../../images/Kylo.jpg" alt="A devilish impish character" placeholder="blurred" />
        <Canvas>
            <H2 style={{ color: 'black' }}>Hi, I'm Kylo</H2>
            <P style={{ color: 'black' }}>
                I'm a <span>BreakThrough JavaScript Coach</span>, and a full-time Senior Developer.{' '}
            </P>
            <P style={{ color: 'black' }}>
                I use visual and mnemonic techniques to help you build a foundational mental model
            </P>
        </Canvas>
    </Card>
)

export default ProfileCard
