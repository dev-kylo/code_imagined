/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
// Example gatsby-browser.js and gatsby-ssr.js file
import './src/stylesheets/nightowl_prism_theme.css'
import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { MantineProvider } from '@mantine/core'

function App({ children }) {
    return (
        <PrismicProvider internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
        </PrismicProvider>
    )
}
