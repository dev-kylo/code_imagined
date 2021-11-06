import React, { useState } from "react";
import SEO from '../layout/seo';
import Layout from '../layout/layout';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import Nav from '../components/UI/nav.styled';
import { LayersManager } from 'react-layers-manager'
import ModalContext from '../context/toggle';
import '../utils/fontawesome';
import FadeOnScroll from "../hoc/fadeOnScroll";
import Footer from "../components/UI/footer.styled";
import Drawer from "../components/UI/drawer";


const Providers = (props) => {

  console.log('provider props');
  console.log(props)

  const [isScrollingDown, setScrollingDown] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <FadeOnScroll setScrollDown={ setScrollingDown }>
        <LayersManager>
          <Layout postTheme={props.postTheme}>
            <ModalContext>
              <Nav scrollingDown={isScrollingDown} />
                {props.children}
            </ModalContext>
          </Layout>
        </LayersManager>
      </FadeOnScroll>
      <Footer />
    </ThemeProvider>
  )
}

export default Providers;
