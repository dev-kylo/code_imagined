
import React from 'react';
import styled from 'styled-components';

import { StaticImage } from "gatsby-plugin-image"

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

    @media (orientation: landscape) and (max-width: 600px){
        width: 150px;
    }
`

const Argonauts = () => {

    return (
        <Container>
            <StaticImage
                src="../../../images/Argonauts.png"
                alt="The Execution Stack - a stack of isles with waterfalls"
                placeholder="tracedSVG"
                fullWidth
        />
        </Container>
    )
}

export default Argonauts;