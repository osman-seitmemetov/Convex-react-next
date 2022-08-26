import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Form from "@/components/Form/Form";
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import styles from "@/webpages/AdminBanners/AdminBanners.module.scss";
import Modal from "@/UI/modals/Modal/Modal";
import {useBanners} from "@/webpages/AdminBanners/useBanners";
import {useArticles} from "@/webpages/Article/useArticles";
import AdminArticleItem from "@/webpages/AdminArticles/AdminArticleItem/AdminArticleItem";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
})


interface IArticlesFields {
    img: File
}

const AdminUser: FC = () => {
    const {articles, isLoading} = useArticles();
    const [active, setActive] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        resetField,
        control,
    } = useForm<IArticlesFields>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IArticlesFields> = ({img}) => {
        alert(`Your email ${img.name}`);
        reset();
    }

    return (
        <Admin title={` > Статьи`}>
            {
                isLoading
                    ? <div>loading...</div>
                    : <div>
                        <ButtonGreen onClick={() => setActive(true)}>Создать статью</ButtonGreen>
                        <div className={styles.articles}>
                            {
                                Array.isArray(articles?.data) && articles?.data?.map(article => (
                                    <AdminArticleItem
                                        article={article}
                                        key={article.id}
                                    />
                                ))
                            }
                        </div>
                        <Modal
                            title="Новый баннер"
                            active={active}
                            setActive={setActive}
                        >
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {/*<Controller*/}
                                {/*    control={control}*/}
                                {/*    defaultValue={undefined}*/}
                                {/*    name="img"*/}
                                {/*    rules={{*/}
                                {/*        required: "Это поле обязательно"*/}
                                {/*    }}*/}
                                {/*    render={({field}) =>*/}
                                {/*        <input*/}
                                {/*            {...field}*/}
                                {/*            type={"file"}*/}
                                {/*        />*/}
                                {/*    }*/}
                                {/*/>*/}
                                {errors.img?.message}
                                <button>vfkd</button>
                            </Form>
                        </Modal>
                    </div>
            }
        </Admin>
    );
}

export default AdminUser;

