import styled from 'styled-components'
import React from 'react'
import { H3 } from '../../../components/UI/headings.styled'
import { Highlight } from '../../../components/UI/highlight'

const Container = styled.div`
    background: black:
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    position: relative;
    margin: 0 auto;
    text-align: center;
    background: ${props => props.theme.colors.navy};

    div {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        h3 {
            text-align: center;
            color: white
            }
    }
`

const Strip = () => (
    <Container>
        <div>
            <H3>Sometimes all that is needed is a change in perspective, and everything starts to make sense...</H3>
            <H3>
                <Highlight color="pink">This is The Great Sync Mental Model</Highlight>{' '}
            </H3>
        </div>
    </Container>
)

export default Strip
