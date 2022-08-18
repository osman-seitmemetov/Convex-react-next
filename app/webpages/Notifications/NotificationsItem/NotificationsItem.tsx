import {FC, useState} from "react";
import style from './NotificationsItem.module.scss';
import {INotification} from "../../../models/INotification";
import Arrow from "../../../components/Arrow/Arrow";

interface NotificationsItemProps {
    notification: INotification
    classes?: string
}

const NotificationsItem: FC<NotificationsItemProps> = ({ notification, classes }) => {
    const rootClasses = [
        `${style.item}`
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    !notification.read && rootClasses.push(`${style.item_unread}`);

    return (
        <div className={`${rootClasses.join(' ')} ${isOpen && style.item_active} ${classes}`}>
            <div onClick={handleIsOpen} className={style.head}>
                <div className={style.title}>{notification.title}</div>
                <div className={style.date}>{notification.date}</div>
                <Arrow className={style.arrow} width={18} height={18} />
            </div>

            <div className={style.content}>
                {notification.text}
            </div>
        </div>
    );
}

export default NotificationsItem;