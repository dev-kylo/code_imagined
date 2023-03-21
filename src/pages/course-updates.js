import React from "react"
import Drawer from "../components/UI/drawer"
import PageSubtitle from "../components/UI/pageSubtitle.styled"
import PageTitle from "../components/UI/pageTitle.styled"
import SignUp from "../components/UI/signup.styled"
import Providers from "../providers/Providers"
import { TextContainer } from "../components/UI/textContainer"
import { P } from "../components/UI/text.styled"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const CardStrip = styled(Link)`
  display: block;
  width: 80%;
  max-width: 60em;
  background: ${({ red, theme }) =>
    red ? theme.colors.navy : theme.colors.blue};
  color: white;
  padding: 2em 1em;
  margin: 2em auto;
  border-radius: 2em;
  position: relative;
  text-decoration: none;
  :hover {
    background: ${({ theme }) => theme.colors.white};
    color: black;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    margin: 2.5em auto;
    padding: 0 1em;
    height: 5.5em;
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 1em;
    font-size: 1.5rem;
    @media (max-width: 780px) {
      padding-left: 0.5em;
      font-size: 1.2rem;
    }
  }
`

const CardDate = styled.span`
  position: absolute;
  bottom: 0.2em;
  right: 1em;
  background: ${({ theme }) => theme.colors.red};
  padding: 0.2rem;
  text-decoration: none;
  @media (max-width: 780px) {
    bottom: unset;
    right: unset;
    top: -1rem;
    left: 50%;
    transform: translate(-50%);
  }
`

const CourseUpdates = ({ data }) => {
  const posts = data.allPrismicPost.edges
    .filter(edge => edge.node.tags.includes("courseUpdate"))
    .map(edge => (
      <CardStrip to={`/posts/${edge.node.uid}`}>
        <span>{edge.node.data.title.text}</span>
        <CardDate>{edge.node.data.published}</CardDate>
      </CardStrip>
    ))

  return (
    <Providers>
      {/* <Drawer posts={posts} /> */}
      <Drawer />
      <PageTitle>Course Release Updates For 2023</PageTitle>
      <TextContainer autoHeight>
        <P>
          I am currently building the full online course and community for The
          Great Sync. This is the culmination of YEARS of work.{" "}
        </P>
        <P>
          I use the models every day as a developer, and have taught countless
          students and juniors. This is the first time all of the material is
          consolidated in one place.
        </P>
        <P>
          {" "}
          Included will be visualisations and models (which I call imagimodels)
          of all the main concepts in javascript, along with videos, text and
          code snippets, which will build a complete picture of javascript and
          how everthing fits together. It will break down not only the
          fundamentals, but the patterns for building DRY and SOLID programs,
          which can be applied to any project or application.
        </P>
        <P>
          Make sure you are subscribed to my emails, follow me on Instagram and
          bookmark this page for the upcoming release date.
        </P>
        {/* <MainVideo /> */}
      </TextContainer>
      <PageSubtitle> News & Updates</PageSubtitle>
      {posts}
      <SignUp />
    </Providers>
  )
}

export const query = graphql`
  query CourseUpdatesQuery {
    allPrismicPost {
      edges {
        node {
          uid
          tags
          type
          data {
            title {
              text
            }
            published
          }
        }
      }
    }
  }
`

export default CourseUpdates
