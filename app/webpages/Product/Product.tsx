import {FC} from "react";
import style from "./Product.module.scss";
import ProductCheckboxGroup from "./ProductCheckboxGroup/ProductCheckboxGroup";
import Container from "@/components/Container/Container";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import {IProduct} from "@/models/IProduct";


interface ProductProps {
    product: IProduct | undefined,
    productsForSlider: IProduct[],
    isLoading: boolean
}

const Product: FC<ProductProps> = ({product, productsForSlider, isLoading}) => {
    if (!product) {
        return <div>Товара больше нет</div>
    }

    return (
        <>
            {
                product && <section className={style.product}>
                    <Container className={style.container}>
                        <img
                            src={`http://localhost:5000/${product.img}`}
                            alt="Изображение товара" className={style.img}
                            // width={480}
                            // height={383}
                        />

                        <div className={style.desc}>
                            <h1 className={style.desc__title}>{product.name}</h1>

                            <div className={style.desc__price}>
                                {
                                    product.isDiscount
                                        ? <>
                                            <span className={style.desc__priceNew}>{product.newPrice} руб.</span>
                                            <span className={style.desc__priceOld}>{product.price} руб.</span>
                                        </>
                                        : <>{product.price} руб.</>
                                }
                            </div>

                            <div className={style.desc__properties}>
                                {
                                    product.info && product.info.map(item => (
                                        <div key={item.id} className={style.desc__property}>
                                            {item.title}:&nbsp;<span>{item.value}</span>
                                        </div>
                                    ))
                                }

                                {product.count > 0
                                    ? <div className={style.desc__property}>
                                        Товар доступен:&nbsp;
                                        <span>{product.count} шт.</span>
                                    </div>
                                    : <div className={style.desc__property}>Нет в наличии</div>
                                }
                            </div>

                            {/*<ProductCheckboxGroup title="" properties={[]}/>*/}
                            {/*<ProductTable />*/}

                            {product.count > 0
                                ? <ButtonGreen className={style.desc__btn}>В корзину</ButtonGreen>
                                : <ButtonGreen disabled className={style.desc__btn}>Нет в наличии</ButtonGreen>
                            }

                            <div className={style.desc__text}>{product.description}</div>
                        </div>
                    </Container>
                </section>
            }

            {/*<ProductSlider title="С этим обычно покупают" products={} />*/}
        </>
    );
}

export default Product;