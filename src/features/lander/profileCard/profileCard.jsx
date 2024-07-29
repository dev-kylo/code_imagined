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

        & > *:first-child {
            order: 2;
        }

        & > *:nth-child(2) {
            order: 1;
        }

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

const Featured = styled.div`
    height: 150px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: center;
    img {
        object-fit: cover;
        max-width: 100%;
        height: auto;
        vertical-align: center;
        padding: 0;
        margin: 0;
    }
`

const ProfileImageContainer = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.navy};
    z-index: 100;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ProfileLogos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const LogoContainer = styled.div`
    height: 100%;
    background: ${({ color }) => color || 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`

const ProfileCard = () => (
    <Card>
        <ProfileLogos>
            <ProfileImageContainer>
                <StaticImage src="../../../images/Kylo.jpg" alt="Profile picture of Kylo" placeholder="blurred" />
            </ProfileImageContainer>
            <Featured>
                <LogoContainer color="#9012fd">
                    <StaticImage
                        src="../../../images/codenewbie.png"
                        alt="CodeNewbie logo"
                        placeholder="blurred"
                        objectFit="fill"
                        style={{ background: '#9012fd' }}
                    />
                </LogoContainer>
                <LogoContainer>
                    <StaticImage
                        src="../../../images/SmashingMag.jpg"
                        alt="Smashing Magazine logo"
                        placeholder="blurred"
                        objectFit="fill"
                    />
                </LogoContainer>
            </Featured>
        </ProfileLogos>
        <Canvas>
            <H2 style={{ color: 'black' }}>Learn JavaScript the RIGHT way </H2>
            <P style={{ color: 'black' }}> Hi, I'm Kylo 👋.</P>
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
