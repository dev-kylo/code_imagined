import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

export const StyledButton = styled.button`
    background: ${props => props.theme.colors.red};
    color: white;
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 1.5em 0;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, box-shadow 150ms ease-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: 5px -5px ${props => props.theme.colors.green};

    &:hover,
    button:focus {
        background: ${props => props.theme.colors.blue};
        box-shadow: 7px -7px ${props => props.theme.colors.pink};
    }

    &:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }

    &:active {
        transform: scale(0.99);
    }
`

export const Button = ({ children, clicked, link, type = 'link' }) => {
    const clickHandler = e => {
        e.preventDefault()
        clicked()
    }

    console.log(type)

    if (link && type === 'link')
        return (
            <Link to={link}>
                <StyledButton>{children}</StyledButton>
            </Link>
        )
    if (link && type === 'external')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <StyledButton>{children}</StyledButton>
            </a>
        )
    if (link && type === 'download')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link} download>
                <StyledButton>{children}</StyledButton>
            </a>
        )

    return <StyledButton onClick={e => clickHandler(e)}>{children}</StyledButton>
}
