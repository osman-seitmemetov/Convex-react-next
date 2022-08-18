import { FC } from "react";
import styles from './AdminUsers.module.scss';
import Admin from "@/webpages/Admin/Admin";
import {useUsers} from "@/webpages/AdminUsers/useUsers";
import AdminUsersItem from "@/webpages/AdminUsers/AdminUsersItem/AdminUsersItem";

const AdminUsers: FC = () => {
    const {users, isLoading} = useUsers();

    return (
        <Admin title=" > Пользователи">
            {
                isLoading
                    ? <div>loading...</div>
                    : <div className={styles.users}>
                        {
                            users?.data?.map(user => (
                                <AdminUsersItem key={user.id} user={user} />
                            ))
                        }
                    </div>
            }
        </Admin>
    );
}

export default AdminUsers;