import React, { useState } from 'react'
import { Checkbox, Group } from '@mantine/core'
import { Box } from 'rebass/styled-components'
import { Label, Textarea } from '@rebass/forms/styled-components'

const CheckboxWithOther = ({ label, checkboxes, name, value, onChange, otherValue, disableOther }) => {
    const [otherSelected, setOtherSelected] = useState(false)

    const handleOtherSelected = e => {
        setOtherSelected(e.target.checked)
    }

    return (
        <Box width={1} px={2} pb={4}>
            <Label mb="0.4rem">{label}</Label>
            <Group my="lg">
                {checkboxes?.map(({ optionName, optionLabel }) => (
                    <Checkbox value="true" id={`${optionName}-checkbox`} name={optionLabel} label={optionLabel} />
                ))}
                <Checkbox
                    value="true"
                    id="other-checkbox"
                    name="other-checkbox"
                    label="Other"
                    style={{ display: disableOther ? 'none' : 'block' }}
                    onChange={handleOtherSelected}
                />
            </Group>

            <Box width={1} px={2} style={{ display: !otherSelected ? 'none' : 'block' }}>
                <Label mb="0.4rem" htmlFor="other-id" style={{ marginTop: '15px' }}>
                    Please elaborate
                </Label>
                <Textarea id="other-id" name="other-name-attr" rows="2" required />
            </Box>
        </Box>
    )
}

export default CheckboxWithOther
