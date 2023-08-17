import { graphql } from 'gatsby'
import React from 'react'
import ReactPlayer from 'react-player'
import MuxPlayer from '@mux/mux-player-react'
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

const Slice_Video = ({ slice }) => {
    if (slice) {
        const data = slice.primary

        if (data.mux_playbackid.text) {
            return (
                <MuxPlayer
                    style={{ height: '100%', maxWidth: '100%', marginTop: '2rem' }}
                    playbackId={data.mux_playbackid.text}
                    metadata={{
                        video_id: data.mux_assetid.text,
                        video_title: data.mux_title.text,
                    }}
                    streamType="on-demand"
                    controls
                />
            )
        }

        return (
            <Container>
                <ReactPlayer
                    className="react-player"
                    url={data.video_url?.embed_url || data.file_url.url}
                    controls
                    width="100%"
                    height="100%"
                />
            </Container>
        )
    }
    return null
}

export default Slice_Video

export const query = graphql`
    fragment PostDataBodyVideo on PrismicPostDataBodyVideo {
        primary {
            video_url {
                embed_url
            }
            file_url {
                url
            }
            mux_assetid {
                text
            }
            mux_playbackid {
                text
            }
            mux_title {
                text
            }
        }
    }
`
