import React, { useContext, useState } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Modal from '../../components/UI/modal.styled'
import FormResult from './signup-result'
import SignUpForm from './signup-form'
import MageFunk from '../lander/imageBlocks/mage/mage'
import { getTokenFromURL } from '../../utils/getTokenFromUrl'
import { UserContext } from '../../context/user'
import PlainForm from './plain-form'
import PostSignupBuyNow from './post-signup-buynow'

const SignUp = ({ layout, convertKitTag, borderless, noLastName, submitBtnText }) => {
    const [formStatus, setFormStatus] = useState({
        formSubmitted: false,
        loading: false,
        result: 'success',
        submitHeading: '',
        submitMessage: '',
    })
    const [showBuyNow, setShowBuyNow] = useState(true)

    const { adSource, adStart } = useContext(UserContext)

    const closeBuyNow = () => {
        setShowBuyNow(false)
    }

    const handleSubmit = async info => {
        const isEvent = 'preventDefault' in info;
        if (isEvent) info.preventDefault()
        const vals = isEvent ? info.target.elements : info

        setFormStatus({
            ...formStatus,
            loading: true,
            formSubmitted: true,
            submitHeading: '',
            submitMessage: 'Performing some functional JavaScript magic🧙...',
        })

        const first = vals.fname?.value?.trim() || vals?.fname
        const surname = !noLastName && (vals.sname?.value?.trim() || vals?.sname)
        const email = vals.email?.value?.trim() || vals?.email
        const source = adSource || getTokenFromURL('source', window.location.search) || ''
        const start = adStart || getTokenFromURL('start', window.location.search) || ''

        // const H = vals?.H?.value?.trim() || vals?.H
        // if (typeof H === 'string') return // honey pot field

        const signup = {
            email,
            first_name: first,
            api_secret: process.env.GATSBY_CONVERTKIT_APISECRET,
            fields: {
                last_name: surname || '',
                signup_source: source || '',
                signup_start: start || '',
            },
        }

        try {
            const tag = convertKitTag || process.env.GATSBY_CONVERTKIT_FREE_COURSE_TAG_ID
            const resp = await fetch(`${process.env.GATSBY_CONVERTKIT_BASEURL}/v3/tags/${tag}/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(signup),
            })

            const response = await resp?.json()

            if (!response || !response?.subscription) throw new Error(response?.message)

            setFormStatus({
                submitHeading: `You're almost done, ${first}!`,
                loading: false,
                formSubmitted: true,
                result: 'success',
                submitMessage: 'One last step to go! Please check your emails and confirm 🔥',
            })

            setTimeout(() => setShowBuyNow(true), 2000) // show link to imagine javascript
        } catch (e) {
            console.error(e)
            setFormStatus({
                submitHeading: 'Oh no!',
                loading: false,
                formSubmitted: true,
                result: 'error',
                submitMessage: 'There seems to be an error!',
            })
        }
    }

    const exitSignup = () => {
        setFormStatus({
            submitHeading: '',
            loading: false,
            formSubmitted: false,
            submitMessage: '',
        })
    }

    if (layout === 'plain')
        return (
            <div style={{ position: 'relative', maxWidth: '800px', margin: 'auto' }}>
                {formStatus.loading && <MageFunk invoking style={{ width: '150px' }} centered showText />}
                <PlainForm
                    submit={handleSubmit}
                    loading={formStatus.loading}
                    borderless={borderless}
                    noLastName={noLastName}
                    submitBtnText={submitBtnText}
                >
                    {formStatus.formSubmitted && !formStatus.loading && (
                        <>
                            <FormResult
                                completed
                                result={formStatus?.result}
                                heading={formStatus.submitHeading}
                                text={formStatus.submitMessage}
                            />

                            {showBuyNow && <PostSignupBuyNow exitBuyNow={closeBuyNow} showModal={showBuyNow} />}
                        </>
                    )}
                </PlainForm>
            </div>
        )

    return (
        <Modal hideExitBtn={formStatus.loading} exitCb={() => exitSignup()}>
            <Flex flexWrap="wrap">
                <Box
                    bg="black"
                    height={['0%', '0%', '100%', '100%']}
                    width={[1, 1, 1 / 3, 1 / 3]}
                    sx={{ position: 'absolute', bottom: '0', left: '0' }}
                >
                    <MageFunk invoking={formStatus.loading} mobileHide />
                </Box>
                <Box width={[1, 1, 1 / 3, 1 / 3]} />
                <Box p="1rem 0" pl={['0', '0', '0.5rem', '2rem']} width={[1, 1, 2 / 3, 2 / 3]}>
                    {formStatus.formSubmitted ? (
                        <FormResult
                            heading={formStatus.submitHeading}
                            text={formStatus.submitMessage}
                            completed={formStatus?.result}
                            result={formStatus?.result}
                        />
                    ) : (
                        <SignUpForm submit={handleSubmit} loading={formStatus.loading} />
                    )}
                </Box>
            </Flex>
        </Modal>
    )
}

export default SignUp
