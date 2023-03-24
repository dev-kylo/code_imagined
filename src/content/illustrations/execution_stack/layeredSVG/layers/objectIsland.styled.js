import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ObjectI = styled.div`
  position: absolute;
  bottom: 30%;
  left: 55%;
  transform: rotate(20deg);
  z-index: 2000;
  width: 25%;
`

const ObjectIsland = () => (
  <ObjectI>
    <StaticImage
      src="../../../../../images/Object_island.png"
      alt="The Execution Stack - a stack of isles with waterfalls"
      placeholder="blurred"
      fullWidth
    />
  </ObjectI>
)

export default ObjectIsland
