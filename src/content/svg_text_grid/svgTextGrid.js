import React from "react";
import {LandingGrid, GridArea} from '../../components/grid/grids.styled';
import ExecutionStack from '../illustrations/execution_stack/executionStack';
import GeniePrototype from '../illustrations/prototype_genie/prototypeGenie';
import Invocation from '../illustrations/invocation/Invocation';
import RainIsland from '../illustrations/rain_island/rainIsland';
import RockIsland from '../illustrations/rock_island/rockIsland';
import Intro from '../text/intro';
import Learn from '../text/learn';
import Difficult from '../text/difficult';
import Model from '../text/model';
import Knowledge from '../text/knowledge';
// import Popup from '../styled/popup';

const SvgTextGrid = () => {
  return (
        <LandingGrid>
          <GridArea name="svg1" color="#01140F">
            {/* <Popup></Popup> */}
            <ExecutionStack />
            <Intro mobile />
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
        </LandingGrid>
  )
}

export default SvgTextGrid;