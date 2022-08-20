import {FC} from "react";
import styles from './AdminUser.module.scss';
import Admin from "@/webpages/Admin/Admin";
import {useRouter} from "next/router";
import {IUser} from "@/models/IUser";

const AdminUser: FC<{user: IUser}> = ({user}) => {
    const {query} = useRouter();
    console.log(String(query.id));
    // const {user, isLoading} = useUser(String(query.id));

    return (
        <Admin title={` > Пользователи > ${user.name} ${user.lastName}`}>
            {
                user
                    ? <div className={styles.user}>
                        <div className={styles.field}>
                            Имя:&nbsp;
                            <span>{user.name}</span>
                        </div>

                        <div className={styles.field}>
                            Фамилия:&nbsp;
                            <span>{user.lastName}</span>
                        </div>

                        <div className={styles.field}>
                            Номер телефона:&nbsp;
                            <span>{user.phone}</span>
                        </div>

                        <div className={styles.field}>
                            Email:&nbsp;
                            <span>{user.email}</span>
                        </div>

                        <div className={styles.field}>
                            Дата рождения:&nbsp;
                            <span>{String(user.bornDate)}</span>
                        </div>

                        <div className={styles.field}>
                            Пол:&nbsp;
                            <span>{user.gender === 'MALE' ? 'Мужской' : 'Женский'}</span>
                        </div>
                    </div>
                    : <div>Пользователь не найден</div>
            }
        </Admin>
    );
}

export default AdminUser;

