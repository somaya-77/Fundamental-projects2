
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import { useGlobalContext } from './context';
import './main.css'

const Cart = () => {
  const {loading} = useGlobalContext();
  if(loading){
    return <div className='loading' style={{ marginTop: '15rem' }}></div>
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}

export default Cart;