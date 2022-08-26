import React, {FC} from "react";
import styles from "./AdminArticleItem.module.scss";
import {IArticle} from "@/models/IArticle";
import {convertPostgresDateToNormalDate} from "../../../helpers/date/convertPostgresDateToNormalDate";


interface AdminArticleItemProps {
    article: IArticle
}

const AdminArticleItem: FC<AdminArticleItemProps> = ({article}) => {
    return (
        <div className={styles.item} key={article.id}>
            <div className={styles.left}>
                <img
                    className={styles.img}
                    alt={`${article.id}`}
                    src={`http://localhost:5000/${article.previewImg}`}
                    width={100}
                    // height={200}
                />
                <div className={styles.title}>{article.title}</div>
            </div>

            <div className={styles.right}>
                <div className={styles.date}>
                    Дата публикации
                    <span>{convertPostgresDateToNormalDate(article.date)}</span>
                </div>
            </div>
        </div>
    );
}

export default AdminArticleItem;

