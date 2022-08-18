import {FC} from "react";
// import Meta from "@/utils/meta/Meta";
// import Heading from "@/ui/heading/Heading";
import PicturePageNotFound from "@/components/pictures/PicturePageNotFound";
import Container from "@/components/Container/Container";
import style from "@/assets/scss/Error404.module.scss";
import Header from "@/components/Header/Header";
import {HOME_ROUTE} from "@/utils/consts";
import Link from "next/link";

const Error404: FC = () => {
    return (
        <>
            {/*<Meta title='Page not found'>*/}
            {/*    <Heading title='404 - Page not found'/>*/}
            {/*</Meta>*/}
            <Header />
            <section className={style.notFound}>
                <Container>
                    <div className={style.left}>
                        <h1 className={style.title}>Упс, что-то пошло не так</h1>
                        <div className={style.text}>Мы не можем найти страницу, которую вы ищете</div>
                        <Link href={HOME_ROUTE}>
                            <a className={style.link}>Вернуться на главную</a>
                        </Link>
                    </div>

                    <PicturePageNotFound className={style.img}/>
                </Container>
            </section>
        </>
    );
}

export default Error404;