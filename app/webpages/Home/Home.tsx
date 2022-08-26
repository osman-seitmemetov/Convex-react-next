import {FC} from "react";
import Banner from './Banner/Banner';
import Propositions from './Propositions/Propositions';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductCardImg from "../../assets/img/product.png";
import {IProduct} from "@/models/IProduct";
import Container from "@/components/Container/Container";

const Home: FC = () => {
    const products: IProduct[] = [
        {
            id: 1,
            name: 'Конина тушеная Улан, 2 строка',
            img: ProductCardImg,
            price: 24320,
            count: 5,
            description: '',
            categoryId: 1
        },
        {
            id: 2,
            name: 'Конина тушеная Улан, 2 строка',
            img: ProductCardImg,
            price: 24320,
            count: 5,
            description: '',
            categoryId: 1
        },
        {
            id: 3,
            name: 'Конина тушеная Улан, 2 строка',
            img: ProductCardImg,
            price: 24320,
            count: 5,
            description: '',
            categoryId: 1
        },
        {
            id: 4,
            name: 'Конина тушеная Улан',
            img: ProductCardImg,
            price: 24320,
            count: 5,
            description: '',
            categoryId: 1
        },
        {
            id: 5,
            name: 'Конина тушеная Улан fff',
            img: ProductCardImg,
            price: 24320,
            count: 5,
            description: '',
            categoryId: 1
        },
        // { _id: 10, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, properties: { count: 11, weight: 130 }, price: 24320 },
    ]

    return (
        <>
            <Container>
                <h1 style={{fontSize: 40, fontWeight: 700, padding: '100px 0'}}>
                    Любой ценой ищи заказы. По верстке,
                    по реакту, по чему угодно. Написать охуенный коверлеттер,
                    и заранее делать часть задания.
                    <br/>
                    <br/>
                    Мне недостаточно не навыков, а настойчивости
                </h1>
            </Container>
            {/*<Banner />*/}
            {/*<Propositions />*/}
            {/*<ProductSlider title="Акции" products={products}/>*/}
            {/*<ProductSlider title="Новинки" products={products}/>*/}
            {/*<ProductSlider title="Популярные товары" products={products}/>*/}
        </>
    );
}

export default Home;