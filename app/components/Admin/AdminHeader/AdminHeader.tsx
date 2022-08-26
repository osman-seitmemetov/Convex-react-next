import {FC, useEffect, useState} from "react";
import style from './AdminHeader.module.scss';
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/img/logo.png";
import {useAuth} from "@/hooks/useAuth";
import {useTheme} from "next-themes";
import UserIcon from "@/assets/img/user-icon.svg";
import AdminHeaderAuth from "@/components/Admin/AdminHeader/AdminHeaderAuth/AdminHeaderAuth";


interface AdminHeaderProps {
}

const AdminHeader: FC<AdminHeaderProps> = () => {
    let isRender = false;
    const {user, isLoading} = useAuth();
    const {theme, setTheme} = useTheme();

    const handleLightTheme = () => {
        setTheme('light');
    }

    const handleDarkTheme = () => {
        setTheme('dark');
    }

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/">
                    <div className={style.logo}>
                        <Image
                            src={LogoImg}
                            alt="logo"
                            width={99}
                            height={42}
                        />
                    </div>
                </Link>

                {
                    domLoaded && theme === 'light'
                    && <button className={style.dark} onClick={handleDarkTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
                            <path className={style.st0}
                                  d="M1294.4 1447.1c132.3 0 255.2-40.3 357.1-109.2-129.3 218.6-367.5 365.2-640 365.2-410.4 0-743-332.7-743-743.1s332.7-743 743-743c14.2 0 28.3.4 42.2 1.2-233 95-397.3 323.8-397.3 591 .1 352.2 285.7 637.9 638 637.9z"
                                  id="Layer_5"/>
                            <path className={style.st1}
                                  d="M1294.4 1447.1c-352.3 0-637.9-285.6-637.9-637.9 0-267.2 164.2-496 397.3-591-14-.8-28.1-1.2-42.2-1.2-410.4 0-743 332.7-743 743s332.7 743.1 743 743.1c272.4 0 510.6-146.6 640-365.2-102 68.9-224.9 109.2-357.2 109.2z"
                                  id="STROKES"/>
                        </svg>
                    </button>
                }

                {
                    domLoaded && theme === 'dark'
                    && <div className={style.light} onClick={handleLightTheme}>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px"
                             height="24px"
                             viewBox="0 0 612 612"
                        >
                            <g>
                                <g id="_x37__5_">
                                    <g>
                                        <path d="M76.5,286.875H19.125C8.568,286.875,0,295.443,0,306c0,10.557,8.568,19.125,19.125,19.125H76.5
                                            c10.557,0,19.125-8.568,19.125-19.125C95.625,295.443,87.057,286.875,76.5,286.875z M306,95.625
                                            c10.557,0,19.125-8.568,19.125-19.125V19.125C325.125,8.568,316.557,0,306,0c-10.557,0-19.125,8.568-19.125,19.125V76.5
                                            C286.875,87.057,295.443,95.625,306,95.625z M490.002,148.792l40.182-40.182c7.401-7.401,7.401-19.393,0-26.794
                                            s-19.394-7.401-26.795,0l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794C470.609,156.194,482.601,156.194,490.002,148.792z
                                            M141.716,443.509l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794s19.393,7.401,26.794,0l40.182-40.182
                                            c7.401-7.401,7.401-19.393,0-26.794S149.118,436.107,141.716,443.509z M130.203,157.246c7.478,7.478,19.584,7.478,27.042,0
                                            c7.459-7.478,7.459-19.584,0-27.042L116.682,89.62c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.043
                                            L130.203,157.246z M306,516.375c-10.557,0-19.125,8.568-19.125,19.125v57.375c0,10.557,8.568,19.125,19.125,19.125
                                            c10.557,0,19.125-8.568,19.125-19.125V535.5C325.125,524.943,316.557,516.375,306,516.375z M481.797,454.754
                                            c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.479-7.478,19.584,0,27.043l40.564,40.564c7.478,7.478,19.584,7.478,27.043,0
                                            c7.459-7.479,7.478-19.584,0-27.043L481.797,454.754z M592.875,286.875H535.5c-10.557,0-19.125,8.568-19.125,19.125
                                            c0,10.557,8.568,19.125,19.125,19.125h57.375c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z
                                            M306,133.76c-95.128,0-172.24,77.112-172.24,172.24S210.872,478.24,306,478.24S478.24,401.128,478.24,306
                                            S401.128,133.76,306,133.76z M306,439.837c-73.918,0-133.837-59.919-133.837-133.837S232.082,172.163,306,172.163
                                            S439.837,232.082,439.837,306S379.918,439.837,306,439.837z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                }
            </div>

            <div className={style.right}>
                {
                    isLoading
                        ? <div>loading...</div>
                        : user
                            ? <>
                                <Link href="/profile">
                                    <div className={style.loginMobile}>
                                        <span>{user?.name}&nbsp;{user?.lastName}</span>
                                        <img src={UserIcon} alt=""/>
                                    </div>
                                </Link>
                                <AdminHeaderAuth user={user}/>
                            </>
                            : <>
                                <Link href="/login">
                                    <div className={style.loginMobile}>
                                        <span>Войти</span>
                                        <img src={UserIcon} alt=""/>
                                    </div>
                                </Link>
                                <Link href="/login"><a className={style.login}>Войти</a></Link>
                            </>
                }
            </div>
        </header>
    );
}

export default AdminHeader;