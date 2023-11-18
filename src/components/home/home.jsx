import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenido a SPAG tienda</h1>
            <Link to={'/products'} className='b-home'>Entrar a la Tienda</Link>
        </div>
    )
}

export default Home