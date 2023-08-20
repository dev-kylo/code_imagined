import React from 'react'
import { SimpleGrid, Container } from '@mantine/core'
import { Link } from 'gatsby'
import PostCard from '../../components/UI/postCard'
import { backgrounds } from './backgrounds'

function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function PostsList({ posts }) {
    const cards = posts.map(article => (
        <Link to={`/posts/${article.uid}`} style={{ textDecoration: 'none' }}>
            <PostCard
                image={article?.image || random(backgrounds)}
                title={article.data.title.text}
                publishDate={new Date(article.data.published).toDateString()}
            />
        </Link>
    ))

    return (
        <Container py="xl">
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}

export default PostsList
