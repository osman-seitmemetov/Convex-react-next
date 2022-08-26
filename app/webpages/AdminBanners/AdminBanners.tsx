import React, {FC, useState} from "react";
import styles from './AdminBanners.module.scss';
import Admin from "@/components/Admin/Admin";
import {useBanners} from "@/webpages/AdminBanners/useBanners";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import Head from "next/head";
import Modal from '@/components/UI/modals/Modal/Modal';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import InputTel from "@/components/UI/InputGroup/InputTel/InputTel";

interface IBannerFields {
    img: File
}

const AdminBanners: FC = () => {
    const {banners, isLoading} = useBanners();
    const [active, setActive] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        resetField,
        control,
    } = useForm<IBannerFields>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IBannerFields> = ({img}) => {
        alert(`Your email ${img.name}`);
        reset();
    }

    return (
        <>
            <Head>
                <title>Панель администратора {'>'} Баннеры</title>
            </Head>
            <Admin title=" > Баннеры">
                {
                    isLoading
                        ? <div>loading...</div>
                        : <div>
                            <ButtonGreen onClick={() => setActive(true)}>Добавить новый баннер</ButtonGreen>
                            <div className={styles.banners}>
                                {
                                    Array.isArray(banners?.data) && banners?.data?.map(banner => (
                                        <div key={banner.id}>
                                            <img
                                                className={styles.banner__img}
                                                alt={`${banner.id}`}
                                                src={`http://localhost:5000/${banner.img}`}
                                                width={'100%'}
                                                // height={200}
                                            />
                                        </div>
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
        </>
    );
}

export default AdminBanners;