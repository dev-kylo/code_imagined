import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ShadowCard from '../../../components/UI/shadowCard'
import { H2 } from '../../../components/UI/headings.styled'

const Grid = styled.div`
    position: relative;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    margin-top: -6rem;
    max-width: 1000px;
    @media (max-width: 780px) {
        grid-template-columns: 1fr;
    }
`

const Bg = styled.div`
    height: 250px;
    width: 100;
    background: #038578;
    position: relative;
`

const Canvas = styled.div`
    color: black !important;
    texta-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    padding: 2rem;
    p {
        text-align: center;
        font-size: 1.2rem;
        max-width: 600px;
    }

    @media (max-width: 600px) {
        padding: 1.2rem;
    }

    span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.paragraph};
    }
`

function Offers() {
    return (
        <>
            <Bg>
                <Canvas>
                    <H2 style={{ color: 'white' }}>Courses and Programs</H2>
                </Canvas>
            </Bg>
            <Grid>
                <Link key="course-1" to="/courses/the-syncer-program" style={{ textDecoration: 'none' }}>
                    <ShadowCard
                        image="https://images.prismic.io/thegreatsync/ce1e7bf0-dd57-4bb1-b870-73dec577b37b_the_syncer_program_2_petanl.png"
                        title="The Syncer Program - Learn & Remember The Fundamentals"
                        description="The mnemonic self-paced course on learning JavaScript visually and memorably. Journey through an imagined JavaScript universe, learning concepts in a way that sticks."
                        type="paid"
                        link="/courses/the-syncer-program"
                    />
                </Link>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://calendly.com/thegreatsync/premium-coaching-program"
                    style={{ textDecoration: 'none' }}
                >
                    <ShadowCard
                        image="https://res.cloudinary.com/the-great-sync/image/upload/v1690715966/Screen_Shot_2023-07-30_at_3.19.05_PM_erh2cq.png"
                        title="Start Building - 10 Weeks To JavaScript Confidence"
                        description="Escape tutorial hell and start building your own projects. This is a guided 10 week part-time group learning program, designed to help you apply the fundamental patterns to your own projects, with the personal support of a Senior Developer."
                        type=""
                        link="https://calendly.com/thegreatsync/premium-coaching-program"
                        btnText="Chat with Kylo About Joining"
                    />
                </a>
            </Grid>
        </>
    )
}

export default Offers
