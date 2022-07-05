// Burger.styled.js
import React from 'react';
import styled from 'styled-components';


const StyledBurger = styled.button`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) =>  theme.colors.primary};;
  border: none;
  cursor: pointer;
  padding: 0.7rem;
  z-index: 2000;
  border-radius: 4rem;
  transition: background 0.3s ease-in;
  border: 1px solid black;
  &:hover {
    background: ${({ theme }) => theme.colors.red};;
  }
  &:focus {
    outline: none;
  }

  
  div {
    width: 2rem;
    height: 0.4rem;
    background: black;
    border-radius: 5px;
    border: 1px solid black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin: auto;
  
  }
`;

const BurgerMenu = ({ open, click, hide}) => {
    if (hide) return null;
    return (
      <StyledBurger open={open} onClick={click}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  

export default BurgerMenu;