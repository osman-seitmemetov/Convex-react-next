import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Contacts from "@/webpages/Contacts/Contacts";

const ContactPage: NextPage = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Contacts />
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage;