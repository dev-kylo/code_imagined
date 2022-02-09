import { graphql } from "gatsby";
import React from "react";
import Cards from "../components/UI/cards.styled";
import Drawer from "../components/UI/drawer";
import { H2 } from "../components/UI/headings.styled";
import MainVideo from "../components/UI/mainVideo.styled";
import PageSubtitle from "../components/UI/pageSubtitle.styled";
import PageTitle from "../components/UI/pageTitle.styled";
import SignUp from "../components/UI/signup.styled"
import Providers from "../providers/Providers";



const Resources = ({data}) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Providers>
        <Drawer posts={posts} />
        <PageTitle>The Great Sync Visual Blogs & Resources</PageTitle>
        <PageSubtitle> A video introduction</PageSubtitle>
        <MainVideo />
        <PageSubtitle> Featured Articles </PageSubtitle>
        <Cards />
        <SignUp />
  </Providers>
)};


export default Resources;

// export const pageQuery = graphql`
//   query GetAllPostTitles {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 3
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             date
//             path
//             title
//           }
//         }
//       }
//     }

//   }
// `;