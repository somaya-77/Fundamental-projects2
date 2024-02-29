import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = (item) => {
  const {removeItem, increaseItem, decreaseItem} = useGlobalContext();
  const { id, title, price, img, amount } = item;

  return (
    <div className="cartItem">
      <div className="grid-item">
        <div>
          <img src={img} alt={title} />
        </div>

        <div className="details">
          <h4>{title}</h4>
          <p>${price}</p>
          <span onClick={() => removeItem(id)}>remove</span>
        </div>
      </div>
      <div className="controle">
        <span onClick={() => increaseItem(id)}><FaChevronUp style={{cursor: "pointer"}}/></span>
        <p>{amount}</p>
        <span onClick={() => decreaseItem(id)}><FaChevronDown  style={{cursor: "pointer"}}/></span>
      </div>
    </div>
  )
}

export default CartItem;