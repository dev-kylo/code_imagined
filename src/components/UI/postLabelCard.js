import React from 'react'
import { createStyles, Card, Image, Text, Group } from '@mantine/core'

const useStyles = createStyles(theme => ({
    card: {
        margin: '0.5rem 0',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}))

// interface PostLabelProps {
//   image: string;
//   category: string;
//   title: string;
//   date: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
// }

function PostLabelCard({ image, category, title, date, author }) {
    const { classes } = useStyles()
    return (
        <Card withBorder radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
                <Image src={image} height={100} width={140} />
                <div className={classes.body}>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                </div>
            </Group>
        </Card>
    )
}

export default PostLabelCard
