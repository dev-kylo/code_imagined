import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { H1 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Highlight } from '../../../components/UI/highlight'
import { StyledElementsContainer } from '../../../components/layout/containers/styledElementsContainer'

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
`

export const BurningProblem = () => {
    return (
        <Container>
            <StyledElementsContainer styled={{ margin: 'auto' }}>
                <P style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)' }}>
                        Introducing...
                    </Highlight>
                </P>
                <H1>The Great Sync JavaScript Mental Model</H1>

                <P>
                    Your journey into web development was going well... until you started learning JavaScript. Does this
                    sound familiar?
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
                <P>If it does, you're not alone...</P>
                <P style={{ fontFamily: '"Passion One", serif', fontSize: '2rem' }}>
                    <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)' }}>
                        Now, imagine this...
                    </Highlight>
                </P>
                <P>
                    You're about to start coding an exciting new project. You don't need a tutorial or step by step
                    industructions.
                </P>
                <P>You're confident you can figure it out. Your fundamentals are rock solid.</P>

                <P> It doesn't matter if it's React, a new web API, or old-school jquery.</P>

                <P>
                    {' '}
                    In your mind, you can picture a 3D model of JavaScript - your very own knowledge tree of everything
                    you've learned, stored in a fictional realm called The Great Sync.{' '}
                </P>

                <P>
                    It's part of the <Link to="/courses/">"See, Build & Peg"</Link> learning system, which helps you
                    continually grow your expertise, and BUILD ANYTHING YOU WANT.
                </P>
                <div className="diagram">
                    <StaticImage
                        src="../../../images/model-diagram.png"
                        alt="A model of The Great Sync - imagine & apply"
                        placeholder="blurred"
                        objectFit="fill"
                    />
                </div>
            </StyledElementsContainer>
        </Container>
    )
}

export default BurningProblem
