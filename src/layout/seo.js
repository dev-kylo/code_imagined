import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const mainTitle = title ? `${title}` : site.siteMetadata.title
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={mainTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: mainTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: `https://thegreatsync.com/og-image/index.png`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `@kylorobs`,
                },
                {
                    name: `twitter:title`,
                    content: mainTitle,
                },
                {
                    name: `twitter:description`,
                    content: `Learn Javascript visually using memory techniques`,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default SEO
