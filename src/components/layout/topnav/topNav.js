import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Flex, Box } from 'rebass'

const StyledHeader = styled(Flex)`
    background: ${props => (props.transparent ? 'transparent' : '#01150f')};
    transition: opacity 1s transform 1s;
    position: relative;
    z-index: 10000 !important;
    padding: 0.5rem;
    with: 100%;
    @media (max-width: 780px) {
        background: #01150f !important;
        with: 100%;
        z-index: 10000 !important;
    }

    @media (max-width: 600px) {
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        .menulink {
            display: none;
        }
    }
`

const MenuLink = styled(Link)`
    color: white;
    display: block;
    line-height: 1;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.3rem;
    :hover {
        background: rgb(171, 52, 40);
    }

    ,
    @media (max-width: 780px) {
        font-size: 1rem;
        padding: 0.5rem 0.5rem;
    }
`

const Logo = styled.div`
    max-width: 100px;
    margin: auto;
    @media (min-width: 780px) {
        margin-left: 1rem;
        max-width: 110px;
    }
`

const links = [
    { link: '/posts', label: 'Blog' },
    { link: '/courses', label: 'Courses' },
    { link: '/extra', label: 'Extra' },
]

function TopNav() {
    const items = links.map(linkconf => {
        return (
            <MenuLink key={linkconf.label} to={linkconf.link} className="menulink">
                {linkconf.label}
            </MenuLink>
        )
    })

    return (
        <StyledHeader px={2} color="white" alignItems="center">
            <Link to="/">
                <Logo>
                    <StaticImage
                        src="../../../images/small_logo.png"
                        alt="The Great Sync JavaScript Mental Model logo"
                        placeholder="blurred"
                    />
                </Logo>
            </Link>

            <Box mx="auto" className="menulink" />

            {items}
        </StyledHeader>
    )
}

export default TopNav
