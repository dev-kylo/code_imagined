import React, { useState } from 'react'
import { createStyles, Box, rem, Accordion } from '@mantine/core'
import styled from 'styled-components'
import { Title } from '../../components/UI/text.styled'
import { MobileDisplay, DesktopDisplay } from '../../components/layout/containers/containers.styled'

const Container = styled.div`
    margin: auto;
    margin-bottom: 2rem;

    @media (min-width: 780px) {
        max-width: 80%;
    }
`

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
        <Container>
            <DesktopDisplay>
                <Accordion variant="contained" defaultValue="item-1">
                    <Accordion.Item value="item-1">
                        <Accordion.Control style={{ textAlign: 'center', marginTop: 0 }}>
                            <Title>Table of Contents</Title>
                        </Accordion.Control>
                        <Accordion.Panel> {items}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </DesktopDisplay>
            <MobileDisplay>
                <Accordion variant="contained">
                    <Accordion.Item value="item-2">
                        <Accordion.Control style={{ textAlign: 'center', marginTop: 0 }}>
                            <Title>Table of Contents</Title>
                        </Accordion.Control>
                        <Accordion.Panel> {items}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </MobileDisplay>
        </Container>
    )
}
