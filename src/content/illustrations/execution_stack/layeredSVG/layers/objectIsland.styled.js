import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';


const ObjectI = styled.div`
    position: absolute;
    bottom: 30%;
    left: 55%;
    transform: rotate(20deg);
    z-index: 2000;
    width: 25%;
`

const ObjectIsland = () => {
const obj = useStaticQuery(graphql`
query objectIsland {
    file(relativePath: { eq: "Object_island.png" }) {
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
    <ObjectI>
        <Img fluid={obj.file.childImageSharp.fluid} alt="Code Imagined" />
    </ObjectI>
)
}

export default ObjectIsland;