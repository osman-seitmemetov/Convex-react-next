import Header, {headerTypes} from "@/components/Header/Header";
import AdminBanners from "@/webpages/AdminBanners/AdminBanners";
import {NextPageAuth} from "@/types/authProvider";

const AdminBannersPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.auth} />
            <div className="main">
                <AdminBanners />
            </div>
        </>
    )
}

AdminBannersPage.isOnlyAdmin = true;

export default AdminBannersPage;