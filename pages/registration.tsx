import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Registration from "@/webpages/Registration/Registration";

const ContactPage: NextPage = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <Registration />
            </div>
        </>
    )
}

export default ContactPage;