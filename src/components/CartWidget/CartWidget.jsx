// import { Avatar, Badge } from 'antd'
// import {ShoppingCartOutlined} from '@ant-design/icons'

// const CartWidget = () => {
    
//     return(
//         <Badge count={5}>
//             <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
//         </Badge>
//     )
// }

// export default CartWidget
import { Link } from 'react-router-dom'
// import cartIcon from '../../assets/images/cart-icon.png'
// import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return(
        <div className='cart'>
            <Link to="/cart">
                {/* <img className='cart-icon' src={cartIcon} alt="" /> */}
                <span id='cart-counter'>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget