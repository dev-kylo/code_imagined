import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Container } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import Providers from '../providers/Providers'
import SEO from '../layout/seo'
import { components } from '../slices'
import SignUp from '../features/signup/signup'

export default function Page({ data }) {
    if (!data) return null

    const page = data.prismicPage.data
    const title = page.title.text || 'Untitled'
    const desc = page.short_desc.text

    return (
        <>
            <SEO title={title} description={desc} />
            <Providers>
                <PageTitle postTitle>{title}</PageTitle>
                <Container>
                    <TextContainer>
                        <SliceZone slices={page.body} components={components} />
                    </TextContainer>
                    <SignUp />
                </Container>
            </Providers>
        </>
    )
}

export const query = graphql`
    query PageQuery($id: String) {
        prismicPage(id: { eq: $id }) {
            id
            uid
            type
            tags
            data {
                title {
                    text
                }
                short_desc {
                    text
                }
                body {
                    ... on PrismicSliceType {
                        id
                        slice_label
                        slice_type
                    }
                    ...PageComponentImage
                    ...PageComponentText
                    ...PageComponentCode
                    ...PageComponentGallery
                    ...PageComponentButton
                    ...PageComponentVideo
                    ...PageComponentSignUp
                    ...PageComponentForm
                }
            }
        }
    }
`
