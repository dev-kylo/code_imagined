import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import ModalContext from '../context/toggle'
import '../utils/fontawesome'
import Footer from '../components/layout/footer/footer.styled'
import SignUp from '../features/signup/signup.styled'

import TopNav from '../components/layout/topnav/topNav'

const PostWrapper = ({ postTitle, description, postTheme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO title={postTitle} description={description} />

            <LayersManager>
                <Layout postTheme={postTheme}>
                    <ModalContext>
                        <TopNav />

                        <SignUp />
                        {children}
                    </ModalContext>
                </Layout>
            </LayersManager>

            <Footer dark />
        </ThemeProvider>
    )
}

export default PostWrapper
