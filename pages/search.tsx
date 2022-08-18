import type {NextPage} from 'next'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Search from "@/webpages/Search/Search";
import Meta from "@/utils/Meta/Meta";

const SearchPage: NextPage = () => {
    return (
        <Meta title="Search term" description="">
            <Header />
            <div className="main">
                <Search />
            </div>
            <Footer/>
        </Meta>
    )
}

export default SearchPage;