import React from 'react'
import { Card, Image, Flex, Badge, createStyles } from '@mantine/core'
import styled from 'styled-components'
import { Button } from './button.styled'

const useStyles = createStyles(theme => ({
    section: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
}))

const StyledBadge = styled(Badge)`
    background: ${({ primary, theme }) => (!primary ? theme.colors.blue : theme.colors.red)};
    min-width: ${({ primary }) => (!primary ? '50px' : '75px')};
`

const StyledCard = styled(Card)`
    background: white;
    min-height: 600px;

    .title {
        font-size: 32px;
        margin-bottom: 1.5rem;
        font-family: ${props => props.theme.fonts.heading1};
        padding: 0;
    }

    .desc {
        font-size: 16px;
        line-height: 20px;
    }
`

export function CourseCard({ image, title, description, type, badges, link }) {
    const { classes } = useStyles()

    return (
        <StyledCard withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height="250px" />
            </Card.Section>

            <Flex direction="column" justify="space-between" style={{ height: '300px' }}>
                <Card.Section className={classes.section} mt="md">
                    <Flex gap="md" justify="space-between" align="flex-start" direction="row">
                        <span className="title">{title}</span>
                        <StyledBadge variant="gradient" color="red" size="sm" mt={6} primary={type === 'paid'}>
                            {type !== 'paid' ? 'free' : 'premium'}
                        </StyledBadge>
                    </Flex>
                    <span className="desc">{description}</span>
                </Card.Section>

                <Flex justify="center" mt="xl">
                    <Button color={type === 'paid' ? 'red' : 'blue'} type="link" size="small" link={link}>
                        {type === 'paid' ? 'Learn More' : 'Access'}
                    </Button>
                </Flex>
            </Flex>
        </StyledCard>
    )
}
