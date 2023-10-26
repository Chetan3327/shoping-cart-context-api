import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="navbar">
            <div className='links'>
                <Link to='/'>Shop</Link>
                <Link to='/cart'><ShoppingCart /></Link>
            </div>
        </div>
    )
}

export default NavBar