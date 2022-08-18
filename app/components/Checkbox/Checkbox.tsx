import React, {FC, InputHTMLAttributes} from 'react';
import style from './Checkbox.module.scss';


interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    isSmall?: boolean,
}

const Checkbox: FC<ICheckbox> = ({className, isSmall, children, ...rest}) => {
    return (
        <label className={`${style.checkboxItem} ${className}`} htmlFor={`${children}`}>
            <input
                className={style.checkboxItem__input}
                id={`${children}`}
                type="checkbox"
                {...rest}
            />
            <div className={style.checkbox}></div>
            <div
                className={`${style.checkboxItem__title} ${isSmall && style.checkboxItem__title_form}`}
            >
                {children}
            </div>
        </label>
    );
}

export default Checkbox;