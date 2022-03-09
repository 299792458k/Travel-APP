import Herosection from '../Herosection.js'
import Cards from '../Cards'
import Footer from '../Footer.js'
import Filter from '../Filter.js'
function Home() {
    return (
        <>
            <Herosection />
            <Filter />
            <Cards></Cards>
            <Footer />
        </>
    )
}

export default Home