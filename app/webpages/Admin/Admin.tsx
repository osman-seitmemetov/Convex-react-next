import {FC, ReactNode} from "react";
import styles from './Admin.module.scss';
import Container from "@/components/Container/Container";
import AdminSidebar from "@/webpages/Admin/AdminSidebar/AdminSidebar";


interface AdminProps {
    children?: ReactNode,
    title: string,
}

const Admin: FC<AdminProps> = ({children, title}) => {
    return (
        <section className={styles.admin}>
            <Container className={styles.container}>
                <h1 className={styles.title}>Панель администратора {title}</h1>

                <div className={styles.content}>
                    <AdminSidebar />
                    {children}
                </div>
            </Container>
        </section>
    );
}

export default Admin;