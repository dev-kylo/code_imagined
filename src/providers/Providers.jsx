import React from 'react'
import '../utils/fontawesome'
import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import Layout from '../layout/layout'
import { theme } from '../theme'
import ModalContext from '../context/toggle'
import Footer from '../components/layout/footer/footer.styled'

import TopNav from '../components/layout/topnav/topNav'
import { UserProvider } from '../context/user'

const Providers = ({ postTheme, children, transparentNavBar }) => {
    return (
        <ThemeProvider theme={theme}>
            <LayersManager>
                <Layout postTheme={postTheme}>
                    <UserProvider>
                        <ModalContext>
                            <TopNav transparent={transparentNavBar} />
                            {children}
                            <Footer />
                        </ModalContext>
                    </UserProvider>
                </Layout>
            </LayersManager>
        </ThemeProvider>
    )
}

export default Providers
