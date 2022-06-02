import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image"


const ImageContainer = styled.div`
    width: 100%; 
    max-width: ${props => props.maxWidth? `${props.maxWidth}px`: '1000px'};
    height: auto;
    margin: 2rem auto;
    img {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
`

const Img = ({gatsbyImageData, altText, maxWidth}) => (
    <ImageContainer maxWidth={maxWidth}>
        <GatsbyImage image={gatsbyImageData} alt={altText || ''} />
    </ImageContainer>
);

export default Img;