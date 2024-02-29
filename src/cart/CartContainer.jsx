import cartItems from "./data";
import Footer from "./Footer";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";


const CartContainer = () => {
  const { cart } = useGlobalContext();

  const cartArray = Array.from(cart.entries());
console.log(cartArray);
  if (cartArray.length === 0) {
    return <div className="cartContainer">
      <h2>your bag</h2>
      <div style={{textAlign: "center"}}>
        <h4>"The cart is empty" :)</h4>
      </div>
    </div>
  }



  return (
    <div className="cartContainer">
      <h2>your bag</h2>

      <div>
        {cartArray.map(itemCart => {
          const [id, item] = itemCart;
          return <CartItem key={id} {...item} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default CartContainer;