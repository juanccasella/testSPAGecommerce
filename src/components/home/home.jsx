import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a SPAG tienda</h1>
            <Link to={'/products'}>Entrar a la Tienda</Link>
        </div>
    )
}

export default Home