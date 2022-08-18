import React, {FC, useState} from 'react';
import Select, {SingleValue} from "react-select";
import {IOption} from "@/models/IOption";
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";

interface CustomSelectProps {
    options: IOption[],
    placeholder: string,
    value: string | IOption | undefined,
    onChange?: any,
    error?: any
}

const CustomSelect: FC<CustomSelectProps> = ({error, ...rest}) => {
    // const [currentOption, setCurrentOption] = useState<string | null>(null);
    //
    // const getValue = () => {
    //     return currentOption
    //         ? options.find(c => c.value === currentOption)
    //         : null
    // }
    //
    // const onChange = (newValue: SingleValue<IOption>/*OnChangeValue<string, boolean>*/) => {
    //     if(newValue) setCurrentOption(newValue.value);
    // }

    return (
        <>
            <Select
                isSearchable={false}
                classNamePrefix="select"
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error}</div>}
        </>
    );
}

export default CustomSelect;