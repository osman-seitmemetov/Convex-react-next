import React, {FC, useState} from "react";
import style from './Profile.module.scss';
import Input from "@/components/UI/InputGroup/Input/Input";
import InputGroup from "@/components/UI/InputGroup/InputGroup";
import Account from "@/components/Account/Account";
import {useAuth} from "@/hooks/useAuth";
import {genderTypes} from "@/models/IUser";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useActions} from "@/hooks/useActions";
import Form from "@/components/Form/Form";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import InputTel from "@/UI/InputGroup/InputTel/InputTel";
import {convertPostgresDateWithoutTime} from "../../helpers/date/convertPostgresDateWithoutTime";
import SelectCustom from "@/UI/InputGroup/SelectCustom/SelectCustom";
import {IOption} from "@/models/IOption";
import {convertInputDateToPostgresDate} from "../../helpers/date/convertInputDateToPostgresDate";

const Profile: FC = () => {
    const {user} = useAuth();

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

    interface IRegistrationFields {
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
            label: '??????????????'
        },
        {
            value: 'FEMALE',
            label: '??????????????'
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
    } = useForm<IRegistrationFields>({
        mode: "onChange"
    });

    const {editProfile} = useActions();

    const onSubmit: SubmitHandler<IRegistrationFields> = (
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
        <Account isRenderDesktopTitle title="?????? ??????????????">
            <Form onSubmit={handleSubmit(onSubmit)} className={style.profile}>
                <div className={style.profile__inputs}>
                    <InputGroup disabled={lastnameDisable} className={style.profile__input} title="??????????????">
                        <Controller
                            control={control}
                            defaultValue={user?.lastName}
                            name="lastName"
                            rules={{
                                required: "?????? ???????? ??????????????????????"
                            }}
                            render={({field}) =>
                                <Input
                                    placeholder="?????????????? ??????????????"
                                    type="text"
                                    inputMode="text"
                                    error={errors.lastName?.message}
                                    disabled={lastnameDisable}
                                    {...field}
                                />
                            }
                        />
                    </InputGroup>

                    <InputGroup disabled={nameDisable} className={style.profile__input} title="??????">
                        <Controller
                            control={control}
                            defaultValue={user?.name}
                            name="firstName"
                            rules={{
                                required: "?????? ???????? ??????????????????????"
                            }}
                            render={({field}) =>
                                <Input
                                    placeholder="?????????????? ??????????????"
                                    type="text"
                                    inputMode="text"
                                    error={errors.firstName?.message}
                                    disabled={lastnameDisable}
                                    {...field}
                                />
                            }
                        />
                    </InputGroup>

                    <InputGroup disabled={dateDisable} className={style.profile__input} title="???????? ????????????????">
                        <Controller
                            defaultValue={user ? convertPostgresDateWithoutTime(user.bornDate) : new Date()}
                            control={control}
                            name='birthDay'
                            rules={{
                                required: "?????? ???????? ??????????????????????"
                            }}
                            render={({field}) => (
                                <InputDate
                                    dateFormat="dd.MM.yyyy"
                                    placeholder="????.????.????????"
                                    mask="11.11.1111"
                                    selected={field.value}
                                    onChange={(date: Date) => field.onChange(date)}
                                    error={errors.birthDay?.message}
                                    disabled={dateDisable}
                                />
                            )}
                        />
                    </InputGroup>

                    <InputGroup disabled={phoneDisable} className={style.profile__input} title="?????????????????? ??????????????">
                        <Controller
                            control={control}
                            defaultValue={user?.phone}
                            name="phone"
                            rules={{
                                required: "?????? ???????? ??????????????????????"
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
                            defaultValue={user?.email}
                            name="email"
                            rules={{
                                required: "?????? ???????? ??????????????????????"
                            }}
                            render={({field}) =>
                                <Input
                                    placeholder="?????????????? ??????????????"
                                    type="email"
                                    inputMode="email"
                                    error={errors.email?.message}
                                    disabled={lastnameDisable}
                                    {...field}
                                />
                            }
                        />
                    </InputGroup>

                    <InputGroup disabled={genderDisable} className={style.profile__input} title="??????">
                        <Controller
                            defaultValue={user?.gender}
                            control={control}
                            name="gender"
                            rules={{
                                required: "?????? ???????? ??????????????????????"
                            }}
                            render={({field}) =>
                                <SelectCustom
                                    {...field}
                                    options={options}
                                    disabled={genderDisable}
                                    placeholder="???????????????? ??????"
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
                        ?????????????????????????? ????????????
                    </ButtonTransparent>
                    : <ButtonTransparent
                        type="button"
                        onClick={disable}
                        className={style.profile__btn}
                    >
                        ??????????????????
                    </ButtonTransparent>
                }
                {isSubmitSuccessful && <div>?????????????? ?????????????? ????????????????????????</div>}
            </Form>
        </Account>
    );
}

export default Profile;