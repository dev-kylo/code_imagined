import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import Drawer from "../components/UI/drawer";
import { TextContainer } from "../components/UI/textContainer";
import { H2 } from "../components/UI/headings.styled";
import { P } from "../components/UI/text.styled";
import { Link } from "gatsby";


const NotFound = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle >Page Not Found</PageTitle>
        <TextContainer>
            <H2>Oh no!</H2>
            <P>The page you are looking for does not seem to exist. It can feel like trying to recall a javascript concept and finding an empty space in your mental model.</P>
            <P>For both these situations, I suggest heading back to <Link to="/">The Great Sync</Link> home page.</P>
        </TextContainer>
        
        </Providers>
    )
}

export default NotFound;