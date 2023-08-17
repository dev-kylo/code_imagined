/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'

import PostCard from '../components/UI/card.styled'

const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
`

const Slice_Card = ({ slice }) => {
    if (slice) {
        const cards = slice.map((card, i) => {
            return (
                <PostCard key={i} link={card.link.url} title={card.title1[0].text}>
                    {card.card_text[0].text}
                </PostCard>
            )
        })

        return <Ul>{cards}</Ul>
    }
    return null
}

export default Slice_Card
