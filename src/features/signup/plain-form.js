/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { TextInput } from '@mantine/core'
import styled from 'styled-components'
import { StyledButton } from '../../components/UI/button.styled'
import Imp from '../lander/imageBlocks/imp/Imp'
import { HoneyInput } from './signup-form'

const Flex = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Form = styled.form`
    box-shadow: ${props => (!props.withShadow ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none')};
    padding: 1.5rem;
    max-width: 400px;
    margin: 1rem auto;
    position: relative;
    z-index: 20000;
    overflow: hidden;
    min-height: 300px;

    input,
    label {
        opacity: ${props => (props.loading ? '0.2' : '1')};
        transition: opacity 0.3s ease-in-out;
    }
`

function PlainForm({ loading, submitText, withShadow, submit, children }) {
    return (
        <Form withShadow={withShadow} loading={loading} onSubmit={submit}>
            {children || (
                <>
                    <TextInput withAsterisk label="First Name" size="md" />
                    <TextInput withAsterisk label="Last Name" size="md" mt="sm" />
                    <TextInput withAsterisk label="Email" type="email" placeholder="your@email.com" size="md" mt="sm" />
                    <HoneyInput>
                        <TextInput hidden label="H" size="md" mt="sm" />
                    </HoneyInput>

                    <Flex>
                        <StyledButton disabled={loading} type="submit" size="small" color={loading ? 'blue' : 'red'}>
                            {loading ? 'Loading...' : submitText || 'Submit'}
                        </StyledButton>
                    </Flex>
                </>
            )}

            <Imp style={{ width: '120px', left: 0, bottom: 0, filter: loading ? 'opacity(20%)' : 'none' }} />
        </Form>
    )
}

export default PlainForm
