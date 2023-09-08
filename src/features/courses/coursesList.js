import React from 'react'
import { SimpleGrid, Container } from '@mantine/core'
import { Link } from 'gatsby'
import { CourseCard } from '../../components/UI/courseCard'

function CoursesList({ courses }) {
    const cards = courses.map(course => (
        <Link to={`/courses/${course.uid}`} style={{ textDecoration: 'none' }}>
            <CourseCard
                link={`/courses/${course.uid}`}
                title={course.data.title.text}
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                type={course.data.type}
                description="Some descriptive text will go here. This is a premiium course covering everything from objects to closures. It is designed to test you and take your JavaScript skills to the next level!"
                // badges={[
                //     { label: 'Mnemonics', emoji: '🤯' },
                //     { label: 'Learning', emoji: '🤔' },
                //     { label: 'Studying', emoji: '🧠' },
                // ]}
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
