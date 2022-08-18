import { FC } from "react";
import style from './OrderDetail.module.scss';
import Account from "../../components/Account/Account";
import OrderDetailInfo from "./HistoryDetailInfo/OrderDetailInfo";
import HistoryDetailProducts from "./HistoryDetailProducts/OrderDetailProducts";

const OrderDetail: FC = () => {
    return (
        <Account title="История заказов">
            <div className={style.ordering}>
                <OrderDetailInfo />
                <HistoryDetailProducts />
            </div>
        </Account>
    );
}

export default OrderDetail;