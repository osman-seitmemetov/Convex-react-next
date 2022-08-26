import React, {FC, TextareaHTMLAttributes} from 'react';
import style from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    error?: any
}

const Textarea: FC<TextareaProps> = ({error, className, ...rest}) => {
    return (
        <>
            <textarea
                className={`${style.textArea} ${error && style.textArea_error} ${className}`}
                {...rest}
            />

            {error && <div className={style.errorLog}>{error}</div>}
        </>
    );
}

export default Textarea;