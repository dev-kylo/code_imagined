/* eslint-disable camelcase */
import { graphql } from 'gatsby'
import React, { useContext } from 'react'
import { Flex } from 'rebass/styled-components'
import { Button } from '../components/UI/button.styled'
import { SignupContext } from '../context/toggle'
import SignUp from '../features/signup/signup'

const Slice_Signup = ({ slice }) => {
    const showSignUp = useContext(SignupContext).show

    if (slice) {
        console.log(slice)
        const { type, submit_button_text, convertkit_tag_id, borderless } = slice.primary
        let signup = null
        if (type === 'button')
            signup = (
                <Flex justifyContent="center">
                    <Button center clicked={showSignUp}>
                        {submit_button_text || 'Show me The Great Sync!'}
                    </Button>
                </Flex>
            )
        else
            signup = (
                <SignUp
                    layout={type}
                    convertKitTag={convertkit_tag_id}
                    submitBtnText={submit_button_text}
                    borderless={borderless}
                />
            )
        return signup
    }
    return null
}

export default Slice_Signup

export const query = graphql`
    fragment PageComponentSignUp on PrismicPageDataBodySignUp {
        primary {
            type
            submit_button_text
            convertkit_tag_id
            borderless
        }
    }

    fragment PostComponentSignUp on PrismicPostDataBodySignUp {
        primary {
            type
            submit_button_text
            convertkit_tag_id
            borderless
        }
    }

    fragment CourseComponentSignUp on PrismicCourseDataBodySignUp {
        primary {
            id
        }
    }

    fragment CoursePageComponentSignUp on PrismicCoursePageDataBodySignUp {
        primary {
            id
        }
    }
`
