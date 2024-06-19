import React, { useContext } from 'react'
import { createStyles, Header, Group, Divider, Container, Box, Burger, Drawer, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SignupContext } from '../../../context/toggle'
// import { DesktopDisplay } from '../containers/containers.styled'
import { Title } from '../../UI/text.styled'

const HEADER_HEIGHT = rem(70)

const StyledHeader = styled(Header)`
    background: #01150f !important;
    transition: opacity 1s transform 1s;
    position: relative;
    z-index: 10000 !important;

    @media (max-width: 780px) {
        position: fixed !important;
        z-index: 10000 !important;
        /* height: 40rem !important; */
    }
`

const useStyles = createStyles(theme => ({
    inner: {
        height: rem(70),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
        color: 'white',
        background: 'white',
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(24)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: 'white',
        fontSize: theme.fontSizes.xl,
        fontWeight: 500,
        // backgroundColor: '#8080804a',

        '&:hover': {
            backgroundColor: 'rgb(171, 52, 40)',
        },

        '@media(max-width: 780px)': {
            color: 'black',
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}))

const Logo = styled.div`
    max-width: 80px;
    @media (min-width: 780px) {
        margin-left: 1rem;
        max-width: 95px;
    }
`

const FixedHeight = styled.div`
    height: 4rem;
    @media (min-width: 780px) {
        display: none;
    }
`

// const Strapline = styled.div`
//     font-size: 1.2rem;
//     background: #008578;
//     padding: 0.5rem;
//     text-align: center;
//     font-family: ${props => props.theme.fonts.heading1};
//     text-transform: uppercase;
//     background-color: ${props => props.theme.colors.green};
//     span {
//         color: ${props => props.theme.colors.white};
//         background-color: ${props => props.theme.colors.navy};
//         @media (min-width: 780px) {
//             padding: 10px 15px;
//         }
//     }

//     a {
//         color: white;
//         font-weight: bold;
//         font-size: 0.8rem;
//         text-decoration: none;
//         :hover {
//             color: ${props => props.theme.colors.red};
//         }
//     }
// `

const links = [
    { link: '/posts', label: 'Blog' },
    { link: '/courses', label: 'Courses' },
    // { link: '/featured', label: 'Featured' },
    { link: '/extra', label: 'Extra' },
]

function TopNav() {
    const { classes } = useStyles()
    const [opened, { toggle }] = useDisclosure(false)
    const showSignUp = useContext(SignupContext).show
    const items = links.map(linkconf => {
        return (
            <Link key={linkconf.label} to={linkconf.link} className={classes.link}>
                {linkconf.label}
            </Link>
        )
    })

    const showSignUpFromDrawer = () => {
        toggle()
        showSignUp()
    }

    return (
        <>
            <Box>
                <StyledHeader height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
                    <Container className={classes.inner} fluid>
                        <Group>
                            <Link to="/">
                                <Logo>
                                    <StaticImage
                                        src="../../../images/small_logo.png"
                                        alt="The Great Sync JavaScript Mental Model logo"
                                        placeholder="blurred"
                                    />
                                </Logo>
                            </Link>
                        </Group>
                        <Group spacing={5} className={classes.links}>
                            {items}
                        </Group>
                        {/* <DesktopDisplay>
                            <Button radius="xl" h={30} bg="rgb(171, 52, 40)" onClick={showSignUp}>
                                Get the FREE course
                            </Button>
                        </DesktopDisplay> */}
                        {!opened && <Burger opened={opened} onClick={toggle} className={classes.burger} size="md" />}
                    </Container>
                </StyledHeader>
                <Drawer
                    opened={opened}
                    onClose={toggle}
                    size="80%"
                    padding="md"
                    title={<Title>The Great Sync</Title>}
                    className={classes.hiddenDesktop}
                    zIndex={1000000}
                >
                    <Divider my="sm" color="dark.5" />

                    {items}

                    {/* <Group position="center" pt={24} grow pb="xl" px="md">
                        <Button bg="yellow" color="black" onClick={showSignUpFromDrawer}>
                            Get the FREE course
                        </Button>
                    </Group> */}
                </Drawer>
            </Box>

            <FixedHeight />
            {/* <Strapline>
                <span>The Syncer Program</span> launches on the 20th February 🚀{' '}
                <Link to="/courses/the-syncer-program">Find out more</Link>
            </Strapline> */}
        </>
    )
}

export default TopNav
