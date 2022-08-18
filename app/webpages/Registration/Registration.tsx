import React, {FC, useState} from "react";
import Input from "@/components/UI/InputGroup/Input/Input";
import InputGroup from "@/ui/InputGroup/InputGroup";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import ButtonTransparent from "@/components/UI/buttons/ButtonTransparent/ButtonTransparent";
import Checkbox from "@/components/Checkbox/Checkbox";
import Form from "@/components/Form/Form";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import FormSeparator from "@/components/Form/FormSeparator/FormSeparator";
import FormLabel from "@/components/Form/FormLabel/FormLabel";
import Auth from "@/components/Auth/Auth";
import {LOGIN_ROUTE} from "@/utils/consts";
import InputDate from "@/components/UI/InputGroup/InputDate/InputDate";
import SelectCustom from "@/components/UI/InputGroup/SelectCustom/SelectCustom";
import {IOption} from "@/models/IOption";
import InputTel from "@/components/UI/InputGroup/InputTel/InputTel";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useActions} from "@/hooks/useActions";
import {genderTypes} from "@/models/IUser";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";


const options: IOption[] = [
    {
        value: 'male',
        label: 'Мужской'
    },
    {
        value: 'female',
        label: 'Женский'
    }
]

const getValue = (value: string) => {
    return value ? options.find(option => option.value === value) : ''
}


const Registration: FC = () => {
    interface IRegistrationFields {
        phone: string,
        bornDate: Date,
        lastName: string,
        firstName: string,
        gender: genderTypes,
        email: string,
        password: string
        confirm: string
    }

    const {
        register, handleSubmit,
        formState: {errors, isSubmitSuccessful, },
        reset, resetField,
        control
    } = useForm<IRegistrationFields>({
        mode: "onChange"
    });

    const {registration} = useActions();

    const onSubmit: SubmitHandler<IRegistrationFields> = (
        {
            phone, bornDate,
            lastName, firstName,
            gender, email, password
        }) => {
        if(isSubmitSuccessful) {
            registration({
                phone, bornDate,
                lastName, name: firstName,
                gender, email, password
            } );
            reset();
        }
    }

    const router = useRouter();
    const {user} = useAuth();
    // if (user) router.push('/profile');

    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <Auth title="Регистрация" isScrollable>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup title="Номер телефона*" className="form__input">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="phone"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <InputTel
                                mask="+7 (111) 111-11-11"
                                placeholder="+7 (___) ___-__-__"
                                error={errors.phone?.message}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Дата рождения*">
                    <Controller
                        control={control}
                        // defaultValue={undefined}
                        name="bornDate"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <InputDate
                                {...field}
                                dateFormat="dd.MM.yyyy"
                                placeholder="дд.мм.гггг"
                                mask="11.11.1111"
                                startDate={startDate}
                                error={errors.bornDate?.message}
                                onChange={(newValue: Date) => {
                                    setStartDate(newValue);
                                    return field.onChange(newValue);
                                }}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Фамилия*">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="lastName"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <Input
                                placeholder="Введите фамилию"
                                type="text"
                                inputMode="text"
                                error={errors.lastName?.message}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Имя*">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="firstName"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <Input
                                placeholder="Введите ваше имя"
                                type="text"
                                inputMode="text"
                                error={errors.firstName?.message}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Пароль*">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="password"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <Input
                                placeholder="Введите пароль"
                                type="password"
                                inputMode="text"
                                error={errors.password?.message}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Пол*">
                    <Controller
                        control={control}
                        name="gender"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <SelectCustom
                                {...field}
                                options={options}
                                placeholder="Выберите пол"
                                value={getValue(field.value)}
                                onChange={(newValue: IOption) => field.onChange(newValue.value)}
                                error={errors.gender?.message}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Email*" className="form__input">
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
                        render={({field}) =>
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

                <FormAdditional>
                    <Controller
                        control={control}
                        defaultValue=''
                        name="confirm"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <Checkbox
                                isSmall
                                {...field}
                            >
                                Я подтверждаю, что ознакомлен и согласен с
                                условиями <span> публичной оферты</span> электронного
                                магазина Convex
                            </Checkbox>
                        }
                    />
                </FormAdditional>


                <ButtonGreen type="submit">Зарегистрироваться</ButtonGreen>
                <FormLabel>Мы отправим вам SMS с кодом подтверждения</FormLabel>
                <FormSeparator/>
                <ButtonTransparent link={LOGIN_ROUTE}>У меня уже есть аккаунт</ButtonTransparent>
            </Form>
        </Auth>
    );
}

export default Registration;