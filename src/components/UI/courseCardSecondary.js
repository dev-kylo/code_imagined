import React from 'react'
import { createStyles, Paper, Text, Title, rem, Flex } from '@mantine/core'
import styled from 'styled-components'
import { Button } from './button.styled'

const Card = styled.div`
    :hover,
    :focus,
    :active {
        filter: brightness(1.3);
    }
`

const useStyles = createStyles(theme => ({
    card: {
        position: 'relative',
        height: rem(540),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '4px 11px 14px 6px rgb(79 79 79 / 41%)',
    },

    title: {
        fontFamily: `Greycliff CF ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
        marginBottom: 12,
    },

    publishDate: {
        color: theme.white,
        opacity: 1,
        fontWeight: 700,
        // textTransform: 'uppercase',
        fontSize: rem(16),
    },

    overlay: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(#ffffff00 25%, #01130f 35%)', // Adjust the opacity as needed
        pointerEvents: 'none', // Allow clicks to go through the overlay
        zIndex: 40,
    },
    content: {
        bottom: '2.5rem',
        padding: '1rem',
        position: 'absolute', // Add relative positioning to the content container
        zIndex: 50, // Adjust the content's z-index to ensure it's above the overlay
    },
}))

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   publishDate: string;
// }

function CourseCardSecondary({ image, title, publishDate, type, link }) {
    const { classes } = useStyles()

    return (
        <Card>
            <Paper radius="md" className={`${classes.card}`}>
                <div className={classes.overlay} />
                <div
                    style={{
                        height: '40%',
                        width: '100%',
                        backgroundImage: `url(${image})`,
                        position: 'relative',
                        backgroundSize: 'cover',
                    }}
                />
                <div className={classes.content}>
                    <Title order={3} className={classes.title}>
                        {title}
                    </Title>
                    <Text className={classes.publishDate} size="xs">
                        {publishDate}
                    </Text>
                    <Flex justify="center" style={{ zIndex: 1000, marginTop: '3rem' }}>
                        <Button color={type === 'paid' ? 'red' : 'blue'} type="link" size="small" link={link}>
                            {type === 'paid' ? 'Learn More' : 'Free Access'}
                        </Button>
                    </Flex>
                </div>
            </Paper>
        </Card>
    )
}

export default CourseCardSecondary
