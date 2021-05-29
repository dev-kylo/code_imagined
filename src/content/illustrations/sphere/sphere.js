import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const SphereContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 21%;
    z-index: 2000;
    width: 65%;
`

export const Sphere = () =>  (
        <SphereContainer>
            <StaticImage
                src="../../../images/sphere.png"
                alt="A sphere containing an in ocean with some islands, and a submarine hovering over."
                placeholder="tracedSVG"
                fullWidth
            />
        </SphereContainer>
)


export default Sphere;