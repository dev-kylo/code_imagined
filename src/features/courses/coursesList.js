import React from 'react'
import { Link } from 'gatsby'
// import { CourseCard } from '../../components/UI/courseCard'
import styled from 'styled-components'
import ShadowCard from '../../components/UI/shadowCard'

const Grid = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 780px) {
        grid-template-columns: 1fr;
    }
`

function CoursesList({ courses }) {
    const cards = courses.map(course => (
        <Link key={course.uid} to={`/courses/${course.uid}`} style={{ textDecoration: 'none' }}>
            <ShadowCard
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                title={course.data.title.text}
                description={course.data.short_desc.text}
                type={course.data.type}
                link={`/courses/${course.uid}`}
            />
        </Link>
    ))

    return (
        // <Container py="sm">
        <Grid>{cards}</Grid>
        // </Container>
    )
}

export default CoursesList
