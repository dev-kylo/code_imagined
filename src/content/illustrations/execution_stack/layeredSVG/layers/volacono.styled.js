import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Volcano = styled.div`
    position: absolute;
    bottom: 22%;
    left: 40%;
    width: 17%;
`

export const VolcanoIsland = () =>  (
        <Volcano>
            <StaticImage
                src="../../../../../images/volcano.png"
                alt="An island with a volcano on it, and a toilet"
                placeholder="tracedSVG"
                fullWidth
            />
        </Volcano>
)


export default VolcanoIsland;