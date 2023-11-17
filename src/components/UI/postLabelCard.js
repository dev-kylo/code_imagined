import React from 'react'
import { createStyles, Image, Text, Group } from '@mantine/core'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const StyledCard = styled.div`
 
        width: 100%;
        max-width: 780px;
        position: relative,
        text-decoration: none !important;
        background-color: ${({ isCurrentPage, theme }) =>
            isCurrentPage ? `${theme.colors.navy} !important` : 'white'};
        color: ${({ isCurrentPage, theme }) => (isCurrentPage ? 'white' : theme.colors.navy)}; 
        text-decoration: none;
        box-sizing: border-box;
        border-radius: 0.5rem;
        box-shadow: none;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        margin: 0.5rem 0;
        width: 100%;
        padding: 0rem;
        box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.2);
        -webkit-box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.2);
        -moz-box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.2);

        :hover {
            box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.4);
            -webkit-box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.4);
            -moz-box-shadow: 13px 14px 10px -13px rgba(0,0,0,0.4);
        }

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

const Icon = styled.div`
    position: absolute;
    top: 10;
    right: 10px;
    z-index: 200;
`

function PostLabelCard({ image, gatsbyImage, title, isCurrentPage, icon, size = 'medium' }) {
    const { classes } = useStyles()
    return (
        <StyledCard isCurrentPage={isCurrentPage}>
            <Group noWrap spacing={0}>
                {gatsbyImage ? (
                    <GatsbyImage
                        image={gatsbyImage}
                        alt=""
                        role="presentation"
                        objectFit="cover"
                        style={{ width: '80px', height: size === 'small' ? '60px' : '100px', objectFit: 'cover' }}
                    />
                ) : (
                    <Image
                        src={image}
                        height={size === 'small' ? '60px' : '100px'}
                        width={80}
                        alt=""
                        role="presentation"
                    />
                )}
                <div className={classes.body} style={{ width: '60%', position: 'relative' }}>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                </div>
                <Icon>{icon}</Icon>
            </Group>
        </StyledCard>
    )
}

export default PostLabelCard
