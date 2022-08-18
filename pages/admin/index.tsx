import Header, {headerTypes} from "@/components/Header/Header";
import AdminHome from "@/webpages/AdminHome/AdminHome";
import {NextPageAuth} from "@/types/authProvider";

const AdminHomePage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.auth} />
            <div className="main">
                <AdminHome />
            </div>
        </>
    )
}
AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;