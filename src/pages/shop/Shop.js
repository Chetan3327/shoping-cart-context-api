import PRODUCTS from '../../products'
import {Product} from './Product'
import './shop.css'

const Shop = () => {
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>SHOP</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => {
                    return(<Product data={product}/>)
                })}
            </div>
        </div>
    )
}

export default Shop