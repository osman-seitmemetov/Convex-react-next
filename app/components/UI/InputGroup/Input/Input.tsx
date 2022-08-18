import React, {FC, InputHTMLAttributes} from 'react';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: any
}

const Input: FC<InputProps> = ({error, className, ...rest}) => {
    return (
        <>
            <input
                className={`${style.input} ${error && style.input_error} ${className}`}
                {...rest}
            />
            {error && <div className={style.errorLog}>{error}</div>}
        </>
    );
}

export default Input;