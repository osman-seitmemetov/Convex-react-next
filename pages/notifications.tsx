import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Notifications from "@/webpages/Notifications/Notifications";
import {NextPageAuth} from "@/types/authProvider";

const NotificationsPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Notifications />
            </div>
            <Footer/>
        </>
    )
}
NotificationsPage.isOnlyUser = true

export default NotificationsPage;