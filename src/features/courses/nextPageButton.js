import React from 'react'

import { Flex } from '@mantine/core'
import { Button } from '../../components/UI/button.styled'

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

    return (
        <Flex justify="center" mt={24}>
            <Button link={link}> Next Section </Button>
        </Flex>
    )
}

export default NextPageButton
