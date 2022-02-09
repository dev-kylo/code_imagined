import { graphql } from "gatsby";
import React from "react";
import Cards from "../components/UI/cards.styled";
//import Drawer from "../components/UI/drawer";
import MainVideo from "../components/UI/mainVideo.styled";
import PageSubtitle from "../components/UI/pageSubtitle.styled";
import PageTitle from "../components/UI/pageTitle.styled";
import SignUp from "../components/UI/signup.styled"
import Providers from "../providers/Providers";



const Resources = () => {

  return (
    <Providers>
        {/* <Drawer posts={posts} /> */}
        <PageTitle>The Great Sync Visual Blogs & Resources</PageTitle>
        <PageSubtitle> A video introduction</PageSubtitle>
        <MainVideo />
        <PageSubtitle> Featured Articles </PageSubtitle>
        <Cards />
        <SignUp />
  </Providers>
)};


export default Resources;

