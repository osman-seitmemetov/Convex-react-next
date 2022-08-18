import { FC } from "react";
import style from './Notifications.module.scss';
import NotificationsItem from "./NotificationsItem/NotificationsItem";
import Account from "../../components/Account/Account";
import {useAppSelector} from "../../hooks/redux";
import AccountEmpty from "../../components/Account/AccountEmpty/AccountEmpty";
import PictureNotificationsEmpty from "../../components/pictures/PictureNotificationsEmpty";
import {ITabItem} from "../Promocodes/Promocodes";
import AccountTabs from "../../components/Account/AccountTabs/AccountTabs";
import AccountItems from "../../components/Account/AccountItems/AccountItems";

const Notifications: FC = () => {
    const {notifications} = useAppSelector(state => state.notificationsReducer);

    const tabItems: ITabItem[] = [
        {
            title: 'Новые уведомления',
            content: notifications.length > 0
                ? <AccountItems>
                    {notifications.filter(notification => notification.read === false).map(notification =>
                        <NotificationsItem key={notification.id} notification={notification}/>
                    )}
                </AccountItems>
                : <AccountEmpty title="У вас нет новых уведомлений">
                    <PictureNotificationsEmpty />
                </AccountEmpty>
        },
        {
            title: 'Прочитанные уведомления',
            content: notifications.length > 0
                ? <AccountItems>
                    {notifications.filter(notification => notification.read === true).map(notification =>
                        <NotificationsItem key={notification.id} notification={notification}/>
                    )}
                </AccountItems>
                : <AccountEmpty title="У вас нет прочитанных уведомлений">
                    <PictureNotificationsEmpty />
                </AccountEmpty>
        }
    ];

    return (
        <Account title="Уведомления">
            <div className={style.notifications}>
                <AccountTabs items={tabItems} />
            </div>
        </Account>
    );
}

export default Notifications;