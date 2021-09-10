import React from 'react'
import { getAutomaticTypeDirectiveNames } from 'typescript';

interface IFilterList {
    active:boolean;
    value: string;
    setOnChange: (onChange: string) => void;
}

export const jobFilterList = (props: IFilterList ) => {
    
    const {active, value, setOnChange}=props;

    return (
        <div>
            <label className="filter_bar">
                <input
                    type="checked"
                    checked={active}
                    data-value={value}
                    onChange={(event) => setOnChange(event.target.value)}
                />
            </label>
            
        </div>
    )
}

export default jobFilterList
