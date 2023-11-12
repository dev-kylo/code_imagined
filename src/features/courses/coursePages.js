import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PostLabelCard from '../../components/UI/postLabelCard'
import { Title } from '../../components/UI/text.styled'
import { backgrounds } from '../posts/backgrounds'
import isBrowser from '../../utils/isBrowser'

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

function checkForPageCompletion(courseId, pageId) {
    if (isBrowser()) {
        if (!courseId || courseId === null) return false

        const completion = localStorage.getItem('tgs-course-completion')

        if (!completion) return false

        const data = JSON.parse(completion)

        if (data[courseId] && data[courseId][pageId]) return true
    }
    return false
}

function updatePageCompletion(courseId, currentPageId) {
    if (isBrowser()) {
        if (!courseId || courseId === null) return true

        const completion = localStorage.getItem('tgs-course-completion')

        if (!completion) {
            const newData = { [courseId]: { [currentPageId]: true } }
            localStorage.setItem('tgs-course-completion', JSON.stringify(newData))
            return false
        }

        const data = JSON.parse(completion)

        if (!data[courseId]) {
            data[courseId] = { [currentPageId]: true }
            localStorage.setItem('tgs-course-completion', JSON.stringify(data))
            return false
        }

        if (!data[courseId][currentPageId]) {
            data[courseId][currentPageId] = true
            localStorage.setItem('tgs-course-completion', JSON.stringify(data))
            return false
        }

        return true
    }
    return false
}

const CoursePages = ({ pages, title, courseUid, currentPageId, showIcon, disable = false }) => {
    const updatedCompletion = useRef(false)

    useEffect(() => {
        if (!updatedCompletion.current) updatePageCompletion(courseUid, currentPageId)
        updatedCompletion.current = true
    }, [courseUid, currentPageId])

    return (
        <Container>
            <Title>{title || 'Course Sections'}</Title>
            <div className="title">
                {pages?.map(node => {
                    const page = node.course_page
                    const isCurrentPage = currentPageId && page.document.id === currentPageId

                    const isCompleted = checkForPageCompletion(courseUid, page.document.id)
                    if (isCurrentPage) console.log({ isCompleted, showIcon })

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
                                icon={
                                    showIcon && isCompleted ? (
                                        <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
                                    ) : null
                                }
                            />
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}

export default CoursePages
