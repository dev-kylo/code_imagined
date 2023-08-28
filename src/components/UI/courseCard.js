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

const StyledCard = styled(Card)`
    background: white;

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

// interface CourseCardProps {
//   image: string;
//   title: string;
//   type: 'premium' | 'free';
//   description: string;
//   badges: {
//     emoji: string;
//     label: string;
//   }[];
// }

export function CourseCard({ image, title, description, type, badges, link }) {
    const { classes } = useStyles()

    // const features = badges.map(badge => (
    //     <Badge color="gray" key={badge.label} leftSection={badge.emoji}>
    //         {badge.label}
    //     </Badge>
    // ))

    return (
        <StyledCard withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height="auto" />
            </Card.Section>

            <div>
                <Card.Section className={classes.section} mt="md">
                    <Flex gap="md" justify="space-between" align="flex-start" direction="row">
                        <span className="title">{title}</span>
                        <Badge variant="gradient" size="sm" mt={6}>
                            {!type || type.contains('free') ? 'free short' : type}
                        </Badge>
                    </Flex>
                    <span className="desc">{description}</span>
                </Card.Section>
                {/* 
                <Card.Section className={classes.section}>
                    <Group spacing={7} mt={5}>
                        {features}
                    </Group>
                </Card.Section> */}

                <Flex justify="center" mt="xl">
                    <Button size="small" link={link}>
                        Learn more
                    </Button>
                </Flex>
            </div>
        </StyledCard>
    )
}
