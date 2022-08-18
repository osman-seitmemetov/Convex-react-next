import {FC} from "react";
import style from './Article.module.scss';
import ArticleImg from '../../assets/img/article.jpg';
import Container from "../../components/Container/Container";
import Image from "next/image";

const Article: FC = () => {
    return (
        <section className={style.article}>
            <Container>
                <div className={style.head}>
                    <h1 className={style.title}>Доставка товаров и продуктов питания в СИЗО и Колонии Алматы</h1>
                    <div className={style.date}>Дата публикации: 19.04.2020 18:37</div>
                </div>

                <div className={style.imageWrapper}>
                    <Image
                        src={ArticleImg}
                        alt="Изображение статьи"
                        className={style.img}
                    />
                </div>

                <div className={style.text}>
                    <p>
                        Все что нужно сделать Вашему близкому человеку - подойти к установленному на территории СИЗО/ИУ
                        Терминалу и зарегистрироваться.⠀
                    </p>
                    <br/>
                    <p>
                        ✅ Далее вы получите СМС с его Логином для пополнения баланса<br/>
                        ✅ Оформите заказ на его Логин (доступно только в СИЗО)
                    </p>
                    <br/>
                    <p>
                        Наш проект реализован при поддержке Комитета УИС МВД РК.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Article;