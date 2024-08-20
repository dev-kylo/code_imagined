import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'

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
    transition: transform 0.5s ease-in-out;

    a:hover {
        transform: scale(1.05);
    }
`

const FeaturedTitle = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 0.5rem 2rem;
    background: ${({ theme }) => theme.colors.navy};
    font-family: ${props => props.theme.fonts.heading1};
    font-size: 1.8rem;
    z-index: 1000;
`

const ProfileCard = () => (
    <Card>
        <ProfileLogos>
            <ProfileImageContainer>
                <StaticImage src="../../../images/Kylo.jpg" alt="Profile picture of Kylo" placeholder="blurred" />
            </ProfileImageContainer>
            <Featured>
                <FeaturedTitle>Featured in</FeaturedTitle>
                <LogoContainer color="#9012fd">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.codenewbie.org/podcast/how-to-use-different-memory-techniques-to-learn-coding"
                    >
                        <StaticImage
                            src="../../../images/codenewbie.png"
                            alt="CodeNewbie logo"
                            placeholder="blurred"
                            objectFit="fill"
                            style={{ background: '#9012fd' }}
                        />
                    </a>
                </LogoContainer>
                <LogoContainer>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.smashingmagazine.com/2023/05/learning-javascript-with-imagination/"
                    >
                        <StaticImage
                            src="../../../images/SmashingMag.jpg"
                            alt="Smashing Magazine logo"
                            placeholder="blurred"
                            objectFit="fill"
                        />
                    </a>
                </LogoContainer>
            </Featured>
        </ProfileLogos>
        <Canvas>
            <H2 style={{ color: 'black', textAlign: 'center' }}>
                Are you <Highlight color="red">stuck & overwhelmed</Highlight>,
                <br /> with shaky fundamentals?
            </H2>
            <P style={{ color: 'black' }}> Hi, I'm Kylo 👋.</P>
            <P style={{ color: 'black' }}>
                I'm a <span style={{ color: 'red' }}>Break-Through JavaScript Coach</span>, and a full-time Senior
                Developer.{' '}
            </P>
            <P style={{ color: 'black' }}>
                I use proven effective learning methods to help you build a mental model of JavaScript fundamentals,
                giving you confidence to build your own projects.
            </P>
            <P style={{ color: 'black' }}>
                <Highlight color="white" bgColor="green" style={{ color: 'white', padding: '0.2rem 1rem' }}>
                    I call it The Great Sync.
                </Highlight>
            </P>
        </Canvas>
    </Card>
)

export default ProfileCard
