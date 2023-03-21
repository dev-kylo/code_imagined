import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Box, Button } from "rebass/styled-components"
import { Label, Input, Textarea } from "@rebass/forms/styled-components"
import styled from "styled-components"

const HoneyInput = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 1px;
`

const Slice_Form = ({ slice }) => {
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
          const form = edges.find(
            edge => formId === +edge.node.data.form_id.text
          )
          if (!form) return null
          const {
            form_title,
            submission_complete_message,
            submit_button_text,
            text,
            body,
          } = form.node.data
          console.log(text)
          const title = form_title.text.replace(/\s/g, "")
          return (
            <Box
              as="form"
              data-netlify="true"
              name={title}
              method="POST"
              mt={4}
              action={`/success?msg=${encodeURIComponent(
                submission_complete_message.text
              )}`}
            >
              <input type="hidden" name="form-name" value={title} />
              <Flex flexDirection="column" mx={-2} mb={0}>
                <Box width={1} px={2}>
                  {body.map(edge => {
                    const {
                      input_type,
                      label_text,
                      placeholder_text,
                      required,
                    } = edge.primary
                    console.log(input_type, placeholder_text)
                    return (
                      <Box key={edge.id} width={1} px={2}>
                        <Label mb="0.4rem" htmlFor="improved">
                          {label_text.text}
                        </Label>
                        <Textarea
                          id={edge.id}
                          name={edge.id}
                          rows="4"
                          required={required}
                        />
                      </Box>
                    )
                  })}

                  <HoneyInput>
                    <Input id="honey" name="honey" type="honey" />
                  </HoneyInput>

                  <Box>
                    <Flex width="100%" justifyContent="center">
                      <Button variant="signup">
                        {submit_button_text.text || "Submit"}
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          )
        }}
      />
    )
  } else return null
}

export default Slice_Form

export const query = graphql`
  fragment PostDataBodyForm on PrismicPostDataBodyForm {
    primary {
      form_id
    }
  }
`
