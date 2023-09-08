import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

export const StyledButton = styled.button`
    background: ${props => props.theme.colors.red};
    color: white;
    display: inline-block;
    border: none;
    padding: ${({ size }) => (size === 'small' ? '0.5rem 2rem' : '1rem 2rem')};
    /* margin: 1.5em 0; */
    text-decoration: none;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
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

export const Button = ({ children, clicked, link, fullWidth, style = {}, size = 'medium', type = 'link' }) => {
    const clickHandler = e => {
        e.preventDefault()
        clicked()
    }

    if (link && type === 'link')
        return (
            <Link to={link}>
                <StyledButton size={size} style={style} fullWidth={fullWidth}>
                    {children}
                </StyledButton>
            </Link>
        )
    if (link && type === 'external')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <StyledButton size={size} fullWidth={fullWidth} style={style}>
                    {children}
                </StyledButton>
            </a>
        )
    if (link && type === 'download')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link} download>
                <StyledButton size={size} fullWidth={fullWidth} style={style}>
                    {children}
                </StyledButton>
            </a>
        )

    return (
        <StyledButton size={size} fullWidth={fullWidth} style={style} onClick={e => clickHandler(e)}>
            {children}
        </StyledButton>
    )
}
