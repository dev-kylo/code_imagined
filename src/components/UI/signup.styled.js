
import React, { useContext, useState } from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import Modal from './modal.styled';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import FormResult from './signup-result';
import Form from './signup-form';


const MageContainer = styled.div`
    position: absolute;
    bottom: 50%;
    transform: translate(20%, 50%) scale(1.2);
    objectFit: cover;
    z-index: 1000;
    width: 100%;

    @media (max-width: 500px){
        // position: initial;
        // left: 50%;
        // transform: translate(-50%,50%) scale(0.8);
        display: none;
    }

`


const MageFunk = () => {
    const mageFunk = useStaticQuery(graphql`
        query mage {
            file(relativePath: { eq: "mage.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    return (
        <MageContainer>
            <Img fluid={mageFunk.file.childImageSharp.fluid} alt="Mage Funk character with an invocation orb" />
        </MageContainer>
    )
}

const SignUp = () => {

const [formStatus, setFormStatus] = useState({ 
    formSubmitted: false,
    loading: false,
    submitHeading: '',
    submitMessage: ''
})



const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ 
        ...formStatus,
        loading: true,
        formSubmitted: true,
        submitHeading: '',
        submitMessage: 'Performing some functional magic...'
    })
    
    const first = e.target.elements['fname'].value;
    const sur = e.target.elements['sname'].value;
    const email = e.target.elements['email'].value;
    const response = await addToMailchimp(email, {  FNAME: first, LNAME: sur});
    
    setFormStatus({ 
        submitHeading: response.result === 'success' ? 'Woohoo!' : 'Oh no!',
        loading: false,
        formSubmitted: true,
        submitMessage: response.result === 'success' ? 'Check your email. Make sure to look in your Promotions and Spam folders.' : createErrorMessage(response.msg)
    })


    //    let result;
//    const timer = await setTimeout(() => {
//     setFormStatus({ 
//         submitHeading: result === 'success' ? '' : 'Woohoo!',
//         loading: false,
//         formSubmitted: true,
//         submitMessage: 'Check your email.',  
//     })
//    }, 5000)
    
  }

const createErrorMessage = (str) => {
    if (str.includes('already subscribed'))
        return 'Looks like you are already subscribed!'
    else return str;
}

const exitSignup = () => {
    setFormStatus({ 
        submitHeading: '',
        loading: false,
        formSubmitted: false,
        submitMessage: '',  
    })
}

    return (
        <Modal hideExitBtn={formStatus.loading} smallwindow={formStatus.formSubmitted} exitCb={() => exitSignup()}>
            <Flex flexWrap="wrap">
                <Box bg="black" height={['0%', '0%', '100%','100%']} width={[1,1,1/3, 1/3]}  sx={{ position: 'absolute', bottom: '0', left: '0'}}>
                    {formStatus.formSubmitted ? null : <MageFunk />} 
                </Box>
                <Box width={[1,1, 1/3, 1/3]}></Box>
                <Box p="1rem" pl={['0', '0', '0.5rem', '2rem']} width={[1, 1, 2/3, 2/3]} >
                    {formStatus.formSubmitted ? <FormResult heading={formStatus.submitHeading} text={formStatus.submitMessage}/> : <Form submit={handleSubmit}/>}
                </Box>
            </Flex>
        </Modal>
)
                };

export default SignUp;

