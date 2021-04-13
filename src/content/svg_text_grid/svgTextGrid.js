import React, { lazy } from "react";


import { LandingGrid, GridArea } from '../../components/grid/grids.styled';
import Intro from '../text/intro';
const ExecutionStack =  lazy(() => import('../illustrations/execution_stack/executionStack'));
const GeniePrototype = lazy(() => import('../illustrations/prototype_genie/prototypeGenie'));
const Invocation = lazy(() => import( '../illustrations/invocation/Invocation'));
const RainIsland = lazy(() => import( '../illustrations/rain_island/rainIsland'));
const RockIsland = lazy(() => import('../illustrations/rock_island/rockIsland'));
const Learn =lazy(() => import('../text/learn'));
const  Difficult = lazy(() => import('../text/difficult'));
const  Model = lazy(() => import('../text/model'));
const  Knowledge = lazy(() => import('../text/knowledge'));

const SvgTextGrid = () => {
  return (
        <LandingGrid>
          <GridArea name="svg1" color="#01140F">
            <React.Suspense fallback={<div>Loading...</div>}>
              <ExecutionStack />
            </React.Suspense>
            <Intro mobile />
          </GridArea>
          <GridArea  name="svg1_text" color="#041440">
            <Intro />
          </GridArea>
          <React.Suspense fallback={<div>Loading...</div>}>
            <GridArea  name="svg2" color="#008578">
              <GeniePrototype />
            </GridArea>
            <GridArea  name="svg2_text" color="#5F5980">
              <Learn />
            </GridArea>
            <GridArea  name="svg3" color="pink">
              <Invocation />
            </GridArea>
            <GridArea  name="svg3_text" color="#AB3428">
              <Difficult />
            </GridArea>
            <GridArea  name="svg4" color="#01140F">
              <RainIsland />
            </GridArea>
            <GridArea  name="svg4_text" color="#0E34A0">
              <Model />
            </GridArea>
            <GridArea  name="svg5" color="#5F5980">
              <RockIsland />
            </GridArea>
            <GridArea  name="svg5_text" color="#008578">
              <Knowledge />
            </GridArea>
          </React.Suspense>
        </LandingGrid>
  )
}

export default SvgTextGrid;