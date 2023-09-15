import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, postSchema }) {
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
                    content: metaDescription,
                },
            ].concat(meta)}
        >
            {postSchema && (
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://thegreatsync.com/posts/${postSchema.uid}"
                        },
                        "headline": "${postSchema.title}",
                        "description": "${postSchema.description}",
                        "image": "${postSchema.imageUrl}",
                        "author": {
                        "@type": "Person",
                        "name": "${site.siteMetadata.author}"
                        },
                        "publisher": {
                        "@type": "Organization",
                        "name": "${site.siteMetadata.title}",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://thegreatsync.com/og-image/logo.png"
                            }
                        },
                        "datePublished": "${postSchema.publishedDate}"
                     }
            `}
                </script>
            )}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default SEO
