/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'

import PostCard from '../components/UI/card.styled'

const Grid = styled.ul`
    width: 100%;
    margin: auto;
    column-gap: 30px;
    row-gap: 30px;
`

const Grid_Card = ({ slice }) => {
    if (slice) {
        const cards = slice.map((card, i) => {
            return (
                <PostCard key={i} link={card.link.url} title={card.title1[0].text}>
                    {card.card_text[0].text}
                </PostCard>
            )
        })

        return <Grid>{cards}</Grid>
    }
    return null
}

export default Grid_Card
