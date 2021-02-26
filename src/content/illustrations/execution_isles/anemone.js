import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';

const Anemone = styled.div`
    position: absolute;
    bottom: 57%;
    left: 21%;
    z-index: 2000;
    width: 7%;
`

export const AnemoneIsland = () => {
    const anem = useStaticQuery(graphql`
    query anemoneIsland {
        file(relativePath: { eq: "anem.png" }) {
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
        <Anemone>
            <Img fluid={anem.file.childImageSharp.fluid} alt="Code Imagined" />
        </Anemone>
    )
}

export default AnemoneIsland;