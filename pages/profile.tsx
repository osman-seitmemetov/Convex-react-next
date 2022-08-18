import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Profile from "@/webpages/Profile/Profile";
import {NextPageAuth} from "@/types/authProvider";

const ProfilePage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Profile />
            </div>
            <Footer/>
        </>
    )
}

ProfilePage.isOnlyUser = true;

export default ProfilePage;