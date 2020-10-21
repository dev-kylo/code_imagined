import React from "react";
import { createGlobalStyle } from "styled-components"


const GlobalLayout = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jockey+One&family=Playfair+Display:wght@900&family=Ubuntu+Mono&display=swap');    
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ceviche+One&family=Faster+One&display=swap');
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: ${props => props.theme.colors.background}
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`

function Layout({ children }) {
    return (
      <React.Fragment>
            <GlobalLayout/>
            {children}
      </React.Fragment>
    )
  }

export default Layout;