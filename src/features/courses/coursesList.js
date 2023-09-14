import React from 'react'
import { Container } from '@mantine/core'
import { Link } from 'gatsby'
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
                image="https://images.prismic.io/thegreatsync/9e9c235e-3487-40f4-9e8e-7d38b04e55a5_genie_crewmember.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=400&h=367"
                title={course.data.title.text}
                description={course.data.short_desc.text}
                type={course.data.type}
                link={`/courses/${course.uid}`}
            />
        </Link>
    ))

    return (
        <Container py="sm">
            <Grid>{cards}</Grid>
        </Container>
    )
}

export default CoursesList
