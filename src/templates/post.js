import React from 'react';
import styled from 'styled-components';
import Providers from '../providers/Providers';
import PageTitle from '../components/UI/pageTitle.styled';
import { SliceZone } from '@prismicio/react';
import { graphql, Link } from 'gatsby'
import { TextContainer } from '../components/UI/textContainer';
import { components } from '../slices';
import PostWrapper from '../providers/PostWrapper';



export const PostTemplate = ({title, html}) => (
  <>
  <PageTitle postTitle>{title}</PageTitle>
  <TextContainer>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={ { __html: html } }
      />
  </TextContainer>
  </>
)

export default function Post({
  data
}) {

  if (!data) return null;
  const post = data.prismicPost.data
  const title = post.title.text || 'Untitled';
  const desc = post.short_desc.text;

  return (
    <PostWrapper 
      postTheme={true}
      postTitle={title}
      description={desc}
    >
       <PageTitle postTitle>{title}</PageTitle>
      <TextContainer>
      <SliceZone slices={post.body} components={components} />
      </TextContainer>
    </PostWrapper>
  );
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    prismicPost(id: { eq: $id }) {
      id
      uid
      type
      data {
        published
        title {
          text
        }
        short_desc {
          text
        }
        body {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ...PostDataBodyImage 
          ...PostDataBodyText
        }
      }
    }
  }
  
`
