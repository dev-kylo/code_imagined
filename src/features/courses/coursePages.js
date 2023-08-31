import React from 'react'
import styled from 'styled-components'
import PostLabelCard from '../../components/UI/postLabelCard'
import { Title } from '../../components/UI/text.styled'
import { backgrounds } from '../posts/backgrounds'

function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

const Container = styled.div`
    width: 100%;
    margin: 2rem auto;
    margin-bottom: 3rem;
    .title {
        margin-top: 1.5rem !important;
        padding: 0;
    }
`

const CoursePages = ({ pages }) => {
    return (
        <Container>
            <Title>Course Sections</Title>
            <div className="title">
                {pages?.map(node => {
                    const page = node.course_page
                    return (
                        <PostLabelCard
                            size="small"
                            image={random(backgrounds)}
                            key={page.document.id}
                            title={page.document.data.title.text}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default CoursePages
