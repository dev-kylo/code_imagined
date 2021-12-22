
import React, { useState } from 'react';
import { Flex, Box } from 'rebass/styled-components';
import Modal from './modal.styled';
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
    const surname = e.target.elements['sname'].value;
    const emailF = e.target.elements['email'].value;
    const honey = e.target.elements['email'].honey;

    console.log(first);
    console.log(surname);
    console.log(emailF);
    if (honey) return;
    const formB = { 'Name': `${first} ${surname}`, 'Email': emailF, 'CustomFields': [
        `FName=${first}`,
        `LName=${surname}`
        `Email=${emailF}`
      ]};
    const pkg ={
        method: 'POST',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify(formB)
    };


    const response = await fetch(`${process.env.GATSBY__MOOSEND_ENDPOINT}${process.env.GATSBY__MOOSEND_INTRO_MAILLIST}/subscribe.json?apikey=${process.env.GATSBY__MOOSEND_API_KEY}`, pkg);
    const result = await response.json();

    setFormStatus({ 
        submitHeading: !result.Error? `You're almost done, ${first}!` : 'Oh no!',
        loading: false,
        formSubmitted: true,
        submitMessage: !result.Error ? "One last step to go! Please check your emails and confirm." : result.Error
    })
    
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
        <Modal hideExitBtn={formStatus.loading}  exitCb={() => exitSignup()}>
            <Flex flexWrap="wrap">
                <Box bg="black" height={['0%', '0%', '100%','100%']} width={[1,1,1/3, 1/3]}  sx={{ position: 'absolute', bottom: '0', left: '0'}}>
                    <MageFunk invoking={formStatus.loading} /> 
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

