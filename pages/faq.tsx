import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Search from "@/webpages/Search/Search";
import FAQ from "@/webpages/FAQ/FAQ";

const SearchPage: NextPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                <FAQ />
            </div>
            <Footer/>
        </>
    )
}

export default SearchPage;