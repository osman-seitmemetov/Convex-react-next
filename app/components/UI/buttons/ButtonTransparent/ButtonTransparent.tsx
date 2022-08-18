import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './ButtonTransparent.module.scss';
import Link from "next/link";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    link?: string
}

const ButtonTransparent: FC<IButton> = ({className, link, children, ...rest}) => {
    return (
        <>
            {link
                ? <Link href={link}>
                    <div className={`${className} ${style.button}`}>{children}</div>
                </Link>
                : <button {...rest} className={`${className} ${style.button}`}>{children}</button>
            }
        </>
    );
}

export default ButtonTransparent;