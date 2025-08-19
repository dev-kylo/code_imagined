import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { H1 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'
import { StyledElementsContainer } from '../../../components/layout/containers/styledElementsContainer'
import { Button } from '../../../components/UI/button.styled'
import { SignupContext } from '../../../context/toggle'

const Container = styled.div`
    background: white;
    margin: 0px auto 2rem auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 900px;
    border-radius: 10px;

    @media (min-width: 768px) {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    .btn-cta {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }
`

export const BurningProblem = () => {
    const showSignUp = useContext(SignupContext).show
    return (
        <Container>
            <StyledElementsContainer styled={{ margin: 'auto' }}>
                <P style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)' }}>
                        Introducing...
                    </Highlight>
                </P>
                <H1 style={{ paddingBottom: 0 }}>The Great Sync JavaScript Mental Model</H1>

                <div className="diagram">
                    <StaticImage
                        src="../../../images/model-diagram.png"
                        alt="A model of The Great Sync - imagine & apply"
                        placeholder="blurred"
                        objectFit="fill"
                    />
                </div>
                <P style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)' }}>
                        Does this sound familiar?
                    </Highlight>
                </P>

                <P>
                    Your journey into web development was going well... until you realized you STILL can't write
                    JavaScript. 😒
                </P>
                <ul className="">
                    <P as="li" className="">
                        I have no idea what I'm doing...
                    </P>
                    <P as="li" className="">
                        I still blindly copy-paste...
                    </P>
                    <P as="li" className="">
                        I can&lsquo;t build anything without a tutorial...
                    </P>
                    <P as="li" className="">
                        Maybe this isn&lsquo;t for someone like me...
                    </P>
                </ul>
                <P>If you have thoughts like these, you're not alone. </P>
                <P style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)' }}>
                        Now, imagine this...
                    </Highlight>
                </P>
                <P>You sit down to coding your own web application.</P>
                <P>
                    {' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        You don't open chatGPT.
                    </Highlight>{' '}
                    You might later, of course. But only to make you faster.
                </P>
                <P>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        You don't look for step-by-step instructions{' '}
                    </Highlight>{' '}
                    from youtube. You might later, of course, but it's an aid, not a lifeline.
                </P>
                <P>
                    You're 100% certain you can figure it out. Your fundamentals are rock solid. You're confident you
                    can build anything you want.
                </P>

                <P> It doesn't matter if it's React, a new web API, or Open AI.</P>

                <P>
                    In your mind, you can picture a{' '}
                    <Highlight
                        color="blue"
                        style={{
                            fontFamily: '"Passion One", serif',
                            fontSize: '1.5rem',
                            color: 'rgb(14, 52, 160)',
                            fontWeight: 'bold',
                        }}
                    >
                        3D model of JavaScript{' '}
                    </Highlight>{' '}
                    - your very own knowledge tree 🌳 of everything you've learned.
                </P>

                <P>
                    It's part of the <Link to="/courses/3-steps-to-confidence">"See, Build & Peg"</Link> learning
                    system, which helps you continually grow your expertise, and BUILD ANYTHING YOU WANT.
                </P>
                <div className="btn-cta">
                    <Button color="yellow" clicked={showSignUp}>
                        Get The Free Guide & Roadmap
                    </Button>
                </div>
            </StyledElementsContainer>
        </Container>
    )
}

export default BurningProblem
