import {FC} from "react";
import style from './PromocodesItem.module.scss';
import {IPromocode} from "../../../models/IPromocode";


interface PromocodesItemProps {
    promocode: IPromocode
}

const PromocodesItem: FC<PromocodesItemProps> = ({ promocode }) => {
    return (
        <div className={`${style.coupon} ${!promocode.read && style.coupon_active}`}>
            <div className={style.left}>
                <div className={style.title}>{promocode.title}</div>

                <div className={style.info}>
                    Категория:
                    {/*в будущем выводить названия категорий*/}
                    <span>Все</span>
                </div>
            </div>

            <div className={style.right}>
                Промокод: {promocode.value}
            </div>
        </div>
    );
}

export default PromocodesItem;