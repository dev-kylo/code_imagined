import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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

const CoursePages = ({ pages, title, courseUid, currentPageId, disable = false }) => {
    return (
        <Container>
            <Title>{title || 'Course Sections'}</Title>
            <div className="title">
                {pages?.map(node => {
                    const page = node.course_page
                    const isCurrentPage = currentPageId && page.document.id === currentPageId

                    if (isCurrentPage || disable) {
                        return (
                            <PostLabelCard
                                isCurrentPage={isCurrentPage}
                                size="small"
                                image={random(backgrounds)}
                                key={page.document.id}
                                title={page.document.data.title.text}
                                gatsbyImage={page?.document?.data?.thumbnail?.gatsbyImageData}
                            />
                        )
                    }

                    return (
                        <Link to={`/courses/${courseUid}/${page.document.uid}`} style={{ textDecoration: 'none' }}>
                            <PostLabelCard
                                size="small"
                                image={random(backgrounds)}
                                key={page.document.id}
                                title={page.document.data.title.text}
                                gatsbyImage={page?.document?.data?.thumbnail?.gatsbyImageData}
                            />
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}

export default CoursePages
