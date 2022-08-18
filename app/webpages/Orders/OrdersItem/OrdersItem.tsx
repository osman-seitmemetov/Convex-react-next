import {FC} from "react";
import style from './OrdersItem.module.scss';
import {ORDERS_ROUTE} from "@/utils/consts";
import {IOrder, statusTypes} from "@/models/IOrder";
import Link from "next/link";

interface HistoryItemProps {
    order: IOrder
}

const OrdersItem: FC<HistoryItemProps> = ({ order }) => {
    return (
        <div className={style.item}>
            <div className={style.head}>
                <div className={style.num}>№{order.id}</div>
                {order.status === statusTypes.PAID && <div className={`${style.status} ${style.status_active}`}>Оплачено</div>}
                {order.status === statusTypes.NOT_PAID && <div className={`${style.status} ${style.status_inactive}`}>Не оплачен</div>}
            </div>

            <div className={style.list}>
                <div className={style.info}>
                    <span>Дата заявки:</span>
                    {order.requestDate}
                </div>

                <div className={style.info}>
                    <span>Сумма заказа:</span>
                    {order.orderSum} тг.
                </div>

                <div className={style.info}>
                    <span>Статус учреждения:</span>
                    {/*{status}*/} -
                </div>

                <div className={style.info}>
                    <span>Дата планируемой доставки:</span>
                    {order.deliveryDate}
                </div>
            </div>

            <div className={style.bottom}>
                <Link href={`${ORDERS_ROUTE}/${order.id}`}>
                    <a className={style.link}>Посмотреть детализацию доставки</a>
                </Link>
            </div>
        </div>
    );
}

export default OrdersItem;