import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { H1, H2 } from '../../components/UI/headings.styled';
import { P } from '../../components/UI/text.styled';
import styled from 'styled-components';
import { DesktopDisplay, MobileDisplay} from '../../components/UI/containers.styled';

const Logo = styled.div`
    width: 160px;
    height: auto;
    display: block;
    margin: 2em auto;

    @media (min-width: 600px){
        width: 180px;
        height: auto;
        float: right;
        display: block;
        margin: 3em 3em 0 0;
    }
`
const Title = styled.div`
    display: inline-block;
    padding: 1em;
    padding-top: 0;
    z-index: 100;
    & h1 {
        margin-top: 0;
    }

    @media(min-width: 600px){
        padding: 2em;
        // padding-top: 1em;
    }

    @media (min-width: 1500px){
        padding: 4em;
    }


    @media (min-width: 1800px){
        padding: 6em;
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
                        <H1>The Great Sync Javascript Mental Model</H1>
                        <DesktopDisplay>
                        <P>Can you build a React app but still find javascript hard? Use your imagination to build a mental model of javascript fundamentals.</P>
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
                        <H1>The Great Sync Javascript Mental Model</H1>
                    </DesktopDisplay>
                    <MobileDisplay>
                        <H2> Build a foundation</H2>
                    </MobileDisplay>
                    <P>Can you build a React app but still find javascript hard? Use your imagination to build a mental model of javascript fundamentals.</P>
                </Title>
            </Container>
        )
    }
}

export default Intro;
