import React, {ChangeEvent, FC, useState} from "react";
import style from './ContactsForm.module.scss';
import Input from "@/components/UI/InputGroup/Input/Input";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import InputGroup from "@/ui/InputGroup/InputGroup";
import Textarea from "@/components/UI/InputGroup/Textarea/Textarea";
import Form from "@/components/Form/Form";
import AddFile from "@/components/UI/InputGroup/AddFile/AddFile";
import ButtonReset from "@/components/UI/buttons/ButtonReset/ButtonReset";
import ButtonGroup from "@/components/UI/buttons/ButtonGroup/ButtonGroup";
import Recaptcha from "@/components/Recaptcha/Recaptcha";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import MaskedInput from "react-maskedinput";
import InputTel from "@/components/UI/InputGroup/InputTel/InputTel";


const ContactsForm: FC = () => {
    interface IContactFields {
        name: string,
        phone: string,
        email: string,
        message: string,
        files: File[]
    }

    const {
        register, handleSubmit,
        formState: {errors,},
        reset, resetField,
        control,
    } = useForm<IContactFields>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IContactFields> = ({name, phone, email, message, files}) => {
        alert(name)
        reset();
    }

    const [fileArray, setFiles] = useState<File[]>([]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h1 className="h1">Форма обратной связи</h1>
            <InputGroup title="Фамилия и имя*">
                <Controller
                    control={control}
                    defaultValue=""
                    name="name"
                    rules={{
                        required: "Это поле обязательно"
                    }}
                    render={({field}) =>
                        <Input
                            placeholder="Введите вашу фамилию и имя"
                            type="text"
                            inputMode="text"
                            error={errors.name?.message}
                            {...field}
                        />
                    }
                />
            </InputGroup>

            <InputGroup title="Телефон*">
                <Controller
                    control={control}
                    defaultValue=""
                    name="phone"
                    rules={{
                        required: "Это поле обязательно"
                    }}
                    render={({field}) =>
                        <InputTel
                            placeholder="+7 (___) ___-__-__"
                            mask="+7 (111) 111-11-11"
                            type="tel"
                            inputMode="tel"
                            error={errors.phone?.message}
                            {...field}
                        />
                    }
                />
            </InputGroup>

            <InputGroup title="Email*">
                <Controller
                    control={control}
                    defaultValue=""
                    name="email"
                    rules={{
                        required: "Это поле обязательно",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите валидный email'
                        }
                    }}
                    render={({field, fieldState: {error}}) =>
                        <Input
                            placeholder="Введите вашу почту"
                            type="email"
                            inputMode="email"
                            error={errors.email?.message}
                            {...field}
                        />
                    }
                />
            </InputGroup>

            <InputGroup title="Ваше сообщение*">
                <Controller
                    control={control}
                    defaultValue=""
                    name="message"
                    rules={{
                        required: "Это поле обязательно"
                    }}
                    render={({field, fieldState: {error}}) =>
                        <Textarea
                            placeholder="Напишите нам"
                            inputMode="text"
                            error={errors.message?.message}
                            {...field}
                        />
                    }
                />
            </InputGroup>

            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name="files"*/}
            {/*    rules={{}}*/}
            {/*    render={({field}) =>*/}
            {/*        <AddFile*/}
            {/*            files={fileArray}*/}
            {/*            multiple*/}
            {/*            {...field}*/}
            {/*            onChange={(event: ChangeEvent<HTMLInputElement>) => {*/}
            {/*                const {files} = event.target;*/}
            {/*                console.log("vjfdh", files)*/}
            {/*                if (files) {*/}
            {/*                    console.log(files.length)*/}
            {/*                    for (let i = 0; i < files.length; i++) {*/}
            {/*                        setFiles([...fileArray, files[i]]);*/}
            {/*                        // setFiles(value);*/}
            {/*                        field.value = fileArray;*/}
            {/*                        console.log("fileArray", fileArray)*/}
            {/*                        console.log("field", field.value)*/}
            {/*                    }*/}
            {/*                    console.log("file", field.value)*/}
            {/*                }*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    }*/}
            {/*/>*/}
            <Recaptcha/>

            <ButtonGroup>
                <ButtonGreen type="submit">Отправить</ButtonGreen>
                <ButtonReset>Отмена</ButtonReset>
            </ButtonGroup>
        </Form>
    );
}

export default ContactsForm;