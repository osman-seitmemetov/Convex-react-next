import React, {FC, ReactNode} from 'react';
import style from './ButtonGroup.module.scss';

interface ButtonGroupProps {
    className?: string,
    children?: ReactNode
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, className }) => {
    return (
        <div className={style.buttonGroup}>{children}</div>
    );
}

export default ButtonGroup;