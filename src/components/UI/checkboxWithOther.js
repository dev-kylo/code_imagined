import React, { useState } from 'react'
import { Checkbox, Group } from '@mantine/core'
import { Label, Input } from '@rebass/forms/styled-components'
import { Box } from 'rebass/styled-components'

const CheckboxWithOther = ({ label, name, value, onChange, otherValue, onOtherChange }) => {
    const [otherSelected, setOtherSelected] = useState(false)

    const handleOtherSelected = e => {
        setOtherSelected(e.target.checked)
    }

    return (
        <Box width={1} px={2} pb={4}>
            <Label mb="0.4rem" htmlFor="experience">
                Which statements are true?
            </Label>
            <Group mt="lg">
                <Checkbox value="true" id="raw_beginner" name="raw_beginner" label="I am a raw beginner " />
                <Checkbox value="true" id="struggle_syntax" name="struggle_syntax" label="I struggle with syntax" />
                <Checkbox
                    value="true"
                    id="struggle_syntax"
                    name="struggle_syntax"
                    label="Other"
                    onChange={handleOtherSelected}
                />
            </Group>
            {otherSelected && (
                <Input required mt={2} id="other" name="other" type="text" placeholder="Please elaborate..." />
            )}
        </Box>
    )
}

export default CheckboxWithOther
