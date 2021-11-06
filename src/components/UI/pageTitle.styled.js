import { H1 } from "./headings.styled"
import styled from 'styled-components';
import React from "react";


const TitleContainer = styled.div`
    background-color: ${({theme, postTitle}) => postTitle? theme.colors.navy : theme.colors.red};
    margin: auto;
    text-align: center;
    height: 20rem;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
        text-align: center;
    }
`

const PageTitle = props => (
    <TitleContainer postTitle={props.postTitle}>

            <H1>{props.children}</H1>
     
    </TitleContainer>
)

export default PageTitle;