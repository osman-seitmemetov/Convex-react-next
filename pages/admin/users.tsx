import Header, {headerTypes} from "@/components/Header/Header";
import AdminUsers from "@/webpages/AdminUsers/AdminUsers";
import {NextPageAuth} from "@/types/authProvider";

const AdminUsersPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.auth} />
            <div className="main">
                <AdminUsers />
            </div>
        </>
    )
}
AdminUsersPage.isOnlyAdmin = true;

export default AdminUsersPage;