import React, {FC, useState} from 'react';
import MaskedInput from "react-maskedinput";
import DatePicker from "react-datepicker";
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";

interface InputDateProps {
    dateFormat: string,
    placeholder: string,
    mask: string,
    error?: any,
    onChange?: any,
    startDate: Date | null
}

const InputDate: FC<InputDateProps> = ({dateFormat, placeholder, mask, error, onChange, startDate, ...rest}) => {
    // const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <>
            <DatePicker
                selected={startDate}
                // onChange={(date: Date | null) => setStartDate(date)}
                onChange={onChange}
                dateFormat={dateFormat}
                placeholderText={placeholder}
                customInput={
                    <MaskedInput mask={mask} placeholder={placeholder}/>
                }
                className={`input-date ${error && styles.input_error}`}
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error}</div>}
        </>
    );
}

export default InputDate;