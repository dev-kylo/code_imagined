import React from 'react'
import { Flex } from 'rebass'
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core'
import { H2 } from '../../components/UI/headings.styled'
import { P } from '../../components/UI/text.styled'

const FormResult = ({ heading, text, completed, result = 'success' }) => (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {completed && (
            <RingProgress
                sections={[{ value: 100, color: result === 'error' ? 'red' : 'teal' }]}
                label={
                    <Center>
                        <ActionIcon
                            color={result === 'error' ? 'red' : 'teal'}
                            variant="light"
                            radius="xl"
                            size="xl"
                            mt={0}
                        >
                            <Text c={result === 'error' ? 'red' : 'teal'} fw={700} ta="center" size="md">
                                {result === 'error' ? '😔' : '✔️'}
                            </Text>
                        </ActionIcon>
                    </Center>
                }
            />
        )}
        {heading ? <H2 dark>{heading}</H2> : null}
        <P dark>{text}</P>
    </Flex>
)

export default FormResult
