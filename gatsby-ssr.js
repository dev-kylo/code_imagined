/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
// Example gatsby-browser.js and gatsby-ssr.js file

import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
// import { createStylesServer, ServerStyles } from '@mantine/ssr'
// import { renderToString } from 'react-dom/server'
// import { MantineProvider } from '@mantine/core'

function App({ children }) {
    return (
        <PrismicProvider internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
            {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
            {children}
            {/* </MantineProvider> */}
        </PrismicProvider>
    )
}

// optional: you can provide your cache as a first argument in createStylesServer function
// const stylesServer = createStylesServer()

// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
//     const html = renderToString(bodyComponent)
//     setHeadComponents([<ServerStyles html={html} server={stylesServer} />])
//     replaceBodyHTMLString(html)
// }
