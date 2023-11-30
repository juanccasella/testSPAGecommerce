import "./home.css"
import Slides from '../homeSlide/homeSlides'

const Home = () => {
    return (
        <div className='homeContainer'>
            <h1 className='bienvenida'>Bienvenido a SPAG tienda</h1>
            <Slides/>
        </div>
    )
}

export default Home