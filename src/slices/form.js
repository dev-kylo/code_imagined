/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Button } from 'rebass/styled-components'
import { Label, Input, Textarea } from '@rebass/forms/styled-components'
import styled from 'styled-components'
import CheckboxWithOther from '../components/UI/checkboxWithOther'
import { UserContext } from '../context/user'

const InvisibleInput = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 1px;
`

function formatName(str) {
    return str.replace(/\s+/g, '_').toLowerCase()
}

const StyledForm = styled.div`
    form {
        textarea {
            border-right: 0 !important;
            border-top: none;
            border-left: none;
            // border-bottom: none;
            font-family: inherit;
        }
        label:not([for*='checkbox']) {
            font-family: 'Passion One', serif !important;
            font-size: 1.3rem;
            font-weight: 100;
            line-height: 1.2;
            letter-spacing: 0.02em;
        }
    }
`

const Slice_Form = ({ slice }) => {
    const { userId } = useContext(UserContext)

    console.log({ userId })

    if (slice) {
        const formId = slice.primary.form_id

        return (
            <StaticQuery
                query={graphql`
                    query FormQuery {
                        allPrismicForm {
                            edges {
                                node {
                                    data {
                                        body {
                                            ... on PrismicFormDataBodyTextInput {
                                                id
                                                primary {
                                                    label_text {
                                                        text
                                                    }
                                                    placeholder_text {
                                                        text
                                                    }
                                                    required
                                                    input_type
                                                }
                                            }
                                        }
                                        form_id {
                                            text
                                        }
                                        form_title {
                                            text
                                        }
                                        submission_complete_message {
                                            text
                                        }
                                        submit_button_text {
                                            text
                                        }
                                        text {
                                            text
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    const { edges } = data.allPrismicForm
                    const form = edges.find(edge => formId === +edge.node.data.form_id.text)
                    if (!form) return null
                    const { form_title, submission_complete_message, submit_button_text, body } = form.node.data
                    const title = form_title.text.replace(/\s/g, '')
                    return (
                        <StyledForm>
                            <Box
                                as="form"
                                data-netlify="true"
                                name={title}
                                method="POST"
                                mt={4}
                                action={`/success?msg=${encodeURIComponent(submission_complete_message.text)}`}
                            >
                                <input type="hidden" name="form-name" value={title} />
                                <Flex flexDirection="column" mx={-2} mb={0}>
                                    {Number(formId) === 832386432234 && (
                                        <>
                                            <CheckboxWithOther
                                                label="Does this course outline meet expectations?"
                                                checkboxes={[
                                                    {
                                                        optionValue: 'true',
                                                        optionName: 'course_outline_meets_expectations_true',
                                                        optionLabel: 'Yes',
                                                    },
                                                    {
                                                        optionValue: 'false',
                                                        optionName: 'course_outline_meets_expectations_false',
                                                        optionLabel: 'No',
                                                    },
                                                ]}
                                            />

                                            <CheckboxWithOther
                                                label="Which mediums are your preferred way of learning?"
                                                checkboxes={[
                                                    {
                                                        optionName: 'course_outline_medium_preference_video',
                                                        optionLabel: 'Watching videos',
                                                    },
                                                    {
                                                        optionName: 'course_outline_medium_preference_video_text',
                                                        optionLabel: 'Reading text',
                                                    },
                                                    {
                                                        optionName: 'course_outline_medium_preference_audio',
                                                        optionLabel: 'Listening to audio transcription',
                                                    },
                                                    {
                                                        optionName:
                                                            'course_outline_medium_preference_interactive_editor',
                                                        optionLabel: 'Playing in an interactive code editor',
                                                    },
                                                ]}
                                            />
                                            <CheckboxWithOther
                                                label={
                                                    <span>
                                                        Next year I will be launching a brand new program called{' '}
                                                        <span style={{ color: 'red' }}>Break Through JavaScript</span>,
                                                        which extends Imagine JavaScript. The focus is on building
                                                        applications without a tutorial. It will involve live coaching
                                                        sessions and code reviews, while building increasingly
                                                        challenging projects.
                                                    </span>
                                                }
                                                checkboxes={[
                                                    {
                                                        optionValue: 'true',
                                                        optionName: 'breakthrough-js-interested-true',
                                                        optionLabel: 'Yes',
                                                    },
                                                    {
                                                        optionValue: 'false',
                                                        optionName: 'breakthrough-js-interested-false',
                                                        optionLabel: 'No',
                                                    },
                                                ]}
                                            />
                                        </>
                                    )}

                                    <Box width={1} px={2}>
                                        {body.map(edge => {
                                            const { label_text, required } = edge.primary

                                            return (
                                                <Box key={edge.id} width={1} px={2}>
                                                    <Label mb="0.4rem" htmlFor={edge.id} style={{ marginTop: '15px' }}>
                                                        {label_text.text}
                                                    </Label>
                                                    <Textarea
                                                        id={edge.id}
                                                        name={formatName(label_text.text)}
                                                        rows="4"
                                                        required={required}
                                                    />
                                                </Box>
                                            )
                                        })}

                                        <Box width={1} px={2} style={{ display: !userId ? 'block' : 'none' }}>
                                            <Label mb="0.4rem" htmlFor="full-name" style={{ marginTop: '15px' }}>
                                                Name
                                            </Label>
                                            <Textarea id="full-name" name="full-name" rows="1" required={!userId} />
                                        </Box>

                                        <Box width={1} px={2} style={{ display: !userId ? 'block' : 'none' }}>
                                            <Label mb="0.4rem" htmlFor="email" style={{ marginTop: '15px' }}>
                                                Email
                                            </Label>
                                            <Textarea id="email" name="email" rows="1" required={!userId} />
                                        </Box>

                                        <Textarea
                                            id="userid"
                                            name="userid"
                                            rows="1"
                                            value={userId || 'none'}
                                            hidden
                                            style={{ display: 'none' }}
                                        />
                                        <Textarea
                                            id="account"
                                            name="account"
                                            rows="1"
                                            value={userId ? `https://app.convertkit.com/subscribers/${userId}` : 'none'}
                                            hidden
                                            style={{ display: 'none' }}
                                        />

                                        <InvisibleInput>
                                            <Input id="honey" name="honey" type="honey" />
                                        </InvisibleInput>

                                        <Box>
                                            <Flex width="100%" justifyContent="center">
                                                <Button variant="signup">{submit_button_text.text || 'Submit'}</Button>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Flex>
                            </Box>
                        </StyledForm>
                    )
                }}
            />
        )
    }
    return null
}

export default Slice_Form

export const query = graphql`
    fragment PageComponentForm on PrismicPageDataBodyForm {
        primary {
            form_id
        }
    }

    fragment PostComponentForm on PrismicPostDataBodyForm {
        primary {
            form_id
        }
    }
    fragment CourseComponentForm on PrismicCourseDataBodyForm {
        primary {
            form_id
        }
    }
    fragment CoursePageComponentForm on PrismicCoursePageDataBodyForm {
        primary {
            form_id
        }
    }
`
