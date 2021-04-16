import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
    width: 420px;
    height: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 100;

    @media (max-width: 1100px){
        width: 300px;
    }

    @media (max-width: 800px){
        width: 250px;
        left: 45%;
    }
    @media (max-width: 500px){
        width: 200px;
    }
    @media (max-width: 350px){
        width: 150px;
    }
`

const Argonauts = () => {

    const arg = useStaticQuery(graphql`
    query argo{
        file(relativePath: { eq: "Argonauts.png" }) {
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
            <Img fluid={arg.file.childImageSharp.fluid} alt="Argonauts flying on a ship" />
        </Container>
    )
}

export default Argonauts;