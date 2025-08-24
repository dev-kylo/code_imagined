import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Modal from '../../components/UI/modal.styled'
import MageFunk from '../lander/imageBlocks/mage/mage'
import { H3 } from '../../components/UI/headings.styled'
import { StyledElementsContainer } from '../../components/layout/containers/styledElementsContainer'
import { P } from '../../components/UI/text.styled'

const PostSignupBuyNow = ({ exitBuyNow, name, showModal }) => {
    return (
        <Modal exitCb={exitBuyNow} standalone showModal={showModal}>
            <Flex flexWrap="wrap">
                <Box
                    bg="black"
                    height={['0%', '0%', '100%', '100%']}
                    width={[1, 1, 1 / 3, 1 / 3]}
                    sx={{ position: 'absolute', bottom: '0', left: '0' }}
                >
                    <MageFunk invoking={false} mobileHide />
                </Box>
                <Box width={[1, 1, 1 / 3, 1 / 3]} />
                <Box p="0" pl={['0', '0', '1rem', '1rem']} width={[1, 1, 2 / 3, 2 / 3]}>
                    <StyledElementsContainer style={{ padding: '1rem' }}>
                        <H3 dark style={{ margin: 0, padding: 0 }}>
                            🎉 Please check your email and confirm!
                        </H3>
                        <P small dark style={{ fontSize: '16px', lineHeight: '24px' }}>
                            {' '}
                            BTW, if your email lands in "Promotions" or "Spam", please also drag it into your primary
                            inbox.{' '}
                        </P>
                        {/* <P small dark style={{ fontSize: '16px', lineHeight: '24px' }}>
                            While you're here {name}, I just wanted to let you know that I recently launched{' '}
                            <a href="https://thesyncerprogram.thegreatsync.com/">
                                Imagine JavaScript - Master the Fundamentals
                            </a>
                            .
                        </P> */}

                        {/* <P small dark style={{ fontSize: '16px', lineHeight: '24px' }}>
                            If you want to start building your mental model right away, I have a{' '}
                            <Highlight color="blue" style={{ color: 'rgb(14, 52, 160)', fontWeight: 'bold' }}>
                                special surpise{' '}
                            </Highlight>{' '}
                            for new subscribers.
                        </P> */}
                    </StyledElementsContainer>
                    {/* <Box px={2} mt={0}>
                        <Flex width="100%" justifyContent="center">
                            <Button type="external" color="yellow" link="https://thesyncerprogram.thegreatsync.com/">
                                Access Imagine JavaScript
                            </Button>
                        </Flex>
                    </Box>
                    <div style={{ width: '100%', maxWidth: '400px', margin: '2rem auto' }}>
                        <VideoEmbed url="https://www.youtube.com/watch?v=mVWiy6zSiDE" />
                    </div> */}
                </Box>
            </Flex>
        </Modal>
    )
}

export default PostSignupBuyNow
