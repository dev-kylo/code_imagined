import React from 'react'
import '../utils/fontawesome'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import SignUp from '../features/signup/signup.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import SignUpContainerButton from '../features/signup/signUpContainerButton'
// import Form from "../components/UI/signup-form";

const Subscribe = () => {
    return (
        <Providers>
            <PageTitle postTitle>Join the waiting list for The Syncer Program</PageTitle>
            <TextContainer>
                <p>
                    You will be the first to know when doors open once more. In the meantime I will send a taster of The
                    Great Sync.
                </p>
                <SignUpContainerButton />
                {/* <Form /> */}
            </TextContainer>
            <SignUp />
        </Providers>
    )
}

export default Subscribe
