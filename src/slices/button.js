/* eslint-disable camelcase */
import { graphql } from 'gatsby'
import React from 'react'
import { Flex } from 'rebass'
import { Button } from '../components/UI/button.styled'

const Slice_Button = ({ slice }) => {
    if (slice) {
        const { button_link, button_type, button_text } = slice.primary
        return (
            <Flex justifyContent="center">
                <Button
                    type={
                        button_type === 'Download' ? 'download' : button_type === 'External link' ? 'external' : 'link'
                    }
                    link={button_link.url}
                >
                    {button_text.text}
                </Button>
            </Flex>
        )
    }
    return null
}

export default Slice_Button

export const query = graphql`
    fragment PostDataBodyButton on PrismicPostDataBodyButton {
        primary {
            button_type
            button_text {
                text
            }
            button_link {
                url
                target
            }
        }
    }
`
