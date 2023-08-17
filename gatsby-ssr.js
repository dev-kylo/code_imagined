/* eslint-disable react/no-unstable-nested-components */
// Example gatsby-browser.js and gatsby-ssr.js file

import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'

function App({ children }) {
    return (
        <PrismicProvider internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
            {children}
        </PrismicProvider>
    )
}
