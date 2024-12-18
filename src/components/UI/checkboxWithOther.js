import React, { useState } from 'react'
import { Checkbox, Group } from '@mantine/core'
import { Box } from 'rebass/styled-components'
import { Label, Textarea } from '@rebass/forms/styled-components'

const CheckboxWithOther = ({ label, checkboxes, name, disableOther, hide = false }) => {
    const [otherSelected, setOtherSelected] = useState(false)

    const handleOtherSelected = e => {
        setOtherSelected(e.target.checked)
    }

    return (
        <Box width={1} px={2} pb={3} style={{ display: hide ? 'none' : 'block' }}>
            <Label mb="0.4rem">{label}</Label>
            <Group my="lg">
                {checkboxes?.map(({ optionName, optionLabel, optionCb }) => (
                    <Checkbox
                        value="true"
                        id={`${optionName}-checkbox`}
                        name={optionLabel}
                        label={optionLabel}
                        onChange={optionCb || null}
                    />
                ))}
                <Checkbox
                    value="true"
                    id={`other-checkbox${name}`}
                    name={`other-checkbox${name}`}
                    label="Other"
                    required={!hide && otherSelected}
                    style={{ display: disableOther ? 'none' : 'block' }}
                    onChange={handleOtherSelected}
                />
            </Group>

            <Box width={1} px={2} style={{ display: !hide && !otherSelected ? 'none' : 'block' }}>
                <Label mb="0.4rem" htmlFor={`elaborate-other-checkbox${name}`} style={{ marginTop: '15px' }}>
                    Please elaborate
                </Label>
                <Textarea
                    id={`elaborate-other-checkbox${name}`}
                    name={`elaborate-other-checkbox${name}`}
                    rows="2"
                    required={!hide && otherSelected}
                />
            </Box>
        </Box>
    )
}

export default CheckboxWithOther
