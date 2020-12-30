import React from "react";
import SEO from '../layout/seo';
import Layout from '../layout/layout';
import { theme } from '../layout/theme';
import { ThemeProvider } from 'styled-components';
import Explainer from '../sections/explainer';
import {LandingGrid, GridArea} from '../styled/grids';
import ExecutionStack from '../animations/execution_stack';
import Prototype from '../animations/prototype';
import Orb from '../animations/orb';
import StringIsland from '../animations/string';
import ObjectIsland from '../animations/object_island';
import Intro from '../sections/intro';
import Learn from '../sections/learn';
import Difficult from '../sections/difficult';
import Model from '../sections/model';
import Knowledge from '../sections/knowledge';
// import Popup from '../styled/popup';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <Layout >
        <LandingGrid>
          <GridArea name="svg1" color="#01140F">
            {/* <Popup></Popup> */}
            <ExecutionStack />
            <Intro mobile />
          </GridArea>
          <GridArea  name="svg1_copy" color="#041440">
            <Intro />
          </GridArea>
          <GridArea  name="svg2" color="#008578">
            <Prototype />
          </GridArea>
          <GridArea  name="svg2_copy" color="#5F5980">
            <Learn />
          </GridArea>
          <GridArea  name="svg3" color="pink">
            <Orb />
          </GridArea>
          <GridArea  name="svg3_copy" color="#AB3428">
            <Difficult />
          </GridArea>
          <GridArea  name="svg4" color="#01140F">
            <StringIsland />
          </GridArea>
          <GridArea  name="svg4_copy" color="#0E34A0">
            <Model />
          </GridArea>
          <GridArea  name="svg5" color="#5F5980">
            <ObjectIsland />
          </GridArea>
          <GridArea  name="svg5_copy" color="#008578">
            <Knowledge />
          </GridArea>
        </LandingGrid>
        <Explainer />
        
      </Layout>
    </ThemeProvider>
  )
}
