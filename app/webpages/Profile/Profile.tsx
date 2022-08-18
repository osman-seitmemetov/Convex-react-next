import {FC, useEffect, useState} from "react";
import style from './Profile.module.scss';
import Input from "@/components/UI/InputGroup/Input/Input";
import InputGroup from "@/ui/InputGroup/InputGroup";
import Account from "@/components/Account/Account";
import {useAuth} from "@/hooks/useAuth";

const Profile: FC = () => {
    const {user} = useAuth();

    const [lastnameDisable, setLastnameInputDisable] = useState(true);
    const [nameDisable, setNameDisable] = useState(true);
    const [dateDisable, setDateDisable] = useState(true);
    const [mobileDisable, setMobileDisable] = useState(true);
    const [emailDisable, setEmailDisable] = useState(true);
    const [genderDisable, setGenderDisable] = useState(true);

    if(!user) return <div>plz auth</div>;

    const unDisable = () => {
        setLastnameInputDisable(false);
        setNameDisable(false);
        setDateDisable(false);
        setMobileDisable(false);
        setEmailDisable(false);
        setGenderDisable(false);
    }

    const disable = () => {
        setLastnameInputDisable(true);
        setNameDisable(true);
        setDateDisable(true);
        setMobileDisable(true);
        setEmailDisable(true);
        setGenderDisable(true);
    }

    return (
        <Account isRenderDesktopTitle title="Ваш профиль">
            <div className={style.profile}>
                <div className={style.profile__inputs}>
                    <InputGroup disabled={lastnameDisable} className={style.profile__input}  title="Фамилия">
                        <Input
                            placeholder=""
                            type="text"
                            inputMode="text"
                            value={user.lastName}
                            disabled={lastnameDisable}
                        />
                    </InputGroup>

                    <InputGroup disabled={nameDisable} className={style.profile__input} title="Имя">
                        <Input
                            placeholder=""
                            type="text"
                            inputMode="text"
                            value={user.name}
                            disabled={nameDisable}
                        />
                    </InputGroup>

                    <InputGroup disabled={dateDisable} className={style.profile__input}  title="Дата рождения">
                        {/*<Input*/}
                        {/*    placeholder=""*/}
                        {/*    type="text"*/}
                        {/*    inputMode="text"*/}
                        {/*    value={user.bornDate}*/}
                        {/*    disabled={dateDisable}*/}
                        {/*/>*/}
                    </InputGroup>

                    <InputGroup disabled={mobileDisable} className={style.profile__input}  title="Мобильный телефон">
                        <Input
                            placeholder=""
                            type="tel"
                            inputMode="tel"
                            // value="+7 (707) 998-61-63"
                            value={user.phone}
                            disabled={mobileDisable}
                        />
                    </InputGroup>

                    <InputGroup disabled={emailDisable} className={style.profile__input}  title="Email">
                        <Input
                            placeholder=""
                            type="email"
                            inputMode="email"
                            value={user.email}
                            disabled={emailDisable}
                        />
                    </InputGroup>

                    <InputGroup disabled={genderDisable} className={style.profile__input}  title="Пол">
                        <Input
                            placeholder=""
                            type="text"
                            inputMode="text"
                            value="Мужской"
                            disabled={genderDisable}
                        />
                    </InputGroup>
                </div>

                {emailDisable
                    ? <button onClick={unDisable} className={style.profile__btn}>Редактировать данные</button>
                    : <button onClick={disable} className={style.profile__btn}>Сохранить</button>
                }
            </div>
        </Account>
    );
}

export default Profile;