import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useForm, Controller} from "react-hook-form";
import Form from "@/components/Form/Form";
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
})


const AdminUser: FC = () => {
    interface IArticleFields {
        text: string,
    }

    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset,
        resetField,
        control,
    } = useForm<IArticleFields>({
        mode: "onChange"
    });

    const text = `<b>Convex – это специализированный электронный магазин по доставке продуктов питания и товаров первой необходимости в Исправительные Колонии и Следственные Изоляторы РК.</b> В электронном магазине представлены товары, включенные в перечень вещей и предметов, разрешенных для передачи лицам, находящимся в СИЗО и Исправительных Колониях.
    <br />
    <br />
        
    <b>В электронном магазине Convex можно:</b> <br />1. Пополнив собственный баланс, отправить подследственному в СИЗО сформированный вами заказ. <br />2. Перевести денежные средства на баланс подследственному или оужденному находящемуся в СИЗО или в Исправительных коланиях, для самостоятельного оформления заказа через Терминал установленного внутри учреждения.
    `

    return (
        <Admin title={` > Статьи > `}>
            <Form style={{maxWidth: '100%'}}>
                <Controller
                    control={control}
                    name="text"
                    defaultValue={text}
                    rules={{
                        validate: {
                            required: (v) => (v && stripHtml(v).result.length > 0) || 'Это поле обязательно'
                        }
                    }}
                    render={({field: {value, onChange}, formState: {errors}}) =>
                        <DynamicTextEditor
                            onChange={onChange}
                            value={value}
                            error={errors}
                            placeholder="Текст статьи"
                        />
                    }
                />
            </Form>
        </Admin>
    );
}

export default AdminUser;

