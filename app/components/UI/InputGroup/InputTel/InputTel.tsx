import React, {FC, InputHTMLAttributes} from 'react';
import styles from './InputTel.module.scss';
import MaskedInput from "react-maskedinput";

interface InputTelProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: any,
    mask: string,
    disabled?: boolean
}

const InputTel: FC<InputTelProps> = ({error, className, ...rest}) => {
    return (
        <>
            <MaskedInput
                className={`${styles.input} ${error && styles.input_error} ${className}`}
                inputMode="tel"
                type="tel"
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error}</div>}
        </>
    );
}

export default InputTel;