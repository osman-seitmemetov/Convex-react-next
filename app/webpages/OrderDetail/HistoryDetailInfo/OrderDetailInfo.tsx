import {FC} from "react";
import style from './OrderDetailInfo.module.scss';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import {buttonTypes} from "@/components/UI/buttons/ButtonGreen/ButtonGreenEnums";
import {ORDERS_ROUTE} from "@/utils/consts";
import Link from "next/link";

const OrderDetailInfo: FC = () => {
    return (
        <div className={style.historyDetailInfo}>
            <Link href={ORDERS_ROUTE}>
                <div className={style.link}>
                    Вернуться ко всем заказам

                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16252 2.50386C9.39033 2.73167 9.39033 3.10101 9.16252 3.32882L5.49166 6.99967L9.16252 10.6705C9.39033 10.8983 9.39033 11.2677 9.16252 11.4955C8.93471 11.7233 8.56537 11.7233 8.33756 11.4955L4.25423 7.41215C4.02642 7.18435 4.02642 6.815 4.25423 6.58719L8.33756 2.50386C8.56537 2.27606 8.93471 2.27606 9.16252 2.50386Z" />
                    </svg>
                </div>
            </Link>

            <div className={style.head}>
                <div className={style.info}>
                    <span>Дата заявки:</span>
                    12.05.2020 10:19
                </div>

                <div className={`${style.status} ${style.status_inactive}`}>Не оплачен</div>
            </div>

            <div className={style.title}>Заказ №1012</div>

            <div className={style.list}>
                <div className={style.info}>
                    <span>Статус учреждения:</span>
                    –
                </div>

                <div className={style.info}>
                    <span>Дата планируемой доставки:</span>
                    –
                </div>

                <div className={style.info}>
                    <span>Учреждение:</span>
                    ЛА-155/18 (СИЗО)
                </div>

                <div className={style.info}>
                    <span>Получатель:</span>
                    Иван Иванов
                </div>
            </div>

            <div className={`${style.list} ${style.list_justify}`}>
                <div className={style.info}>
                    <span>Сумма заказа</span>
                    11 000 тг.
                </div>

                <div className={style.info}>
                    <span>Доставка</span>
                    1 500 тг.
                </div>

                <hr />

                <div className={style.info}>
                    <span>Итого</span>
                    12 500 тг.
                </div>
            </div>

            <ButtonGreen type={buttonTypes.button} className={style.btn}>Повторить заказ</ButtonGreen>
        </div>
    );
}

export default OrderDetailInfo;