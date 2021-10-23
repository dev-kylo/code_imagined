import React from "react"
import { Box } from "rebass/styled-components";
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1000px;
    margin: 0rem auto;

    @media(max-width: 700px){
        padding: 0 1rem;
        margin: 3rem auto;
    }

`

const MainVideo = () => (
    <Container>
    <Box
  sx={{
    width: '100%',
    height: 0,
    paddingBottom: (900 / 16) + '%',
    position: 'relative',
    overflow: 'hidden',
    '& > iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  }}>
  <iframe
    title="The Great Sync"
    src='https://www.youtube.com/embed/GNCd_ERZvZM'
    frameBorder='0'
    allowFullScreen
  />
</Box>
</Container>
)

export default MainVideo