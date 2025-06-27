const linkResolver = require('./src/utils/linkResolver.js')

require('dotenv').config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: `The Great Sync JavaScript visual mental model`,
        description: `Learn Javascript visually using effective memory techniques. The Great Sync Javascript mental model will help you understand difficult concepts.`,
        author: `Dev Kylo`,
        siteUrl: 'https://thegreatsync.com',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-open-graph-images`,
        `gatsby-transformer-remark`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://thegreatsync.com/',
                sitemap: 'https://thegreatsync.com/sitemap-pages.xml',
                policy: [{ userAgent: '*', allow: '/', disallow: ['/workshops'] }],
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'thegreatsync',
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
                linkResolver: doc => linkResolver(doc),
            },
        },
        {
            resolve: `gatsby-remark-prismjs`,
        },
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                createLinkInHead: true,
                exclude: [
                    `/__generated/*`,
                    `/unsubscribed/`,
                    `/404/`,
                    `/404.html`,
                    `/downloads/*`,
                    `/thankyou/`,
                    `/posts/testpost`,
                    `/workshops`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'UA-198198278-1', // Google Analytics / GA
                    // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/, // See below to configure properly
                },
            },
        },
        `gatsby-plugin-netlify`,
    ],
}
