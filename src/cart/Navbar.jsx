import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
    const {totalAmount} = useGlobalContext()
    return (
        <div className='navbar'>
            <div className="nav-center">
                <h4>Shopping Cart</h4>
                <div className="nav-container">
                    <FaCartPlus className='cart-icon' />
                    <div className="amount-container">
                        <p className='total-amout'>{totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;