import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import Nav from '../components/layout/topnav/nav.styled'
import ModalContext from '../context/toggle'
import '../utils/fontawesome'
import Footer from '../components/layout/footer/footer.styled'
import Drawer from '../components/layout/sidenav/drawer'
import SignUp from '../features/signup/signup.styled'
import MenuProvider from '../context/menuContext'

const PostWrapper = ({ postTitle, description, postTheme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO title={postTitle} description={description} />
            <MenuProvider>
                <LayersManager>
                    <Layout postTheme={postTheme}>
                        <ModalContext>
                            <Nav />
                            <Drawer />
                            <SignUp />
                            {children}
                        </ModalContext>
                    </Layout>
                </LayersManager>
            </MenuProvider>
            <Footer dark />
        </ThemeProvider>
    )
}

export default PostWrapper
