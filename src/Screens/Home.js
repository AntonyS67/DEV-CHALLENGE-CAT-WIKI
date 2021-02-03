import Banner from "../components/Banner"
import Breed from "../components/Breed"
import CatMore from "../components/CatMore"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Breed/>
            <CatMore/>
            <Footer/>
        </div>
    )
}

export default Home
