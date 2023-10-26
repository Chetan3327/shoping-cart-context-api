import { useContext } from 'react'
import  {ShopContext} from '../../context/shop-context'

export const Product = ({data}) => {
    const {id, productName, price, productImage} = data
    const {addToCart, cartItems} = useContext(ShopContext)
    return(
        <div className="product">
            <img src={productImage} alt={id} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add to Cart {cartItems[id]>0 && <>({cartItems[id]})</>}
            </button>
        </div>
    )
}

