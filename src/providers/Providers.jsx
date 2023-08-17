import React, { useState } from 'react'
import '../utils/fontawesome'

import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import FadeOnScroll from '../hoc/fadeOnScroll'
import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import Nav from '../components/layout/topnav/nav.styled'
import ModalContext from '../context/toggle'
import Footer from '../components/layout/footer/footer.styled'
import MenuProvider from '../context/menuContext'

const Providers = ({ postTheme, children }) => {
    const [isScrollingDown, setScrollingDown] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <SEO />

            <MenuProvider>
                <FadeOnScroll setScrollDown={setScrollingDown}>
                    <LayersManager>
                        <Layout postTheme={postTheme}>
                            <ModalContext>
                                <Nav scrollingDown={isScrollingDown} />
                                {children}
                            </ModalContext>
                        </Layout>
                    </LayersManager>
                </FadeOnScroll>
            </MenuProvider>
            <Footer />
        </ThemeProvider>
    )
}

export default Providers
