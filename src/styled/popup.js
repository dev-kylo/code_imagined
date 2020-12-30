import styled from 'styled-components';
import React from 'react';
import {H2} from '../styled/headings';
import {P} from '../styled/text';

const BackDrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const Modal = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    position: fixed;
    z-index: 500;
    background-color: white;
    width: auto;
    min-width: 40%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 30px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    max-height: 85%;
    overflow-y: scroll;
    z-index: 100000;
`

const Popup = () => (
    <BackDrop>
        <Modal>
            <H2>Join the Mailing List</H2>
            <P> There are so many reasons why.</P>
        </Modal>
    </BackDrop>
);

export default Popup;