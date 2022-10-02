import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import Drawer from "../components/UI/drawer";
import { Link } from "gatsby";
import { H2 } from "../components/UI/headings.styled";
import { TextContainer } from "../components/UI/textContainer";


const Success = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const msg = urlParams.get('msg')
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Thank you for submitting!</PageTitle>
        <TextContainer>
            <p>{decodeURIComponent(msg)}</p>
        </TextContainer>
        </Providers>
    )
}

export default Success;