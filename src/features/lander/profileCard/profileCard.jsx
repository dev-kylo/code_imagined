import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'
import { StyledElementsContainer } from '../../../components/layout/containers/styledElementsContainer'

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 20000;
    background: white;

    @media (max-width: 600px) {
        margin: auto 1rem;
        grid-template-columns: 1fr;

        & > *:first-child {
            order: 2;
        }

        & > *:nth-child(2) {
            order: 1;
        }
    }
`

const Canvas = styled.div`
    background: white;
    color: black !important;
    texta-align: center
    align-items: center;
    background: white;
    z-index: 10;
`

const Featured = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: center;
    @media (min-width: 600px) and (max-width: 1000px) {
        height: 30%;
    }
    img {
        object-fit: fill;
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
    position: relative;
    overflow: hidden;
    height: 250px;
    img {
        position: absolute;
        top: 0;
        left: 0;
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
    font-size: 1.6rem;
    z-index: 1000;

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`

const ProfileCard = () => (
    <Card>
        <ProfileLogos>
            <ProfileImageContainer>
                <img
                    loading="lazy"
                    src="https://thegreatsync.com/static/60fc702521f3e0c3c2ea0b0df8a1ac39/31641/Kylo.webp"
                    alt=""
                />
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
            <StyledElementsContainer style={{ maxWidth: '700px', margin: 'auto' }}>
                <H2 style={{ color: 'black', textAlign: 'center' }}>
                    Hi, I'm<Highlight color="red"> Kylo</Highlight>!
                </H2>

                <P style={{ color: 'black' }}>
                    I am a senior JavaScript developer and coach. That said, I am not a guru. I have not worked for
                    Google.
                </P>
                <P style={{ color: 'black' }}>
                    I'm someone who once career-transitioned and needed a way to 'level up' in JavaScript. I focussed on
                    the fundamentals, learnt the patterns, and applied them to projects.
                </P>
                <P style={{ color: 'black' }}> I have helped hundreds of students do the same.</P>
                <P style={{ color: 'black' }}>
                    If you're trying to{' '}
                    <Highlight color="white" bgColor="navy" style={{ color: 'white', padding: '0.2rem 0.5rem' }}>
                        {' '}
                        break through and gain confidence{' '}
                    </Highlight>
                    with JavaScript, I can help you!
                </P>

                {/* <P style={{ color: 'black' }}> Hi, I'm Kylo 👋.</P>
            <P style={{ color: 'black' }}>
                I'm a <span style={{ color: 'red' }}>Break-Through JavaScript Coach</span>, and a full-time Senior
                Developer.{' '}
            </P>
            <P style={{ color: 'black' }}>If you find yourself stuck and frustrated, I can help you! </P>
            <ul role="list" className="mt-6 text-gray-600">
                <P as="li">
                    <span>
                        <strong className="font-semibold text-gray-900 ">Even if...</strong> you struggle to code
                        without a tutorial.
                    </span>
                </P>
                <P as="li">
                    <span>
                        <strong className="font-semibold text-gray-900">Even if...</strong> you are career transitioning
                        and only have limited time.
                    </span>
                </P>
                <P as="li">
                    <span>
                        <strong className="font-semibold text-gray-900">Even if....</strong> you have been completely
                        stuck for months.
                    </span>
                </P>
            </ul>
            <P style={{ color: 'black' }}>
                I coach a learning system that will give you the confidence to be a professional JavaScript developer.
            </P>
            <P style={{ color: 'black' }}>
                <Highlight color="white" bgColor="green" style={{ color: 'white', padding: '0.2rem 1rem' }}>
                    I call it The Great Sync.
                </Highlight>
            </P> */}
            </StyledElementsContainer>
        </Canvas>
    </Card>
)

export default ProfileCard
