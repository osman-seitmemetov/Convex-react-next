import { FC } from "react";
import style from './News.module.scss';
import NewsItem from "./NewsItem/NewsItem";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import {useAppSelector} from "@/hooks/redux";


const News: FC = () => {
    const {articles} = useAppSelector(state => state.articlesReducer);

    return (
        <section className={style.news}>
            <Container>
                <Title className={style.news__title}>Новости</Title>

                <div className={style.news__items}>
                    {articles.map(article => <NewsItem key={article.id} article={article} />)}
                </div>
            </Container>
        </section>
    );
}

export default News;