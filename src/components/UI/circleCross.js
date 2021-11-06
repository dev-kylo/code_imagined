
import React from 'react';
import styled from "styled-components";


const CircleCross = styled.div`
    width: 56px;
    height: 56px;
    position: relative;
    border-radius: 50%;
    border: 2px solid pink;
    cursor: pointer;
    z-index:1000000000;
    background: ${props => props.theme.colors.background};

::before, ::after {
    content: '';
    position: absolute;
    width: 42px;
    height: 8px;
    background-color: white;
    border-radius: 0;
    top: 24px;
    z-index: 0;
    font-weight: bold;
}

::before {
    left: 7px;
}

::after {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    transform: rotate(-90deg);
    right: 7px;
}
`

const Container = styled.div`
    width: 100%;
    height: auto;
    z-index:10000000;   
`

const CircleCrossIcon = (props) => {

    if (props.hide) return null;
    
return (
        <button onClick={props.onClick}>
            <Container>
                <CircleCross />
            </Container>
        </button>
)
}

export default CircleCrossIcon;