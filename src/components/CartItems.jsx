import React, { useContext } from 'react'
import productContext from '../context/productContext'
import chair from '../assets/img/chair.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { MdDelete } from "react-icons/md";

const CartItems = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch, product } = context
    const Total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    console.log(Total);

    return (
        <div className='container cart-page pt-5'>
            <div className='product-container-cart'>
                <ul className='list-group list-unstyled'>
                    {
                        cart && cart.map((item) => (
                            < li data-aos="fade-right" className='list-group-item' key={item.id}>
                                <div className='row'>
                                    <div className='col-md-2 cart-img'>
                                        <img src={chair} />
                                    </div>
                                    <div className='col-md-2'>
                                        <h4>Name: {item.name}</h4>
                                    </div>
                                    <div className='col-md-2'>
                                        <h4>Price: {item.price}</h4>
                                    </div>
                                    <div className='col-md-2'>
                                        <select value={item.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: item.id,
                                                        qty: e.target.value
                                                    }
                                                })
                                            } className='form-control'>
                                            {[...Array(item.instock).keys()].map((x) => (
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='col-md-2'>
                                        <button type='button' className='btn btn-danger' onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                        }>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )
                        )

                    }
                </ul>
            </div>
            <div className='filter-summary'>
                <div className='title'>Total Item: {cart.length}</div>
                <h4>Total: {Total}</h4>
                <button className='btn btn-primary'>Check Out</button>
            </div>
        </div >
    )
}

export default CartItems
