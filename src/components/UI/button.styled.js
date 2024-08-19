import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

export const StyledButton = styled.button`
    background: ${({ theme, color }) => theme.colors[color]}};
    color:  ${({ theme, color }) => (color === 'yellow' ? theme.colors.navy : 'white')}};
    display: inline-block;
    border: none;
    padding: ${({ size }) => (size === 'small' ? '0.5rem 2rem' : '1rem 2rem')};
    font-family: ${props => props.theme.fonts.heading1};
    /* margin: 1.5em 0; */
    text-decoration: none;
    width: ${({ fillWidth }) => (fillWidth ? '100%' : 'auto')};
    font-size: 1.4rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, box-shadow 150ms ease-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: 5px -5px ${({ theme, color }) => (color === 'red' ? theme.colors.green : theme.colors.purple)};
    position: relative;
    z-index: 50;

    &:hover,
    button:focus {
        background: ${({ theme, color }) =>
            color === 'red' ? theme.colors.blue : color === 'yellow' ? theme.colors.green : theme.colors.red};
        color: ${({ color }) => (color === 'yellow' ? 'white' : 'black')}
        box-shadow: 7px -7px ${props => props.theme.colors.pink};
    }

    &:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }

    &:active {
        transform: scale(0.99);
    }

    &:disabled {
        background: #a1a1a1;
        box-shadow: 5px -5px #c5dad8;
        cursor: default;
        :hover {
            background: #a1a1a1;
            box-shadow: 5px -5px #c5dad8;
        }
    }
`

export const Button = ({
    children,
    clicked,
    link,
    fullWidth,
    style = {},
    color = 'red',
    size = 'medium',
    type = 'link',
}) => {
    const clickHandler = e => {
        e.preventDefault()
        clicked()
    }

    if (link && type === 'link')
        return (
            <Link to={link}>
                <StyledButton color={color} size={size} style={style} fillWidth={fullWidth}>
                    {children}
                </StyledButton>
            </Link>
        )
    if (link && type === 'external')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <StyledButton color={color} size={size} fullWidth={fullWidth} style={style}>
                    {children}
                </StyledButton>
            </a>
        )
    if (link && type === 'download')
        return (
            <a target="_blank" rel="noopener noreferrer" href={link} download>
                <StyledButton color={color} size={size} fullWidth={fullWidth} style={style}>
                    {children}
                </StyledButton>
            </a>
        )

    if (type === 'submit') {
        return (
            <StyledButton color={color} size={size} fullWidth={fullWidth} style={style} type="submit">
                {children}
            </StyledButton>
        )
    }

    return (
        <StyledButton color={color} size={size} fullWidth={fullWidth} style={style} onClick={e => clickHandler(e)}>
            {children}
        </StyledButton>
    )
}
