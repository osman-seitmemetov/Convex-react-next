import { FC } from "react";
import { ICategory } from "@/types/types";
import style from "./HeaderMenuCategory.module.scss";
import Link from "next/link";

interface HeaderCategoryProps {
    category: ICategory
}

const HeaderMenuCategory: FC<HeaderCategoryProps> = ({category}) => {
    return (
        <Link href=""><a className={`${style.item} ${style.menuItem}`}>{category.title}</a></Link>
    );
}

export default HeaderMenuCategory;