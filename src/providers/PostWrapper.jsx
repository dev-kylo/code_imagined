import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayersManager } from 'react-layers-manager'
import { MantineProvider } from '@mantine/core'
import SEO from '../layout/seo'
import Layout from '../layout/layout'
import { theme } from '../theme'
import ModalContext from '../context/toggle'
import '../utils/fontawesome'
import Footer from '../components/layout/footer/footer.styled'
import SignUp from '../features/signup/signup'

import TopNav from '../components/layout/topnav/topNav'
import { UserProvider } from '../context/user'

const PostWrapper = ({ postTitle, description, postTheme, children, postSchema }) => {
    return (
        <ThemeProvider theme={theme}>
            <MantineProvider theme={{ fontFamily: 'Open Sans' }}>
                <SEO title={postTitle} description={description} postSchema={postSchema} />

                <LayersManager>
                    <Layout postTheme={postTheme}>
                        <UserProvider>
                            <ModalContext>
                                <TopNav />

                                <SignUp />

                                {children}
                                <Footer dark />
                            </ModalContext>
                        </UserProvider>
                    </Layout>
                </LayersManager>
            </MantineProvider>
        </ThemeProvider>
    )
}

export default PostWrapper
