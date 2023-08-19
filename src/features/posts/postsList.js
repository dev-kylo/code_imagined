import React from 'react'
import { SimpleGrid, Container } from '@mantine/core'
import { Link } from 'gatsby'
import PostCard from '../../components/UI/postCard'

const backgrounds = [
    'https://res.cloudinary.com/the-great-sync/image/upload/v1668087776/2000x2000/Creation_Phase_Empty_kpcotv.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1674312329/2000x2000/whirlpool-pointing_k6gaey.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1674395945/2000x2000/genie_assigned_zgdwyb.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1675526520/2000x2000/Island_Genie_jczj56.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1688439011/2000x2000/Scene-Callstack-1_qs3ljw.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1690135931/2000x2000/Flags_cvb4ia.jpg',
    'https://res.cloudinary.com/the-great-sync/image/upload/v1673003212/2000x2000/volcanic_landscape_k02d6p.png',
]

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
