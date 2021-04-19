import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Anemone = styled.div`
    position: absolute;
    bottom: 57%;
    left: 21%;
    z-index: 2000;
    width: 7%;
`

export const AnemoneIsland = () =>  (
        <Anemone>
        <StaticImage
            src="../../../../../images/anem.png"
            alt="The Execution Stack - a stack of isles with waterfalls"
            placeholder="tracedSVG"
            fullWidth
        />
        </Anemone>
)


export default AnemoneIsland;