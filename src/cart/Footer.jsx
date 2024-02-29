import { useGlobalContext } from "./context";



const Footer = () => {
  const {clearCart, totalCost} = useGlobalContext();
 
  return (
    <div className="footer">
      <hr />
        <div style={{marginTop: "15px", display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
            <p>Total</p>
            <span style={{background: "#ccc", padding: "7px 15px", borderRadius: "5px", fontWeight: "bold"}}>${totalCost.toFixed(2)}</span>
        </div>
        <div style={{background: "blue", textAlign:"center", width: "fit-content", cursor: "pointer", margin: "10px auto", padding: "7px 15px", borderRadius: "5px", fontWeight: "bold", color:"#fff"}} onClick={clearCart}>Clear Cart</div>
    </div>
  )
}

export default Footer;