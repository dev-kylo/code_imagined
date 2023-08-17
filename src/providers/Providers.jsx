import React from 'react'
import '../utils/fontawesome'

import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'

import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import Nav from '../components/layout/topnav/nav.styled'
import ModalContext from '../context/toggle'
import Footer from '../components/layout/footer/footer.styled'
import MenuProvider from '../context/menuContext'

const Providers = ({ postTheme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO />

            <MenuProvider>
                <LayersManager>
                    <Layout postTheme={postTheme}>
                        <ModalContext>
                            <Nav />
                            {children}
                        </ModalContext>
                    </Layout>
                </LayersManager>
            </MenuProvider>
            <Footer />
        </ThemeProvider>
    )
}

export default Providers
