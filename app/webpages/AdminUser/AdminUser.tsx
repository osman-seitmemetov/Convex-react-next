import React, {FC, useState} from "react";
import styles from './AdminUser.module.scss';
import Admin from "@/components/Admin/Admin";
import {useRouter} from "next/router";
import {genderTypes, IUser} from "@/models/IUser";
import {useUser} from "@/webpages/AdminUser/useUser";
import style from "@/webpages/Profile/Profile.module.scss";
import InputGroup from "@/UI/InputGroup/InputGroup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/UI/InputGroup/Input/Input";
import {convertPostgresDateWithoutTime} from "../../helpers/date/convertPostgresDateWithoutTime";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import InputTel from "@/UI/InputGroup/InputTel/InputTel";
import SelectCustom from "@/UI/InputGroup/SelectCustom/SelectCustom";
import {IOption} from "@/models/IOption";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Form from "@/components/Form/Form";
import {useActions} from "@/hooks/useActions";
import {convertInputDateToPostgresDate} from "../../helpers/date/convertInputDateToPostgresDate";

const AdminUser: FC = () => {
    const {query} = useRouter();
    const {user, isLoading} = useUser(String(query.id));

    const [lastnameDisable, setLastnameInputDisable] = useState(true);
    const [nameDisable, setNameDisable] = useState(true);
    const [dateDisable, setDateDisable] = useState(true);
    const [phoneDisable, setPhoneDisable] = useState(true);
    const [emailDisable, setEmailDisable] = useState(true);
    const [genderDisable, setGenderDisable] = useState(true);

    const unDisable = () => {
        setLastnameInputDisable(false);
        setNameDisable(false);
        setDateDisable(false);
        setPhoneDisable(false);
        setEmailDisable(false);
        setGenderDisable(false);
    }

    const disable = () => {
        setLastnameInputDisable(true);
        setNameDisable(true);
        setDateDisable(true);
        setPhoneDisable(true);
        setEmailDisable(true);
        setGenderDisable(true);
    }

    interface IProfileFields {
        phone: string,
        birthDay: Date,
        lastName: string,
        firstName: string,
        gender: genderTypes,
        email: string
    }

    const options: IOption[] = [
        {
            value: 'MALE',
            label: 'Мужской'
        },
        {
            value: 'FEMALE',
            label: 'Женский'
        }
    ]

    const getValue = (value: string) => {
        return value ? options.find(option => option.value === value) : ''
    }

    const {
        register, handleSubmit,
        formState: {errors, isSubmitSuccessful,},
        reset, resetField,
        control
    } = useForm<IProfileFields>({
        mode: "onChange"
    });

    const {editProfile} = useActions();

    const onSubmit: SubmitHandler<IProfileFields> = (
        {
            phone, birthDay, lastName, firstName,
            gender, email
        }) => {
        const bornDate = convertInputDateToPostgresDate(birthDay);
        editProfile({
            phone, bornDate, lastName, name: firstName,
            gender, email
        })
        // alert(`${firstName} ${lastName} ${gender} ${phone} ${convertInputDateToPostgresDate(birthDay)} ${email}`);
    }

    return (
        <Admin title={` > Пользователи > ${user?.data.name} ${user?.data.lastName}`}>
            {
                user
                    ? <Form onSubmit={handleSubmit(onSubmit)} className={style.profile}>
                        <div className={style.profile__inputs}>
                            <InputGroup disabled={lastnameDisable} className={style.profile__input} title="Фамилия">
                                <Controller
                                    control={control}
                                    defaultValue={user.data.lastName}
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
                                            disabled={lastnameDisable}
                                            {...field}
                                        />
                                    }
                                />
                            </InputGroup>

                            <InputGroup disabled={nameDisable} className={style.profile__input} title="Имя">
                                <Controller
                                    control={control}
                                    defaultValue={user.data.name}
                                    name="firstName"
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field}) =>
                                        <Input
                                            placeholder="Введите фамилию"
                                            type="text"
                                            inputMode="text"
                                            error={errors.firstName?.message}
                                            disabled={lastnameDisable}
                                            {...field}
                                        />
                                    }
                                />
                            </InputGroup>

                            <InputGroup disabled={dateDisable} className={style.profile__input} title="Дата рождения">
                                <Controller
                                    defaultValue={user ? convertPostgresDateWithoutTime(user.data.bornDate) : new Date()}
                                    control={control}
                                    name='birthDay'
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field}) => (
                                        <InputDate
                                            dateFormat="dd.MM.yyyy"
                                            placeholder="дд.мм.гггг"
                                            mask="11.11.1111"
                                            selected={field.value}
                                            onChange={(date: Date) => field.onChange(date)}
                                            error={errors.birthDay?.message}
                                            disabled={dateDisable}
                                        />
                                    )}
                                />
                            </InputGroup>

                            <InputGroup disabled={phoneDisable} className={style.profile__input} title="Мобильный телефон">
                                <Controller
                                    control={control}
                                    defaultValue={user.data.phone}
                                    name="phone"
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field}) =>
                                        <InputTel
                                            mask="+7 (111) 111-11-11"
                                            placeholder="+7 (___) ___-__-__"
                                            error={errors.phone?.message}
                                            disabled={phoneDisable}
                                            {...field}
                                        />
                                    }
                                />
                            </InputGroup>

                            <InputGroup disabled={emailDisable} className={style.profile__input} title="Email">
                                <Controller
                                    control={control}
                                    defaultValue={user.data.email}
                                    name="email"
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field}) =>
                                        <Input
                                            placeholder="Введите фамилию"
                                            type="email"
                                            inputMode="email"
                                            error={errors.email?.message}
                                            disabled={lastnameDisable}
                                            {...field}
                                        />
                                    }
                                />
                            </InputGroup>

                            <InputGroup disabled={genderDisable} className={style.profile__input} title="Пол">
                                <Controller
                                    defaultValue={user.data.gender}
                                    control={control}
                                    name="gender"
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field}) =>
                                        <SelectCustom
                                            {...field}
                                            options={options}
                                            disabled={genderDisable}
                                            placeholder="Выберите пол"
                                            value={getValue(field.value)}
                                            onChange={(newValue: IOption) => field.onChange(newValue.value)}
                                            error={errors.gender?.message}
                                        />
                                    }
                                />
                            </InputGroup>
                        </div>

                        {emailDisable
                            ? <ButtonTransparent
                                type="submit"
                                onClick={unDisable}
                                className={style.profile__btn}
                            >
                                Редактировать данные
                            </ButtonTransparent>
                            : <ButtonTransparent
                                type="button"
                                onClick={disable}
                                className={style.profile__btn}
                            >
                                Сохранить
                            </ButtonTransparent>
                        }
                        {isSubmitSuccessful && <div>Аккаунт успешно редактирован</div>}
                    </Form>
                    : <div>Пользователь не найден</div>
            }
        </Admin>
    );
}

export default AdminUser;

