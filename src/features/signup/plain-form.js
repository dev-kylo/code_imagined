/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useRef } from 'react'
import { TextInput } from '@mantine/core'
import styled from 'styled-components'
import { useForm } from '@mantine/form'
import { StyledButton } from '../../components/UI/button.styled'
import Imp from '../lander/imageBlocks/imp/Imp'
import { HoneyInput } from './signup-form'
import { SignupContext } from '../../context/toggle'

const Flex = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Form = styled.form`
    box-shadow: ${props => (!props.withShadow ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none')};
    padding: 1.5rem;
    max-width: 480px;
    margin: 1rem auto;
    position: relative;
    z-index: 2000;
    overflow: hidden;
    min-height: ${props => (props.noLastName ? '200px' : '300px')};
    background: white;
    input,
    label {
        opacity: ${props => (props.loading ? '0.2' : '1')};
        transition: opacity 0.3s ease-in-out;
    }

    button {
        margin-top: 3rem;
    }
`

function PlainForm({ loading, submitBtnText, submit, borderless, noLastName, children }) {
    const form = useForm()
    const [submitted, setSubmitted] = React.useState(false)
    const inputActive = useRef(false)
    const { setActiveUser } = useContext(SignupContext)

    const handleSubmit = vals => {
        setSubmitted(true)
        submit(vals)
    }

    const handleInputInit = () => {
        if (!inputActive.current) {
            inputActive.current = true
            setActiveUser()
        }
    }

    return (
        <Form
            withShadow={borderless}
            loading={loading}
            noLastName={noLastName}
            onSubmit={form.onSubmit(vals => handleSubmit(vals))}
        >
            {children || (
                <>
                    <div className="inputs">
                        <TextInput
                            withAsterisk
                            label="First Name"
                            required
                            size="md"
                            mt="sm"
                            key={form.key('fname')}
                            {...form.getInputProps('fname')}
                            onFocus={handleInputInit}
                        />
                        {!noLastName && (
                            <TextInput
                                withAsterisk
                                label="Last Name"
                                size="md"
                                mt="sm"
                                required
                                key={form.key('sname')}
                                {...form.getInputProps('sname')}
                                onFocus={handleInputInit}
                            />
                        )}
                        <TextInput
                            withAsterisk
                            label="Email"
                            type="email"
                            size="md"
                            required
                            mt="sm"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                            onFocus={handleInputInit}
                        />
                        <HoneyInput>
                            <TextInput
                                hidden
                                label="H"
                                size="md"
                                mt="sm"
                                key={form.key('H')}
                                {...form.getInputProps('H')}
                                onFocus={handleInputInit}
                            />
                        </HoneyInput>
                    </div>
                    <Flex>
                        <StyledButton disabled={loading} type="submit" size="large" color={loading ? 'blue' : 'yellow'}>
                            {loading ? 'Loading...' : submitBtnText || 'Submit'}
                        </StyledButton>
                    </Flex>
                </>
            )}

            {!submitted && !borderless && (
                <Imp style={{ width: '100px', left: 0, bottom: 0, filter: loading ? 'opacity(20%)' : 'none' }} />
            )}
        </Form>
    )
}

export default PlainForm
