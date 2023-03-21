import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "rebass/styled-components/"
import styled from "styled-components"

const StyledIcon = styled.div`
  height: auto;
  width: 1em;
  height: 1em;
  color: white;
  background: ${({ theme }) => theme.colors.white};
  /* display: inline-block; */

  fill: white;
  img {
    width: 100%;
    height: auto;
  }
`

const HomeButton = () => {
  return (
    <Link to="/">
      <Button bg="white" sx={{ marginLeft: "1em" }}>
        <StyledIcon>
          <StaticImage
            src="../../images/home.png"
            alt="The Execution Stack - a stack of isles with waterfalls"
            placeholder="tracedSVG"
            fullWidth
          />
        </StyledIcon>
      </Button>
    </Link>
  )
}

export default HomeButton
