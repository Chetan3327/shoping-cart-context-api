import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"

export const CartItem = ({data}) => {
    const {id, productName, price, productImage} = data
    const {addToCart, removeFromCart, cartItems, updateCart} = useContext(ShopContext)
    return(
        <div className="cartItem">
            <img src={productImage} alt={id} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="number" value={cartItems[id]} onChange={(e) => updateCart(e.target.value, id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    )
}