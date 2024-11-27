import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import productContext from '../context/productContext'

const Header = (props) => {
    const context = useContext(productContext)
    const { state: { cart } } = context

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">{props.logo}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                    </ul>
                    <Link className="nav-link position-relative" to="/cartitems"><FaShoppingCart />
                        <span class="position-absolute top-0 start-100 translate-middle badge bg-danger">
                            {cart.length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
