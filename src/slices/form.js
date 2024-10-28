/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Button } from 'rebass/styled-components'
import { Label, Input, Textarea } from '@rebass/forms/styled-components'
import styled from 'styled-components'
import CheckboxWithOther from '../components/UI/checkboxWithOther'
import { UserContext } from '../context/user'
import { P } from '../components/UI/text.styled'

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
    const [interested, setInterested] = React.useState(null)

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
                                                        optionLabel: 'Yes, the outline sounds great',
                                                    },
                                                    {
                                                        optionValue: 'false',
                                                        optionName: 'course_outline_meets_expectations_false',
                                                        optionLabel: 'No, the outline is disappointing',
                                                    },
                                                ]}
                                            />
                                            <P
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: '16px',
                                                    lineHeight: '28px',
                                                    marginTop: 0,
                                                    paddingTop: 0,
                                                    marginBottom: '1rem',
                                                    marginLeft: '0.5rem',
                                                }}
                                            >
                                                A few weeks ago I told you about the learning system I use, and which
                                                Imagine JavaScript is based on:{' '}
                                                <a
                                                    style={{
                                                        fontFamily: '"Passion One", serif',
                                                        fontSize: '1.3rem',
                                                        // textDecoration: 'none',
                                                    }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://thegreatsync.com/courses/3-steps-to-confidence/the-great-sync-learning-system-roadmap"
                                                >
                                                    See, Build & Peg Learning System"
                                                </a>
                                            </P>
                                            <CheckboxWithOther
                                                label="Did you enjoy the Learning System & Roadmap?"
                                                checkboxes={[
                                                    {
                                                        optionName: 'roadmap_enjoyed_yes',
                                                        optionLabel: 'Yes I enjoyed it',
                                                    },
                                                    {
                                                        optionName: 'roadmap_enjoyed_no',
                                                        optionLabel: 'No I did not',
                                                    },
                                                    {
                                                        optionName: 'roadmap_enjoyed_not_yet',
                                                        optionLabel: 'Have not read it yet',
                                                    },
                                                    {
                                                        optionName: 'roadmap_enjoyed_didnt_know',
                                                        optionLabel: 'First time I am hearing about it',
                                                    },
                                                ]}
                                            />
                                            <P
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: '16px',
                                                    lineHeight: '28px',
                                                    marginTop: 0,
                                                    paddingTop: 0,
                                                    marginLeft: '0.5rem',
                                                }}
                                            >
                                                Did you know, Imagine JavaScript has a follow-up part-time coaching
                                                program, called{' '}
                                                <span
                                                    style={{
                                                        color: '#ab3428',
                                                        fontFamily: '"Passion One", serif',
                                                        fontSize: '1.3rem',
                                                    }}
                                                >
                                                    Break Through JavaScript - build without a tutorial in 40 days
                                                </span>
                                                .
                                                <br /> It focusses on applying your mental model and gaining the
                                                confidence to build applications from scratch. It involves weekly live
                                                coaching sessions, code reviews and fundamentals revision. By the end
                                                you will have portfolio-ready vanilla JS applications 🏆. The price will
                                                be $1499, starting in Feb/March 2025.
                                            </P>
                                            <br />
                                            <br />
                                            <CheckboxWithOther
                                                label=" Would you be interested in joining?"
                                                checkboxes={[
                                                    {
                                                        optionValue: 'true',
                                                        optionName: 'breakthrough-js-interested-true',
                                                        optionLabel: 'Yes I am interested in Break Through JavaScript',
                                                        optionCb: e => {
                                                            if (e.target.checked) setInterested(true)
                                                            else if (!e.target.checked) setInterested(null)
                                                        },
                                                    },
                                                    {
                                                        optionValue: 'false',
                                                        optionName: 'breakthrough-js-interested-false',
                                                        optionLabel: 'No I am not interested',
                                                        optionCb: e => {
                                                            if (e.target.checked) setInterested(false)
                                                            else if (!e.target.checked) setInterested(null)
                                                        },
                                                    },
                                                ]}
                                            />
                                        </>
                                    )}

                                    <Box
                                        width={1}
                                        px={2}
                                        mb={4}
                                        style={{ display: interested !== null && !interested ? 'block' : 'none' }}
                                    >
                                        <Label mb="0rem" htmlFor="breakthrough-js-interested-false-explanation">
                                            Mind explaining why not?
                                        </Label>
                                        <Textarea
                                            id="breakthrough-js-interested-false-explanation"
                                            name="breakthrough-js-interested-false-explanation"
                                            rows="2"
                                            required={interested !== null && !interested}
                                        />
                                    </Box>

                                    <CheckboxWithOther
                                        hide={!interested}
                                        label="I will be running a discounted beta release in February, limited to 5 students. Can I contact you to discuss reserving your spot?"
                                        checkboxes={[
                                            {
                                                optionValue: 'true',
                                                optionName: 'breakthrough-js-waiting-for-followup',
                                                optionLabel: 'Yes, I look forward to your email',
                                            },
                                            {
                                                optionValue: 'false',
                                                optionName: 'breakthrough-js-wait-for-main-release',
                                                optionLabel: 'No, I am happy to wait for the main release',
                                            },
                                        ]}
                                    />

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
                                                        rows="2"
                                                        required={required}
                                                    />
                                                </Box>
                                            )
                                        })}

                                        <Box width={1} px={2} style={{ display: !userId ? 'block' : 'none' }}>
                                            <Label mb="0.4rem" htmlFor="full-name" style={{ marginTop: '15px' }}>
                                                Name*
                                            </Label>
                                            <Textarea id="full-name" name="full-name" rows="1" required={!userId} />
                                        </Box>

                                        <Box width={1} px={2} style={{ display: !userId ? 'block' : 'none' }}>
                                            <Label mb="0.4rem" htmlFor="email" style={{ marginTop: '15px' }}>
                                                Email*
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
