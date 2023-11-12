import React from 'react'

import { Flex } from '@mantine/core'
import { Link } from 'gatsby'
import { Button } from '../../components/UI/button.styled'
import PostLabelCard from '../../components/UI/postLabelCard'

const NextPageButton = ({ pages, courseUid, currentPageId }) => {
    const currentPageIndex = pages.findIndex(node => {
        const page = node.course_page
        return page.document.id === currentPageId
    })

    const link =
        +currentPageIndex !== pages.length - 1
            ? `/courses/${courseUid}/${pages[currentPageIndex + 1].course_page.document.uid}`
            : null

    if (!link) return null

    const page = pages[currentPageIndex + 1]?.course_page

    return (
        <Flex justify="center" align="center" mt={24}>
            <Link to={`/courses/${courseUid}/${page.document.uid}`} style={{ textDecoration: 'none' }}>
                <div
                    style={{
                        maxWidth: '400px',
                        minWidth: '300px',
                        marginTop: '30px',
                        marginRight: '-30px',
                        position: 'relative',
                        zIndex: 5,
                    }}
                >
                    {page && (
                        <PostLabelCard
                            title={page?.document.data.title.text}
                            gatsbyImage={page?.document?.data?.thumbnail?.gatsbyImageData}
                        />
                    )}
                </div>
            </Link>
            <Button link={link}> Next </Button>
        </Flex>
    )
}

export default NextPageButton
