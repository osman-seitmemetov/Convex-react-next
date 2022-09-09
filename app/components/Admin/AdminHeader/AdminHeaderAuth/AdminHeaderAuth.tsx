import {FC, useState} from "react";
import style from "./AdminHeaderAuth.module.scss";
import {IUser} from "@/models/IUser";
import Arrow from "@/components/Arrow/Arrow";
import NavLink from "@/components/NavLink/NavLink";
import {useActions} from "@/hooks/useActions";

interface HeaderTopAuthProps {
    user: IUser | null
}

const AdminHeaderAuth: FC<HeaderTopAuthProps> = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {logout} = useActions();

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleIsClose = () => {
        setTimeout(() => setIsOpen(false), 100);
    }

    return (
        <div className={`${style.auth} ${isOpen && style.auth_active}`}>
            <button
                type="button"
                className={style.btn}
                onClick={() => handleIsOpen()}
                onBlur={() => handleIsClose()}
            >
                <span>{user?.name}&nbsp;{user?.lastName}</span>

                <Arrow className={style.btn__arrow} width={16} height={16} />
            </button>

            {
                isOpen &&
                <div
                    className={style.dropdown}
                    onClick={(e) => {e.stopPropagation()}}
                >
                    {/*<div className={style.head}>*/}
                    {/*    <div className={style.balance}>Ваш баланс: 140 000тг</div>*/}
                    {/*</div>*/}

                    <div className={style.menu}>
                        <NavLink href="/profile" className={style.link} activeClassName={style.link_active}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7541 13.9992C18.9961 13.9992 20.0029 15.0061 20.0029 16.2481V16.8235C20.0029 17.7178 19.6833 18.5826 19.1018 19.262C17.5324 21.0955 15.1453 22.0004 11.9999 22.0004C8.85401 22.0004 6.468 21.0952 4.9017 19.2609C4.32194 18.582 4.00342 17.7185 4.00342 16.8258V16.2481C4.00342 15.0061 5.01027 13.9992 6.25229 13.9992H17.7541ZM17.7541 15.4992H6.25229C5.8387 15.4992 5.50342 15.8345 5.50342 16.2481V16.8258C5.50342 17.3614 5.69453 17.8795 6.04239 18.2869C7.29569 19.7546 9.26157 20.5004 11.9999 20.5004C14.7382 20.5004 16.7058 19.7545 17.9623 18.2866C18.3112 17.879 18.5029 17.3601 18.5029 16.8235V16.2481C18.5029 15.8345 18.1676 15.4992 17.7541 15.4992ZM11.9999 2.00391C14.7613 2.00391 16.9999 4.24248 16.9999 7.00391C16.9999 9.76533 14.7613 12.0039 11.9999 12.0039C9.23845 12.0039 6.99988 9.76533 6.99988 7.00391C6.99988 4.24248 9.23845 2.00391 11.9999 2.00391ZM11.9999 3.50391C10.0669 3.50391 8.49988 5.07091 8.49988 7.00391C8.49988 8.9369 10.0669 10.5039 11.9999 10.5039C13.9329 10.5039 15.4999 8.9369 15.4999 7.00391C15.4999 5.07091 13.9329 3.50391 11.9999 3.50391Z" />
                            </svg>

                            Профиль
                        </NavLink>

                        <NavLink href="/orders" className={style.link} activeClassName={style.link_active}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.2904 21 8.64945 20.5218 7.23081 19.6338C6.65294 19.2721 6.1177 18.8457 5.63566 18.3636C5.1529 17.8808 4.72601 17.3446 4.36401 16.7657C3.4774 15.3478 3 13.7082 3 12C3 11.7258 3.01228 11.4531 3.0367 11.1823C3.07389 10.7697 3.43847 10.4655 3.85101 10.5026C4.26355 10.5398 4.56783 10.9044 4.53064 11.317C4.51026 11.543 4.5 11.7708 4.5 12C4.5 13.4249 4.89727 14.7893 5.63583 15.9704C5.93764 16.453 6.29368 16.9002 6.69639 17.303C7.09848 17.7051 7.5449 18.0608 8.02668 18.3623C9.20844 19.1021 10.5739 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.60271 4.5 7.39953 5.63281 5.99775 7.50196L8.75419 7.50209C9.1684 7.50209 9.50419 7.83788 9.50419 8.25209C9.50419 8.63179 9.22203 8.94558 8.85596 8.99525L8.75419 9.00209H4.25C3.8703 9.00209 3.55651 8.71994 3.50685 8.35386L3.5 8.25209V3.75209C3.5 3.33788 3.83579 3.00209 4.25 3.00209C4.6297 3.00209 4.94349 3.28425 4.99315 3.65032L5 3.75209L4.999 6.34348C6.68587 4.25603 9.23628 3 12 3ZM11.25 7C11.6295 7 11.9435 7.28233 11.9931 7.64827L12 7.75V12H14.25C14.664 12 15 12.336 15 12.75C15 13.1295 14.7177 13.4435 14.3517 13.4931L14.25 13.5H11.25C10.8705 13.5 10.5565 13.2177 10.5069 12.8517L10.5 12.75V7.75C10.5 7.336 10.836 7 11.25 7Z" />
                            </svg>

                            История заказов
                        </NavLink>

                        <NavLink href="/promocodes" className={style.link} activeClassName={style.link_active}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8906 4.96875H2.10938C0.946266 4.96875 0 5.91502 0 7.07812V9.89062C0 10.2789 0.314812 10.5938 0.703125 10.5938H1.40625C2.18166 10.5938 2.8125 11.2246 2.8125 12C2.8125 12.7754 2.18166 13.4062 1.40625 13.4062H0.703125C0.314812 13.4062 0 13.7211 0 14.1094V16.9219C0 18.085 0.946266 19.0312 2.10938 19.0312H21.8906C23.0537 19.0312 24 18.085 24 16.9219V14.1094C24 13.7211 23.6852 13.4062 23.2969 13.4062H22.5938C21.8183 13.4062 21.1875 12.7754 21.1875 12C21.1875 11.2246 21.8183 10.5938 22.5938 10.5938H23.2969C23.6852 10.5938 24 10.2789 24 9.89062V7.07812C24 5.91502 23.0537 4.96875 21.8906 4.96875ZM22.5938 9.1875C21.0429 9.1875 19.7812 10.4492 19.7812 12C19.7812 13.5508 21.0429 14.8125 22.5938 14.8125V16.9219C22.5938 17.3096 22.2783 17.625 21.8906 17.625H2.10938C1.72167 17.625 1.40625 17.3096 1.40625 16.9219V14.8125C2.95706 14.8125 4.21875 13.5508 4.21875 12C4.21875 10.4492 2.95706 9.1875 1.40625 9.1875V7.07812C1.40625 6.69042 1.72167 6.375 2.10938 6.375H21.8906C22.2783 6.375 22.5938 6.69042 22.5938 7.07812V9.1875Z" />
                                <path d="M14.8125 12C13.6494 12 12.7031 12.9463 12.7031 14.1094C12.7031 15.2725 13.6494 16.2188 14.8125 16.2188C15.9756 16.2188 16.9219 15.2725 16.9219 14.1094C16.9219 12.9463 15.9756 12 14.8125 12ZM14.8125 14.8125C14.4248 14.8125 14.1094 14.4971 14.1094 14.1094C14.1094 13.7217 14.4248 13.4062 14.8125 13.4062C15.2002 13.4062 15.5156 13.7217 15.5156 14.1094C15.5156 14.4971 15.2002 14.8125 14.8125 14.8125Z" />
                                <path d="M11.2969 9.89062C11.2969 8.72752 10.3506 7.78125 9.1875 7.78125C8.02439 7.78125 7.07812 8.72752 7.07812 9.89062C7.07812 11.0537 8.02439 12 9.1875 12C10.3506 12 11.2969 11.0537 11.2969 9.89062ZM8.48438 9.89062C8.48438 9.50292 8.7998 9.1875 9.1875 9.1875C9.5752 9.1875 9.89062 9.50292 9.89062 9.89062C9.89062 10.2783 9.5752 10.5938 9.1875 10.5938C8.7998 10.5938 8.48438 10.2783 8.48438 9.89062Z" />
                                <path d="M15.2512 7.93533C14.948 7.69271 14.5055 7.74193 14.263 8.04516L8.63798 15.0764C8.39541 15.3796 8.44458 15.8221 8.74777 16.0647C9.04969 16.3062 9.49242 16.2594 9.73603 15.9548L15.361 8.9236C15.6036 8.62041 15.5544 8.17791 15.2512 7.93533Z" />
                            </svg>

                            Мои промокоды (2)
                        </NavLink>

                        <NavLink href="/notifications" className={style.link} activeClassName={style.link_active}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 1.99622C16.0498 1.99622 19.3565 5.19096 19.4957 9.24527L19.4999 9.49622V13.5932L20.8799 16.7492C20.9489 16.9071 20.9846 17.0776 20.9846 17.25C20.9846 17.9403 20.4249 18.5 19.7346 18.5L14.9999 18.5015C14.9999 20.1583 13.6567 21.5015 11.9999 21.5015C10.4022 21.5015 9.09621 20.2526 9.00496 18.6778L8.99941 18.4992L4.27473 18.5C4.10339 18.5 3.93388 18.4648 3.77673 18.3965C3.14353 18.1215 2.85318 17.3852 3.12822 16.752L4.49987 13.5941V9.49611C4.50046 5.34132 7.85195 1.99622 11.9999 1.99622ZM13.4994 18.4992L10.4999 18.5015C10.4999 19.3299 11.1714 20.0015 11.9999 20.0015C12.7796 20.0015 13.4203 19.4066 13.493 18.6459L13.4994 18.4992ZM11.9999 3.49622C8.67971 3.49622 6.00034 6.17047 5.99987 9.49622V13.9058L4.65589 17H19.3524L17.9999 13.9068L18 9.50907L17.9962 9.28387C17.8852 6.0504 15.2414 3.49622 11.9999 3.49622Z" />
                            </svg>

                            Уведомления (0)
                        </NavLink>

                        {
                            user?.role === "ADMIN" && <NavLink href="/admin" className={style.link} activeClassName={style.link_active}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9999 1.99622C16.0498 1.99622 19.3565 5.19096 19.4957 9.24527L19.4999 9.49622V13.5932L20.8799 16.7492C20.9489 16.9071 20.9846 17.0776 20.9846 17.25C20.9846 17.9403 20.4249 18.5 19.7346 18.5L14.9999 18.5015C14.9999 20.1583 13.6567 21.5015 11.9999 21.5015C10.4022 21.5015 9.09621 20.2526 9.00496 18.6778L8.99941 18.4992L4.27473 18.5C4.10339 18.5 3.93388 18.4648 3.77673 18.3965C3.14353 18.1215 2.85318 17.3852 3.12822 16.752L4.49987 13.5941V9.49611C4.50046 5.34132 7.85195 1.99622 11.9999 1.99622ZM13.4994 18.4992L10.4999 18.5015C10.4999 19.3299 11.1714 20.0015 11.9999 20.0015C12.7796 20.0015 13.4203 19.4066 13.493 18.6459L13.4994 18.4992ZM11.9999 3.49622C8.67971 3.49622 6.00034 6.17047 5.99987 9.49622V13.9058L4.65589 17H19.3524L17.9999 13.9068L18 9.50907L17.9962 9.28387C17.8852 6.0504 15.2414 3.49622 11.9999 3.49622Z" />
                                </svg>

                                Панель администратора
                            </NavLink>
                        }

                        <button className={`${style.link} ${style.link_btn}`}>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00008 1.33301C9.47284 1.33301 10.6667 2.52692 10.6667 3.99967V5.33301H11.8334C12.6618 5.33301 13.3334 6.00458 13.3334 6.83301V13.1663C13.3334 13.9948 12.6618 14.6663 11.8334 14.6663H4.16675C3.33832 14.6663 2.66675 13.9948 2.66675 13.1663V6.83301C2.66675 6.00458 3.33832 5.33301 4.16675 5.33301H5.33341V3.99967C5.33341 2.52692 6.52732 1.33301 8.00008 1.33301ZM11.8334 6.33301H4.16675C3.89061 6.33301 3.66675 6.55687 3.66675 6.83301V13.1663C3.66675 13.4425 3.89061 13.6663 4.16675 13.6663H11.8334C12.1096 13.6663 12.3334 13.4425 12.3334 13.1663V6.83301C12.3334 6.55687 12.1096 6.33301 11.8334 6.33301ZM8.00016 8.99967C8.55245 8.99967 9.00016 9.44739 9.00016 9.99967C9.00016 10.552 8.55245 10.9997 8.00016 10.9997C7.44788 10.9997 7.00016 10.552 7.00016 9.99967C7.00016 9.44739 7.44788 8.99967 8.00016 8.99967ZM8.00008 2.33301C7.07961 2.33301 6.33341 3.0792 6.33341 3.99967V5.33301H9.66675V3.99967C9.66675 3.0792 8.92056 2.33301 8.00008 2.33301Z" />
                            </svg>

                            Cменить пароль
                        </button>

                        <button onClick={() => logout()} className={`${style.link} ${style.link_exit}`}>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.46947 3.21364C5.71975 3.09697 6.01723 3.20528 6.1339 3.45556C6.25058 3.70584 6.14227 4.00332 5.89198 4.12C4.14255 4.93554 3 6.69438 3 8.6609C3 11.4257 5.2384 13.6668 7.99929 13.6668C10.7602 13.6668 12.9986 11.4257 12.9986 8.6609C12.9986 6.69844 11.8608 4.94259 10.1168 4.12478C9.86683 4.00754 9.7592 3.70982 9.87644 3.4598C9.99368 3.20978 10.2914 3.10215 10.5414 3.21939C12.6334 4.20044 13.9986 6.30711 13.9986 8.6609C13.9986 11.9777 11.3127 14.6668 7.99929 14.6668C4.68584 14.6668 2 11.9777 2 8.6609C2 6.30222 3.37082 4.19197 5.46947 3.21364ZM7.99929 1.66406C8.25243 1.66406 8.46162 1.85217 8.49473 2.09622L8.49929 2.16406V7.16402C8.49929 7.44016 8.27544 7.66402 7.99929 7.66402C7.74616 7.66402 7.53697 7.47591 7.50386 7.23186L7.49929 7.16402V2.16406C7.49929 1.88792 7.72315 1.66406 7.99929 1.66406Z" />
                            </svg>

                            Выход
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default AdminHeaderAuth;