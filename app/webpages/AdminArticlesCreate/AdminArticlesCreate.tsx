import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {Controller, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";
import {useArticle} from "@/webpages/AdminArticle/useArticle";
import {useRouter} from "next/router";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {useArticleEdit} from "@/webpages/AdminArticle/useArticleEdit";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {useArticleCreate} from "@/webpages/AdminArticlesCreate/useArticleCreate";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
})

export interface IArticleFields {
    title: string
    text: string,
    previewImg: string,
    bannerImg: string
}

const AdminArticlesCreate: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset,
        resetField,
        control,
        setValue
    } = useForm<IArticleFields>({
        mode: "onChange"
    });

    const {onSubmit} = useArticleCreate();

    return (
        <Admin title={` > Статьи > Новая статья`}>
            <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                <InputGroup title="Заголовок">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="title"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <Input
                                placeholder="Введите заголовок"
                                type="text"
                                inputMode="text"
                                error={error}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Текст">
                    <Controller
                        control={control}
                        name="text"
                        defaultValue=""
                        rules={{
                            validate: {
                                required: (v) => (v && stripHtml(v).result.length > 0) || 'Это поле обязательно'
                            }
                        }}
                        render={({field: {value, onChange}, fieldState: {error}}) =>
                            <DynamicTextEditor
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Текст статьи"
                            />
                        }
                    />
                </InputGroup>

                <div style={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridColumnGap: 20}}>
                    <InputGroup title="Превью" style={{maxWidth: '50%'}}>
                        <Controller
                            control={control}
                            defaultValue=""
                            name="previewImg"
                            rules={{
                                required: "Это поле обязательно"
                            }}
                            render={({field: {onChange, value}, fieldState: {error}}) =>
                                <ImageUploader
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    placeholder="Превью"
                                />
                            }
                        />
                    </InputGroup>

                    <InputGroup title="Баннер" style={{maxWidth: '50%'}}>
                        <Controller
                            control={control}
                            defaultValue=""
                            name="bannerImg"
                            rules={{}}
                            render={({field: {onChange, value}, fieldState: {error}}) =>
                                <ImageUploader
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    placeholder="banner"
                                />
                            }
                        />
                    </InputGroup>
                </div>

                <ButtonGreen>Сохранить</ButtonGreen>
            </Form>
        </Admin>
    );
}

export default AdminArticlesCreate;