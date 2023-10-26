import { useContext } from "react";
import PRODUCTS from "../../products";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const {cartItems, getTotal} = useContext(ShopContext)
    return(
        <div className="cart">
            <div>
                <h1>cart</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    return(cartItems[product.id] > 0 && <CartItem data={product}/>);
                })}
            </div>
            {getTotal() > 0 ?
            (<div className="checkout">
                <p>total $ {getTotal()}</p>
            </div>):
            (<h1> Your Shopping Cart is Empty</h1>
            )
            
        }
        <div className="checkout"><button onClick={() => {navigate('/')}}>continue shopping</button></div>
        </div>
        
    )
}
export default Cart