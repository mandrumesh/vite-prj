import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/productContext'
import chair from '../assets/img/chair.avif'
import { BsThreeDots } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch, product } = context
    const [menuVisible, setMenuVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    console.log('this is cart', cart);

    const toggleMenu = (id) => {
        setMenuVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const openEditModal = () => {
        setMenuVisible(true)
    }

    const handleDelete = async () => {
        console.log("Deleting Product")
        // await deleteProduct(id)
    }

    co


    // console.log(article)

    // useEffect(() => {
    //     update()
    //     fetchApi()
    // }, [])

    return (
        <div className='container pt-5'>
            <div className='row'>
                {/* <h4>This is About us page. My product name is {product.name} and it's price id {product.price}</h4> */}

                <h2 className='news-header mb-5'>My Products</h2>
                {
                    product.map((e) => {
                        return (
                            <div key={e.id} className='col-3 mb-4'>
                                <div data-aos="fade-up"
                                    data-aos-anchor-placement="top-center" className="card p-0">
                                    <div className='card-img'>
                                        <img src={chair} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='three-dots'>
                                            <h5 className="card-title">{e.name}</h5>
                                            <BsThreeDots onClick={()=>toggleMenu(e.id)} />
                                            {menuVisible[e.id] && (
                                                <div className='menu-option'>
                                                    <Link to="/editmodal"><button onClick={()=>openEditModal(e)}>Edit</button></Link>
                                                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                                </div>
                                            )}
                                        </div>
                                        <p className="card-text">{e.description}</p>
                                        <p className="card-text">Rs. {e.price}</p>
                                        {/* <a href="#" target='blank' className="btn btn-primary">Add to Cart</a>
                                        <a href="#" target='blank' className="btn btn-danger mt-2">Remove from Cart</a> */}
                                        {
                                            cart && cart.some(p => p.id === e.id) ? (
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: e
                                                        });
                                                    }}
                                                >
                                                    Remove from Cart
                                                </button>
                                            ) : (
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    dispatch({
                                                        type: "ADD_TO_CART",
                                                        payload: e
                                                    });
                                                }}
                                                >
                                                    Add to Cart
                                            </button>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default About
