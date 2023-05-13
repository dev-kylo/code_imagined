import React from "react"
import Explainer from "../content/text/explainer"
import SvgTextGrid from "../content/svg_text_grid/svgTextGrid"
import SignUp from "../components/UI/signup.styled"
import "../utils/fontawesome"
import Providers from "../providers/Providers"
import Drawer from "../components/UI/drawer"
import Testimonials from "../components/UI/testimonials"
import { useContext } from "react"
import { SignupContext } from "../context/toggle"
import { useEffect } from "react"


const Home = () => {
  const showSignUp = useContext(SignupContext).show;


  const signUpPopup = () => {
    const checkIfAlreadyShown = localStorage.getItem("tgs-modal-shown") === 'true';
    console.log('Sing up')
    if(!checkIfAlreadyShown){
      showSignUp();
      // localStorage.setItem("tgs-modal-shown", true);
    }
  }

  useEffect(() => signUpPopup(), [])



  return (
    <Providers>
      <Drawer />
      <SvgTextGrid />
      <Testimonials />
      <Explainer />
      <SignUp />
    </Providers>
  )
}

export default Home
