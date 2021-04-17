import React from 'react';
import styled from 'styled-components';
import fallback from '../images/outline_eci.png'


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2em;

    & img {
        width: 100%;
        height: auto;
    }
`


const Fallback = props => {


    return (
        <Container>
            <img src={fallback} alt="Stencil outline of the Execution Context illustration" />
        </Container>
    )
}

export default Fallback;