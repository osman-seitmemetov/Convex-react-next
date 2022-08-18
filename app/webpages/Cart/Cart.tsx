import { FC } from "react";
import style from "./Cart.module.scss";
import CartItem from './CartItem/CartItem';
import ProductsSlider from '@/components/ProductSlider/ProductSlider';
import CartInfo from "./CartInfo/CartInfo";
import {ICartItem} from "@/types/types";
import ProductCardImg from "@/assets/img/product.png";
import Container from "@/components/Container/Container";
import {IProduct} from "@/models/IProduct";

const Cart: FC = () => {
    const products: IProduct[] = [
        { id: 1, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 2, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 3, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 4, name: 'Конина тушеная Улан', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 5, name: 'Конина тушеная Улан fff', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        // { _id: 10, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, properties: { count: 11, weight: 130 }, price: 24320 },
    ]

    const cartItems: ICartItem[] = [
        { product: products[0], count: 3, sumPrice: 820 },
        { product: products[1], count: 2, sumPrice: 820 },
        { product: products[2], count: 2, sumPrice: 820 },
        { product: products[3], count: 2, sumPrice: 820 }
    ]

    return (
        <>
            <section className={style.cart}>
                <Container>
                    <div className={style.cart__left}>
                        <div className={style.cart__head}>
                            <h1 className={style.cart__title + " title"}>Корзина</h1>
                            <button
                                className={style.cart__clean}
                            >
                                Очистить корзину
                            </button>
                        </div>

                        <div className={style.cart__items}>
                            {
                                cartItems.map(item =>
                                    <CartItem key={item.product.id} cartItem={item} />
                                )
                            }
                        </div>
                    </div>

                    <CartInfo />
                </Container>
            </section>

            {/*<ProductsSlider title="Свежие акции" products={products} />*/}
        </>
    );
}

export default Cart;