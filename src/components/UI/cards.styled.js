import React from 'react'
import { Flex } from 'rebass/styled-components'
import PostCard from './card.styled'

const Cards = () => (
    <Flex flexWrap="wrap" justifyContent="center">
        <PostCard red>Everything you need to know about Primitive Values</PostCard>
        <PostCard>Reference Values explained in detail</PostCard>
        <PostCard red> Scope - If you don't get it, you will now </PostCard>
    </Flex>
)

export default Cards
