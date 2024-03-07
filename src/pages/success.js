import React from "react"
import "../utils/fontawesome"
import Providers from "../providers/Providers"
import PageTitle from "../components/UI/pageTitle.styled"
import { TextContainer } from "../components/layout/containers/textContainer"
import SEO from "../layout/seo"

const Success = () => {
  const isBrowser = typeof window !== "undefined"
  let msg = ""
  if (isBrowser) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    msg = urlParams.get("msg")
  }
  return (
    <>
      <SEO title="Successful submission" />
      <Providers>
        <PageTitle postTitle>Thank you for submitting!</PageTitle>
        <TextContainer>
          <p>{decodeURIComponent(msg)}</p>
        </TextContainer>
      </Providers>
    </>
  )
}

export default Success
