import React from 'react'
import { createStyles, Card, Image, Text, Group } from '@mantine/core'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const StyledCard = styled(Card)`
    text-decoration: none !important;
    background-color: ${({ isCurrentPage, theme }) => (isCurrentPage ? theme.colors.navy : 'white')};
    color: ${({ isCurrentPage, theme }) => (isCurrentPage ? 'white' : theme.colors.navy)}; ;
`

const useStyles = createStyles(theme => ({
    card: {
        margin: '0.5rem 0',
        width: '100%',
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
        textDecoration: 'none',
    },

    body: {
        paddingLeft: theme.spacing.md,
    },
}))

function PostLabelCard({ image, gatsbyImage, title, isCurrentPage, size = 'medium' }) {
    const { classes } = useStyles()
    return (
        <StyledCard withBorder radius="md" p={0} className={classes.card} isCurrentPage={isCurrentPage}>
            <Group noWrap spacing={0}>
                {gatsbyImage ? (
                    <GatsbyImage
                        image={gatsbyImage}
                        alt=""
                        role="presentation"
                        style={{ width: '80px', height: '60px' }}
                    />
                ) : (
                    <Image src={image} height={size === 'medium' ? 100 : 60} width={80} alt="" role="presentation" />
                )}
                <div className={classes.body}>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                </div>
            </Group>
        </StyledCard>
    )
}

export default PostLabelCard
