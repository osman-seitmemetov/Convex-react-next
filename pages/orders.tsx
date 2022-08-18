import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Orders from "@/webpages/Orders/Orders";
import {NextPageAuth} from "@/types/authProvider";

const OrdersPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Orders />
            </div>
            <Footer/>
        </>
    )
}
OrdersPage.isOnlyUser = true

export default OrdersPage;