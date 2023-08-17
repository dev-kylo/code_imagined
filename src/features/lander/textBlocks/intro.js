import React, { useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { H1, H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { DesktopDisplay, MobileDisplay } from '../../../components/layout/containers/containers.styled'
import { SignupContext } from '../../../context/toggle'
import { Button } from '../../../components/UI/button.styled'

const Logo = styled.div`
    width: 160px;
    height: auto;
    display: block;
    margin: 2em auto;

    @media (min-width: 600px) {
        width: 180px;
        height: auto;
        float: right;
        display: block;
        margin: 3em 3em 0 0;
    }
`
export const Title = styled.div`
    display: inline-block;
    padding: 0.5em;
    padding-top: 0;
    z-index: 100;
    h1 {
        margin-top: 0;
        font-size: 4rem;
    }

    @media (min-width: 600px) {
        padding: 2em;
        font-size: 1rem;

        h1 {
            font-size: 3rem;
        }
        // padding-top: 1em;
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

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const SubHeading = styled(H2)`
    display: block;
    margin-top: 1rem;
    font-size: 2rem !important;
    color: white;
    text-align: center;
    line-height: 35px;
    max-width: 600px;

    @media (min-width: 780px) {
        font-size: 1.5rem;
    }
`

const Intro = props => {
    const showSignUp = useContext(SignupContext).show

    if (props.mobile) {
        return (
            <MobileDisplay>
                <Container>
                    <Logo>
                        <StaticImage
                            src="../../../images/small_logo.png"
                            alt="The Great Sync logo"
                            placeholder="blurred"
                            fullWidth
                        />
                    </Logo>
                    <Title>
                        {/* <H1>The Great Sync <SubHeading>- visual & memorable JavaScript</SubHeading></H1> */}
                        <H1 style={{ textAlign: 'center' }}>Frustrated with JavaScript?</H1>

                        {/* <Flex justifyContent="center">
                            <Button center clicked={showSignUp}>Sign up for a free taster</Button>
                        </Flex> */}
                    </Title>
                </Container>
            </MobileDisplay>
        )
    }
    return (
        <Container>
            <Title>
                <DesktopDisplay>
                    <H1 style={{ textAlign: 'center' }}>Learn JavaScript Visually & Memorably</H1>
                    {/* <SubHeading>
                        A visual and mnemonic approach can help you gain confidence and see the big picture.
                    </SubHeading>
                    <P style={{ maxWidth: '600px', textAlign: 'center', margin: '1rem auto' }} /> */}
                </DesktopDisplay>

                <MobileDisplay>
                    <H2> Build a foundation</H2>
                </MobileDisplay>
                <P style={{ maxWidth: '600px', textAlign: 'center', margin: '1rem auto' }}>
                    The Great Sync's visual and mnemonic approach to learning helps you gain confidence, recognize
                    patterns and see the big picture.
                </P>

                <Flex justifyContent="center">
                    <Button center clicked={showSignUp}>
                        Sign up for a free taster
                    </Button>
                </Flex>
            </Title>
        </Container>
    )
}

export default Intro
