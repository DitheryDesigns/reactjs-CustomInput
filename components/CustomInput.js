import './styles/InputField.css';
import React, { useMemo, useState } from 'react';

const CustomInput = ({ label, id, value, onChange, placeholder, type, step, validators }) => {
    const [isInvalid, setIsInvalid] = useState('');

    useMemo(() => {
        //skip validation if validators array invalid
        if (Array.isArray(validators)) {
            //loop through all validator functions with a breakable loop to allow updating the error message
            for (let index = 0; index < validators.length; index++) {
                const validator = validators[index]; //get validator by index
                if (validator(value)) { //verify data against validator
                    setIsInvalid(validator(value)); //if invalid, update error message
                    break; //escape from loop
                }
                setIsInvalid(''); //reset error message if no errors found
            }
        }
    }, [validators, value]); //will be ran only when "validators" or "value" changes. (ie: the user types)

    return (
        <div className='inputFieldWrapper'>
            <label className='inputLabel' htmlFor={id}>{label}</label>
            <input
                type={type || "text"}
                step={step || ""}
                id={id}
                placeholder={placeholder}
                className='inputField'
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <div className='inputErrorWrapper'>{isInvalid}</div>
        </div>);
}

export default CustomInput;
