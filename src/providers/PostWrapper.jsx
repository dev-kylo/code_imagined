import React, { useState } from "react";
import SEO from '../layout/seo';
import Layout from '../layout/layout';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import Nav from '../components/UI/nav.styled';
import { LayersManager } from 'react-layers-manager'
import ModalContext from '../context/toggle';
import '../utils/fontawesome';
import Footer from "../components/UI/footer.styled";
import Drawer from "../components/UI/drawer";
import SignUp from "../components/UI/signup.styled";


const PostWrapper = (props) => {

  return (
    <ThemeProvider theme={theme}>
        <SEO title={props.postTitle} description={props.description}/>
        <LayersManager>
          <Layout postTheme={props.postTheme}>
            <ModalContext>
              <Nav/>
              <Drawer />
              <SignUp />
              {props.children}
            </ModalContext>
          </Layout>
        </LayersManager>
      <Footer dark />
    </ThemeProvider>
  )
}

export default PostWrapper;
