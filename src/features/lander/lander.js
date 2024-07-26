import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
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
            <BurningProblemCard />
            <ProfileCard />
            <LandingGrid>
                <GridArea name="svg1" color="#01140F">
                    <StyledBlock />
                    <StaticImage
                        src="https://res.cloudinary.com/the-great-sync/image/upload/v1686771432/3000x2000/EC_sdbbpu.png"
                        alt="Mage Funk sorceress character with an invocation orb"
                        placeholder="blurred"
                    />
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
                    <Learn />
                </GridArea>
                <GridArea name="svg3" color="pink">
                    <Invocation />
                </GridArea>
                <GridArea name="svg3_text" color="#AB3428">
                    <Difficult />
                </GridArea>
                <GridArea name="svg4" color="#01140F">
                    <RainIsland />
                </GridArea>
                <GridArea name="svg4_text" color="#0E34A0">
                    <Model />
                </GridArea>
                <GridArea name="svg5" color="#5F5980">
                    <Sphere />
                </GridArea>
                <GridArea name="svg5_text" color="#008578">
                    <Knowledge />
                </GridArea>
            </LandingGrid>
            <SignUpCard />
        </>
    )
}

export default Lander
