import { FC } from "react";
import styles from './AdminUsersItem.module.scss';
import Admin from "@/components/Admin/Admin";
import {useUsers} from "@/webpages/AdminUsers/useUsers";
import {IUser} from "@/models/IUser";
import Link from "next/link";
import Arrow from "@/components/Arrow/Arrow";

const AdminUsersItem: FC<{user: IUser}> = ({user}) => {

    return (
        <Link href={`/admin/users/${user.id}`}>
            <div className={styles.item}>
                <div className={styles.left}>
                    <span className={styles.name}>{user.name} {user.lastName}</span>
                </div>

                <div className={styles.right}>
                    <span className={styles.role}>{user.role === "ADMIN" ? "Администратор" : "Пользователь"}</span>
                    <Arrow className={styles.arrow} width={16} height={16} />
                </div>
            </div>
        </Link>
    );
}

export default AdminUsersItem;