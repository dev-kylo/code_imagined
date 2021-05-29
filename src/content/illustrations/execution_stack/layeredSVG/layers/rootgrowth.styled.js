import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const RootContainer = styled.div`
    position: absolute;
    bottom: 13.5%;
    right: 12%;
    z-index: 2000;
    width: 8%;
`

export const RootGrowth = () =>  (
        <RootContainer>
            <StaticImage
                src="../../../../../images/root.png"
                alt="A tree root"
                placeholder="tracedSVG"
                fullWidth
            />
        </RootContainer>
)


export default RootGrowth;