/* eslint-disable camelcase */
import { graphql } from 'gatsby'
import React, { useContext } from 'react'
import { Flex } from 'rebass/styled-components'
import { Button } from '../components/UI/button.styled'
import { SignupContext } from '../context/toggle'

const Slice_Signup = ({ slice }) => {
    const showSignUp = useContext(SignupContext).show

    if (slice) {
        console.log(slice)
        const { id } = slice.primary
        let signup = null
        if (id === 'Flying Ships')
            signup = (
                <Flex justifyContent="center">
                    <Button center clicked={showSignUp}>
                        Show me The Great Sync!
                    </Button>
                </Flex>
            )
        return signup
    }
    return null
}

export default Slice_Signup

export const query = graphql`
    fragment PostComponentSignUp on PrismicPostDataBodySignUp {
        primary {
            id
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
