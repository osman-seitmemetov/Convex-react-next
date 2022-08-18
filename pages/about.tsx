import type { NextPage } from 'next'
import About from "@/webpages/About/About";
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Meta from "@/utils/Meta/Meta";

const AboutPage: NextPage = () => {
    return (
        <Meta title="О компании" description="">
            <Header type={headerTypes.withoutBottom} />
            <div className="main">
                <About />
            </div>
            <Footer/>
        </Meta>
    )
}

export default AboutPage;