import type { NextPage } from 'next'
import About from "@/webpages/About/About";
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const AboutPage: NextPage = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom} />
            <div className="main">
                <About />
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;