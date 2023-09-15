import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PostLabelCard from '../../components/UI/postLabelCard'
import { Title } from '../../components/UI/text.styled'
import { backgrounds } from './backgrounds'

function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

const Container = styled.div`
    /* max-width: 400px; */
    width: 100%;
    margin: 2rem auto;
    margin-bottom: 3rem;
    .title {
        margin-top: 1.5rem !important;
        padding: 0;
    }
`

const PostLabelsList = ({ postsData, title, tag, currentId, length = 2 }) => {
    let data = postsData
    const latestIds = postsData.slice(0, 3).map(dt => dt.id)
    if (tag) data = data?.filter(post => post.tags.includes(tag) && !latestIds.includes(post.id))

    data = data?.filter(post => post.id !== currentId)

    if (!data || data.length < 1) return null

    return (
        <Container>
            <Title>{title}</Title>
            <div className="title">
                {data?.slice(0, length).map(node => (
                    <Link key={`/posts/${node.uid}-label`} to={`/posts/${node.uid}`} style={{ textDecoration: 'none' }}>
                        <PostLabelCard
                            key={node.id}
                            gatsbyImage={node?.data.banner?.gatsbyImageData}
                            image={random(backgrounds)}
                            title={node.data.title.text}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default PostLabelsList
