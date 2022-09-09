import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {useProduct} from "@/webpages/Product/useProduct";
import {useProductEdit} from "@/webpages/AdminProduct/useProductEdit";
import {useCategoriesForProduct} from "@/webpages/AdminProduct/useCategoriesForProduct";
import {IProductProperty} from "@/models/IProduct";
import PropertyInputGroup from "@/UI/PropertyInputGroup/PropertyInputGroup";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Counter from "@/components/UI/Counter/Counter";
import NumericInput from "react-numeric-input";
import Checkbox from "@/components/Checkbox/Checkbox";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});
const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


export interface IProductFields {
    name: string,
    description: string,
    img: string,
    categoriesId: string[],
    count: number,
    isDiscount: boolean,
    newPrice: number,
    price: number,
    info: IProductProperty[],
}

const AdminProduct: FC = () => {
    const {query} = useRouter();
    const {data} = useProduct(String(query.id));
    const product = data?.data;
    const {data: categories, isLoading: isCategoriesLoading} = useCategoriesForProduct();

    const {
        register, handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset, resetField, control,
        getValues, setValue,
        watch
    } = useForm<IProductFields>({
        mode: "onChange"
    });

    const isDiscount = watch("isDiscount");

    console.log(isDiscount);

    const {fields, append, remove} = useFieldArray({
        control, name: 'info',
    })

    const {onSubmit, isLoading} = useProductEdit(setValue);

    return (
        <>
            {
                isLoading
                    ? <div>loading...</div>
                    : <Admin title={` > Товары > ${product?.name}`}>
                        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                            <InputGroup title="Название" autoMargin>
                                <Input
                                    {...register('name', {
                                        required: "Это поле обязательно"
                                    })}
                                    placeholder="Введите заголовок"
                                    error={errors.name}
                                />
                            </InputGroup>

                            <InputGroup title="Текст" autoMargin>
                                <Controller
                                    control={control}
                                    name="description"
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
                                <InputGroup title="Изображение">
                                    <Controller
                                        control={control}
                                        defaultValue=""
                                        name="img"
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

                                <InputGroup title="Категории">
                                    <Controller
                                        control={control}
                                        name="categoriesId"
                                        rules={{
                                            required: "Это поле обязательно"
                                        }}
                                        render={({field, fieldState: {error}}) =>
                                            <DynamicSelect
                                                error={error}
                                                field={field}
                                                placeholder="Категория"
                                                options={categories || []}
                                                isLoading={isCategoriesLoading}
                                                isMulti
                                            />
                                        }
                                    />
                                </InputGroup>
                            </FieldsSection>

                            <FieldsSection title="Свойства">
                                {
                                    fields.map(({id, title, value}, index) =>
                                        <PropertyInputGroup
                                            removeHandler={() => remove(index)}
                                            key={id}
                                            // errors={[errors.info]}
                                        >
                                            <Input
                                                style={{marginRight: 10, marginTop: 0}}
                                                placeholder="Название"
                                                {...register(`info.${index}.title` as const)}
                                            />

                                            <Input
                                                style={{marginTop: 0}}
                                                placeholder="Значение"
                                                {...register(`info.${index}.value` as const)}
                                            />
                                        </PropertyInputGroup>
                                    )
                                }
                            </FieldsSection>

                            <ButtonTransparent
                                type="button"
                                //@ts-ignore
                                onClick={() => append({})}
                                style={{
                                    maxWidth: 250,
                                    marginBottom: 20
                                }}
                            >Добавить свойство</ButtonTransparent>

                            <FieldsSection>
                                <InputGroup
                                    title="Цена"
                                    style={{
                                        marginBottom: 0
                                    }}
                                >
                                    <Input
                                        {...register('price', {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите цену"
                                        error={errors.price}
                                    />

                                    <Checkbox
                                        {...register("isDiscount")}
                                        isSmall
                                        style={{
                                            marginTop: 10
                                        }}
                                    >
                                        Добавить скидку
                                    </Checkbox>
                                </InputGroup>

                                {
                                    isDiscount && <InputGroup title="Новая цена">
                                        <Input
                                            {...register('newPrice', {
                                                required: "Это поле обязательно"
                                            })}
                                            placeholder="Введите количество"
                                            error={errors.newPrice}
                                        />
                                    </InputGroup>
                                }
                            </FieldsSection>

                            <FieldsSection>
                                <InputGroup title="Количество (*здесь будет счетчик)">
                                    <Input
                                        {...register('count', {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите количество"
                                        error={errors.count}
                                    />

                                    {/*<Counter*/}
                                    {/*    {...register('count', {*/}
                                    {/*        required: "Это поле обязательно",*/}
                                    {/*        valueAsNumber: true,*/}
                                    {/*    })}*/}
                                    {/*    value={getValues('count')}*/}
                                    {/*    setValue={setValue}*/}
                                    {/*    error={errors.count}*/}
                                    {/*/>*/}

                                    {/*<Controller*/}
                                    {/*    control={control}*/}
                                    {/*    name="categoriesId"*/}
                                    {/*    rules={{*/}
                                    {/*        required: "Это поле обязательно"*/}
                                    {/*    }}*/}
                                    {/*    render={({field: {value, onChange}, fieldState: {error}}) =>*/}
                                    {/*        <NumericInput*/}
                                    {/*            mobile*/}
                                    {/*            value={getValues('count')}*/}
                                    {/*            onChange={onChange}*/}
                                    {/*            minLength={0}*/}
                                    {/*            pattern="[0-9]"*/}
                                    {/*            style={{*/}
                                    {/*                wrap: {*/}
                                    {/*                    fontSize: 32*/}
                                    {/*                },*/}
                                    {/*                input: {*/}
                                    {/*                    borderRadius: '4px 2px 2px 4px',*/}
                                    {/*                    color: '#988869',*/}
                                    {/*                    padding: '0.1ex 1ex',*/}
                                    {/*                    border: '1px solid #ccc',*/}
                                    {/*                    marginRight: 4,*/}
                                    {/*                    display: 'block',*/}
                                    {/*                    fontWeight: 100,*/}
                                    {/*                    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'*/}
                                    {/*                },*/}
                                    {/*                'input:focus' : {*/}
                                    {/*                    border: '1px inset #69C',*/}
                                    {/*                    outline: 'none'*/}
                                    {/*                },*/}
                                    {/*                arrowUp: {*/}
                                    {/*                    borderBottomColor: 'rgba(66, 54, 0, 0.63)'*/}
                                    {/*                },*/}
                                    {/*                arrowDown: {*/}
                                    {/*                    borderTopColor: 'rgba(66, 54, 0, 0.63)'*/}
                                    {/*                }*/}
                                    {/*            }}*/}
                                    {/*        />*/}
                                    {/*    }*/}
                                    {/*/>*/}
                                </InputGroup>
                            </FieldsSection>

                            <ButtonGreen>Сохранить</ButtonGreen>
                        </Form>
                    </Admin>
            }
        </>
    );
}

export default AdminProduct;

