import Header from "@/components/Header/Header";
import Cart from "@/webpages/Cart/Cart";
import Footer from "@/components/Footer/Footer";
import {NextPageAuth} from "@/types/authProvider";

const ContactPage: NextPageAuth = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Cart />
            </div>
            <Footer />
        </>
    )
}
ContactPage.isOnlyUser = true

export default ContactPage;