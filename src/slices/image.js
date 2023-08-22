/* eslint-disable camelcase */
import { graphql } from 'gatsby'
import React from 'react'
import Img from '../components/UI/img'

const Slice_Image = ({ slice }) => {
    if (slice) {
        const data = slice.primary
        return (
            <Img
                maxWidth={data.maxwidth}
                gatsbyImageData={data.uploaded_image.gatsbyImageData}
                altText={data.uploaded_image.alt}
            />
        )
    }
    return null
}

export default Slice_Image

export const query = graphql`
    fragment PostComponentImage on PrismicPostDataBodyImage {
        primary {
            maxwidth
            uploaded_image {
                alt
                gatsbyImageData(placeholder: BLURRED, width: 1200)
            }
        }
    }

    fragment CourseComponentImage on PrismicCoursePageDataBodyImage {
        primary {
            maxwidth
            uploaded_image {
                alt
                gatsbyImageData(placeholder: BLURRED, width: 1200)
            }
        }
    }
`
