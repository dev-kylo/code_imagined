import React from 'react';
import styled from 'styled-components';
import {P} from '../styled/text'

const TextContainer = styled.section `
    width: 70%;
    margin: auto;
    padding: 2em;
    margin-bottom: 1em;
`


const Explainer = () => {
    return (
        <TextContainer>
            <P>Cras turpis sapien, posuere ut fermentum sed, mattis vel tortor. Duis vitae elit in lorem semper ultricies cursus vel nunc. Fusce lacus metus, iaculis quis enim fringilla, porttitor facilisis magna. Vestibulum lacus purus, molestie eget nulla ac, tristique dictum velit. Praesent quis felis dui. Donec tempor auctor erat non dignissim. Sed vel tincidunt augue.</P>
            <P>Morbi sed augue augue. In hac habitasse platea dictumst. Morbi vel mauris non lectus consectetur consequat et quis ligula. Donec eu erat sed enim pretium consequat. In eu efficitur ipsum. Suspendisse gravida, odio in pretium lacinia, ante orci condimentum orci, ut ullamcorper sapien velit sed risus. Phasellus non rutrum nulla, id auctor neque.</P>
        </TextContainer>
    )
}

export default Explainer