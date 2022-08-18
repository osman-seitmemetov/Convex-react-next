import {FC, useEffect} from "react";
import style from './Orders.module.scss';
import AccountEmpty from "@/components/Account/AccountEmpty/AccountEmpty";
import OrdersItem from './OrdersItem/OrdersItem';
import Account from "@/components/Account/Account";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import PictureOrdersEmpty from "@/components/pictures/PictureOrdersEmpty";
import {IOrder} from "@/models/IOrder";

const Orders: FC = () => {
    // const dispatch = useAppDispatch();
    const {orders} = useAppSelector(state => state.orderReducer);

    return (
        <Account title="История заказов">
            {
                orders.length > 0
                    ? <div className={style.history}>{orders.map(order => <OrdersItem key={order.id} order={order}/>)}</div>
                    : <AccountEmpty title="У вас нет созданных заказов">
                        <PictureOrdersEmpty />
                    </AccountEmpty>
            }
        </Account>
    );
}

export default Orders;