import React, {FC, useState} from 'react';
import Select, {SingleValue} from "react-select";
import {IOption} from "@/models/IOption";
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";

interface CustomSelectProps {
    options: IOption[],
    placeholder: string,
    value: string | IOption | undefined,
    onChange?: any,
    error?: any,
    disabled?: boolean
}

const CustomSelect: FC<CustomSelectProps> = ({error, disabled, ...rest}) => {
    return (
        <>
            <Select
                isSearchable={false}
                classNamePrefix="select"
                isDisabled={disabled}
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error}</div>}
        </>
    );
}

export default CustomSelect;