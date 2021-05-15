import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { H1, H2 } from '../../components/UI/headings.styled';
import { P } from '../../components/UI/text.styled';
import styled from 'styled-components';
import { DesktopDisplay, MobileDisplay} from '../../components/UI/containers.styled';

const Logo = styled.div`
    width: 200px;
    height: auto;
    display: block;
    margin: 2em auto;

    @media (min-width: 600px){
        width: 200px;
        height: auto;
        float: right;
        display: block;
        margin: 3em 3em 0 0;
    }
`
const Title = styled.div`
    display: inline-block;
    padding: 2em;
    padding-top: 0;

    & h1 {
        margin-top: 0;
    }

    @media (max-width: 600px){
        padding: 1em;
    }
`

const Container = styled.section`
    max-width: 100%;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`




const Intro = props => {
    if (props.mobile){
        return (
        <MobileDisplay>
            <Container>
                    <Logo>
                        <StaticImage
                            src="../../images/small_logo.png"
                            alt="The Execution Stack - a stack of isles with waterfalls"
                            placeholder="blurred"
                            fullWidth
                        />
                    </Logo>
                    <Title>
                        <H1>A visual javascript mental model</H1>
                        <DesktopDisplay>
                        <P>Using the power of your imagination to build a visual and memorable understanding of javascript, to help you read, comprehend and ultimately build programs.</P>
                        </DesktopDisplay>
                    </Title>
            </Container>
        </MobileDisplay>
        )
    }
    else {
        return (
            <Container>
                <DesktopDisplay>
                    <Logo>
                        <StaticImage
                            src="../../images/small_logo.png"
                            alt="The Execution Stack - a stack of isles with waterfalls"
                            placeholder="blurred"
                            fullWidth
                        />
                    </Logo>
                </DesktopDisplay>
                <Title>
                    <DesktopDisplay>
                        <H1>A visual javascript mental model</H1>
                    </DesktopDisplay>
                    <MobileDisplay>
                        <H2> Build a foundation</H2>
                    </MobileDisplay>
                    <P>Using the power of your imagination to build a visual and memorable understanding of javascript, to help you read, comprehend and ultimately build programs.</P>
                </Title>
            </Container>
        )
    }
}

export default Intro;
