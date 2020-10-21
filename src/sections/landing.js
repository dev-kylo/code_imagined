import React from 'react';
import { H1 } from '../styled/headings';
import { P } from '../styled/text';
import { Fullscreen } from '../styled/containers';
import { Grid2, GridCol1, GridCol2 } from '../styled/grids';
import ECstack from '../images/ec_stack.svg';
import styled from 'styled-components';

const SvgContainer = styled.div`
    width: 100%;

    & svg {
        width: 100%;
        max-height: 130vh;
    }

    @media (max-width: 900px){
        & svg {
            width: 100%;
            max-height: 70vh;
        }
    }
`



const Landing = () => {
    return (
        <Fullscreen>
            <Grid2 col1size="0.55fr" col2size="0.45fr">
                <GridCol1> 
                    <SvgContainer>
                        <ECstack></ECstack>
                    </SvgContainer>
                </GridCol1>
                <GridCol2>
                    <H1>A visual javascript mental model</H1>
                    {/* <H2>Find javascript difficult? Need to fully grasp the fundamentals? Use the power of your imagination.</H2> */}
                    <P>Using the power of your imagination to build a strong, memorable foundation in javascript, using story, characters and imagery.</P>
                </GridCol2>
            </Grid2>
        </Fullscreen>
    )
}

export default Landing;