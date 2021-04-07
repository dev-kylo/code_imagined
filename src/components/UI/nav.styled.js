
import React from 'react';
import styled from 'styled-components';

export const Nav = styled.nav`
    height: 200px;
    width: 100%;
    background: ${props => props.theme.colors.red}

    & ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & li {
            list-style: none;
        }
    }

`;

const NavBar = props => (
    <Nav>

    </Nav>
)