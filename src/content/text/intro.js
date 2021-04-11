import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { H1, H2 } from '../../components/UI/headings.styled';
import { P } from '../../components/UI/text.styled';
import Img from 'gatsby-image';
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
    console.log(props.mobile)
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: { eq: "small_logo.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `);
    if (props.mobile){
        return (
        <MobileDisplay>
            <Container>
                    <Logo>
                        <Img fluid={data.file.childImageSharp.fluid} alt="Code Imagined" />
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
                        <Img fluid={data.file.childImageSharp.fluid} alt="Code Imagined" />
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
