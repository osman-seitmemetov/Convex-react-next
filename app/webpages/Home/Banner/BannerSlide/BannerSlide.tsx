import { FC } from "react";
import style from './BannerSlide.module.scss';
import { SwiperSlide } from "swiper/react/swiper-react.js";
import {ARTICLE_ROUTE} from "@/utils/consts";
import {IBanner} from "@/models/IBanner";

interface BannerSlideProps {
    slide: IBanner
}

const BannerSlide: FC<BannerSlideProps> = ({ slide }) => {
    return (
        <div className={style.slide}>
            <div className={style.slide__usp}>
                <div className={style.slide__uspInner}>
                    <h2 className={style.slide__title}>{slide.title}</h2>
                    <p className={style.slide__text}>{slide.text}</p>
                </div>

                {/*<NavLink to={ARTICLE_ROUTE} className={style.slide__link}>Подробнее</NavLink>*/}
            </div>

            <img className={style.slide__mg} src={slide.img} alt={style.slide__title} />
        </div>
    );
}

export default BannerSlide;