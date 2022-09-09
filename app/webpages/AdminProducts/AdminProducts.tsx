import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminProducts.module.scss";
import {useArticles} from "@/webpages/AdminArticles/useArticles";
import AdminArticleItem from "@/webpages/AdminArticles/AdminArticleItem/AdminArticleItem";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputSearch from "@/UI/InputSearch/InputSearch";
import {useAdminProducts} from "@/webpages/AdminProducts/useAdminProducts";
import AdminProductItem from "@/webpages/AdminProducts/AdminProductItem/AdminProductItem";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


const AdminArticles: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminProducts();
    const products = data?.data;

    return (
        <Admin title={` > Товары`}>
            <ButtonTransparent
                link="/admin/products/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить товар
            </ButtonTransparent>

            <InputSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск товаров"
            />

            {
                isLoading
                    ? <div className={styles.products}>
                        <SkeletonLoader
                            count={5}
                            style={{
                                height: 90,
                                width: '100%',
                                marginBottom: 20,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    : products && <div>
                    <div className={styles.products}>
                        {
                            Array.isArray(products) && products.map(product => (
                                <AdminProductItem
                                    key={product.id}
                                    product={product}
                                    setActiveModal={setActiveModal}
                                    removeHandler={deleteAsync}
                                    activeModal={activeModal}
                                />
                            ))
                        }
                    </div>
                </div>
            }
        </Admin>
    );
}

export default AdminArticles;

