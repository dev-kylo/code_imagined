import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import gsap from "gsap"

const SubTop = styled.div`
  position: absolute;
  top: 4%;
  left: 20%;
  transform: scaleX(-1) rotate(30deg);
  z-index: 2000;
  width: 5%;
`

const SubMiddle = styled.div`
  position: absolute;
  top: 12%;
  right: 20%;
  z-index: 2000;
  transform: rotate(-10deg);
  width: 8%;
  @media (max-width: 700px) {
    top: 22%;
    right: 10%;
  }
`

const SubBottom = styled.div`
  position: absolute;
  top: 25%;
  left: 18%;
  z-index: 2000;
  width: 11%;
  transform: rotate(15deg);
`

const Submarine = props => {
  useEffect(() => {
    gsap.to("#subtop", {
      duration: 10,
      delay: 0,
      x: -40,
      y: 15,
      ease: "Power1.easeOut",
    })
    gsap.to("#submiddle", {
      duration: 20,
      x: "-40%",
      y: "90%",
      ease: "Power1.easeInOut",
    })
    gsap.to("#subbottom", {
      duration: 30,
      delay: 0,
      x: "-150%",
      y: "150%",
      ease: "Power1.easeInOut",
    })
  })

  if (props.subtop) {
    return (
      <SubTop>
        <div id="subtop">
          <StaticImage
            src="../../../../../images/submarine.png"
            alt="The Execution Stack - a stack of isles with waterfalls"
            placeholder="blurred"
            fullWidth
          />
        </div>
      </SubTop>
    )
  }
  if (props.submiddle) {
    return (
      <SubMiddle>
        <div id="submiddle">
          <StaticImage
            src="../../../../../images/submarine.png"
            alt="The Execution Stack - a stack of isles with waterfalls"
            placeholder="blurred"
            fullWidth
          />
        </div>
      </SubMiddle>
    )
  } else
    return (
      <SubBottom>
        <div id="subbottom">
          <StaticImage
            src="../../../../../images/submarine.png"
            alt="The Execution Stack - a stack of isles with waterfalls"
            placeholder="blurred"
            fullWidth
          />
        </div>
      </SubBottom>
    )
}

export default Submarine
