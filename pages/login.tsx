import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Login from "@/webpages/Login/Login";

const ContactPage: NextPage = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <Login />
            </div>
        </>
    )
}

export default ContactPage;