import type {GetStaticPaths} from 'next'
import {GetStaticProps} from "next";
import Header, {headerTypes} from "@/components/Header/Header";
import AdminUser from "@/webpages/AdminUser/AdminUser";
import {IUser} from "@/models/IUser";
import {UserService} from "@/services/UserService";
import {NextPageAuth} from "@/types/authProvider";

const AdminUserPage: NextPageAuth<{user: IUser}> = ({user}) => {
    return (
        <>
            <Header type={headerTypes.auth} />
            <div className="main">
                <AdminUser user={user} />
            </div>
        </>
    )
}

AdminUserPage.isOnlyAdmin = true;

export default AdminUserPage;


export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: users } = await UserService.getAll();
        const paths = users.map((user) => ({
            params: { id: user.id.toString() },
        }))

        return { paths, fallback: 'blocking' }
    } catch {
        return {
            paths: [],
            fallback: false,
        }
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const {data: user} = await UserService.getById(String(params?.id));
    console.log(user)

    return {
        props: {user: user}
    }
}