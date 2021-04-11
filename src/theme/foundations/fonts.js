import { extendTheme } from "@chakra-ui/react"
// import { themeConstants } from '../theme_constants';
// 2. Call `extendTheme` and pass your custom values

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    p: {
        
    }
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
})



export const theme = extendTheme({
    fonts: {
        heading1: "'Playfair Display', serif",
        heading2: "font-family: 'Jockey One', sans-serif",
        heading3: "'Grandstander', cursive",
        heading4: "'Luckiest Guy', cursive",
        heading5: "'Titan One', cursive",
        heading6: "'Ceviche One', cursive",
        heading7: "'Faster One', cursive",
        par2: "'Ubuntu Mono', monospace",
        par: "'Raleway', sans-serif"
    }
})