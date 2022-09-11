import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import Drawer from "../components/UI/drawer";
import { Link } from "gatsby";
import { H2 } from "../components/UI/headings.styled";
import { TextContainer } from "../components/UI/textContainer";


const RetakeSuccess = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Congrats, you are enrolled!</PageTitle>
        <TextContainer>
            <H2>Flying Ships & Object Cloning Short Course</H2>
            <p>Expect to receive the first email within 24 hours. Remember to check your SPAM / Promotions folders, and whitelist kylo@thegreatsync.com</p>
        </TextContainer>
        </Providers>
    )
}

export default RetakeSuccess;