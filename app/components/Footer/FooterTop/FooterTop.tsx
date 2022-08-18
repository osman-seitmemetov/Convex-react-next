import { FC } from "react";
import style from "./FooterTop.module.scss";
import Link from "next/link";

const FooterTop: FC = () => {
    return (
        <div className={style.top}>
            <div className={style.nav}>
                <Link href="/about"><a className={style.nav__item}>О компании</a></Link>
                <Link href="/faq"><a className={style.nav__item}>Вопрос-Ответ</a></Link>
                <Link href="/news"><a className={style.nav__item}>Новости</a></Link>
                <Link /*target="_top"*/ href="/contacts"><a className={style.nav__item}>Контакты</a></Link>
            </div>

            <div className={style.phone}>
                <div className={style.phone__title}>Бесплатно по Казахстану</div>
                <div className={style.phone__number}>8 800 080 50 11</div>
                <div className={style.phone__number}>8 727 225 50 11</div>
            </div>
        </div>
    );
}

export default FooterTop;