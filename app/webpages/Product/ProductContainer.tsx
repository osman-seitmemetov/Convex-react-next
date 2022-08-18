import {FC} from "react";
import ProductCardImg from "@/assets/img/product.png";
import {useRouter} from "next/router";
import Product from "@/webpages/Product/Product";
import {useProduct} from "@/webpages/Product/useProduct";
import {IProduct} from "@/models/IProduct";


const ProductContainer: FC<{product: IProduct}> = ({product}) => {
    const productsForSlider: IProduct[] = [
        { id: 1, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 2, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 3, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 4, name: 'Конина тушеная Улан', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        { id: 5, name: 'Конина тушеная Улан fff', img: ProductCardImg, price: 24320, count: 5, description: '', categoryId: 1 },
        // { id: 10, name: 'Конина тушеная Улан, 2 строка', img: ProductCardImg, properties: { count: 11, weight: 130 }, price: 24320 },
    ]

    // const {query} = useRouter();
    // const {product, isLoading} = useProduct(String(query.id));

    return (<Product product={product} isLoading={false} productsForSlider={productsForSlider}/>);
}

export default ProductContainer;