import React from 'react';
import styled from 'styled-components';
import Providers from '../providers/Providers';
import PageTitle from '../components/UI/pageTitle.styled';
import { SliceZone } from '@prismicio/react';
import { graphql, Link } from 'gatsby'
import { TextContainer } from '../components/UI/textContainer';
import { components } from '../slices';



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
  const title = post.title.text || 'Untitled'

  return (
    <Providers postTheme={true}>
       <PageTitle postTitle>{title}</PageTitle>
      <TextContainer>
      <SliceZone slices={post.body} components={components} />
      </TextContainer>
    </Providers>
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

// export const query = graphql`
//   query BlogPostQuery($id: String) {
//     prismicPost(id: { eq: $id }) {
//       id
//       uid
//       type
//       data {
//         published
//         title {
//           text
//         }
//         body {
//           ... on PrismicPostDataBodyImage {
//             id
//             slice_label
//             slice_type
//             primary {
//               display
//               uploaded_image {
//                 alt
//                 gatsbyImageData(placeholder: BLURRED, width: 1200)
//               }
//             }
//           }
//           ... on PrismicPostDataBodyText {
//             id
//             primary {
//               content {
//                 richText
//               }
//             }
//             slice_label
//             slice_type
//           }
//         }

//       }
//     }
//   }
// `

// export const query = graphql`
//   query BlogPostQuery($id: String) {
//     prismicPost(id: { eq: $id }) {
//       _previewable
//       id
//       uid
//       type
//       data {
//         published
//         body {
//           ... on PrismicPostDataBodyCard {
//             id
//             slice_label
//             slice_type
//             items {
//               card_text {
//                 text
//               }
//               title1 {
//                 text
//               }
//               link {
//                 url
//               }
//             }
//           }
//           ... on PrismicPostDataBodyEmbed {
//             id
//             slice_label
//             slice_type
//           }
//           ... on PrismicPostDataBodyForm {
//             id
//             slice_label
//             slice_type
//           }
//           ... on PrismicPostDataBodyGallery {
//             id
//             slice_label
//             slice_type
//           }
//           ... on PrismicPostDataBodyGroupAcc {
//             id
//             slice_label
//             slice_type
//           }
//           ... on PrismicPostDataBodyImage {
//             id
//             slice_label
//             slice_type
//             primary {
//               display
//               uploaded_image {
//                 alt
//                 gatsbyImageData(placeholder: BLURRED, height: 10, width: 1200)
//               }
//             }
//           }
//           ... on PrismicPostDataBodyText {
//             id
//             primary {
//               content {
//                 richText
//               }
//             }
//             slice_label
//             slice_type
//           }
//         }
//         short_desc {
//           text
//         }
//         text {
//           text
//         }
//         title {
//           text
//         }
//       }
//     }
//   }
// `
