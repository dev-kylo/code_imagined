import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const ImageContainer = styled.div`
    width: 100%; 
    max-width: 1000px;
    margin: auto;
    height: auto;
    margin: 2rem 0;
    img {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
`

const Img = ({gatsbyImageData, altText}) => (
    <ImageContainer>
        <GatsbyImage image={gatsbyImageData} alt={altText || ''} />
    </ImageContainer>
);

export default Img;