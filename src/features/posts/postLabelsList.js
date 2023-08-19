import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PostLabelCard from '../../components/UI/postLabelCard'
import { Title } from '../../components/UI/text.styled'

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

const Container = styled.div`
    max-width: 400px;
    margin: 4rem auto;
    .title {
        margin-top: 1.5rem !important;
        padding: 0;
    }
`

const PostLabelsList = ({ postsData }) => {
    return (
        <Container>
            <Title>Latest posts</Title>
            <div className="title">
                {postsData.slice(0, 3).map(node => (
                    <Link to={`/posts/${node.uid}`} style={{ textDecoration: 'none' }}>
                        <PostLabelCard key={node.id} image={random(backgrounds)} title={node.data.title.text} />
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default PostLabelsList
