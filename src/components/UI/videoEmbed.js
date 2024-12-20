import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    overflow: hidden;
    margin-bottom: 1em;
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const VideoEmbed = ({ url }) => {
    return (
        <Container>
            <ReactPlayer className="react-player" url={url} controls width="100%" height="100%" />
        </Container>
    )
}

export default VideoEmbed
