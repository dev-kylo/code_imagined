import React from 'react'
import { SimpleGrid, Container } from '@mantine/core'
import { Link } from 'gatsby'
// import { CourseCard } from '../../components/UI/courseCard'
import CourseCardSecondary from '../../components/UI/courseCardSecondary'

function CoursesList({ courses }) {
    const cards = courses.map(course => (
        <Link to={`/courses/${course.uid}`} style={{ textDecoration: 'none' }}>
            {/* <CourseCard
                link={`/courses/${course.uid}`}
                title={course.data.title.text}
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                type={course.data.type}
                description={course.data.short_desc.text}
            /> */}
            <CourseCardSecondary
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                title={course.data.title.text}
                publishDate={course.data.short_desc.text}
                type={course.data.type}
                link={`/courses/${course.uid}`}
            />
        </Link>
    ))

    return (
        <Container py="sm">
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}

export default CoursesList
