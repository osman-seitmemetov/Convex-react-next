import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Promocodes from "@/webpages/Promocodes/Promocodes";
import {NextPageAuth} from "@/types/authProvider";

const PromocodesPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Promocodes />
            </div>
            <Footer/>
        </>
    )
}

PromocodesPage.isOnlyUser = true;

export default PromocodesPage;