import {FC} from "react";
import style from './OrderDetailProducts.module.scss';
import ProductImg from "@/assets/img/product.png";
import Image from "next/image";

const HistoryDetail: FC = () => {
    return (
        <div className={style.historyDetailsProducts}>
            <div className={style.title}>Товары которые вы заказали:</div>

            <div className={style.items}>
                <div className={style.item}>
                    <div className={style.item__left}>
                        <Image
                            src={ProductImg}
                            alt="product"
                            className={style.item__img}
                            width={100}
                            height={72}
                        />

                        <h3 className={style.item__title}>
                            Конина тушеная Улан, есть возможность в 2 строки
                        </h3>
                    </div>

                    <div className={style.item__price}>24 320 тг.</div>
                </div>

                <div className={style.item}>
                    <div className={style.item__left}>
                        <Image
                            src={ProductImg}
                            alt="product"
                            className={style.item__img}
                            width={100}
                            height={72}
                        />

                        <h3 className={style.item__title}>
                            Конина тушеная Улан, есть возможность в 2 строки
                        </h3>
                    </div>

                    <div className={style.item__price}>24 320 тг.</div>
                </div>

                <div className={style.item}>
                    <div className={style.item__left}>
                        <Image
                            src={ProductImg}
                            alt="product"
                            className={style.item__img}
                            width={100}
                            height={72}
                        />

                        <h3 className={style.item__title}>
                            Конина тушеная Улан, есть возможность в 2 строки
                        </h3>
                    </div>

                    <div className={style.item__price}>24 320 тг.</div>
                </div>

                <div className={style.item}>
                    <div className={style.item__left}>
                        <Image
                            src={ProductImg}
                            alt="product"
                            className={style.item__img}
                            width={100}
                            height={72}
                        />

                        <h3 className={style.item__title}>
                            Конина тушеная Улан, есть возможность в 2 строки
                        </h3>
                    </div>

                    <div className={style.item__price}>24 320 тг.</div>
                </div>

                <div className={style.item}>
                    <div className={style.item__left}>
                        <Image
                            src={ProductImg}
                            alt="product"
                            className={style.item__img}
                            width={100}
                            height={72}
                        />

                        <h3 className={style.item__title}>
                            Конина тушеная Улан, есть возможность в 2 строки
                        </h3>
                    </div>

                    <div className={style.item__price}>24 320 тг.</div>
                </div>
            </div>
        </div>
    );
}

export default HistoryDetail;