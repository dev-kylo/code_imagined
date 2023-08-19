import React, { useState } from 'react'
import { createStyles, Box, Group, rem } from '@mantine/core'
import { Title } from '../../components/UI/text.styled'

const useStyles = createStyles(theme => ({
    link: {
        ...theme.fn.focusStyles(),
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: 1.2,
        fontSize: theme.fontSizes.sm,
        padding: theme.spacing.xs,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        fontWeight: 500,
        borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
        },
    },
}))

// interface TableOfContentsProps {
//   links: { label: string; link: string; order: number }[];
//   active: string;
// }

export function TableOfContents({ links }) {
    const [active, setActive] = useState((links && links[0]?.link) || '')
    const { classes, cx } = useStyles()
    const items = links.map(item => (
        <Box
            component="a"
            href={item.link}
            onClick={() => setActive(item.link)}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === item.link })}
            sx={theme => ({ paddingLeft: `calc(${item.order} * ${theme.spacing.md})` })}
        >
            {item.label}
        </Box>
    ))

    return (
        <div>
            <Group mb="md">
                <Title>Quick Page Links</Title>
            </Group>
            {items}
        </div>
    )
}