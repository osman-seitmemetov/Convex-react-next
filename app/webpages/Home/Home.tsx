import { FC } from "react";
import Banner from './Banner/Banner';
import Propositions from './Propositions/Propositions';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductCardImg from "../../assets/img/product.png";
import {IProduct} from "@/models/IProduct";

const Home: FC = () => {
    const products: IProduct[] = [
        { id: 1, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 2, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 3, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 4, name: 'Конина тушеная Улан', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 5, name: 'Конина тушеная Улан fff', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        // { _id: 10, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, properties: { count: 11, weight: 130 }, price: 24320 },
    ]

    return (
        <>
            {/*<Banner />*/}
            {/*<Propositions />*/}
            {/*<ProductSlider title="Акции" products={products}/>*/}
            {/*<ProductSlider title="Новинки" products={products}/>*/}
            {/*<ProductSlider title="Популярные товары" products={products}/>*/}
        </>
    );
}

export default Home;