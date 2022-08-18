import type { NextPage } from 'next'
import Home from "@/webpages/Home/Home";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const HomePage: NextPage = () => {
  return (
      <>
          <Header/>
          <div className="main">
              <Home />
          </div>
          <Footer/>
      </>
  )
}

export default HomePage;
