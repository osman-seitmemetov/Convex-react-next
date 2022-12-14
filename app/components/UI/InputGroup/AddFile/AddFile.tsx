import React, {FC, InputHTMLAttributes} from 'react';
import style from './AddFile.module.scss';
import AddFileItem from "./AddFileItem/AddFileItem";

interface AddFileProps extends InputHTMLAttributes<HTMLInputElement> {
    files?: File[]
}

const AddFile: FC<AddFileProps> = ({className, name, files, ...rest}) => {
    console.log("filec", files)
    return (
        <>
            <div className={`${style.add} ${className}`}>
                <input
                    className={style.input}
                    type="file"
                    id={name}
                    {...rest}
                />

                <label className={style.label} htmlFor={name}>
                    <svg className={style.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.84747 2.49556C9.40844 0.93317 11.9411 0.933169 13.5032 2.49527C15.0252 4.01731 15.0643 6.46078 13.6203 8.03008L13.4948 8.16166L7.62816 14.0271L7.60378 14.0473C6.62962 14.9251 5.12696 14.8953 4.18871 13.9571C3.30936 13.0777 3.22795 11.7026 3.94447 10.7315C3.96004 10.7012 3.97887 10.672 4.00101 10.6446L4.03671 10.6049L4.09465 10.5464L4.18871 10.4478L4.19065 10.4497L9.14781 5.48015C9.32508 5.3024 9.60284 5.2859 9.79877 5.43087L9.85492 5.47921C10.0327 5.65649 10.0492 5.93424 9.90419 6.13017L9.85585 6.18632L4.79278 11.2617C4.31435 11.8454 4.34761 12.7083 4.89254 13.2532C5.44525 13.8059 6.32502 13.8323 6.90887 13.3322L12.7973 7.44521C13.9677 6.27344 13.9677 4.37395 12.7961 3.20237C11.6611 2.06741 9.84303 2.03194 8.66538 3.09597L8.55345 3.20237L8.54509 3.21191L2.18754 9.56946C1.99228 9.76473 1.67569 9.76473 1.48043 9.56946C1.30292 9.39195 1.28678 9.11418 1.43202 8.91844L1.48043 8.86236L7.84635 2.49527L7.84747 2.49556Z" />
                    </svg>

                    <span className={style.title}>Прикрепить файл</span>
                </label>
            </div>

            {files && files.map(file => <AddFileItem key={file.name} file={file} />)}
        </>
    );
}

export default AddFile;