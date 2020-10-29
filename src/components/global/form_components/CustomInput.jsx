import React, { useState } from 'react';
//styles
import { CustomInputTag, CustomInputLabel } from './formComponentsStyles';

const CustomInput = ({ disabled = false, label, value, type, name, onChange, index }) => {

    const changeHandler = (e) => {
        // block non-ASCII characters to match english only values requirements
        let value = e.target.value.replace(/[^\x00-\x7F]/g, "");

        if (onChange)
            onChange(name, value, index)
    }

    return (
        <>
            {label ?
                <CustomInputLabel>
                    {label}
                </CustomInputLabel>
                :
                null
            }

            <CustomInputTag
                type={type ? type : "text"}
                value={value ? value : ""}
                name={name ? name : null}
                onChange={changeHandler}
                disabled={disabled}
            />

        </>
    )
}

export default CustomInput;
