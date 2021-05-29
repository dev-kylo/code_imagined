
import React, { useState } from 'react';
import { Flex, Box } from 'rebass/styled-components';
import Modal from './modal.styled';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import FormResult from './signup-result';
import Form from './signup-form';
import MageFunk from '../../content/illustrations/mage/mage';

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
                <Box p="1rem 0" pl={['0', '0', '0.5rem', '2rem']} width={[1, 1, 2/3, 2/3]} >
                    {formStatus.formSubmitted ? <FormResult heading={formStatus.submitHeading} text={formStatus.submitMessage}/> : <Form submit={handleSubmit}/>}
                </Box>
            </Flex>
        </Modal>
)
                };

export default SignUp;

