import type {NextPage} from 'next'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Search from "@/webpages/Search/Search";

const SearchPage: NextPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Search />
            </div>
            <Footer/>
        </>
    )
}

export default SearchPage;