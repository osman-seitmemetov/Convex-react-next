import {FC} from "react";
import Input from "@/components/UI/InputGroup/Input/Input";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import InputGroup from "@/ui/InputGroup/InputGroup";
import Checkbox from "@/components/Checkbox/Checkbox";
import ButtonTransparent from "@/components/UI/buttons/ButtonTransparent/ButtonTransparent";
import Form from "@/components/Form/Form";
import FormLink from "@/components/Form/FormLink/FormLink";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import FormSeparator from "@/components/Form/FormSeparator/FormSeparator";
import Auth from "@/components/Auth/Auth";
import {PASSWORD_RECOVERY_ROUTE, REGISTRATION_ROUTE} from "@/utils/consts";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";


// interface LoginProps {
//     login: (email: string, password: string) => void
//     isAuth: boolean
// }

const Login: FC = () => {
    const router = useRouter();

    // if (isAuth) router.push('/profile');

    interface ILoginFields {
        email: string,
        password: string,
        rememberMe: string
    }

    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset,
        resetField,
        control,
    } = useForm<ILoginFields>({
        mode: "onChange"
    });

    const {login} = useActions()

    const onSubmit: SubmitHandler<ILoginFields> = ({password, email}) => {
        if(isSubmitSuccessful) {
            login({email, password});
            reset();
        }
    }

    return (
        <Auth title="Вход">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup title="Email">
                    <Controller
                        control={control}
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
                                placeholder="Введите ваш email"
                                error={errors.email?.message}
                                type="email"
                                inputMode="email"
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Пароль">
                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: "Это поле обязательно",
                        }}
                        render={({field}) =>
                            <Input
                                placeholder="Введите пароль"
                                error={errors.password?.message}
                                type="password"
                                inputMode="text"
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <FormAdditional>
                    <Controller
                        control={control}
                        name={'rememberMe'}
                        rules={{
                            required: "Это поле обязательно",
                        }}
                        render={({field}) =>
                            <Checkbox
                                isSmall
                                {...field}
                            >
                                Запомнить меня
                            </Checkbox>
                        }
                    />
                    <FormLink link={PASSWORD_RECOVERY_ROUTE}>Забыли пароль?</FormLink>
                </FormAdditional>

                <ButtonGreen
                    disabled={isSubmitting}
                    type="submit"
                >
                    Войти
                </ButtonGreen>
                <FormSeparator/>
                <ButtonTransparent link={REGISTRATION_ROUTE}>Зарегистрироваться</ButtonTransparent>
            </Form>
        </Auth>
    );
}

// const mapStateToProps = (state: RootState) => ({
//     isAuth: state.authReducer.isAuth
// })

// export default connect(mapStateToProps, {login})(Login);
export default Login;