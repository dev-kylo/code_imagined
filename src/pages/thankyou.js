import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import styled from 'styled-components';
import { TextContainer } from "../components/templates/post";
import Drawer from "../components/UI/drawer";
import { Link } from "gatsby";
import { H2 } from "../components/UI/headings.styled";


const Thankyou = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Thank you</PageTitle>
        <TextContainer>
            <H2>Whoohooo!</H2>
            <p>Thank you so much! By now you should have received your first introductory email from me.</p>
            
            <p>Please feel free to contact me directly at kylo@thegreatsync.com. I LOVE to connect with fellow JS learners.</p>

            <p> Also keep an eye on <Link to="/workshops">upcoming workshops</Link> I am running.

            </p>
        </TextContainer>
        
        </Providers>
    )
}

export default Thankyou;