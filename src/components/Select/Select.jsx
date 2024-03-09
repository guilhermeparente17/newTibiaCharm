import React from 'react'
import { SelectContainer, SelectData, TitleSelect } from './Select.Elements'

const Select = ({children, setPoints, points, title}) => {
    return (
        <SelectContainer value={points} onChange={e => setPoints(e.target.value)}>
            <TitleSelect>{title}</TitleSelect>
            <SelectData>
                {children}
            </SelectData>
        </SelectContainer>
    )
}

export default Select