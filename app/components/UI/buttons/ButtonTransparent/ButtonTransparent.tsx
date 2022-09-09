import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from 'react';
import style from './ButtonTransparent.module.scss';
import Link from "next/link";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    link?: string
}

const ButtonTransparent: FC<IButton & AnchorHTMLAttributes<HTMLAnchorElement>> = ({className, link, children, ...rest}) => {
    return (
        <>
            {link
                ? <Link href={link}>
                    <a
                        className={`${className} ${style.button}`}
                        {...rest}
                    >{children}</a>
                </Link>
                : <button {...rest} className={`${className} ${style.button}`}>{children}</button>
            }
        </>
    );
}

export default ButtonTransparent;