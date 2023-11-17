import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button } from '../../components/UI/button.styled'
import PostLabelCard from '../../components/UI/postLabelCard'

const NextContainer = styled.div`
    margin-right: -20px;
    position: relative;
    zindex: 5;

    @media (max-width: 480px) {
        margin-bottom: -50px;
        width: 100%;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const NextPageButton = ({ pages, courseUid, currentPageId }) => {
    const currentPageIndex = pages.findIndex(pg => {
        return pg?.course_page?.document.id === currentPageId
    })

    const link =
        +currentPageIndex !== pages.length - 1
            ? `/courses/${courseUid}/${pages[currentPageIndex + 1].course_page.document.uid}`
            : null

    if (!link) return null

    const page = pages[currentPageIndex + 1]?.course_page

    return (
        <Container>
            <Link to={`/courses/${courseUid}/${page.document.uid}`} style={{ textDecoration: 'none' }}>
                <NextContainer>
                    {page && (
                        <PostLabelCard
                            title={page?.document.data.title.text}
                            gatsbyImage={page?.document?.data?.thumbnail?.gatsbyImageData}
                        />
                    )}
                </NextContainer>
            </Link>
            <Button link={link}> Next </Button>
        </Container>
    )
}

export default NextPageButton
