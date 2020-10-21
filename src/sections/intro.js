import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { H1 } from '../styled/headings';
import { P } from '../styled/text';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Logo = styled.div`
    width: 200px;
    height: auto;
    float: right;
    display: block;
    margin: 3em 3em 0 0;
`
const Title = styled.div`
    display: inline-block;
    padding: 2em;
    padding-top: 0;

    & h1 {
        margin-top: 0;
    }
`

const Container = styled.section`
    max-width: 100%;
`




const Intro = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    return (
        <Container>
            <Logo>
                <Img fluid={data.file.childImageSharp.fluid} alt="Code Imagined" />
            </Logo>
            <Title>
                <H1>A visual javascript mental model</H1>
                <P>Using the power of your imagination to build a strong, memorable foundation in javascript, using story, characters and the wonders of new worlds.</P>
            </Title>
        </Container>
    )
}

export default Intro;
