import {FC} from "react";
import Input from "../../components/UI/InputGroup/Input/Input";
import InputGroup from "@/ui/InputGroup/InputGroup";
import {inputModes} from "../../components/UI/InputGroup/Input/InputEnums";
import ButtonGreen from "../../components/UI/buttons/ButtonGreen/ButtonGreen";
import {buttonTypes} from "../../components/UI/buttons/ButtonGreen/ButtonGreenEnums";
import Auth from "../../components/Auth/Auth";
import Form from "../../components/Form/Form";
import {PROFILE_ROUTE} from "../../utils/consts";

const PasswordRecovery2: FC = () => {
    return (
        <Auth title="Восстановление пароля">
            <Form action={PROFILE_ROUTE} className="login__form">
                <InputGroup title="Введите код из SMS">
                    <Input placeholder="Введите код" type="text" inputMode={inputModes.numeric} />
                </InputGroup>

                <InputGroup title="Новый пароль">
                    <Input placeholder="Введите новый пароль" type="password" inputMode={inputModes.text} />
                </InputGroup>

                <InputGroup title="Повторите новый пароль">
                    <Input placeholder="Повторите новый пароль" type="password" inputMode={inputModes.text} />
                </InputGroup>

                <ButtonGreen type={buttonTypes.submit}>Войти</ButtonGreen>
            </Form>
        </Auth>
    );
}

export default PasswordRecovery2;