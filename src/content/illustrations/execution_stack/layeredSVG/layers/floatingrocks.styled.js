import React from 'react';
import styled from 'styled-components';
import Rock from '../../../rocks/rock';


const RockContainer = styled.div`
    position: absolute;
    bottom: ${props => props.position.bottom};
    left: ${props => props.position.left};
    transform: ${props => props.position.transform};
    z-index: 2000;
    width: 7%;
`

const FloatingRock = (props) => {

    return (
        <RockContainer position={{...props.position}}>
                <Rock size={props.size} />
        </RockContainer>
    )
}

export default FloatingRock;


