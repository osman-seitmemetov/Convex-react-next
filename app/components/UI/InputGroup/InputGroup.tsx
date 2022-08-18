import React, {FC, ReactNode} from 'react';
import style from './InputGroup.module.scss';


interface IInput {
    title: string,
    disabled?: boolean,
    className?: string,
    name?: string,
    children?: ReactNode
}

const InputGroup: FC<IInput> = ({ title, disabled, className, children, name}) => {
    return (
        <div
            className={disabled
                ? `${style.input} ${className} ${style.input_disabled}`
                : `${style.input} ${className}`
            }
        >
            <label className={style.input__title} htmlFor={name ? name : title}>{title}</label>
            {children}
        </div>
    );
}

export default InputGroup;