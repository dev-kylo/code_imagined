import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';



const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2em;

    & img {
        width: 100%;
        height: auto;
    }
`


const Fallback = props => {
    const eci = useStaticQuery(graphql`
    query ecifallback{
        file(relativePath: { eq: "outline_eci.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `);

    return (
        <Container>
            <Img fluid={eci.file.childImageSharp.fluid} alt="Stencil outline of the Execution Context illustration" />
        </Container>
    )
}

export default Fallback;