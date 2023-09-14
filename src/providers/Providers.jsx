import React from 'react'
import '../utils/fontawesome'
import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import ModalContext from '../context/toggle'
import Footer from '../components/layout/footer/footer.styled'

import TopNav from '../components/layout/topnav/topNav'

const Providers = ({ postTheme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO />

            <LayersManager>
                <Layout postTheme={postTheme}>
                    <ModalContext>
                        <TopNav />
                        {children}
                    </ModalContext>
                </Layout>
            </LayersManager>

            <Footer />
        </ThemeProvider>
    )
}

export default Providers
