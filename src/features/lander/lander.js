import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Reveal, { Zoom } from 'react-awesome-reveal'
import { LandingGrid, GridArea } from './grids.styled'
import Intro from './textBlocks/intro'
import Learn from './textBlocks/learn'
import Difficult from './textBlocks/difficult'
import Model from './textBlocks/model'
import Knowledge from './textBlocks/knowledge'
import { Sphere } from './imageBlocks/sphere/sphere'
import Invocation from './imageBlocks/invocation/Invocation'
import RainIsland from './imageBlocks/rain_island/rainIsland'
import DarkLord from './imageBlocks/operator/the_dark_lord'
import Header2 from './header2'
import ProfileCard from './profileCard/profileCard'
import SignUpCard from './signUpCard/signUpCard'
import BurningProblemCard from './profileCard/burningProblem'
import ContextIsland from './imageBlocks/contextIsland/contextIsland'
import ControllerShips from './imageBlocks/controllerShips/controllerShips'

const StyledBlock = styled.div`
    width: 100%;
    height: 4rem;
    background: rgb(4, 20, 64);
    position: absolute;
`

const Label = styled.div`
    position: absolute;
    right: 0px;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 89%;
`

const Lander = () => {
    return (
        <>
            <Header2 />

            <ProfileCard />
            <LandingGrid>
                <GridArea name="svg1" color="#01140F">
                    <ContextIsland />
                    <Label>
                        <Intro mobile />
                    </Label>
                </GridArea>
                <GridArea name="svg1_text" color="#041440">
                    {/* <DesktopDisplay> */}

                    <Intro />

                    {/* </DesktopDisplay> */}
                </GridArea>
                <GridArea name="svg2" color="#008578">
                    <DarkLord />
                </GridArea>
                <GridArea name="svg2_text" color="#5F5980">
                    <Zoom>
                        <Learn />
                    </Zoom>
                </GridArea>
                <GridArea name="svg3" color="pink">
                    <Invocation />
                </GridArea>
                <GridArea name="svg3_text" color="#AB3428">
                    <Zoom>
                        <Difficult />
                    </Zoom>
                </GridArea>
                <GridArea name="svg4" color="#01140F">
                    <RainIsland />
                </GridArea>
                <GridArea name="svg4_text" color="#0E34A0">
                    <Zoom>
                        <Model />
                    </Zoom>
                </GridArea>
                <GridArea name="svg5" color="#5F5980">
                    <ControllerShips />
                </GridArea>
                <GridArea name="svg5_text" color="#008578">
                    <Zoom>
                        <Knowledge />
                    </Zoom>
                </GridArea>
            </LandingGrid>
            <SignUpCard />
        </>
    )
}

export default Lander
