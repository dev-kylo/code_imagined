/* eslint-disable camelcase */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'

const Slice_Text = ({ slice }) => {
    const setSubHeadingId = props => {
        const id = props.text.replace(/\W+/g, '-').toLowerCase()
        return <h2 id={id}>{props.children}</h2>
    }

    if (slice) {
        return (
            <div>
                <PrismicRichText
                    field={slice.primary.content.richText}
                    components={{
                        heading2: setSubHeadingId,
                    }}
                />
            </div>
        )
    }
    return null
}

export default Slice_Text

export const query = graphql`
    fragment PageComponentText on PrismicPageDataBodyText {
        primary {
            content {
                richText
            }
        }
    }

    fragment PostComponentText on PrismicPostDataBodyText {
        primary {
            content {
                richText
            }
        }
    }

    fragment CourseComponentText on PrismicCourseDataBodyText {
        primary {
            content {
                richText
            }
        }
    }

    fragment CoursePageComponentText on PrismicCoursePageDataBodyText {
        primary {
            content {
                richText
            }
        }
    }
`
