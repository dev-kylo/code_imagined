import React from "react"
import "../utils/fontawesome"
import styled from "styled-components"
import { Flex, Box, Button } from "rebass/styled-components"
import { Label, Input, Textarea } from "@rebass/forms/styled-components"
import Providers from "../providers/Providers"
import PageTitle from "../components/UI/pageTitle.styled"
import { TextContainer } from "../components/layout/containers/textContainer"
import SEO from "../layout/seo"

const HoneyInput = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 1px;
`

const UnSubscribed = () => {
  return (
    <>
      <SEO title="Opt out of The Syncer Program updates" />
      <Providers>
        <PageTitle>
          You will no longer receive updates on The Syncer Program course.
        </PageTitle>
        <TextContainer>
          <p>
            Thanks for choosing to remain subscribed. In the next few weeks I
            will make sure you don't receive any updates about the release of
            The Syncer Program.
          </p>
          <p>
            While you are here, can you let me know how I can help you? I can
            then make sure you receive the updates that are relevant to you.
          </p>
          <Box as="form" data-netlify="true" name="noupdates" method="POST">
            <input type="hidden" name="form-name" value="noupdates" />
            <Flex flexDirection="column" mx={-2} mb={0}>
              <Box width={1} px={2}>
                <Label mb="0.4rem" htmlFor="improve">
                  How can I help you?
                </Label>
                <Textarea id="improve" name="improve" rows="4" required />
              </Box>
              <HoneyInput>
                <Input id="honey" name="honey" type="honey" />
              </HoneyInput>

              <Box>
                <Flex width="100%" justifyContent="center">
                  <Button variant="signup">Submit</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </TextContainer>
      </Providers>
    </>
  )
}

export default UnSubscribed
