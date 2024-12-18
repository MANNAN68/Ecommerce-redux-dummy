
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'


import React from 'react'

const SelectComponent = () => {
    return (
        <Select>
            <SelectAction className="w-[20rem]">
                <SelectValue placeholder="Select your option" />
            </SelectAction>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="50">Inside Dhaka</SelectItem>
                    <SelectItem value="100">Outside Dhaka </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectComponent



