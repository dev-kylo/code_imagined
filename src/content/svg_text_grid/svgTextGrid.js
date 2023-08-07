import React, { lazy } from "react";

import { LandingGrid, GridArea } from '../../components/grid/grids.styled';
import Intro from '../text/intro';
import Learn from '../text/learn';
import Difficult from '../text/difficult';
import Model from '../text/model';
import Knowledge from '../text/knowledge';
import GeniePrototype from '../illustrations/prototype_genie/prototypeGenie';
import { Sphere } from "../illustrations/sphere/sphere";
import { StaticImage } from "gatsby-plugin-image";

const Invocation = lazy(() => import( '../illustrations/invocation/Invocation'));
const RainIsland = lazy(() => import( '../illustrations/rain_island/rainIsland'));



const SvgTextGrid = () => {
  const isSSR = typeof window === "undefined"
  return (
        <LandingGrid>
          <GridArea name="svg1" color="#01140F" >
              {/* <ExecutionStack /> */}
            
              <StaticImage
                    src="https://res.cloudinary.com/the-great-sync/image/upload/v1686771432/3000x2000/EC_sdbbpu.png"
                    alt="Mage Funk sorceress character with an invocation orb"
                    placeholder="blurred"
                    fullWidth
                />
           
              <div style={{position: 'absolute', right: 0, bottom: '50%'}}>
                <Intro mobile />
              </div>


          </GridArea>
          <GridArea  name="svg1_text" color="#041440">
            <Intro />
          </GridArea>
            <GridArea  name="svg2" color="#008578">
              <GeniePrototype />
            </GridArea>
            <GridArea  name="svg2_text" color="#5F5980">
              <Learn />
            </GridArea>
            <GridArea  name="svg3" color="pink">
            {!isSSR && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Invocation />
              </React.Suspense>
            )}
            </GridArea>
            <GridArea  name="svg3_text" color="#AB3428">
              <Difficult />
            </GridArea>
            <GridArea  name="svg4" color="#01140F">
            {!isSSR && (
             <React.Suspense fallback={<div>Loading...</div>}>
                <RainIsland />
             </React.Suspense>
            )}
            </GridArea>
            <GridArea  name="svg4_text" color="#0E34A0">
              <Model />
            </GridArea>
            <GridArea  name="svg5" color="#5F5980">
                <Sphere />
            </GridArea>
            <GridArea  name="svg5_text" color="#008578">
              <Knowledge />
            </GridArea>
        </LandingGrid>
  )
}

export default SvgTextGrid;