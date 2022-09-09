import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Form from "@/components/Form/Form";
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";
import {useArticle} from "@/webpages/AdminArticle/useArticle";
import {useRouter} from "next/router";
import InputGroup from "@/UI/InputGroup/InputGroup";
import InputTel from "@/UI/InputGroup/InputTel/InputTel";
import Input from "@/UI/InputGroup/Input/Input";
import {ArticleService} from "@/services/ArticleService";
import {useArticleEdit} from "@/webpages/AdminArticle/useArticleEdit";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
})

export interface IArticleFields {
    title: string
    text: string,
    previewImg: string,
    bannerImg: string
}

const AdminArticle: FC = () => {
    const {query} = useRouter();
    const {article} = useArticle(String(query.id));

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

    const {onSubmit, isLoading} = useArticleEdit(setValue);

    return (
        <>
            {
                isLoading
                    ? <div>loading...</div>
                    : <Admin title={` > Статьи > ${article?.title}`}>
                        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                            <InputGroup title="Заголовок" autoMargin>
                                <Input
                                    {...register('title', {
                                        required: "Это поле обязательно"
                                    })}
                                    placeholder="Введите заголовок"
                                    error={errors.title}
                                />
                            </InputGroup>

                            <InputGroup title="Текст" autoMargin>
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

                            <FieldsSection>
                                <InputGroup title="Превью">
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

                                <InputGroup title="Баннер">
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
                            </FieldsSection>

                            <ButtonGreen>Сохранить</ButtonGreen>
                        </Form>
                    </Admin>
            }
        </>
    );
}

export default AdminArticle;

