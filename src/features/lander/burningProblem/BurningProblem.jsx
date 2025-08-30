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
    max-width: 750px;
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

    ul li {
        font-size: 1.1rem;
    }
`

const HP = styled(P)`
    font-size: 1.1rem;
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

                <HP>
                    Your journey into web development was exciting... until you realized you STILL can't write
                    JavaScript. 😒
                </HP>
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
                        I lie to myself when I say I'm coding. AI does it all...
                    </P>
                </ul>
                <HP>
                    If you have thoughts like these, you're not alone - especially if your background is NOT in computer
                    science and you're learning on your own.
                </HP>
                <HP style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    Now, just for a minute, step into the mind of a senior web developer...
                </HP>
                <HP>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        Imagine{' '}
                    </Highlight>{' '}
                    what it would feel like to be a master of your craft.{' '}
                </HP>
                <HP>You sit down to work on a web application.</HP>
                <HP>
                    👉{' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        You don't open chatGPT.
                    </Highlight>{' '}
                    You might later, of course. But only to make you faster.
                </HP>
                <HP>
                    👉{' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        You don't look for step-by-step instructions{' '}
                    </Highlight>{' '}
                    from youtube. You might later, of course, but it's an aid, not a lifeline.
                </HP>
                <HP>
                    👉 You're 100% certain you can figure it out.{' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        Your fundamentals are rock solid
                    </Highlight>
                    . You're confident you can build anything.
                </HP>

                <HP>
                    In your mind, you can picture a{' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        model of JavaScript{' '}
                    </Highlight>{' '}
                    - your very own knowledge tree 🌳 of everything you've learned. It helps you connect the dots,
                    recognize patterns and see the big picture.
                </HP>

                <HP>
                    Of course, a senior developer doesn't consciously imagine anything. They don't need a way of
                    visualizing or recalling their knowledge, because it's firmly part of their mental model.
                </HP>
                <HP>But guaranteed, it wasn't always that way. It certainly wasn't for me...</HP>
                <HP>
                    It can take a reeeealllly long time to build that mental model. There is always SO much to learn, SO
                    much to remember and apply - leaving you feeling overwhelmed and stuck.
                </HP>
                <HP>The Great Sync helps you consolidate and build ontop of what you already know.</HP>
                <HP>
                    It's an imagined construct of your JavaScript knowledge, which can branch out and continue to grow
                    in any direction, giving you that foundation which{' '}
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                        {' '}
                        one day turns you into a senior developer.{' '}
                    </Highlight>
                </HP>
                <div className="btn-cta">
                    <Button color="yellow" clicked={showSignUp}>
                        Learn how it works
                    </Button>
                </div>
            </StyledElementsContainer>
        </Container>
    )
}

export default BurningProblem
