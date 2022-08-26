import {FC, ReactNode} from "react";
import styles from './Admin.module.scss';
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";


interface AdminProps {
    children?: ReactNode,
    title: string,
}

const Admin: FC<AdminProps> = ({children, title}) => {
    return (
        <section className={styles.admin}>
            <AdminHeader />
            <div style={{display: "flex", padding: "0 15px"}}>
                <AdminSidebar />
                <div className={styles.content}>
                    <h1 className={styles.title}>Панель администратора {title}</h1>
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Admin;