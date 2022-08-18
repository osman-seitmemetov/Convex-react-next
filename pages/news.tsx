import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import News from "@/webpages/News/News";

const OrdersPage: NextPage = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <News />
            </div>
            <Footer/>
        </>
    )
}

export default OrdersPage;