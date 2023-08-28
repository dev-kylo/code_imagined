/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from '../components/UI/img'

const Grid = styled.div`
    width: 100%;
    display: grid;
    margin: auto;
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: ${({ cols }) => (cols ? `repeat(${cols}, 1fr)` : ' auto')};
    margin: 3rem 0;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        margin: 1.5rem 0;
    }
`

const GridItem = styled.div`
    align-self: end;
    padding: 0 30px;
    text-align: center;
    small {
        font-family: 'Raleway', sans-serif;
        color: #041440;
    }
`

const Slice_Gallery = ({ slice }) => {
    if (slice) {
        const imageItems = slice.items.map((item, i) => {
            return (
                <GridItem key={i}>
                    <Img
                        maxWidth={item.maxwidth}
                        gatsbyImageData={item.image.gatsbyImageData}
                        altText={item.alt.text}
                    />
                    <small>{item.caption.text}</small>
                </GridItem>
            )
        })

        return <Grid cols={slice.primary.columns}>{imageItems}</Grid>
    }
    return null
}

export default Slice_Gallery

export const query = graphql`
    fragment PostComponentGallery on PrismicPostDataBodyGallery {
        primary {
            columns
            grid
        }
        items {
            alt {
                text
            }
            caption {
                text
            }
            image {
                alt
                url
                gatsbyImageData(placeholder: BLURRED, width: 1200)
            }
        }
    }

    fragment CourseComponentGallery on PrismicCourseDataBodyGallery {
        primary {
            columns
            grid
        }
        items {
            alt {
                text
            }
            caption {
                text
            }
            image {
                alt
                url
                gatsbyImageData(placeholder: BLURRED, width: 1200)
            }
        }
    }

    fragment CoursePageComponentGallery on PrismicCoursePageDataBodyGallery {
        primary {
            columns
            grid
        }
        items {
            alt {
                text
            }
            caption {
                text
            }
            image {
                alt
                url
                gatsbyImageData(placeholder: BLURRED, width: 1200)
            }
        }
    }
`
